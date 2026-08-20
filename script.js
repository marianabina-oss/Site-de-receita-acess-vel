document.addEventListener('DOMContentLoaded', () => {
  // --- GERENCIAMENTO DO MODAL DE ATALHOS ---
  const modal = document.getElementById('modal-atalhos');
  const btnAtalhos = document.getElementById('btn-atalhos');
  const btnFechar = document.getElementById('btn-fechar');

  function alternarPainel() {
    if (!modal) return;
    if (modal.hasAttribute('hidden')) {
      modal.removeAttribute('hidden');
    } else {
      modal.setAttribute('hidden', '');
    }
  }

  if (btnAtalhos) btnAtalhos.addEventListener('click', alternarPainel);
  if (btnFechar) btnFechar.addEventListener('click', alternarPainel);

  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) alternarPainel();
    });
  }

  document.addEventListener('keydown', (event) => {
    const tagAtiva = document.activeElement ? document.activeElement.tagName : '';
    if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA') return;

    if (event.key === '?' || event.key === '/') {
      event.preventDefault();
      alternarPainel();
    }
  });

  // --- NAVEGAÇÃO DE RECEITAS (GRID -> RECEITA) ---
  const visaoGrid = document.getElementById('visao-grid');
  const visaoReceita = document.getElementById('visao-receita');
  const btnVoltar = document.getElementById('btn-voltar');

  function abrirReceita() {
    if (visaoGrid) visaoGrid.setAttribute('hidden', '');
    if (visaoReceita) visaoReceita.removeAttribute('hidden');
    window.scrollTo(0, 0);
    if (btnVoltar) btnVoltar.focus();
  }

  function fecharReceita() {
    if (visaoReceita) visaoReceita.setAttribute('hidden', '');
    if (visaoGrid) visaoGrid.removeAttribute('hidden');
  }

  // Clique em qualquer card de receita
  document.addEventListener('click', (event) => {
    if (event.target.closest('.shortcut')) {
      abrirReceita();
    }
  });

  // Tecla Enter no card selecionado
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const cardAtivo = document.activeElement ? document.activeElement.closest('.shortcut') : null;
      if (cardAtivo) {
        event.preventDefault();
        abrirReceita();
      }
    }
  });

  // Ações de voltar (Botão ou Tecla ESC)
  if (btnVoltar) btnVoltar.addEventListener('click', fecharReceita);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && visaoReceita && !visaoReceita.hasAttribute('hidden')) {
      fecharReceita();
    }
  });
});