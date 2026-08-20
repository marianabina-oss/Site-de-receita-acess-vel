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
})

const visaoGrid = document.getElementById('visao-grid');
const visaoReceita = document.getElementById('visao-receita');
const btnVoltar = document.getElementById('btn-voltar');
const shortcuts = document.querySelectorAll('.shortcut');

function abrirReceita() {
  visaoGrid.setAttribute('hidden', '');
  visaoReceita.removeAttribute('hidden');
  window.scrollTo(0, 0);
  btnVoltar.focus(); // Foca no botão voltar para facilitar a navegação por teclado
}

function fecharReceita() {
  visaoReceita.setAttribute('hidden', '');
  visaoGrid.removeAttribute('hidden');
}

// Configura evento de Clique e tecla Enter para cada card
shortcuts.forEach((card) => {
  card.addEventListener('click', abrirReceita);

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      abrirReceita();
    }
  });
});

// Voltar com o botão ou tecla ESC
btnVoltar.addEventListener('click', fecharReceita);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !visaoReceita.hasAttribute('hidden')) {
    fecharReceita();
  }
});