// Función para abrir el modal con la imagen seleccionada
function abrirModal(imagenSrc, descripcion) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    modal.style.display = 'flex';
    modalImg.src = imagenSrc;
    modalDesc.textContent = descripcion;
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        cerrarModal();
    }
};
