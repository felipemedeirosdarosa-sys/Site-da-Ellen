/* ==========================================
   ELLEN CONTRERAS — CARDÁPIO E PEDIDOS
   ========================================== */

const WHATSAPP = "5551999501280";

const fotos = {
  frango: "../Imagens/Imagens ellen/Marmita 2.jpg",
  carne: "../Imagens/Imagens ellen/Marmita Strogonoff.jpg",
  peixe: null,
  lanches: "../Imagens/Imagens ellen/Bolinho 1.jpg",
  sopas: "../Imagens/Imagens ellen/Marmita 3.jpg"
};

const produtos = [
  { id: 1, categoria: "frango", nome: "Frango xadrez", descricao: "Arroz, feijão ou lentilha e frango xadrez.", preco: 20.50 },
  { id: 2, categoria: "frango", nome: "Penne com iscas de frango", descricao: "Penne integral ou normal, molho de ricota e legumes assados.", preco: 20.50 },
  { id: 3, categoria: "frango", nome: "Frango à parmegiana assado", descricao: "Arroz, feijão ou lentilha, queijo muçarela, molho sugo e legumes assados.", preco: 20.50 },
  { id: 4, categoria: "frango", nome: "Iscas de frango ao molho mostarda", descricao: "Arroz, legumes assados ou batata rústica assada.", preco: 20.50 },

  { id: 5, categoria: "carne", nome: "Escondidinho com carne de panela", descricao: "Com queijo. Base de moranga ou batata.", preco: 21.50 },
  { id: 6, categoria: "carne", nome: "Escondidinho com carne moída", descricao: "Com queijo. Base de moranga ou batata.", preco: 21.50 },
  { id: 7, categoria: "carne", nome: "Carne moída com arroz", descricao: "Feijão ou lentilha e legumes assados, ou carne moída com vagem.", preco: 21.50 },
  { id: 8, categoria: "carne", nome: "Penne com carne de panela ao sugo", descricao: "Penne integral ou normal, legumes assados e parmesão.", preco: 21.50 },
  { id: 9, categoria: "carne", nome: "Strogonoff com arroz", descricao: "Com legumes assados ou batata rústica assada.", preco: 21.50 },
  { id: 10, categoria: "carne", nome: "Almôndegas ao sugo", descricao: "Arroz, feijão ou lentilha e legumes assados.", preco: 21.50 },
  { id: 11, categoria: "carne", nome: "Purê com carne de panela", descricao: "Purê de batata, carne de panela ao sugo e legumes assados.", preco: 21.50 },
  { id: 12, categoria: "carne", nome: "Fettuccine à bolonhesa", descricao: "Com legumes assados e queijo parmesão.", preco: 21.50 },
  { id: 13, categoria: "carne", nome: "Iscas de carne no shoyu", descricao: "Arroz, feijão ou lentilha e legumes assados.", preco: 21.50 },

  { id: 14, categoria: "peixe", nome: "Filé de peixe com arroz", descricao: "Arroz, lentilha e legumes assados.", preco: 21.90 },
  { id: 15, categoria: "peixe", nome: "Filé de peixe com purê de batata", descricao: "Acompanha legumes assados.", preco: 21.90 },
  { id: 16, categoria: "peixe", nome: "Filé de peixe com purê de moranga", descricao: "Acompanha legumes assados.", preco: 21.90 },

  { id: 17, categoria: "lanches", nome: "Kibe de quinoa com carne moída", descricao: "8 unidades de 50 g.", preco: 34.90 },
  { id: 18, categoria: "lanches", nome: "Croqueta de frango com batata e requeijão", descricao: "8 unidades de 50 g.", preco: 30.90 },
  { id: 19, categoria: "lanches", nome: "Bolinho de moranga com carne de panela", descricao: "8 unidades de 50 g.", preco: 36.90 },
  { id: 20, categoria: "lanches", nome: "Bolinho de frango com queijo", descricao: "8 unidades de 50 g.", preco: 31.90 },
  { id: 21, categoria: "lanches", nome: "Rap10 com carne moída", descricao: "2 unidades; 120 g de proteína por unidade.", preco: 25.90 },
  { id: 22, categoria: "lanches", nome: "Pastel de carne moída com requeijão", descricao: "4 unidades de 50 g.", preco: 22.90 },
  { id: 23, categoria: "lanches", nome: "Pastel de frango com requeijão", descricao: "4 unidades de 50 g.", preco: 21.90 },
  { id: 24, categoria: "lanches", nome: "Pastel de carne de panela com requeijão", descricao: "4 unidades de 50 g.", preco: 24.90 },
  { id: 25, categoria: "lanches", nome: "Hambúrguer artesanal", descricao: "Carne de primeira; 4 unidades de 120 g.", preco: 31.90 },
  { id: 26, categoria: "lanches", nome: "Frango cremoso para recheio", descricao: "Embalagem de 600 g.", preco: 26.90 },
  { id: 27, categoria: "lanches", nome: "Carne de panela cremosa para recheio", descricao: "Embalagem de 600 g.", preco: 48.90 },
  { id: 28, categoria: "lanches", nome: "Pizza no pão sírio de frango", descricao: "Frango, queijo, molho sugo e orégano; 1 unidade.", preco: 14.90 },
  { id: 29, categoria: "lanches", nome: "Pizza no pão sírio de carne", descricao: "Carne de panela, queijo, molho sugo e orégano; 1 unidade.", preco: 15.90 },
  { id: 30, categoria: "lanches", nome: "Sanduíche Wickbold", descricao: "Frango cremoso e queijo; 2 unidades.", preco: 17.90 },
  { id: 31, categoria: "lanches", nome: "Muffin de maçã com canela", descricao: "Base de aveia; 6 unidades de 50 g.", preco: 25.90 },
  { id: 32, categoria: "lanches", nome: "Muffin de cacau com chocolate meio amargo", descricao: "Base de aveia; 6 unidades de 50 g.", preco: 25.90 },
  { id: 33, categoria: "lanches", nome: "Muffin de banana com doce de leite", descricao: "Base de aveia; 6 unidades de 50 g.", preco: 25.90 },
  { id: 34, categoria: "lanches", nome: "Panquecas americanas proteicas", descricao: "Base de aveia; 6 unidades médias.", preco: 29.90 },

  { id: 35, categoria: "sopas", nome: "Creme de moranga", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 },
  { id: 36, categoria: "sopas", nome: "Caldinho de aipim", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 },
  { id: 37, categoria: "sopas", nome: "Creme de ervilha", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 },
  { id: 38, categoria: "sopas", nome: "Sopa de legumes", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 },
  { id: 39, categoria: "sopas", nome: "Creme de milho", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 },
  { id: 40, categoria: "sopas", nome: "Caldinho de feijão", descricao: "300 ml. Proteína extra opcional: + R$ 2,00.", preco: 15.50 }
];

const categorias = [
  { id: "frango", nome: "Marmitas de frango", descricao: "Refeições com frango para facilitar sua rotina.", foto: fotos.frango, emoji: "🍗" },
  { id: "carne", nome: "Marmitas de carne", descricao: "Opções com carne moída, carne de panela e outras preparações.", foto: fotos.carne, emoji: "🥩" },
  { id: "peixe", nome: "Marmitas de peixe", descricao: "Refeições com filé de peixe e acompanhamentos.", foto: fotos.peixe, emoji: "🐟" },
  { id: "lanches", nome: "Lanches", descricao: "Opções práticas, doces e salgadas, para diferentes momentos do dia.", foto: fotos.lanches, emoji: "🥪" },
  { id: "sopas", nome: "Caldinhos, cremes e sopas", descricao: "Preparações de 300 ml, com possibilidade de adicionar proteína.", foto: fotos.sopas, emoji: "🥣" }
];

/* ==========================================
   ELEMENTOS E VARIÁVEIS
   ========================================== */

const moeda = valor => valor.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});

const grid = document.getElementById("productsGrid");
const filters = document.querySelectorAll(".filter");
const resultsLabel = document.getElementById("resultsLabel");

const cart = document.getElementById("cart");
const overlay = document.getElementById("cartOverlay");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");

const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const cartTotal = document.getElementById("cartTotal");
const cartWarning = document.getElementById("cartWarning");

const paymentMethod = document.getElementById("paymentMethod");
const checkout = document.getElementById("checkout");

const customerFields = document.getElementById("customerFields");
const customerName = document.getElementById("customerName");
const deliveryType = document.getElementById("deliveryType");
const addressField = document.getElementById("addressField");
const customerAddress = document.getElementById("customerAddress");
const customerNumber = document.getElementById("customerNumber");
const noNumber = document.getElementById("noNumber");
const customerComplement = document.getElementById("customerComplement");
const customerNeighborhood = document.getElementById("customerNeighborhood");
const customerCity = document.getElementById("customerCity");
const customerReference = document.getElementById("customerReference");
const customerNotes = document.getElementById("customerNotes");
const customerError = document.getElementById("customerError");

let filtroAtual = "todos";
let carrinho = [];
let notificacaoTimer;

/* ==========================================
   EXIBIR CARDÁPIO
   ========================================== */

function renderProdutos() {
  const categoriasVisiveis = filtroAtual === "todos"
    ? categorias
    : categorias.filter(categoria => categoria.id === filtroAtual);

  const total = categoriasVisiveis.reduce((soma, categoria) => {
    return soma + produtos.filter(
      produto => produto.categoria === categoria.id
    ).length;
  }, 0);

  resultsLabel.textContent = `${total} opções no cardápio`;

  grid.innerHTML = categoriasVisiveis.map(categoria => {
    const lista = produtos.filter(
      produto => produto.categoria === categoria.id
    );

    const menorPreco = Math.min(...lista.map(produto => produto.preco));

    return `
      <section class="category-section">
        <div class="category-banner">
          <div class="category-photo">
            ${
              categoria.foto
                ? `<img src="${categoria.foto}"
                    alt="Imagem representativa de ${categoria.nome}"
                    loading="lazy">`
                : `<div class="category-placeholder">${categoria.emoji}</div>`
            }
          </div>

          <div class="category-banner-content">
            <span>ELLEN CONTRERAS • CARDÁPIO</span>
            <h3>${categoria.nome}</h3>
            <p>${categoria.descricao}</p>
            <div class="category-count">
              ${lista.length} opções • A partir de ${moeda(menorPreco)}
            </div>
          </div>
        </div>

        <div class="category-products">
          ${lista.map(produto => `
            <article class="product-row">
              <div class="product-row-info">
                <h4>${produto.nome}</h4>
                <p>${produto.descricao}</p>
              </div>

              <div class="product-row-actions">
                <strong class="price">${moeda(produto.preco)}</strong>
                <button class="add-cart" data-id="${produto.id}" type="button">
                  Adicionar +
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }).join("");
}

/* ==========================================
   FILTROS
   ========================================== */

filters.forEach(botao => {
  botao.addEventListener("click", () => {
    filtroAtual = botao.dataset.filter;

    filters.forEach(filtro => {
      filtro.classList.toggle("active", filtro === botao);
    });

    renderProdutos();
  });
});

/* ==========================================
   ABRIR E FECHAR CARRINHO
   ========================================== */

function abrirCarrinho() {
  cart.classList.add("active");
  overlay.classList.add("active");
  document.body.classList.add("cart-open");
}

function fecharCarrinho() {
  cart.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("cart-open");
}

document.getElementById("openCart").addEventListener("click", abrirCarrinho);
document.getElementById("closeCart").addEventListener("click", fecharCarrinho);
overlay.addEventListener("click", fecharCarrinho);

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharCarrinho();
});

/* ==========================================
   ADICIONAR PRODUTOS
   ========================================== */

grid.addEventListener("click", evento => {
  const botao = evento.target.closest(".add-cart");
  if (!botao) return;

  const id = Number(botao.dataset.id);
  const produto = produtos.find(item => item.id === id);
  if (!produto) return;

  const existente = carrinho.find(item => item.id === id);

  if (existente) {
    existente.quantidade++;
  } else {
    carrinho.push({
      id,
      quantidade: 1,
      extra: false
    });
  }

  atualizarCarrinho();
  mostrarNotificacao(produto.nome);
});

/* ==========================================
   ALTERAR ITENS DO CARRINHO
   ========================================== */

function alterarQuantidade(id, diferenca) {
  const item = carrinho.find(produto => produto.id === id);
  if (!item) return;

  item.quantidade += diferenca;

  if (item.quantidade <= 0) {
    carrinho = carrinho.filter(produto => produto.id !== id);
  }

  atualizarCarrinho();
}

function removerItem(id) {
  carrinho = carrinho.filter(item => item.id !== id);
  atualizarCarrinho();
}

function toggleExtra(id, ativo) {
  const item = carrinho.find(produto => produto.id === id);
  if (!item) return;

  item.extra = ativo;
  atualizarCarrinho();
}

cartItems.addEventListener("click", evento => {
  const botao = evento.target.closest("button[data-action]");
  if (!botao) return;

  const id = Number(botao.dataset.id);
  const acao = botao.dataset.action;

  if (acao === "mais") alterarQuantidade(id, 1);
  if (acao === "menos") alterarQuantidade(id, -1);
  if (acao === "remover") removerItem(id);
});

cartItems.addEventListener("change", evento => {
  if (evento.target.matches(".extra-protein")) {
    toggleExtra(
      Number(evento.target.dataset.id),
      evento.target.checked
    );
  }
});

/* ==========================================
   CALCULAR VALORES E DESCONTOS
   ========================================== */

function calcular() {
  let subtotal = 0;
  let subtotalMarmitas = 0;
  let subtotalLanches = 0;
  let quantidadeMarmitas = 0;

  const opcoesLanches = new Set();

  carrinho.forEach(item => {
    const produto = produtos.find(p => p.id === item.id);
    if (!produto) return;

    const quantidade = Number(item.quantidade) || 0;
    const extra = produto.categoria === "sopas" && item.extra ? 2 : 0;
    const valor = (produto.preco + extra) * quantidade;

    subtotal += valor;

    if (["frango", "carne", "peixe"].includes(produto.categoria)) {
      quantidadeMarmitas += quantidade;
      subtotalMarmitas += valor;
    }

    if (produto.categoria === "lanches") {
      subtotalLanches += valor;
      opcoesLanches.add(produto.id);
    }
  });

  const formaPagamento = paymentMethod.value.trim().toLowerCase();
  const pagamentoElegivel =
    formaPagamento === "pix" || formaPagamento === "dinheiro";

  const descontoMarmitas =
    pagamentoElegivel && quantidadeMarmitas >= 15
      ? subtotalMarmitas * 0.05
      : 0;

  const descontoLanches =
    pagamentoElegivel && opcoesLanches.size >= 4
      ? subtotalLanches * 0.05
      : 0;

  const desconto = descontoMarmitas + descontoLanches;

  return {
    subtotal,
    desconto,
    total: subtotal - desconto,
    quantidadeMarmitas,
    opcoesLanches: opcoesLanches.size
  };
}

/* ==========================================
   ATUALIZAR CARRINHO
   ========================================== */

function atualizarCarrinho() {
  const totalItens = carrinho.reduce(
    (soma, item) => soma + item.quantidade,
    0
  );

  cartCount.textContent = totalItens;

  if (carrinho.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">Seu carrinho está vazio.</div>
    `;
  } else {
    cartItems.innerHTML = carrinho.map(item => {
      const produto = produtos.find(p => p.id === item.id);
      if (!produto) return "";

      const temExtra = produto.categoria === "sopas";

      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <strong>${produto.nome}</strong>
            <span>${moeda(produto.preco)} por opção</span>

            ${temExtra ? `
              <label style="display:block;margin-top:9px;font-size:11px;line-height:1.5">
                <input
                  class="extra-protein"
                  data-id="${produto.id}"
                  type="checkbox"
                  ${item.extra ? "checked" : ""}
                >
                + 100 g de proteína (${moeda(2)})
              </label>
            ` : ""}
          </div>

          <div class="cart-item-controls">
            <button type="button" data-action="menos" data-id="${produto.id}" aria-label="Diminuir quantidade">−</button>
            <span>${item.quantidade}</span>
            <button type="button" data-action="mais" data-id="${produto.id}" aria-label="Aumentar quantidade">+</button>
            <button type="button" class="remove-item" data-action="remover" data-id="${produto.id}" aria-label="Remover produto">✕</button>
          </div>
        </div>
      `;
    }).join("");
  }

  const valores = calcular();

  cartSubtotal.textContent = moeda(valores.subtotal);
  cartDiscount.textContent = `− ${moeda(valores.desconto)}`;
  cartTotal.textContent = moeda(valores.total);

  cartWarning.textContent =
    "Pedido sujeito à confirmação da Ellen. Quantidades, disponibilidade e entrega serão combinadas pelo WhatsApp.";

  checkout.disabled = carrinho.length === 0;
}

paymentMethod.addEventListener("change", atualizarCarrinho);

/* ==========================================
   DADOS DO CLIENTE E ENDEREÇO
   ========================================== */

deliveryType.addEventListener("change", () => {
  addressField.hidden = deliveryType.value !== "Entrega";
  customerError.hidden = true;
});

noNumber.addEventListener("change", () => {
  customerNumber.disabled = noNumber.checked;
  customerNumber.required = !noNumber.checked;

  if (noNumber.checked) {
    customerNumber.value = "";
  }
});

function mostrarErroCliente(mensagem, campo) {
  customerFields.open = true;
  customerError.textContent = mensagem;
  customerError.hidden = false;

  campo.focus();

  campo.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

/* ==========================================
   FINALIZAR PELO WHATSAPP
   ========================================== */

checkout.addEventListener("click", () => {
  if (carrinho.length === 0) return;

  const nome = customerName.value.trim();
  const recebimento = deliveryType.value;
  const rua = customerAddress.value.trim();

  const numero = noNumber.checked
    ? "Sem número"
    : customerNumber.value.trim();

  const complemento = customerComplement.value.trim();
  const bairro = customerNeighborhood.value.trim();
  const cidade = customerCity.value.trim();
  const referencia = customerReference.value.trim();
  const observacoes = customerNotes.value.trim();

  customerError.hidden = true;
  customerFields.open = true;

  if (!nome) {
    mostrarErroCliente("Informe seu nome para continuar.", customerName);
    return;
  }

  if (!recebimento) {
    mostrarErroCliente("Escolha entrega ou retirada.", deliveryType);
    return;
  }

  if (recebimento === "Entrega") {
    if (!rua) {
      mostrarErroCliente("Informe a rua ou avenida.", customerAddress);
      return;
    }

    if (!noNumber.checked && !numero) {
      mostrarErroCliente(
        "Informe o número ou marque que sua casa não tem número.",
        customerNumber
      );
      return;
    }

    if (!bairro) {
      mostrarErroCliente("Informe o bairro.", customerNeighborhood);
      return;
    }

    if (!cidade) {
      mostrarErroCliente("Informe a cidade.", customerCity);
      return;
    }
  }

  const enderecoCompleto = [
    `${rua}, ${numero}`,
    complemento ? `Complemento: ${complemento}` : "",
    `Bairro: ${bairro}`,
    cidade,
    referencia ? `Ponto de referência: ${referencia}` : ""
  ].filter(Boolean).join("\n");

  const valores = calcular();

  const pagamento =
    paymentMethod.options[paymentMethod.selectedIndex].text;

  const linhas = carrinho.map(item => {
    const produto = produtos.find(p => p.id === item.id);
    if (!produto) return "";

    const extra =
      produto.categoria === "sopas" && item.extra ? 2 : 0;

    const valor = (produto.preco + extra) * item.quantidade;

    return `• ${item.quantidade}x ${produto.nome}${
      extra ? " (+ 100 g de proteína)" : ""
    } — ${moeda(valor)}`;
  }).filter(Boolean);

  const mensagem = [
    "Olá, Ellen! Gostaria de fazer um pedido pelo site.",
    "",
    "*DADOS DO CLIENTE*",
    `Nome: ${nome}`,
    `Recebimento: ${recebimento}`,
    ...(recebimento === "Entrega"
      ? [`Endereço:\n${enderecoCompleto}`]
      : []),
    `Pagamento: ${pagamento}`,
    "",
    "*MEU PEDIDO*",
    ...linhas,
    "",
    `Subtotal: ${moeda(valores.subtotal)}`,
    `Desconto estimado: ${moeda(valores.desconto)}`,
    `*Total estimado: ${moeda(valores.total)}*`,
    "",
    `Observações: ${observacoes || "Nenhuma"}`,
    "",
    "Pode confirmar a disponibilidade, o valor final e os detalhes do pedido?"
  ].join("\n");

  const link =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank", "noopener,noreferrer");
});

/* ==========================================
   NOTIFICAÇÃO AO ADICIONAR PRODUTO
   ========================================== */

function mostrarNotificacao(nomeProduto) {
  let notificacao = document.getElementById("cartToast");

  if (!notificacao) {
    notificacao = document.createElement("div");
    notificacao.id = "cartToast";
    notificacao.className = "cart-toast";
    notificacao.setAttribute("role", "status");
    notificacao.setAttribute("aria-live", "polite");

    document.body.appendChild(notificacao);
  }

  clearTimeout(notificacaoTimer);

  notificacao.innerHTML = `
    <span class="cart-toast-icon">✓</span>
    <div>
      <strong>Adicionado ao carrinho!</strong>
      <p></p>
    </div>
  `;

  notificacao.querySelector("p").textContent =
    `${nomeProduto} foi adicionado ao seu carrinho.`;

  notificacao.classList.add("show");

  notificacaoTimer = setTimeout(() => {
    notificacao.classList.remove("show");
  }, 3000);
}

/* ==========================================
   INICIAR SITE
   ========================================== */

renderProdutos();
atualizarCarrinho();