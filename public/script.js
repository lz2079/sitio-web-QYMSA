// Animación al hacer clic en un enlace
const links = document.querySelectorAll('.header__menu__link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        // Evita la animación si ya estamos en la página activa
        if (!link.classList.contains('active')) {
            e.preventDefault();
            const contenedorPrincipal = document.querySelector('.contenedor-principal');
            contenedorPrincipal.classList.add('slide-out');
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 500);
        }
    });
});

// Aplica la animación de entrada al cargar la página
window.addEventListener('load', () => {
    const contenedorPrincipal = document.querySelector('.contenedor-principal');
    contenedorPrincipal.classList.add('slide-in');
});