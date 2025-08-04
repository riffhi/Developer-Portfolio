
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

document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', (event) => {
        navMenu.classList.remove('active');

        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            
            event.preventDefault();

            
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const hamburger = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-item a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});