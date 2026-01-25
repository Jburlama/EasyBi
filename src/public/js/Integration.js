class Integration {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "integration";

        // this.container.style.border = "1px solid black";
        this.container.style.width = "100%";
        this.container.style.height = "100vh";
        this.container.style.overflowX = "hidden";

        this.IntegrationHeader = new IntegrationHeader();
        this.container.appendChild(this.IntegrationHeader.container);

        this.NavSepLine = new NavSepLine();
        this.container.appendChild(this.NavSepLine.container)

        this.IntegrationsDisplay = new IntegrationsDisplay();
        this.container.appendChild(this.IntegrationsDisplay.container);
    }
}

class IntegrationsDisplay {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "integrations-display";

        // Style the container
        this.container.style.width = "100%";
        this.container.style.height = "calc(100vh - 120px)"; // Account for nav and separator
        this.container.style.display = "flex";
        this.container.style.flexDirection = "column";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "center";
        this.container.style.padding = "40px";
        this.container.style.boxSizing = "border-box";
        this.container.style.overflowY = "auto";

        // // Create the empty state message
        this.createEmptyState();
    }

    createEmptyState = () => {
        // Clear container first
        this.container.innerHTML = "";

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

        // Add message container to main container
        this.container.appendChild(messageContainer);

        // Store reference for future updates
        this.messageContainer = messageContainer;
    };

    // Method to update display when integrations are added
    updateDisplay = (integrations) => {
        if (integrations && integrations.length > 0) {
            // Show integrations list
            this.showIntegrationsList(integrations);
        }
        else {
            // Show empty state
            this.createEmptyState();
        }
    };


    // Method to show integrations list (placeholder for future implementation)
    showIntegrationsList = (integrations) => {
        // Clear container
        this.container.innerHTML = "";

        // Create header
        const header = document.createElement("div");
        header.style.padding = "20px";
        header.style.borderBottom = "1px solid rgba(255, 255, 255, 0.1)";

        const headerTitle = document.createElement("h2");
        headerTitle.textContent = `Integrações (${integrations.length})`;
        headerTitle.style.color = "#ffffff";
        headerTitle.style.fontFamily = "Arial, sans-serif";
        headerTitle.style.margin = "0";

        header.appendChild(headerTitle);
        this.container.appendChild(header);

        // Create integrations grid/list
        const integrationsGrid = document.createElement("div");
        integrationsGrid.style.display = "grid";
        integrationsGrid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
        integrationsGrid.style.gap = "20px";
        integrationsGrid.style.padding = "20px";

        // Add integration cards (placeholder)
        integrations.forEach((integration, index) => {
            const card = document.createElement("div");
            card.style.background = "linear-gradient(135deg, rgba(40, 40, 40, 0.5) 0%, rgba(60, 60, 60, 0.3) 100%)";
            card.style.borderRadius = "10px";
            card.style.padding = "20px";
            card.style.border = "1px solid rgba(255, 255, 255, 0.1)";

            const cardTitle = document.createElement("h3");
            cardTitle.textContent = integration.name || `Integração ${index + 1}`;
            cardTitle.style.color = "#ffffff";
            cardTitle.style.fontFamily = "Arial, sans-serif";
            cardTitle.style.marginTop = "0";

            card.appendChild(cardTitle);
            integrationsGrid.appendChild(card);
        });

        this.container.appendChild(integrationsGrid);
    };
}

class NavSepLine {
    constructor() {
        this.container = document.createElement("div");

        this.container.style.border = "1px solid black";
        this.container.style.height = "0";
        this.container.style.width = "100%";
    }
}

class IntegrationHeader {
    constructor() {
        // Integration NavBar
        this.container = document.createElement("div");
        this.container.id = "Integration-header";
        this.container.style.width = "100%";
        this.container.style.height = "80px";
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.justifyContent = "space-between";
        this.container.style.padding = "0 40px";
        this.container.style.boxSizing = "border-box";
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.gap = "50px"; // Space between button and search
        this.container.style.width = "100%";
        this.container.style.justifyContent = "space-between";
        this.container.style.flexWrap = "nowrap"; // Allow wrapping if needed
        this.container.style.minHeight = "80px"; // Ensure consistent height
        this.container.style.marginLeft = "10px";
        this.container.style.marginRight = "10px";
        this.container.style.overflowX = "hidden";


        this.createIntegrationBtn = new CreateIntegrationBtn();
        this.searchIntegration = new SearchIntegration();

        // Add both to controls container
        this.container.appendChild(this.createIntegrationBtn.container);
        this.container.appendChild(this.searchIntegration.container);

        // Setup responsive behavior
        this.setupResponsiveBehavior();
    }

    // Add responsive behavior to NavIntegration
    setupResponsiveBehavior = () => {
        const self = this;

        this.updateLayout = function() {
            const containerWidth = this.container.offsetWidth;
            const buttonWidth = self.createIntegrationBtn.container.offsetWidth;
            const searchWidth = 320; // Natural width of search

            // Available space for search after button and gaps
            const availableSpace = containerWidth - buttonWidth - 20 - 80; // 20px gap, 80px padding

            if (availableSpace < searchWidth) {
                // Not enough space for full search width
                const newSearchWidth = Math.max(200, availableSpace); // Minimum 200px width

                if (newSearchWidth > 200) {
                    // Scale down search proportionally
                    self.searchIntegration.container.style.width = newSearchWidth + "px";
                    self.searchIntegration.searchInput.style.width = "calc(100% - 50px)";
                } 
                else {
                    // Very small - collapse search to minimal
                    self.searchIntegration.container.style.width = "150px";
                    self.searchIntegration.searchInput.style.width = "calc(100% - 50px)";
                    self.searchIntegration.searchInput.placeholder = "Buscar...";
                }

                // Also make button responsive based on available space
                if (availableSpace < 300) {
                    self.createIntegrationBtn.collapse();
                } 
                else {
                    self.createIntegrationBtn.expand();
                }
            } 
            else {
                // Enough space - use natural sizes
                self.searchIntegration.container.style.width = "320px";
                self.searchIntegration.searchInput.style.width = "calc(100% - 50px)";
                self.searchIntegration.searchInput.placeholder = "Buscar integrações...";

                if (availableSpace > 400) {
                    self.createIntegrationBtn.expand();
                }
            }
        }.bind(this);

        // Initial call
        setTimeout(() => this.updateLayout(), 0);

        // Update on resize
        window.addEventListener("resize", () => this.updateLayout());

        // Also use ResizeObserver for more accurate monitoring
        if (typeof ResizeObserver !== 'undefined') {
            const resizeObserver = new ResizeObserver(() => {
                this.updateLayout();
            });
            resizeObserver.observe(this.container);
        }
    };
}


class SearchIntegration {
    constructor() {
        // Create search container
        this.container = document.createElement("div");
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.borderRadius = "25px";
        this.container.style.overflow = "hidden";
        this.container.style.background = "linear-gradient(135deg, rgba(90, 90, 90, 0.5) 0%, rgba(50, 50, 50, 1) 20%)";

        this.container.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        this.container.style.transition = "all 0.3s ease";
        this.container.style.width = "320px";
        this.container.style.maxWidth = "100%";
        this.container.style.boxSizing = "border-box";
        this.container.style.flexShrink = "1"; // Allow shrinking
        this.container.style.minWidth = "150px"; // Minimum width
        this.container.style.marginRight = "20px";

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
        this.container.appendChild(this.searchInput);

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
        this.container.appendChild(this.searchButton);

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
    }
}

class CreateIntegrationBtn {
    constructor() {
        // Container para o botão "Criar Integração"
        this.container = document.createElement("div");
        this.container.style.display = "flex";
        this.container.style.alignItems = "center";
        this.container.style.flexShrink = "0";
        this.container.style.minWidth = "0";

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
        this.container.appendChild(this.createIntegrationBtn);

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


        this.container.addEventListener("mouseenter", () => {
            this.createIntegrationBtn.style.background = "linear-gradient(135deg, rgba(100, 100, 100, 1) 0%, rgba(0, 0, 0, 1) 90%)";
        })
        this.container.addEventListener("mouseleave", () => {
            this.createIntegrationBtn.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(100, 100, 100, 1) 90%)";
        })

        // In CreateIntegrationBtn function, update the click event:
        this.container.addEventListener("click", () => {
            if (window.router) {
                window.router.navigate("/criar-integracao");
            } else {
                // Fallback if router isn't available
                history.pushState({}, "", "/criar-integracao");
                window.dispatchEvent(new PopStateEvent('popstate'));
            }
        })
    }

    // Add collapse and expand methods to CreateIntegrationBtn prototype
    collapse = () => {
        this.btnText.style.opacity = "0";
        this.btnText.style.maxWidth = "0";
        this.btnText.style.padding = "0";
        this.createIntegrationBtn.style.padding = "0";
        this.createIntegrationBtn.style.borderRadius = "50%";
        this.createIntegrationBtn.style.width = "45px";
    };

    expand = () => {
        this.btnText.style.opacity = "1";
        this.btnText.style.maxWidth = "200px";
        this.btnText.style.padding = "0 20px 0 0";
        this.createIntegrationBtn.style.padding = "0";
        this.createIntegrationBtn.style.borderRadius = "25px";
        this.createIntegrationBtn.style.width = "auto";
    };
}


