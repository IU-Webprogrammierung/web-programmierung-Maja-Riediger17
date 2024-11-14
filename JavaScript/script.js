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