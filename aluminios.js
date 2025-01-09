document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo para los trabajos en aluminio
    const trabajos = [
        { id: 1, titulo: "Ventana Corredera", categoria: "ventanas", imagen: "img/Aluminio/VentanaCorrediza.jpg", descripcion: "Ventana corredera de aluminio con doble vidrio para mayor aislamiento térmico y acústico. Diseño moderno y elegante que se adapta a cualquier estilo de hogar." },
        { id: 2, titulo: "Puerta Anodizada de Entrada", categoria: "puertas", imagen: "img/Aluminio/anodizada.jpeg", descripcion: "Puerta de entrada de aluminio con diseño contemporáneo. Combina seguridad y estilo para la entrada principal de tu hogar." },
        { id: 3, titulo: "Cancel de Baño", categoria: "canceles", imagen: "img/Aluminio/Cancel1.jpeg", descripcion: "Cancel de baño en aluminio y vidrio templado, con tratamiento antical. Elegante, funcional y fácil de limpiar para un baño moderno." },
        { id: 4, titulo: "Ventana Abatible", categoria: "ventanas", imagen: "img/Aluminio/ventanaAbatible.jpg", descripcion: "Ventana abatible de aluminio con sistema de apertura hacia el interior. Ideal para espacios que requieren una ventilación controlada." },
        { id: 5, titulo: "Puerta Corrediza", categoria: "puertas", imagen: "img/Aluminio/puertacorrediza.jpg", descripcion: "Puerta corrediza de aluminio con sistema de rodamientos silenciosos. Perfecta para optimizar el espacio y dar un toque contemporáneo a tu hogar." }
       
    ];

    // Función para crear los elementos del catálogo
    function crearCatalogo(items) {
        const catalogo = document.getElementById('catalog');
        catalogo.innerHTML = '';
        items.forEach((trabajo, index) => {
            const item = document.createElement('div');
            item.className = `catalog-item ${trabajo.categoria}`;
            item.innerHTML = `
                <img src="${trabajo.imagen}" alt="${trabajo.titulo}" loading="lazy">
                <div class="catalog-item-content">
                    <h3 class="catalog-item-title">${trabajo.titulo}</h3>
                    <a href="#" class="wood-button ver-detalles">Ver Detalles</a>
                </div>
            `;
            item.querySelector('.ver-detalles').onclick = (e) => {
                e.preventDefault();
                abrirModal(trabajo);
            };
            catalogo.appendChild(item);
            setTimeout(() => {
                item.classList.add('show');
            }, index * 100);
        });
    }

    // Función para filtrar los trabajos
    function filtrarTrabajos(categoria) {
        const trabajosFiltrados = categoria === 'todos' ? trabajos : trabajos.filter(trabajo => trabajo.categoria === categoria);
        crearCatalogo(trabajosFiltrados);
    }

    // Función para abrir el modal con los detalles del trabajo
    function abrirModal(trabajo) {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');

        // Actualizar contenido del modal

        modalImg.src = trabajo.imagen;
        modalImg.alt = trabajo.titulo;
        modalTitle.textContent = trabajo.titulo;
        modalDescription.textContent = trabajo.descripcion;

        // Actualizar enlaces de redes sociales
        document.getElementById('whatsapp-button').href = `https://wa.me/+527296838453?text=Me%20interesa%20el%20producto%20${encodeURIComponent(trabajo.titulo)}`;
        document.getElementById('facebook-button').href = 'https://www.facebook.com/tuempresa';
        document.getElementById('instagram-button').href = 'https://www.instagram.com/tuempresa';

        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Función para cerrar el modal
    function cerrarModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Event listener para cerrar el modal
    document.querySelector('.close').addEventListener('click', cerrarModal);
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            cerrarModal();
        }
    });

    // Event listeners para los botones de filtro
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filtrarTrabajos(button.dataset.filter);
        });
    });

    // Inicializar el catálogo
    crearCatalogo(trabajos);
});

