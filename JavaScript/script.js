

// Elemente auswählen
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Klick-Event für das Hamburger-Menü
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
});


// Slide In des Contents beim nach unten Scrollen 

// Funktion beim Laden der Seite ausführen
document.addEventListener('DOMContentLoaded', scrollAnimation);

function scrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Füge die 'show'-Klasse hinzu
            } else {
                entry.target.classList.remove('show'); // Entferne die 'show'-Klasse, wenn es den Sichtbereich verlässt
            }
        });
    }, {
        threshold: 0.1 // 10% des Elements müssen sichtbar sein
    });

    elements.forEach(el => observer.observe(el));
}

// Funktion beim Laden der Seite ausführen
document.addEventListener('DOMContentLoaded', scrollAnimation);



document.addEventListener("DOMContentLoaded", function() {
    // Funktion zur Initialisierung der Slideshow
    function startSlideshow(slideshowContainer, interval) {
        const slides = slideshowContainer.querySelectorAll(".slideshow-image");
        let index = 0;

        function showSlides() {
            // Alle Bilder ausblenden
            slides.forEach((slide) => slide.classList.remove('active'));
            
            // Nächstes Bild anzeigen
            slides[index].classList.add('active');

            // Index für das nächste Bild inkrementieren
            index = (index + 1) % slides.length;
        }

        // Zeige das erste Bild an und starte die Slideshow
        showSlides();
        setInterval(showSlides, interval);
    }

    // Alle Slideshows initialisieren
    document.querySelectorAll(".slideshow-container").forEach(slideshow => {
        startSlideshow(slideshow, 2500); // Wechsle alle 3 Sekunden
    });
});