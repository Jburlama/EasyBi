"use strict"

class NavBar {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "navbar";
        this.container.style.width = "200px";
        this.container.style.height = "100vh";
        // this.element.style.border = "1px solid black"

        this.#renderLogo()
        this.#renderNavBtns();

        window.Container.appendChild(this.container);

        this.#renderVerticalLine();
    }

    #renderLogo = () => {
        const logo = document.createElement("h1");
        logo.id = "logo";
        logo.textContent = "EasyBi";
        logo.style.margin = "20px";

        this.container.appendChild(logo);
    }

    #renderVerticalLine = () => {
        const vertLine = document.createElement("div");
        vertLine.style.border = "1px solid black";
        vertLine.style.height = "100vh";
        vertLine.style.width = "0";

        window.Container.appendChild(vertLine);
    }

    #renderNavBtns = () => {
        this.navBtnsContainer = document.createElement("div");
        this.navBtnsContainer.id = "navbtns";
        this.navBtnsContainer.style.fontSize = "20px";
        this.navBtnsContainer.style.marginTop = "60px";

        const btns = ["Integrações", "nav1", "nav2"];
        btns.forEach((btnName) => {
            const btn = document.createElement("div");
            btn.className = "navbtn";
            btn.textContent = btnName;
            btn.style.cursor = "pointer";
            btn.style.padding = "25px";


            // Add hover effects using mouseenter/mouseleave
            btn.addEventListener("mouseenter", this.#btnHoverEnter);
            btn.addEventListener("mouseleave", this.#btnHoverLeave);
            btn.addEventListener("click", (event) => {
                this.#btnClick(event.target, btnName)
            });

            this.navBtnsContainer.appendChild(btn)
        })

        // activate first container nav btn
        const firstBtn = this.navBtnsContainer.querySelector(".navbtn")
        firstBtn.classList.add("active");
        firstBtn.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
        firstBtn.style.color = "#ffffff";

        this.container.appendChild(this.navBtnsContainer)
    }

    #btnHoverEnter = (event) => {
        const btn = event.currentTarget

        if (btn.classList.contains("active")) {
            return 
        }
        btn.style.background = "rgba(0, 0, 0, 0.1)";
        btn.style.color = "#ffffff";

    }

    #btnHoverLeave = (event) => {
        const btn = event.currentTarget

        if (btn.classList.contains("active")) {
            return
        }

        btn.style.background = "";
        btn.style.color = "";

    }

    #btnClick = (btn, btnName) => {
        // Remove active state from all buttons
        document.querySelectorAll(".navbtn").forEach(btn => {
            btn.classList.remove("active");
            btn.style.background = "";
            btn.style.color = "";
        });

        // Add active state to clicked button
        btn.classList.add("active");
        btn.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
        btn.style.color = "#ffffff";

        if (btnName === "Integrações")  {
            window.Router.navigate("/integracao");
        }
        else {
            window.Router.navigate(btnName);
        }
    }
}
