function abrirModal(imagen, descripcion) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDesc = document.getElementById('modal-desc');

    modal.style.display = 'flex';
    modalImg.src = imagen;
    modalDesc.textContent = descripcion;
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
