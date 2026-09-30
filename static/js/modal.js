document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('legalModal');
    const openBtn = document.getElementById('openLegalModal');
    const closeBtn = document.getElementById('closeLegalModal');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});