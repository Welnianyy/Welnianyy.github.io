// Usuń focus (podświetlenie) z każdego przycisku po kliknięciu
document.querySelectorAll('.discord-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.blur();
    });
});
document.querySelectorAll('.sub-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.blur();
    });
});

// Kontakt modal (zostaw jak miałeś, ale możesz połączyć z powyższym)
document.querySelector('.guziki button:last-child').addEventListener('click', function() {
    document.getElementById('kontakt-modal').classList.add('aktywny');
    // this.blur(); // niepotrzebne, bo globalny kod już to robi
});
document.querySelector('.zamknij-kontakt').addEventListener('click', function() {
    document.getElementById('kontakt-modal').classList.remove('aktywny');
});
document.getElementById('kontakt-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('aktywny');
});
