"use strict"

function MainContent() {
    this.container = document.createElement("div");
    this.container.id = "main-content"
    this.container.style.width = "100%";
    this.container.style.height = "100vh";
    this.container.style.overflowX = "hidden";
    // this.container.style.display = "flex"
    this.container.style.border = "1px solid red"

    this.integration = new Integration();
    this.createIntegration = new CreateIntegrationPage();

    window.Container.appendChild(this.container);

    this.clear = function() {
        this.container.innerHTML = "";
    }

    this.appendChild = function(childContainer) {
        this.container.appendChild(childContainer)
    }

    this.renderIntegration = () => {
        this.clear();
        this.appendChild(this.integration.container)
    }

    this.renderCriarIntegration = () => {
        this.clear();
        this.createIntegration.render()
    }
}
