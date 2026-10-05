/* ==========================================================================
   Barre de progression « Formation en cours »
   Pour changer l'avancement : modifier UNIQUEMENT data-progress dans index.html
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('trainingProgress');
    if (!section) return;

    const track = section.querySelector('.progress-track');
    const fill = section.querySelector('.progress-fill');
    const percentText = section.querySelector('.progress-percent');

    // Valeur lue dans le HTML, bornée entre 0 et 100
    const target = Math.min(100, Math.max(0, parseFloat(section.dataset.progress) || 0));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function render(value) {
        const rounded = Math.round(value);
        fill.style.width = value + '%';
        fill.dataset.label = rounded + ' %';
        percentText.textContent = rounded + ' %';
        track.setAttribute('aria-valuenow', rounded);
    }

    function animate() {
        if (reduceMotion) {
            render(target);
            return;
        }
        const duration = 1400;
        const start = performance.now();

        function step(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3); // ease-out
            render(target * eased);
            if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    render(0);

    // Lance l'animation une seule fois, quand la section devient visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animate();
            observer.disconnect();
        }
    }, { threshold: 0.4 });
    observer.observe(section);

    // Clic ou Entrée sur la barre : rejoue l'animation
    track.addEventListener('click', animate);
    track.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            animate();
        }
    });
});
