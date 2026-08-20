document.addEventListener('DOMContentLoaded', () => {
  // --- BANCO DE DADOS DAS RECEITAS ---
  const receitas = {
    lasanha: {
      titulo: 'Lasanha à Bolonhesa',
      categoria: 'Prato Principal',
      descricao: 'Macia, rápida e sem cortes difíceis. Perfeita para servir com facilidade.',
      tempo: '⏱️ 45 min',
      porcoes: '👥 4 porções',
      dificuldade: 'Fácil',
      imagem: 'https://www.gastronomia.com.br/wp-content/uploads/2023/12/comida-com-l-lasanha-lagosta-linguica-e-muito-mais.jpg',
      ingredientes: [
        '500g de massa para lasanha pré-cozida',
        '500g de carne moída bem cozida',
        '2 sachês de molho de tomate pronto',
        '300g de queijo mussarela fatiado'
      ],
      passos: [
        {
          numero: 1,
          texto: 'Em uma travessa funda, monte camadas alternando o molho, a massa e o queijo.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Apoie a travessa sobre um pano úmido ou tapete antiderrapante para não deslizar na bancada.'
        },
        {
          numero: 2,
          texto: 'Leve ao forno pré-aquecido a 180°C por cerca de 30 a 35 minutos até dourar o queijo.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use luvas térmicas de silicone com textura antiderrapante para garantir firmeza ao segurar a travessa quente.'
        },
        {
          numero: 3,
          texto: 'Retire do forno com cuidado e deixe descansar por 10 minutos antes de cortar.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use uma espátula larga de silicone para cortar e servir sem fazer pressão excessiva nos pulsos.'
        }
      ]
    },
    batata: {
      titulo: 'Batata Rústica Assada',
      categoria: 'Acompanhamento',
      descricao: 'Corte prático em pedaços grandes, assada para evitar respingos de óleo quente.',
      tempo: '⏱️ 30 min',
      porcoes: '👥 3 porções',
      dificuldade: 'Fácil',
      imagem: 'https://i.pinimg.com/originals/f1/1c/af/f11cafce61ca93b19cb08ed21d16b7c6.jpg',
      ingredientes: [
        '4 batatas médias lavadas',
        '3 colheres de sopa de azeite',
        '1 colher de chá de páprica doce',
        'Sal e alecrim a gosto'
      ],
      passos: [
        {
          numero: 1,
          texto: 'Corte as batatas em gomos grandes mantendo a casca.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use uma tábua de corte com fixador de silicone e uma faca de cabo emborrachado e anatômico.'
        },
        {
          numero: 2,
          texto: 'Coloque os gomos em um saco plástico limpo, adicione o azeite e os temperos e sacuda suavemente.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Temperar dentro do saco evita a necessidade de misturar com colher em tigelas deslizantes.'
        },
        {
          numero: 3,
          texto: 'Espalhe as batatas em uma assadeira sem sobrepor e asse a 200°C por 30 minutos.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use um pegador culinário longo com ponta de silicone para virar as batatas com segurança.'
        }
      ]
    },
    'pao-de-queijo': {
      titulo: 'Pão de Queijo Prático',
      categoria: 'Lanche',
      descricao: 'Porções individuais perfeitas para pegar com as mãos sem derramar ou despedaçar.',
      tempo: '⏱️ 25 min',
      porcoes: '👥 12 un',
      dificuldade: 'Fácil',
      imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/10a451d868feb5fd854c1535dddc148e_XL.jpg',
      ingredientes: [
        '2 xícaras de polvilho azedo',
        '1 xícara de queijo ralado grosso',
        '1 caixa de creme de leite (200g)',
        '1 pitada de sal'
      ],
      passos: [
        {
          numero: 1,
          texto: 'Misture todos os ingredientes em uma tigela grande até formar uma massa homogênea.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Utilize uma tigela com base emborrachada antiderrapante para não precisar segurá-la com força.'
        },
        {
          numero: 2,
          texto: 'Faça bolinhas com as mãos e acomode em uma assadeira levemente untada.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use uma colher dosadora de sorvete para moldar as bolinhas no mesmo tamanho sem esforço manual.'
        },
        {
          numero: 3,
          texto: 'Asse em forno pré-aquecido a 200°C por 20 a 25 minutos até dourarem.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Ajuste o timer do fogão para avisar o tempo exato e evitar ter que abrir o forno várias vezes.'
        }
      ]
    },
    kibe: {
      titulo: 'Kibe Assado de Travessa',
      categoria: 'Salgado',
      descricao: 'Preparo simples na travessa, sem necessidade de moldar ou fritar em óleo quente.',
      tempo: '⏱️ 40 min',
      porcoes: '👥 6 porções',
      dificuldade: 'Fácil',
      imagem: 'https://blog-parceiros.ifood.com.br/wp-content/uploads/2024/10/quibe.jpg',
      ingredientes: [
        '250g de trigo para kibe hidratado',
        '500g de carne moída',
        '1 cebola picada e hortelã a gosto',
        '2 colheres de azeite e sal a gosto'
      ],
      passos: [
        {
          numero: 1,
          texto: 'Misture o trigo hidratado, a carne moída, a cebola, a hortelã e os temperos.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Use um processador de alimentos no modo pulsar para picar a cebola e misturar tudo rapidamente.'
        },
        {
          numero: 2,
          texto: 'Pressione toda a massa de kibe no fundo de um refratário untado com azeite.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Pressione a massa usando as costas de uma colher de pau pesada ou espátula de silicone para dar mais estabilidade.'
        },
        {
          numero: 3,
          texto: 'Faça riscos superficiais em quadradinhos e asse a 200°C por 30 minutos.',
          dica: '💡 <strong>Dica de acessibilidade:</strong> Riscar a massa antes de assar facilita muito na hora de cortar e servir os pedaços prontos.'
        }
      ]
    }
  };

  // --- ELEMENTOS DO DOM ---
  const modal = document.getElementById('modal-atalhos');
  const btnAtalhos = document.getElementById('btn-atalhos');
  const btnFechar = document.getElementById('btn-fechar');

  const visaoGrid = document.getElementById('visao-grid');
  const visaoReceita = document.getElementById('visao-receita');
  const btnVoltar = document.getElementById('btn-voltar');

  const cards = document.querySelectorAll('.shortcut');

  // Elementos do Cabeçalho da Receita
  const recTitulo = document.getElementById('rec-titulo');
  const recCategoria = document.getElementById('rec-categoria');
  const recDescricao = document.querySelector('.rec-descricao');
  const recImg = document.getElementById('rec-img');
  const recMeta = document.querySelector('.rec-meta');
  const listaIngredientes = document.querySelector('.lista-ingredientes');

  // Elementos do Passo a Passo
  const passoNumero = document.getElementById('passo-numero');
  const passoTexto = document.getElementById('passo-texto');
  const passoDica = document.getElementById('passo-dica');
  const passoProgresso = document.getElementById('passo-progresso');
  const btnAnterior = document.getElementById('btn-passo-anterior');
  const btnProximo = document.getElementById('btn-passo-proximo');

  let receitaAtiva = null;
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

  // --- CARREGAR DADOS DA RECEITA SELECIONADA ---
  function carregarReceita(id) {
    receitaAtiva = receitas[id] || receitas.lasanha;
    passoAtualIndex = 0;

    // Preenche cabeçalho
    if (recTitulo) recTitulo.textContent = receitaAtiva.titulo;
    if (recCategoria) recCategoria.textContent = receitaAtiva.categoria;
    if (recDescricao) recDescricao.textContent = receitaAtiva.descricao;
    if (recImg) {
      recImg.src = receitaAtiva.imagem;
      recImg.alt = receitaAtiva.titulo;
    }

    if (recMeta) {
      recMeta.innerHTML = `
        <span>${receitaAtiva.tempo}</span>
        <span>${receitaAtiva.porcoes}</span>
        <span class="badge-diff">${receitaAtiva.dificuldade}</span>
      `;
    }

    // Preenche lista de ingredientes
    if (listaIngredientes) {
      listaIngredientes.innerHTML = receitaAtiva.ingredientes
        .map((ing, idx) => `<li><span>${idx + 1}</span> ${ing}</li>`)
        .join('');
    }

    atualizarPasso();
  }

  // --- NAVEGAÇÃO ENTRE PASSOS ---
  function atualizarPasso() {
    if (!receitaAtiva) return;
    const passo = receitaAtiva.passos[passoAtualIndex];
    if (!passo) return;

    if (passoNumero) passoNumero.textContent = passo.numero;
    if (passoTexto) passoTexto.textContent = passo.texto;
    if (passoDica) passoDica.innerHTML = passo.dica;

    // Barra de progresso
    const porcentagem = ((passoAtualIndex + 1) / receitaAtiva.passos.length) * 100;
    if (passoProgresso) passoProgresso.style.width = `${porcentagem}%`;

    // Atualiza botões
    if (btnAnterior) {
      btnAnterior.disabled = passoAtualIndex === 0;
    }

    if (btnProximo) {
      if (passoAtualIndex === receitaAtiva.passos.length - 1) {
        btnProximo.innerHTML = 'Concluído ✔️';
      } else {
        btnProximo.innerHTML = 'Próximo → <kbd>N</kbd>';
      }
    }
  }

  function proximoPasso() {
    if (receitaAtiva && passoAtualIndex < receitaAtiva.passos.length - 1) {
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
  function abrirReceita(targetId) {
    carregarReceita(targetId);
    if (visaoGrid) visaoGrid.setAttribute('hidden', '');
    if (visaoReceita) visaoReceita.removeAttribute('hidden');
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
    const card = event.target.closest('.shortcut');
    if (card) {
      const targetId = card.getAttribute('data-target');
      abrirReceita(targetId);
    }
  });

  // --- ATALHOS DE TECLADO ---
  document.addEventListener('keydown', (event) => {
    const tagAtiva = document.activeElement ? document.activeElement.tagName : '';
    if (tagAtiva === 'INPUT' || tagAtiva === 'TEXTAREA') return;

    const modalAberto = modal && !modal.hasAttribute('hidden');
    const receitaAberta = visaoReceita && !visaoReceita.hasAttribute('hidden');

    if (event.key === '?' || event.key === '/') {
      event.preventDefault();
      alternarPainel();
      return;
    }

    if (event.key === 'Escape' && modalAberto) {
      alternarPainel();
      return;
    }

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
          const targetId = cardAtivo.getAttribute('data-target');
          abrirReceita(targetId);
        }
      }
    }
  });
});