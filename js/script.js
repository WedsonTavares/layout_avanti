function toggleMenu() {
    const menu = document.getElementById('categorias');
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;

    if (isSmallScreen) {
        menu.classList.toggle('hidden');
    }
}