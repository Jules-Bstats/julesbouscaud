(function () {
    function enableSwipe(el, onNext, onPrev, threshold) {
        threshold = threshold || 40;
        let startX = 0, startY = 0, swiped = false;

        el.addEventListener('touchstart', function (e) {
            const t = e.touches[0];
            startX = t.clientX;
            startY = t.clientY;
            swiped = false;
        }, { passive: true });

        el.addEventListener('touchend', function (e) {
            const t = e.changedTouches[0];
            const dx = t.clientX - startX;
            const dy = t.clientY - startY;
            // Geste surtout horizontal et assez long
            if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy) * 1.5) {
                swiped = true;
                if (dx < 0) onNext(); else onPrev();
            }
        }, { passive: true });

        // Empêche d'ouvrir la carte (lien) après un swipe
        el.addEventListener('click', function (e) {
            if (swiped) {
                e.preventDefault();
                e.stopPropagation();
                swiped = false;
            }
        }, true);
    }

    document.addEventListener('DOMContentLoaded', function () {
        const carousel = document.getElementById('carousel');
        const prev = document.getElementById('prevBtn');
        const next = document.getElementById('nextBtn');
        if (carousel && prev && next) {
            enableSwipe(carousel, function () { next.click(); }, function () { prev.click(); });
        }
    });
})();
