document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".project-card");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            // Gérer l'état visuel actif du bouton
            buttons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            cards.forEach(card => {
                const tags = card.getAttribute("data-tags");
                if (filter === "all" || tags.includes(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});