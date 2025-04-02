// Alterna a visibilidade do menu ao clicar no botão "Todas as Categorias"
function toggleMenu() {
    const menu = document.getElementById('categorias');
    menu.classList.toggle('hidden');
}

// Oculta o menu ao clicar em um item
function hideMenu() {
    const menu = document.getElementById('categorias');
    menu.classList.add('hidden');
}

// Gerencia o comportamento do menu com base no tamanho da tela
function handleResize() {
    const menu = document.getElementById('categorias');
    const menuToggle = document.getElementById('menu-toggle');

    if (window.innerWidth > 500) {
        // Em telas maiores, exibe o menu diretamente e oculta o botão toggle
        menu.classList.remove('hidden');
        menu.style.display = 'flex';
        menuToggle.style.display = 'none';
    } else {
        // Em telas menores, oculta o menu e exibe o botão toggle
        menu.classList.add('hidden');
        menu.style.display = 'none';
        menuToggle.style.display = 'block';
    }
}

// Adiciona eventos para redimensionamento e carregamento da página
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);