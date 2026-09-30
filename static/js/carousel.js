document.addEventListener("DOMContentLoaded", () => {
    const cards = Array.from(document.querySelectorAll(".carousel-card"));
    const total = cards.length;
    let current = 0;

    function render() {
        cards.forEach((card, i) => {
            const offset = (i - current + total) % total;
            card.classList.remove("pos-center", "pos-left", "pos-right");

            if (offset === 0) {
                card.classList.add("pos-center");
            } else if (offset === 1) {
                card.classList.add("pos-right");
            } else {
                card.classList.add("pos-left");
            }
        });
    }

    function goTo(index) {
        current = (index + total) % total;
        render();
    }

    document.getElementById("nextBtn").addEventListener("click", () => goTo(current + 1));
    document.getElementById("prevBtn").addEventListener("click", () => goTo(current - 1));

    cards.forEach((card, i) => {
        card.addEventListener("click", (e) => {
            const offset = (i - current + total) % total;
            if (offset !== 0) {
                // Carte en arrière-plan : on la fait passer devant, pas de navigation
                e.preventDefault();
                goTo(i);
            }
            // Si c'est déjà la carte centrale, le lien suit son cours normalement
        });
    });

    render();
});