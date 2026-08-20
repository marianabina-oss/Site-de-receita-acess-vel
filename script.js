const modal = document.getElementById('modal-atalhos');
const btnAtalhos = document.getElementById('btn-atalhos');
const btnFechar = document.getElementById('btn-fechar');

function alternarPainel() {
  if (modal.hasAttribute('hidden')) {
    modal.removeAttribute('hidden');
  } else {
    modal.setAttribute('hidden', '');
  }
}

btnAtalhos.addEventListener('click', alternarPainel);
btnFechar.addEventListener('click', alternarPainel);

modal.addEventListener('click', (event) => {
  if (event.target === modal) alternarPainel();
});

document.addEventListener('keydown', (event) => {
  const tagAtiva = document.activeElement.tagName;
  if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA') return;

  if (event.key === '?' || event.key === '/') {
    event.preventDefault();
    alternarPainel();
  }
});