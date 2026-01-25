"use strict"

function Router() {
    this.routes = {
        "/": window.mainContent.renderIntegration,
        "/integracao": window.mainContent.renderIntegration,
        "/criar-integracao": window.mainContent.renderCriarIntegration,
    };

    this.navigate = function(path) {
        // Push to history
        history.pushState({}, "", path);

        this.mainContent = document.querySelector("#main-content");
        this.mainContent.innerHTML = "";

        this.routes[path]();
    }

    this.navigate(window.location.pathname);
    window.addEventListener("popstate", (e) => {
        this.navigate(window.location.pathname);
    });
}
