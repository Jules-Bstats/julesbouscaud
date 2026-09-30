document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("navbarMobileToggle");
    const links = document.getElementById("navbarLinks");

    if (toggle && links) {
        toggle.addEventListener("click", () => {
            const isOpen = links.classList.toggle("open");
            toggle.classList.toggle("open", isOpen);
        });

        // Ferme le menu si on clique un lien (mobile)
        links.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                links.classList.remove("open");
                toggle.classList.remove("open");
            });
        });
    }

    const scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
        });

        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});