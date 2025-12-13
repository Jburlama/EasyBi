activateFirstButton()
activateNavButton()

function activateFirstButton() {
    document.querySelector(".button").classList.add("active")
}

function activateNavButton() {
    document.querySelectorAll(".button").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".button").forEach(i => {
                i.classList.remove("active")
            });
            this.classList.add("active");
        });
    });
}
