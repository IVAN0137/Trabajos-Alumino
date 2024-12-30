AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Filtrado de elementos con animación
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.catalog-item').forEach(item => {
            const parent = item.parentElement;
            if (filter === 'todos' || item.getAttribute('data-category') === filter) {
                parent.style.display = 'block';
                item.classList.add('animate-fadeInUp');
            } else {
                parent.style.display = 'none';
            }
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

// Mejorar experiencia táctil en móviles
if ('ontouchstart' in window) {
    document.querySelectorAll('.catalog-item').forEach(item => {
        item.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        item.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}
