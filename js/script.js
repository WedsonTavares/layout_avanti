function toggleMenu() {
    const menu = document.getElementById('menu-items');
    const toggleButton = document.getElementById('menu-toggle');

    // Alterna a visibilidade do menu
    menu.classList.toggle('hidden');

    // Atualiza o atributo aria-expanded para acessibilidade
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
}