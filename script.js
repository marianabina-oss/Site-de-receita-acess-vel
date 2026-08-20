document.addEventListener('DOMContentLoaded', () => {
  // --- MODAL DE ATALHOS ---
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

  btnAtalhos?.addEventListener('click', alternarPainel);
  btnFechar?.addEventListener('click', alternarPainel);

  modal?.addEventListener('click', (event) => {
    if (event.target === modal) alternarPainel();
  });

  // --- NAVEGAÇÃO DE RECEITAS ---
  const visaoGrid = document.getElementById('visao-grid');
  const visaoReceita = document.getElementById('visao-receita');
  const btnVoltar = document.getElementById('btn-voltar');

  function abrirReceita() {
    if (visaoGrid) visaoGrid.setAttribute('hidden', '');
    if (visaoReceita) visaoReceita.removeAttribute('hidden');
    window.scrollTo(0, 0);
    btnVoltar?.focus();
  }

  function fecharReceita() {
    if (visaoReceita) visaoReceita.setAttribute('hidden', '');
    if (visaoGrid) visaoGrid.removeAttribute('hidden');
  }

  // --- ESCUTA GLOBAL DE TECLAS ---
  document.addEventListener('keydown', (event) => {
    const tagAtiva = document.activeElement ? document.activeElement.tagName : '';
    if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA') return;

    // Abrir/fechar modal (? ou /)
    if (event.key === '?' || event.key === '/') {
      event.preventDefault();
      alternarPainel();
      return;
    }

    // Rolar para baixo (Seta para Baixo)
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      window.scrollBy({ top: 350, behavior: 'smooth' });
    }

    // Rolar para cima (Seta para Cima)
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      window.scrollBy({ top: -350, behavior: 'smooth' });
    }

    // Entrar na receita (Enter)
    if (event.key === 'Enter') {
      const cardAtivo = document.activeElement ? document.activeElement.closest('.shortcut') : null;
      if (cardAtivo) {
        event.preventDefault();
        abrirReceita();
      }
    }

    // Voltar para a lista (ESC)
    if (event.key === 'Escape' && visaoReceita && !visaoReceita.hasAttribute('hidden')) {
      fecharReceita();
    }
  });

  // Clique em qualquer card
  document.addEventListener('click', (event) => {
    if (event.target.closest('.shortcut')) {
      abrirReceita();
    }
  });

  // Botão voltar
  btnVoltar?.addEventListener('click', fecharReceita);
});