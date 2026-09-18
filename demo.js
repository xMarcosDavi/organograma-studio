(() => {
  'use strict';

  const abas = [...document.querySelectorAll('.demo-aba')];
  const imagem = document.querySelector('#demo-imagem');
  const titulo = document.querySelector('#demo-titulo');
  const texto = document.querySelector('#demo-texto');

  for (const aba of abas) {
    aba.addEventListener('click', () => {
      for (const item of abas) {
        const ativa = item === aba;
        item.classList.toggle('ativa', ativa);
        item.setAttribute('aria-selected', String(ativa));
      }

      imagem.src = aba.dataset.imagem;
      imagem.alt = `${aba.dataset.titulo} com dados fictícios`;
      titulo.textContent = aba.dataset.titulo;
      texto.textContent = aba.dataset.texto;
    });
  }
})();
