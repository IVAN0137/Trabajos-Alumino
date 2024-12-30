 // Inicializar AOS
 AOS.init();

 // Configuración de particles.js
 particlesJS('particles-js', {
     particles: {
         number: { value: 80 },
         color: { value: '#ffffff' },
         shape: { type: 'circle' },
         opacity: { value: 0.5 },
         size: { value: 3 },
         move: { enable: true, speed: 6 }
     }
 });

 

 // Barra de progreso
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    document.querySelector('.progress-bar').style.width = progress + '%';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.btn');
    button.addEventListener('click', function() {
        button.classList.add('btn-click-animation');
        setTimeout(() => {
            button.classList.remove('btn-click-animation');
        }, 600); // Duración de la animación
    });
});