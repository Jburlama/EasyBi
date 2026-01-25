"use strict"

main();

function main() {
    window.Container = new Container();
    window.NavBar = new NavBar();
    window.mainContent = new MainContent();
    window.Router = new Router();

    // const createIntegration = new CreateIntegrationPage();

}

function Container() {
    this.container = document.createElement("div");
    this.container.id = "container"

    this.container.style.display = "flex";

    document.body.appendChild(this.container);

    this.appendChild = function(childContainer) {
        this.container.appendChild(childContainer)
    }
}
