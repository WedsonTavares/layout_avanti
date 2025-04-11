// Função principal que configura comportamentos conforme o tamanho da tela
function setupMenu() {
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav.menu');

  if (window.innerWidth < 768) {
    // Ativa o toggle do menu mobile, se ainda não estiver ativo
    if (toggleBtn && !toggleBtn.dataset.bound) {
      toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
      toggleBtn.dataset.bound = true;
    }

    // Dropdown do menu mobile
    document.querySelectorAll('.menu-toggle').forEach(toggle => {
      if (!toggle.dataset.bound) {
        toggle.addEventListener('click', () => {
          const allSections = document.querySelectorAll('.menu-section');

          allSections.forEach(section => {
            if (section !== toggle.parentElement) {
              section.classList.remove('active');
              section.querySelector('.submenu').classList.add('hidden');
            }
          });

          const section = toggle.parentElement;
          section.classList.toggle('active');
          section.querySelector('.submenu').classList.toggle('hidden');
        });
        toggle.dataset.bound = true;
      }
    });

    // Botão "Ver Mais" no mobile
    const showMoreBtn = document.querySelector('.show-more');
    const productsContainer = document.querySelector('.products');

    if (showMoreBtn && productsContainer && !showMoreBtn.dataset.bound) {
      showMoreBtn.addEventListener('click', function () {
        productsContainer.classList.toggle('show-all');
        this.textContent = this.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
      });
      showMoreBtn.dataset.bound = true;
    }

  } else {
    // Desktop: mostra todos os submenus e ativa hover
    document.querySelectorAll('.submenu').forEach(submenu => {
      submenu.classList.remove('hidden');
    });

    document.querySelectorAll('.menu-section').forEach(section => {
      section.addEventListener('mouseenter', () => {
        section.classList.add('active');
        section.querySelector('.submenu').classList.remove('hidden');
      });
      section.addEventListener('mouseleave', () => {
        section.classList.remove('active');
        section.querySelector('.submenu').classList.add('hidden');
      });
    });
  }
}

// Chamada inicial ao carregar a página
setupMenu();

// Reaplica a configuração ao redimensionar a tela
window.addEventListener('resize', setupMenu);

// SAC (funciona em qualquer resolução)
document.querySelectorAll('.sac-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = content.classList.contains('open');

    // Fecha todos os outros
    document.querySelectorAll('.sac-content').forEach(c => {
      c.style.maxHeight = null;
      c.classList.remove('open');
      c.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
    });

    // Abre o atual se estava fechado
    if (!isOpen) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add('open');
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
