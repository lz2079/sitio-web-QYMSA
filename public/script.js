// Animación al hacer clic en un enlace
const links = document.querySelectorAll('.header__menu__link');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('.contenido');
        mainContent.classList.add('slide-out');
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    });
});

// Aplica la animación de entrada al cargar la página
window.addEventListener('load', () => {
    const mainContent = document.querySelector('.contenido');
    mainContent.classList.add('slide-in');
});