
function toggleNav() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}


function smoothScroll() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}


function revealOnScroll() {
    const elements = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    function checkPosition() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    checkPosition();
    window.addEventListener('scroll', checkPosition);
}


function showWelcomeMessage() {
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('welcome-message');
    welcomeMessage.innerHTML = '<p>Bem-vindo ao site DiferencIAs!</p>';
    document.body.appendChild(welcomeMessage);

    setTimeout(() => {
        welcomeMessage.classList.add('hide');
        setTimeout(() => {
            document.body.removeChild(welcomeMessage);
        }, 1000); // Tempo para transição
    }, 3000); // Tempo antes de ocultar
}


function changeHeaderOnScroll() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    smoothScroll();
    revealOnScroll();
    showWelcomeMessage();
    changeHeaderOnScroll();

  
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
    }
});