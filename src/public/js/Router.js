"use strict"

class Router {
    constructor() {
        this.routes = {};
        
        // Don't navigate immediately
        window.addEventListener("popstate", this.#popstate);
    }
    
    registerRoutes(mainContent) {
        this.routes = {
            "/": mainContent.renderIntegration,
            "/integracao": mainContent.renderIntegration,
            "/criar-integracao": mainContent.renderCriarIntegration,
        };
        
        // Now navigate to current path
        this.navigate(window.location.pathname);
    }

    navigate = (path) => {
        if (window.location.pathname === path) {
            return ;
        }

        history.pushState({}, "", path);

        const mainContentEl = document.querySelector("#main-content");
        if (mainContentEl) {
            mainContentEl.innerHTML = "";
        }

        if (this.routes[path]) {
            this.routes[path]();
        }
    }

    #popstate = (event) => {
            const mainContentEl = document.querySelector("#main-content");
            if (mainContentEl) {
                mainContentEl.innerHTML = "";
            }
            const path = window.location.pathname
            if (this.routes[path]) {
                this.routes[path]();
            }
    }
}
