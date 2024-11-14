// Auswahl der Elemente
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle Funktion, um das Menü anzuzeigen/verstecken
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


hamburger.addEventListener('click', function() {
    console.log("Hamburger Menü wurde geklickt");
    navLinks.classList.toggle('show');
});


//Slida-Show Header
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    // Alle Slides ausblenden
    slides.forEach(slide => slide.style.display = 'none');
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Aktuelle Slide anzeigen
    slides[slideIndex - 1].style.display = 'block';
    
    // Nächste Slide nach 3 Sekunden anzeigen
    setTimeout(showSlides, 3000);
}

// Slideshow beim Laden der Seite starten
document.addEventListener('DOMContentLoaded', showSlides);




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