function CreateIntegrationPage() {
}

CreateIntegrationPage.prototype.render = function() {
    // Create page header
    this.container = document.createElement("div");
    this.container.id = "create-integration-page";
    this.container.style.width = "100%";
    this.container.style.height = "100vh";
    this.container.style.padding = "40px";
    this.container.style.boxSizing = "border-box";

    const header = document.createElement("div");
    header.style.marginBottom = "30px";
    
    const title = document.createElement("h1");
    title.textContent = "Criar Nova Integração";
    title.style.color = "#ffffff";
    title.style.fontFamily = "Arial, sans-serif";
    title.style.fontSize = "32px";
    title.style.marginBottom = "20px";
    
    const backButton = document.createElement("button");
    backButton.textContent = "← Voltar para Integrações";
    backButton.style.padding = "10px 20px";
    backButton.style.background = "linear-gradient(135deg, rgba(50, 50, 50, 1) 0%, rgba(100, 100, 100, 0.5) 100%)";
    backButton.style.color = "#ffffff";
    backButton.style.border = "none";
    backButton.style.borderRadius = "5px";
    backButton.style.cursor = "pointer";
    backButton.style.fontFamily = "Arial, sans-serif";
    backButton.style.fontSize = "14px";
    backButton.addEventListener('click', () => {
        if (window.router) {
            window.router.navigate('/');
        } else {
            window.history.back();
        }
    });
    
    header.appendChild(title);
    header.appendChild(backButton);
    
    // Create form
    const form = document.createElement("div");
    form.style.background = "linear-gradient(135deg, rgba(30, 30, 30, 0.1) 0%, rgba(50, 50, 50, 0.05) 100%)";
    form.style.padding = "30px";
    form.style.borderRadius = "10px";
    form.style.maxWidth = "600px";
    
    // Form fields
    const fields = [
        { label: "Nome da Integração", type: "text", placeholder: "Ex: Sistema ERP" },
        { label: "Tipo de Conexão", type: "select", options: ["API REST", "Banco de Dados", "Webhook", "Arquivo"] },
        { label: "URL da API", type: "text", placeholder: "https://api.exemplo.com" },
        { label: "Descrição", type: "textarea", placeholder: "Descreva a integração..." }
    ];
    
    fields.forEach(field => {
        const fieldGroup = document.createElement("div");
        fieldGroup.style.marginBottom = "20px";
        
        const label = document.createElement("label");
        label.textContent = field.label;
        label.style.display = "block";
        label.style.marginBottom = "8px";
        label.style.color = "#ffffff";
        label.style.fontFamily = "Arial, sans-serif";
        label.style.fontSize = "14px";
        
        let input;
        
        if (field.type === 'select') {
            input = document.createElement("select");
            field.options.forEach(option => {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                input.appendChild(opt);
            });
        } else if (field.type === 'textarea') {
            input = document.createElement("textarea");
            input.rows = 4;
        } else {
            input = document.createElement("input");
            input.type = field.type;
        }
        
        if (field.placeholder) {
            input.placeholder = field.placeholder;
        }
        
        input.style.width = "100%";
        input.style.padding = "10px";
        input.style.borderRadius = "5px";
        input.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        input.style.background = "rgba(255, 255, 255, 0.1)";
        input.style.color = "#ffffff";
        input.style.fontFamily = "Arial, sans-serif";
        input.style.fontSize = "14px";
        input.style.boxSizing = "border-box";
        
        fieldGroup.appendChild(label);
        fieldGroup.appendChild(input);
        form.appendChild(fieldGroup);
    });
    
    // Submit button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Criar Integração";
    submitButton.style.padding = "12px 30px";
    submitButton.style.background = "linear-gradient(135deg, rgba(0, 0, 0, 1) 0%, rgba(100, 100, 100, 1) 90%)";
    submitButton.style.color = "#ffffff";
    submitButton.style.border = "none";
    submitButton.style.borderRadius = "5px";
    submitButton.style.cursor = "pointer";
    submitButton.style.fontFamily = "Arial, sans-serif";
    submitButton.style.fontSize = "16px";
    submitButton.style.marginTop = "10px";
    
    submitButton.addEventListener('click', () => {
        alert('Integração criada! (Esta é uma demonstração)');
        if (window.router) {
            window.router.navigate('/');
        }
    });
    
    form.appendChild(submitButton);
    
    this.container.appendChild(header);
    this.container.appendChild(form);
};
