"use strict"

function NavBar() {
    this.container = document.createElement("div");
    this.container.id = "navbar";

    this.container.style.width = "200px";
    this.container.style.height = "100vh";
    // this.element.style.border = "1px solid black"

    this.logo = document.createElement("h1");
    this.logo.id = "logo";
    this.logo.textContent = "EasyBi";
    this.logo.style.margin = "20px";

    // Make logo clickable to go home
    this.logo.style.cursor = "pointer";
    this.logo.addEventListener('click', () => {
        window.Router.navigate("/");
    });
    this.container.appendChild(this.logo);

    this.NavBtns = new NavBtns();
    this.container.appendChild(this.NavBtns.container)
    // this.container.appendChild(this.navBtns);


    this.vertLine = document.createElement("div");
    this.vertLine.style.border = "1px solid black";
    this.vertLine.style.height = "100vh";
    this.vertLine.style.width = "0";

    window.Container.appendChild(this.container);
    window.Container.appendChild(this.vertLine);
};

function NavBtns() {
    this.container = document.createElement("div");
    this.container.id = "navbtns";
    this.container.style.fontSize = "20px";
    this.container.style.marginTop = "60px";

    const btns = ["Integrações", "nav1", "nav2"];

    btns.forEach((btnName) => {
        const btn = document.createElement("div");
        btn.className = "navbtn";
        btn.textContent = btnName;

        btn.style.cursor = "pointer";
        btn.style.padding = "25px";


        // Add hover effects using mouseenter/mouseleave
        btn.addEventListener("mouseenter", function() {
            if (!btn.classList.contains("active")) {
                btn.style.background = "rgba(0, 0, 0, 0.1)";
                btn.style.color = "#ffffff";
            }
        });

        btn.addEventListener("mouseleave", function() {
            // Only reset if not active
            if (!btn.classList.contains("active")) {
                btn.style.background = "";
                btn.style.color = "";
            }
        });

        btn.addEventListener("click", function() {
            // Remove active state from all buttons
            document.querySelectorAll(".navbtn").forEach(btn => {
                btn.classList.remove("active");
                btn.style.background = "";
                btn.style.color = "";
            });

            // Add active state to clicked button
            this.classList.add("active");
            btn.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
            btn.style.color = "#ffffff";

            if (btnName === "Integrações")  {
                window.Router.navigate("/integracao");
            }
            else {
                window.Router.navigate(btnName);
            }

        })
        this.container.appendChild(btn);
    })

    // activate first container nav btn
    const firstBtn = this.container.querySelector(".navbtn")
    firstBtn.classList.add("active");
    firstBtn.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
    firstBtn.style.color = "#ffffff";
}
