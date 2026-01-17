main();

function main() {
    const container = new Container();
    const navBar = new NavBar();
    const vertLine = new VertLine();
    const integration = new Integration();

    container.element.appendChild(navBar.element);
    container.element.appendChild(vertLine.element);
    container.element.appendChild(integration.element);
}

function Integration() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "integration")

    Object.assign(this.element.style, {
        border: "1px solid black",
        width: "100%",
        height: "100vh",
    });

    this.navIntegration = document.createElement("div");
    this.navIntegration.setAttribute("id", "navintegration")

    Object.assign(this.navIntegration.style, {
        border: "1px solid black",
        width: "100%",
        height: "80px",
    });

    this.createIntegrationBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.createIntegrationBtn.id = "create-integration-btn";
    this.createIntegrationBtn.style.width  = "150px"
    this.createIntegrationBtn.style.height = "30px"
    this.createIntegrationBtn.style.border = "2px solid black";
    this.createIntegrationBtn.style.borderRadius = "15px";
    this.createIntegrationBtn.style.margin = "20px 0px 0px 70px";
    this.createIntegrationBtn.style.background = "black";

    this.element.appendChild(this.navIntegration);
    this.navIntegration.appendChild(this.createIntegrationBtn);
}



function VertLine() {
    this.element = document.createElement("div");
    Object.assign(this.element.style, {
        border: "1px solid black",
        height: "100vh",
        width: "0",
    })
}

function NavBar() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "navbar");

    Object.assign(this.element.style, {
        // border: "1px solid black",
        width: "200px",
        height: "100vh",
    });

    this.logo = document.createElement("h1");
    this.logo.setAttribute("id", "logo");
    this.logo.textContent = "EasyBi";

    Object.assign(this.logo.style, {
        // border: "1px solid green",
        margin: "20px",
    });


    this.navBtns = document.createElement("div");
    this.navBtns.setAttribute("id", "navbtns");

    Object.assign(this.navBtns.style, {
        // border: "1px solid black",
        fontSize: "20px",
    });

    const btns = ["Integrações", "nav1", "nav2", "nav3"];

    btns.forEach((btnName) => {
        const btn = document.createElement("div");
        btn.className = "navbtn";
        btn.textContent = btnName;

        Object.assign(btn.style, {
            // border: "0.01px solid black",
            cursor: "pointer",
            padding: "20px",
        })
        
        // Add hover effects using mouseenter/mouseleave
        btn.addEventListener("mouseenter", function() {
            if (!btn.classList.contains("active")) {
                Object.assign(btn.style, {
                    // border: "1px solid black",
                    background: "rgba(0, 0, 0, 0.1)",
                    color: "#ffffff",
                });
            }
        });
        
        btn.addEventListener("mouseleave", function() {
            // Only reset if not active
            if (!btn.classList.contains("active")) {
                Object.assign(btn.style, {
                    // border: "1px solid black",
                    background: "",
                    color: "",
                });
            }
        });

        btn.addEventListener("click", function() {
           // Remove active state from all buttons
            document.querySelectorAll(".navbtn").forEach(btn => {
                btn.classList.remove("active");
                Object.assign(btn.style, {
                    // border: "1px solid black",
                    background: "",
                    color: "",
                });
            });

            // Add active state to clicked button
            this.classList.add("active");
            Object.assign(btn.style, {
                background: "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)",
                color: "#ffffff",
                border: "1px solid rgba(255, 255, 255, 0.1)",
            });

        })
        
        this.navBtns.appendChild(btn);
    })

    // activate first nav btn
    const firstBtn = this.navBtns.querySelector(".navbtn")
    firstBtn.classList.add("active");
    Object.assign(firstBtn.style, {
        border: "1px solid black",
        background: "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)",
        color: "#ffffff",
        border: "1px solid rgba(255, 255, 255, 0.1)",
    });


    this.element.appendChild(this.logo);
    this.element.appendChild(this.navBtns);


    const container = document.querySelector("#container");
}


function Container() {
    this.element = document.createElement("div");
    this.element.setAttribute("id", "container");

    Object.assign(this.element.style, {
        "display": "flex",
        // border: "1px solid black",
    });

    document.body.appendChild(this.element);
}
