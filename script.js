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

    // Rolagem suave com a seta para Baixo
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      window.scrollBy({ top: 300, behavior: 'smooth' });
      return;
    }

    // Rolagem suave com a seta para Cima
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      window.scrollBy({ top: -300, behavior: 'smooth' });
      return;
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

  // Clique com o mouse em qualquer card
  document.addEventListener('click', (event) => {
    if (event.target.closest('.shortcut')) {
      abrirReceita();
    }
  });

  // Botão voltar
  btnVoltar?.addEventListener('click', fecharReceita);
});

// Navegação entre os passos (N/P ou Setas Esquerda/Direita)
    if (visaoReceita && !visaoReceita.hasAttribute('hidden')) {
      if (event.key === 'n' || event.key === 'N' || event.key === 'ArrowRight') {
        event.preventDefault();
        proximoPasso();
        return;
      }
      if (event.key === 'p' || event.key === 'P' || event.key === 'ArrowLeft') {
        event.preventDefault();
        passoAnterior();
        return;
      }
    }