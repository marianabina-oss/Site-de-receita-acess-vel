document.addEventListener('DOMContentLoaded', () => {
  // --- ELEMENTOS DO DOM ---
  const modal = document.getElementById('modal-atalhos');
  const btnAtalhos = document.getElementById('btn-atalhos');
  const btnFechar = document.getElementById('btn-fechar');

  const visaoGrid = document.getElementById('visao-grid');
  const visaoReceita = document.getElementById('visao-receita');
  const btnVoltar = document.getElementById('btn-voltar');

  const cards = document.querySelectorAll('.shortcut');

  // Elementos do Modo de Preparo
  const passoNumero = document.getElementById('passo-numero');
  const passoTexto = document.getElementById('passo-texto');
  const passoDica = document.getElementById('passo-dica');
  const passoProgresso = document.getElementById('passo-progresso');
  const btnAnterior = document.getElementById('btn-passo-anterior');
  const btnProximo = document.getElementById('btn-passo-proximo');

  // Dados dos Passos da Receita
  const passos = [
    {
      numero: 1,
      texto: 'Em uma travessa funda, monte camadas alternando o molho, a massa e o queijo.',
      dica: '💡 <strong>Dica de acessibilidade:</strong> Apoie a travessa sobre um pano úmido para não deslizar.'
    },
    {
      numero: 2,
      texto: 'Leve ao forno pré-aquecido a 180°C por cerca de 30 a 35 minutos até dourar o queijo.',
      dica: '💡 <strong>Dica de acessibilidade:</strong> Use luvas térmicas de silicone com superfície antiderrapante para segurar firme a travessa.'
    },
    {
      numero: 3,
      texto: 'Retire do forno com cuidado e deixe descansar por 10 minutos antes de cortar.',
      dica: '💡 <strong>Dica de acessibilidade:</strong> Use uma espátula larga de silicone para cortar e servir sem esforço nos pulsos.'
    }
  ];

  let passoAtualIndex = 0;
  let cardAtualIndex = 0;

  // --- MODAL DE ATALHOS ---
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

  // --- LÓGICA DE NAVEGAÇÃO DOS PASSOS ---
  function atualizarPasso() {
    const passo = passos[passoAtualIndex];
    if (!passo) return;

    if (passoNumero) passoNumero.textContent = passo.numero;
    if (passoTexto) passoTexto.textContent = passo.texto;
    if (passoDica) passoDica.innerHTML = passo.dica;

    // Barra de progresso
    const porcentagem = ((passoAtualIndex + 1) / passos.length) * 100;
    if (passoProgresso) passoProgresso.style.width = `${porcentagem}%`;

    // Atualiza estado dos botões
    if (btnAnterior) {
      btnAnterior.disabled = passoAtualIndex === 0;
    }

    if (btnProximo) {
      if (passoAtualIndex === passos.length - 1) {
        btnProximo.innerHTML = 'Concluído ✔️';
      } else {
        btnProximo.innerHTML = 'Próximo → <kbd>N</kbd>';
      }
    }
  }

  function proximoPasso() {
    if (passoAtualIndex < passos.length - 1) {
      passoAtualIndex++;
      atualizarPasso();
    }
  }

  function passoAnterior() {
    if (passoAtualIndex > 0) {
      passoAtualIndex--;
      atualizarPasso();
    }
  }

  btnAnterior?.addEventListener('click', passoAnterior);
  btnProximo?.addEventListener('click', proximoPasso);

  // --- NAVEGAÇÃO ENTRE TELAS ---
  function abrirReceita() {
    if (visaoGrid) visaoGrid.setAttribute('hidden', '');
    if (visaoReceita) visaoReceita.removeAttribute('hidden');
    passoAtualIndex = 0;
    atualizarPasso();
    window.scrollTo(0, 0);
    btnVoltar?.focus();
  }

  function fecharReceita() {
    if (visaoReceita) visaoReceita.setAttribute('hidden', '');
    if (visaoGrid) visaoGrid.removeAttribute('hidden');
    cards[cardAtualIndex]?.focus();
  }

  btnVoltar?.addEventListener('click', fecharReceita);

  document.addEventListener('click', (event) => {
    if (event.target.closest('.shortcut')) {
      abrirReceita();
    }
  });

  // --- ATALHOS DE TECLADO ---
  document.addEventListener('keydown', (event) => {
    const tagAtiva = document.activeElement ? document.activeElement.tagName : '';
    if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA') return;

    const modalAberto = modal && !modal.hasAttribute('hidden');
    const receitaAberta = visaoReceita && !visaoReceita.hasAttribute('hidden');

    // Atalho para o painel
    if (event.key === '?' || event.key === '/') {
      event.preventDefault();
      alternarPainel();
      return;
    }

    if (event.key === 'Escape' && modalAberto) {
      alternarPainel();
      return;
    }

    // QUANDO A RECEITA ESTIVER ABERTA
    if (receitaAberta) {
      if (event.key === 'Escape') {
        fecharReceita();
        return;
      }

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

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        window.scrollBy({ top: 300, behavior: 'smooth' });
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        window.scrollBy({ top: -300, behavior: 'smooth' });
        return;
      }
    }

    // QUANDO ESTIVER NO GRID DE RECEITAS
    if (!receitaAberta && !modalAberto) {
      if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
        event.preventDefault();
        if (cards.length === 0) return;

        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
          cardAtualIndex = (cardAtualIndex + 1) % cards.length;
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
          cardAtualIndex = (cardAtualIndex - 1 + cards.length) % cards.length;
        }

        cards[cardAtualIndex].focus();
        return;
      }

      if (event.key === 'Enter') {
        const cardAtivo = document.activeElement ? document.activeElement.closest('.shortcut') : null;
        if (cardAtivo) {
          event.preventDefault();
          abrirReceita();
        }
      }
    }
  });

  // Inicializa o primeiro passo da receita ao carregar
  atualizarPasso();
});