document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll("#skillsFilter .skill-badge");
    const cards = document.querySelectorAll(".project-card");
    const families = document.querySelectorAll(".project-family");

    function applyFilter(filter) {
        cards.forEach(card => {
            const skills = card.getAttribute("data-skills");
            const match = filter === "all" || skills.includes(filter);
            card.classList.toggle("hidden", !match);
        });

        // Masque une famille entière si plus aucune carte n'y est visible
        families.forEach(family => {
            const visibleCards = family.querySelectorAll(".project-card:not(.hidden)");
            family.classList.toggle("family-hidden", visibleCards.length === 0);
        });
    }

    badges.forEach(badge => {
        badge.addEventListener("click", () => {
            const filter = badge.getAttribute("data-filter");
            const alreadyActive = badge.classList.contains("active");

            badges.forEach(b => b.classList.remove("active"));

            if (alreadyActive && filter !== "all") {
                // Re-clic sur le même badge : réinitialise sur "Tous"
                document.querySelector('[data-filter="all"]').classList.add("active");
                applyFilter("all");
            } else {
                badge.classList.add("active");
                applyFilter(filter);
            }
        });
    });
});