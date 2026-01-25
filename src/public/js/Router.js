"use strict"

class Router {
    constructor() {
        this.routes = {};
        
        window.addEventListener("popstate", (e) => {
            this.navigate(window.location.pathname);
        });
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
        // Push to history
        history.pushState({}, "", path);

        // Clear the main content area
        const mainContentEl = document.querySelector("#main-content");
        if (mainContentEl) {
            mainContentEl.innerHTML = "";
        }

        // Call the route if it exists
        if (this.routes[path]) {
            this.routes[path]();
        }
    }
}
