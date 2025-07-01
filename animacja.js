const img = document.getElementById('obrazek-animacja-img');
const lapka = document.querySelector('.obrazek-lapka');
const dzwiek = new Audio('spada.mp3');
const licznikWartosc = document.getElementById('licznik-wartosc');

// === CounterAPI v2 funkcje ===
function pobierzLicznik() {
    fetch('https://api.counterapi.dev/v1/welniany/linki/')
        .then(res => res.json())
        .then(data => {
            const liczba = data.count ?? 0;
            licznikWartosc.textContent = liczba;
        });
}

function inkrementujLicznik() {
    fetch('https://api.counterapi.dev/v1/welniany/linki/up', { method: 'GET' })
        .then(res => res.json())
        .then(() => {
            pobierzLicznik(); // odśwież licznik po dodaniu
        });
}

// Pobierz licznik na starcie
pobierzLicznik();
setInterval(pobierzLicznik, 4000);

let clickable = true;

img.addEventListener('click', function () {
    if (!clickable) return;

    clickable = false;
    img.src = "obrazek2.png";
    img.classList.remove('spada');
    lapka.classList.remove('spada');
    void img.offsetWidth;

    setTimeout(() => {
        img.classList.add('spada');
        lapka.classList.add('spada');
        dzwiek.currentTime = 0;
        dzwiek.play();

        // INKREMENTUJ licznik po kliknięciu!
        inkrementujLicznik();

    }, 1000);

    img.addEventListener('animationend', function handler() {
        img.style.display = 'none';
        img.classList.remove('spada');
        img.removeEventListener('animationend', handler);

        // Po animacji łapka wraca
        setTimeout(() => {
            lapka.classList.remove('spada');
        }, 10000);

        setTimeout(() => {
            img.src = "obrazek.png";
            img.style.display = 'block';
            img.style.opacity = '0';
            setTimeout(() => {
                img.style.transition = 'opacity 1.2s';
                img.style.opacity = '1';
            }, 50);
            setTimeout(() => {
                img.style.transition = '';
            }, 1300);
        }, 10000);

        setTimeout(() => {
            clickable = true;
        }, 5000);
    });
});
