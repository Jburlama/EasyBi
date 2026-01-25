"use strict"

class Container {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "container"
        this.container.style.display = "flex";

        document.body.appendChild(this.container);
    }

    appendChild(childContainer) {
        this.container.appendChild(childContainer)
    }
}
