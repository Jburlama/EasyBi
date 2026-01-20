"use strict"

main();

function main() {
    const container = new Container();
    const navBar = new NavBar();
    const vertLine = new VertLine();
    const integration = new Integration();

    container.container.appendChild(navBar.container);
    container.container.appendChild(vertLine.container);
    container.container.appendChild(integration.container);
}


function VertLine() {
    this.container = document.createElement("div");

    this.container.style.border = "1px solid black";
    this.container.style.height = "100vh";
    this.container.style.width = "0";
}

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


    this.navBtns = document.createElement("div");
    this.navBtns.id = "navbtns";
    this.navBtns.style.fontSize = "20px";

    this.navBtns.style.marginTop = "60px";

    // this.navBtns.style.border = "1px solid black"

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
        })
        
        this.navBtns.appendChild(btn);
    })

    // activate first nav btn
    const firstBtn = this.navBtns.querySelector(".navbtn")
    firstBtn.classList.add("active");
    firstBtn.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
    firstBtn.style.color = "#ffffff";

    this.container.appendChild(this.logo);
    this.container.appendChild(this.navBtns);

    const container = document.querySelector("#container");
}


function Container() {
    this.container = document.createElement("div");
    this.container.id = "container"

    this.container.style.display = "flex";

    document.body.appendChild(this.container);
}
