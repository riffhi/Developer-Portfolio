var typeData = new Typed(".role", {
    strings: [
      "an AI/ML Engineer",
      "a Full Stack Developer",
      "2x Ideathon Winner",
      "4x Hackathon Finalist",
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

const header = document.querySelector('header');
if (header) {
    const sticky = header.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
    window.addEventListener('scroll', handleScroll);
}


const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '⬆️';
backToTopBtn.className = 'back-to-top';
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.display = 'none'; 
backToTohighlightNavLinkpBtn.style.zIndex = '1000';
backToTopBtn.style.padding = '10px 15px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.border = 'none';
backToTopBtn.style.backgroundColor = 'rgba(232, 73, 73, 0.8)';
backToTopBtn.style.color = 'white';
backToTopBtn.style.fontSize = '18px';


function toggleBackToTopButton() {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', toggleBackToTopButton);


const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item a');

function highlightNavLink() {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 70) { 
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); 
        if(link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
window.addEventListener('load', highlightNavLink); 