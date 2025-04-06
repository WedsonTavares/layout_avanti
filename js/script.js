
  document.querySelector('.show-more').addEventListener('click', function () {
    document.querySelector('.products').classList.toggle('show-all');
    this.textContent = this.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
  });

