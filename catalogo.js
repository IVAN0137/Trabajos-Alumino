document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS (Animaciones al desplazarse)
    AOS.init();

    // Seleccionar botones de filtro y elementos del catálogo
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogContainer = document.querySelector('.catalog-wrapper'); // Contenedor del catálogo
    const catalogItems = Array.from(document.querySelectorAll('.catalog-item'));

    // Añadir evento a cada botón de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Quitar clase 'active' de todos los botones y agregarla al seleccionado
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Obtener el filtro seleccionado
            const filterValue = button.getAttribute('data-filter');

            // Filtrar elementos
            const filteredItems = catalogItems.filter(item => {
                const itemCategory = item.getAttribute('data-category');
                return filterValue === 'todos' || itemCategory === filterValue;
            });

            // Limpiar el contenedor del catálogo
            catalogContainer.innerHTML = '';

            // Añadir elementos filtrados al contenedor
            filteredItems.forEach(item => {
                catalogContainer.appendChild(item);
                item.classList.add('animate-fadeInUp'); // Animación
            });

            // Eliminar la animación después de que se ejecute
            setTimeout(() => {
                filteredItems.forEach(item => item.classList.remove('animate-fadeInUp'));
            }, 600); // 600ms igual al tiempo de la animación CSS
        });
    });
});
