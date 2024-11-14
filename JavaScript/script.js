

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