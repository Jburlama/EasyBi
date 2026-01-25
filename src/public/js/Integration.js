class Integration {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "integration";
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.overflowX = "hidden";
        // this.container.style.border = "1px solid black";

        this.#integrationHeader();
        this.#mainContentDisplay();
    }

    #integrationHeader = () => {
        // Integration NavBar
        this.headerContainer = document.createElement("div");
        this.headerContainer.id = "Integration-header";
        this.headerContainer.style.width = "100%";
        this.headerContainer.style.height = "80px";
        this.headerContainer.style.display = "flex";
        this.headerContainer.style.alignItems = "center";
        this.headerContainer.style.justifyContent = "space-between";
        this.headerContainer.style.padding = "0 40px";
        this.headerContainer.style.boxSizing = "border-box";
        this.headerContainer.style.display = "flex";
        this.headerContainer.style.alignItems = "center";
        this.headerContainer.style.gap = "50px"; // Space between button and search
        this.headerContainer.style.width = "100%";
        this.headerContainer.style.justifyContent = "space-between";
        this.headerContainer.style.flexWrap = "nowrap"; // Allow wrapping if needed
        this.headerContainer.style.minHeight = "80px"; // Ensure consistent height
        this.headerContainer.style.marginLeft = "10px";
        this.headerContainer.style.marginRight = "10px";
        this.headerContainer.style.overflowX = "hidden";


        this.#createIntegrationBtnDisplay();
        this.#searchIntegrationDisplay();

        this.container.appendChild(this.headerContainer);

        this.#setupResponsiveResize();
        this.#headerSepLine();
    }

    #setupResponsiveResize = () => {
        this.#updateLayout()

        // Update on resize
        const resizeObserver = new ResizeObserver(() => {
            this.#updateLayout();
        });
        resizeObserver.observe(this.container);
    }

    #updateLayout = () => {
        // Creates a responsive layout system for the Integration header that contains:
        //     A "Criar Integração" button
        //     A search input field
        // When the container width changes, adjust the elements to fit:
        //     On large screens: Show full button text and full search width
        //     On medium screens: Keep button text, shrink search bar
        //     On small screens: Collapse button to icon-only, shrink search bar more
        //     On very small screens: Change search placeholder to shorter text
        //     Also adjust the gap between button and search as screen shrinks
        // Breakpoints:
        //     Full size: > 400px available space
        //     Medium: 300-400px available space
        //     Small: < 300px available space
        //     Very small: < 200px available space

        const containerWidth = this.container.offsetWidth;
        const buttonWidth = this.createIntegrationBtn.offsetWidth;
        const searchWidth = 320; // Natural width of search

        // Calculate available space for search after button and gaps
        const availableSpace = containerWidth - buttonWidth - 20 - 80; // 20px gap, 80px padding

        // Set default gap
        let newGap = 50; // Default gap as defined in header

        if (availableSpace < searchWidth) {
            // Not enough space for full search width
            const newSearchWidth = Math.max(200, availableSpace); // Minimum 200px width

            if (newSearchWidth > 200) {
                // Scale down search proportionally
                this.searchContainer.style.width = newSearchWidth + "px";
                this.searchInput.style.width = "calc(100% - 50px)";
                
                // Calculate gap based on available space reduction
                // Gap reduces from 50px to 10px as available space reduces from searchWidth to 200px
                const spaceReduction = searchWidth - availableSpace;
                const maxSpaceReduction = searchWidth - 200;
                const gapReduction = (spaceReduction / maxSpaceReduction) * 40; // Reduce up to 40px (from 50 to 10)
                newGap = Math.max(10, 50 - gapReduction);
            } 
            else {
                // Very small - collapse search to minimal
                this.searchContainer.style.width = "150px";
                this.searchInput.style.width = "calc(100% - 50px)";
                this.searchInput.placeholder = "Buscar...";
                
                // Minimal gap for very small screens (but not less than 5px)
                newGap = Math.max(5, 10 - (200 - newSearchWidth) / 10);
            }

            // Also make button responsive based on available space
            if (availableSpace < 300) {
                this.#createIntegrationBtnColapse();
                // When button is collapsed, use smaller gap
                newGap = Math.max(10, newGap * 0.7); // Reduce gap further when button is icon-only
            } 
            else {
                this.#createIntegrationBtnExpand();
            }
        } 
        else {
            // Enough space - use natural sizes
            this.searchContainer.style.width = "320px";
            this.searchInput.style.width = "calc(100% - 50px)";
            this.searchInput.placeholder = "Buscar integrações...";

            if (availableSpace > 400) {
                this.#createIntegrationBtnExpand();
                newGap = 50; // Full gap
            } else {
                // Medium screens - slightly reduce gap
                newGap = 40;
            }
        }
        
        // Apply the calculated gap
        this.headerContainer.style.gap = newGap + "px";
        
        // Ensure search container margin is also adjusted
        this.searchContainer.style.marginRight = Math.max(5, newGap * 0.5) + "px";
    }


    #headerSepLine = () => {
        this.setLineContainer = document.createElement("div");
        this.setLineContainer.style.height = "0";
        this.setLineContainer.style.width = "100%";
        this.setLineContainer.style.border = "1px solid black";

        this.container.appendChild(this.setLineContainer);
    }


    #mainContentDisplay = () => {
        this.integrationContainer = document.createElement("div");
        this.integrationContainer.id = "mainContent";
        this.integrationContainer.style.width = "100%";
        this.integrationContainer.style.height = "calc(100vh - 120px)"; // Account for nav and separator
        this.integrationContainer.style.display = "flex";
        this.integrationContainer.style.flexDirection = "column";
        this.integrationContainer.style.alignItems = "center";
        this.integrationContainer.style.justifyContent = "center";
        this.integrationContainer.style.padding = "40px";
        this.integrationContainer.style.boxSizing = "border-box";
        this.integrationContainer.style.overflowY = "auto";

        this.#emptyIntegrations();

        this.container.appendChild(this.integrationContainer);
    }

    #emptyIntegrations = () => {
        // Clear container first
        this.integrationContainer.innerHTML = "";

        // Create main message container
        const messageContainer = document.createElement("div");
        messageContainer.style.display = "flex";
        messageContainer.style.flexDirection = "column";
        messageContainer.style.alignItems = "center";
        messageContainer.style.justifyContent = "center";
        messageContainer.style.textAlign = "center";
        messageContainer.style.maxWidth = "600px";
        messageContainer.style.padding = "40px";
        messageContainer.style.borderRadius = "20px";
        messageContainer.style.background = "linear-gradient(135deg, rgba(30, 30, 30, 0.1) 0%, rgba(50, 50, 50, 0.05) 100%)";
        messageContainer.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";

        // Create icon/svg
        const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconSvg.setAttribute("width", "80");
        iconSvg.setAttribute("height", "80");
        iconSvg.setAttribute("viewBox", "0 0 24 24");
        iconSvg.setAttribute("fill", "none");
        iconSvg.style.marginBottom = "30px";
        iconSvg.style.opacity = "0.7";

        // Create paths for connection/database icon
        const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path1.setAttribute("d", "M4 18V8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18Z");
        path1.setAttribute("stroke", "#ffffff");
        path1.setAttribute("stroke-width", "1.5");
        path1.setAttribute("stroke-linecap", "round");
        path1.setAttribute("stroke-linejoin", "round");

        const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path2.setAttribute("d", "M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6");
        path2.setAttribute("stroke", "#ffffff");
        path2.setAttribute("stroke-width", "1.5");
        path2.setAttribute("stroke-linecap", "round");
        path2.setAttribute("stroke-linejoin", "round");

        const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path3.setAttribute("d", "M12 10V14");
        path3.setAttribute("stroke", "#ffffff");
        path3.setAttribute("stroke-width", "1.5");
        path3.setAttribute("stroke-linecap", "round");

        const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path4.setAttribute("d", "M8 14H16");
        path4.setAttribute("stroke", "#ffffff");
        path4.setAttribute("stroke-width", "1.5");
        path4.setAttribute("stroke-linecap", "round");

        iconSvg.appendChild(path1);
        iconSvg.appendChild(path2);
        iconSvg.appendChild(path3);
        iconSvg.appendChild(path4);

        // Create title
        const title = document.createElement("h2");
        title.textContent = "Nenhuma Integração Configurada";
        title.style.color = "#ffffff";
        title.style.fontFamily = "Arial, sans-serif";
        title.style.fontSize = "28px";
        title.style.fontWeight = "600";
        title.style.marginBottom = "15px";

        // Add all elements to message container
        messageContainer.appendChild(iconSvg);
        messageContainer.appendChild(title);

        this.integrationContainer.appendChild(messageContainer);
    }

    #searchIntegrationDisplay = () => {
        // Create search container
        this.searchContainer = document.createElement("div");
        this.searchContainer.style.display = "flex";
        this.searchContainer.style.alignItems = "center";
        this.searchContainer.style.borderRadius = "25px";
        this.searchContainer.style.overflow = "hidden";
        this.searchContainer.style.background = "linear-gradient(135deg, rgba(90, 90, 90, 0.5) 0%, rgba(50, 50, 50, 1) 20%)";
        this.searchContainer.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        this.searchContainer.style.transition = "all 0.3s ease";
        this.searchContainer.style.width = "320px";
        this.searchContainer.style.maxWidth = "100%";
        this.searchContainer.style.boxSizing = "border-box";
        this.searchContainer.style.flexShrink = "1"; // Allow shrinking
        this.searchContainer.style.minWidth = "150px"; // Minimum width
        this.searchContainer.style.marginRight = "25px";

        // Create search input
        this.searchInput = document.createElement("input");
        this.searchInput.type = "text";
        this.searchInput.placeholder = "Buscar integrações...";
        this.searchInput.style.width = "calc(100% - 50px)";
        this.searchInput.style.height = "42px";
        this.searchInput.style.border = "none";
        this.searchInput.style.padding = "0 15px";
        this.searchInput.style.fontFamily = "Arial, sans-serif";
        this.searchInput.style.fontSize = "14px";
        this.searchInput.style.color = "#ffffff";
        this.searchInput.style.background = "transparent";
        this.searchInput.style.outline = "none";
        this.searchInput.style.boxSizing = "border-box";
        this.searchInput.style.transition = "all 0.3s ease";
        this.searchContainer.appendChild(this.searchInput);

        // Create search button (magnifying glass)
        this.searchButton = document.createElement("button");
        this.searchButton.id = "search-button";
        this.searchButton.style.width = "48px";
        this.searchButton.style.height = "42px";
        this.searchButton.style.border = "none";
        this.searchButton.style.cursor = "pointer";
        this.searchButton.style.display = "flex";
        this.searchButton.style.alignItems = "center";
        this.searchButton.style.justifyContent = "center";
        this.searchButton.style.padding = "0";
        this.searchButton.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
        this.searchButton.style.transition = "all 0.2s ease";
        this.searchButton.style.flexShrink = "0";
        this.searchContainer.appendChild(this.searchButton);

        // Create SVG for magnifying glass
        const searchSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        searchSvg.setAttribute("width", "18");
        searchSvg.setAttribute("height", "18");
        searchSvg.setAttribute("viewBox", "0 0 24 24");
        searchSvg.setAttribute("fill", "none");
        this.searchButton.appendChild(searchSvg);

        // Create magnifying glass path
        const searchPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        searchPath.setAttribute("d", "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z");
        searchPath.setAttribute("stroke", "#ffffff");
        searchPath.setAttribute("stroke-width", "2");
        searchPath.setAttribute("stroke-linecap", "round");
        searchPath.setAttribute("stroke-linejoin", "round");
        searchSvg.appendChild(searchPath);

        this.searchButton.addEventListener("mouseenter", () => {
            this.searchButton.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(90, 90, 90, 0.5) 20%)";
        })
        this.searchButton.addEventListener("mouseleave", () => {
            this.searchButton.style.background = "linear-gradient(135deg, rgba(90, 90, 90, 0.5) 0%, rgba(50, 50, 50, 1) 20%)";
        })

        this.headerContainer.appendChild(this.searchContainer)
    }

    #createIntegrationBtnDisplay = () => {
        // Container para o botão "Criar Integração"
        this.createIntegrationBtnContainer = document.createElement("div");
        this.createIntegrationBtnContainer.style.display = "flex";
        this.createIntegrationBtnContainer.style.alignItems = "center";
        this.createIntegrationBtnContainer.style.flexShrink = "0";
        this.createIntegrationBtnContainer.style.minWidth = "0";

        // Create the "Criar Integração" button container
        this.createIntegrationBtn = document.createElement("button");
        this.createIntegrationBtn.id = "create-integration-btn";
        this.createIntegrationBtn.style.height = "45px";
        this.createIntegrationBtn.style.borderRadius = "25px";
        this.createIntegrationBtn.style.border = "none";
        this.createIntegrationBtn.style.cursor = "pointer";
        this.createIntegrationBtn.style.display = "flex";
        this.createIntegrationBtn.style.alignItems = "center";
        this.createIntegrationBtn.style.justifyContent = "center";
        this.createIntegrationBtn.style.gap = "8px";
        this.createIntegrationBtn.style.fontFamily = "Arial, sans-serif";
        this.createIntegrationBtn.style.fontSize = "15px";
        this.createIntegrationBtn.style.fontWeight = "500";
        this.createIntegrationBtn.style.color = "#ffffff";
        this.createIntegrationBtn.style.flexShrink = "0";
        this.createIntegrationBtn.style.transition = "all 0.3s ease";
        this.createIntegrationBtn.style.overflow = "hidden";
        this.createIntegrationBtn.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(100, 100, 100, 1) 90%)";
        this.createIntegrationBtn.style.minWidth = "45px";
        this.createIntegrationBtn.style.width = "auto";
        this.createIntegrationBtn.style.position = "relative";
        this.headerContainer.appendChild(this.createIntegrationBtn);

        // Create SVG for plus sign
        this.plusSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.plusSvg.setAttribute("width", "20");
        this.plusSvg.setAttribute("height", "20");
        this.plusSvg.setAttribute("viewBox", "0 0 24 24");
        this.plusSvg.style.flexShrink = "0";
        this.plusSvg.style.padding = "0 12px";
        this.createIntegrationBtn.appendChild(this.plusSvg);

        // Create plus sign path
        const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        plusPath.setAttribute("d", "M12 5V19M5 12H19");
        plusPath.setAttribute("stroke", "#ffffff");
        plusPath.setAttribute("stroke-width", "2");
        plusPath.setAttribute("stroke-linecap", "round");
        plusPath.setAttribute("stroke-linejoin", "round");
        plusPath.setAttribute("fill", "none");
        this.plusSvg.appendChild(plusPath);

        // Create text span
        this.btnText = document.createElement("span");
        this.btnText.textContent = "Criar Integração";
        this.btnText.style.whiteSpace = "nowrap";
        this.btnText.style.transition = "opacity 0.3s ease, max-width 0.3s ease";
        this.btnText.style.opacity = "1";
        this.btnText.style.maxWidth = "200px";
        this.btnText.style.padding = "0 20px 0 0";
        this.createIntegrationBtn.appendChild(this.btnText);


        this.createIntegrationBtn.addEventListener("mouseenter", () => {
            this.createIntegrationBtn.style.background = "linear-gradient(135deg, rgba(100, 100, 100, 1) 0%, rgba(0, 0, 0, 1) 90%)";
        })
        this.createIntegrationBtn.addEventListener("mouseleave", () => {
            this.createIntegrationBtn.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(100, 100, 100, 1) 90%)";
        })

        // Route to create integration page
        this.createIntegrationBtn.addEventListener("click", () => {
            if (window.router) {
                window.router.navigate("/criar-integracao");
            }
            else {
                // Fallback if router isn't available
                history.pushState({}, "", "/criar-integracao");
                window.dispatchEvent(new PopStateEvent('popstate'));
            }
        })
        this.headerContainer.appendChild(this.createIntegrationBtnContainer)
    }

    #createIntegrationBtnColapse = () => {
        this.btnText.style.opacity = "0";
        this.btnText.style.maxWidth = "0";
        this.btnText.style.padding = "0";
        this.createIntegrationBtn.style.padding = "0";
        this.createIntegrationBtn.style.borderRadius = "50%";
        this.createIntegrationBtn.style.width = "45px";
    }

    #createIntegrationBtnExpand = () => {
        this.btnText.style.opacity = "1";
        this.btnText.style.maxWidth = "200px";
        this.btnText.style.padding = "0 20px 0 0";
        this.createIntegrationBtn.style.padding = "0";
        this.createIntegrationBtn.style.borderRadius = "25px";
        this.createIntegrationBtn.style.width = "auto";
    };
}
