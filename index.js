function moverCarrusel(id, direction) {
    const carrusel = document.querySelector(`#${id} .carrusel-items`);
    const items = carrusel.children;
    const itemWidth = items[0].offsetWidth;
    const maxScroll = (items.length - 1) * itemWidth;

    let scrollPos = parseInt(carrusel.style.transform.replace('translateX(', '').replace('px)', '')) || 0;
    scrollPos += direction * -itemWidth;

    // Limitar el desplazamiento
    if (scrollPos > 0) scrollPos = 0;
    if (scrollPos < -maxScroll) scrollPos = -maxScroll;

    carrusel.style.transform = `translateX(${scrollPos}px)`;
}
