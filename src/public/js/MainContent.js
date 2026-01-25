"use strict"

"use strict"

class MainContent {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "main-content"
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.overflowX = "hidden";
        // this.container.style.border = "1px solid red"

        this.integration = new Integration();
        this.createIntegration = new CreateIntegrationPage();

        window.Container.appendChild(this.container);

    }

    clear = () => {
        this.container.innerHTML = "";
    }

    appendChild = (childContainer) => {
        this.container.appendChild(childContainer)
    }

    renderIntegration = () => {
        this.container.innerHTML = "";
        this.appendChild(this.integration.container)
    }

    renderCriarIntegration = () => {
        this.container.innerHTML = "";
        this.createIntegration.render()
    }
}
