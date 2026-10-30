
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

const links = document.querySelectorAll("nav ul a");

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.letterSpacing = "1px";
    });

    link.addEventListener("mouseleave", () => {
        link.style.letterSpacing = "normal";
    });
});

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });
});

console.log("Welcome to my portfolio! 💗");