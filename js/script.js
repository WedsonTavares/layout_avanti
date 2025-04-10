// Button ver mais
document.querySelector('.show-more').addEventListener('click', function () {
  document.querySelector('.products').classList.toggle('show-all');
  this.textContent = this.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
});

// navbar
const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav.menu');

// Apenas ativa toggle se for mobile
if (window.innerWidth < 768) {
  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  // Toggle de seções da nav (como Institucional, Atendimento, etc.)
  document.querySelectorAll('.menu-toggle').forEach(toggle => {
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
  });
} else {
  // Desktop: mantém tudo visível e sem toggle
  document.querySelectorAll('.submenu').forEach(submenu => {
    submenu.classList.remove('hidden');
  });

  // Desktop: submenu aparece no hover (como já está no seu script)
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

// SAC toggle (funciona em qualquer resolução)
document.querySelectorAll('.sac-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    const isOpen = content.style.maxHeight;

    document.querySelectorAll('.sac-content').forEach(c => {
      c.style.maxHeight = null;
      c.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
    });

    if (!isOpen || isOpen === "0px") {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});

if (window.innerWidth < 768) {
  document.querySelector('.show-more').addEventListener('click', function () {
    document.querySelector('.products').classList.toggle('show-all');
    this.textContent = this.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
  });
}
