"use strict"

main();

function main() {
    window.Container = new Container();
    window.Router = new Router();
    window.NavBar = new NavBar();
    window.mainContent = new MainContent();
    
    // Register routes with Router
    window.Router.registerRoutes(window.mainContent);
}
