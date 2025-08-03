// ====== Main JavaScript Entry File ======

// 1. Code for the typing animation (This was missing)
var typeData = new Typed(".role", {
    strings: [
        "an AI/ML Engineer",
        "a Full Stack Developer",
        "2x Ideathon Winner",
        "4x Hackathon Finalist",
        "President of CSI-RAIT",
        "Riddhi Bhanushali",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});