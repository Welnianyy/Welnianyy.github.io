document.addEventListener('mousemove', function(e) {
    const bg = document.querySelector('.paralaksa-bg');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const xMove = (x - 0.5) * 10;
    const yMove = (y - 0.5) * 10;
    bg.style.backgroundPosition = `calc(50% - ${xMove}px) calc(50% - ${yMove}px)`;
});