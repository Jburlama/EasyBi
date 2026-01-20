function Integration() {
    this.container = document.createElement("div");
    this.container.id = "integration";

    // this.container.style.border = "1px solid black";
    this.container.style.width = "100%";
    this.container.style.height = "100vh";
    this.container.style.overflowX = "hidden";

    this.NavIntegration = new NavIntegration();
    this.container.appendChild(this.NavIntegration.container);
}

function NavIntegration() {
    // Integration NavBar
    this.container = document.createElement("div");
    this.container.id = "nav-integration";
    this.container.style.width = "100%";
    this.container.style.height = "80px";
    this.container.style.display = "flex";
    this.container.style.alignItems = "center";
    this.container.style.justifyContent = "space-between";
    this.container.style.padding = "0 40px";
    this.container.style.boxSizing = "border-box";
    // this.container.style.border = "1px solid black";
    
    // Create a container for both elements to manage their layout
    this.container = document.createElement("div");
    this.container.style.display = "flex";
    this.container.style.alignItems = "center";
    this.container.style.gap = "50px"; // Space between button and search
    this.container.style.width = "100%";
    this.container.style.justifyContent = "space-between";
    this.container.style.flexWrap = "nowrap"; // Allow wrapping if needed
    this.container.style.minHeight = "80px"; // Ensure consistent height
    this.container.style.marginLeft = "10px";
    this.container.style.marginRight = "10px";
    

    this.createIntegrationBtn = new CreateIntegrationBtn();
    this.searchIntegration = new SearchIntegration();

    // Add both to controls container
    this.container.appendChild(this.createIntegrationBtn.container);
    this.container.appendChild(this.searchIntegration.container);
    
    // Setup responsive behavior
    this.setupResponsiveBehavior();
}

// Add responsive behavior to NavIntegration
NavIntegration.prototype.setupResponsiveBehavior = function() {
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
            } else {
                // Very small - collapse search to minimal
                self.searchIntegration.container.style.width = "150px";
                self.searchIntegration.searchInput.style.width = "calc(100% - 50px)";
                self.searchIntegration.searchInput.placeholder = "Buscar...";
            }
            
            // Also make button responsive based on available space
            if (availableSpace < 300) {
                self.createIntegrationBtn.collapse();
            } else {
                self.createIntegrationBtn.expand();
            }
        } else {
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

function SearchIntegration() {
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
}

function CreateIntegrationBtn() {
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
}

// Add collapse and expand methods to CreateIntegrationBtn prototype
CreateIntegrationBtn.prototype.collapse = function() {
    this.btnText.style.opacity = "0";
    this.btnText.style.maxWidth = "0";
    this.btnText.style.padding = "0";
    this.createIntegrationBtn.style.padding = "0";
    this.createIntegrationBtn.style.borderRadius = "50%";
    this.createIntegrationBtn.style.width = "45px";
};

CreateIntegrationBtn.prototype.expand = function() {
    this.btnText.style.opacity = "1";
    this.btnText.style.maxWidth = "200px";
    this.btnText.style.padding = "0 20px 0 0";
    this.createIntegrationBtn.style.padding = "0";
    this.createIntegrationBtn.style.borderRadius = "25px";
    this.createIntegrationBtn.style.width = "auto";
};
