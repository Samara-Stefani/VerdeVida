// VerdeVida Cosméticos - Lógica da Aplicação (E-commerce)

// Banco de Dados de Produtos (Mock)
// VerdeVida Cosméticos - Lógica da Aplicação (E-commerce)

// Banco de Dados de Produtos (Mock) - 100% integrado ao Azure Blob Storage
const PRODUCTS = [
  {
    id: 1,
    name: "Sérum Iluminador Botânico",
    price: 129.90,
    rating: 4.8,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/serum-iluminador.png",
    description: "Um sérum facial ultra-leve formulado com vitamina C estabilizada e ácido hialurônico botânico. Ilumina a pele, reduz manchas e hidrata profundamente de forma natural.",
    ingredients: "Extrato de Aloe Vera, Vitamina C (10%), Ácido Hialurônico Botânico, Extrato de Chá Verde, Óleo Essencial de Limão Siciliano.",
    usage: "Aplique de 3 a 5 gotas no rosto limpo e seco pela manhã e à noite. Massageie suavemente até a absorção total. Utilize sempre protetor solar durante o dia.",
    category: "skin-care",
    badges: ["Vegano", "Best-seller"]
  },
  {
    id: 2,
    name: "Bálsamo Regenerador Calêndula",
    price: 89.90,
    rating: 4.9,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/balsamo-regenerador.png",
    description: "Creme facial super nutritivo com óleo de calêndula e manteiga de karité pura. Acalma peles sensíveis, repara a barreira cutânea e promove hidratação por 24 horas.",
    ingredients: "Hidrolato de Calêndula, Manteiga de Karité Orgânica, Óleo de Semente de Uva, Extrato de Camomila, Vitamina E.",
    usage: "Espalhe uma pequena quantidade sobre o rosto e pescoço com movimentos ascendentes após o sérum. Ideal para uso noturno ou peles secas pela manhã.",
    category: "skin-care",
    badges: ["100% Orgânico"]
  },
  {
    id: 3,
    name: "Máscara Detox Alecrim & Argila",
    price: 74.90,
    rating: 4.7,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/mascara-detox.png",
    description: "Máscara de argila verde rica em minerais enriquecida com óleo essencial de alecrim e tea tree. Limpa profundamente os poros, controla a oleosidade excessiva e previne acnes.",
    ingredients: "Argila Verde Montmorilonita, Gel de Aloe Vera, Óleo Essencial de Alecrim, Óleo de Melaleuca (Tea Tree), Extrato de Pepino.",
    usage: "Aplique uma camada generosa no rosto limpo, evitando a área dos olhos. Deixe agir por 10 a 15 minutos (não deixe secar completamente) e remova com água morna. Use 1-2 vezes por semana.",
    category: "skin-care",
    badges: ["Vegano", "Detox"]
  },
  {
    id: 4,
    name: "Óleo de Rosa Mosqueta & Jojoba",
    price: 115.00,
    rating: 4.9,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/oleo-rosa-mosqueta.png",
    description: "Um blend luxuoso de óleos vegetais prensados a frio que regeneram a pele, reduzem linhas finas de expressão e combatem o envelhecimento precoce de forma suave.",
    ingredients: "Óleo de Rosa Mosqueta 100% Puro, Óleo de Jojoba Orgânico, Óleo de Argan, Óleo Essencial de Lavanda, Tocopherol (Vitamina E).",
    usage: "Massageie 2 a 3 gotas no rosto limpo e levemente úmido à noite, como último passo da sua rotina de cuidados faciais.",
    category: "skin-care",
    badges: ["Prensado a Frio"]
  },
  {
    id: 5,
    name: "Bruma Facial Aloe & Pepino",
    price: 59.90,
    rating: 4.6,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/bruma-facial.png",
    description: "Bruma refrescante e equilibrante que tonifica a pele e devolve o pH natural após a limpeza. Enriquecida com aloe vera, pepino e água de rosas orgânica.",
    ingredients: "Hidrolato de Rosas, Extrato de Pepino, Extrato de Aloe Vera, D-Pantenol (Pró-Vitamina B5), Gluconolactona.",
    usage: "Borrifar diretamente sobre a pele limpa do rosto e pescoço a uma distância de 20cm, ou aplicar com um disco de algodão. Pode ser usado ao longo do dia para refrescar.",
    category: "skin-care",
    badges: ["Livre de Álcool"]
  },
  {
    id: 6,
    name: "Barra Purificante Menta & Alecrim",
    price: 42.00,
    rating: 4.8,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/Barra.jpg",
    description: "Shampoo sólido natural concentrado, rende até 60 lavagens. Limpa suavemente sem ressecar, estimula o crescimento saudável e fortalece os fios. Zero embalagens plásticas!",
    ingredients: "Isetionato de Sódio (tensoativo do coco), Argila Verde, Óleo de Rícino, Óleo Essencial de Menta Piperita, Óleo Essencial de Alecrim.",
    usage: "Friccione a barra molhada nas mãos até espumar ou aplique diretamente no couro cabeludo molhado. Massageie suavemente e enxágue bem.",
    category: "hair-care",
    badges: ["Zero Plástico", "Vegano"]
  },
  {
    id: 7,
    name: "Manteiga Corporal Capim-Limão",
    price: 68.00,
    rating: 4.7,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/Manteiga.jpg",
    description: "Creme corporal altamente hidratante com aroma revigorante de capim-limão. Deixa a pele macia, aveludada e profundamente nutrida, sem toque pegajoso.",
    ingredients: "Óleo de Coco Orgânico, Manteiga de Cupuaçu, Extrato de Capim-Limão, Glicerina Vegetal, Óleo Essencial de Capim-Limão.",
    usage: "Aplique por todo o corpo, massageando suavemente até total absorção, de preferência após o banho com a pele ainda levemente úmida.",
    category: "body-care",
    badges: ["Aromaterapia"]
  },
  {
    id: 8,
    name: "Glow Esfoliante Açúcar & Café",
    price: 64.90,
    rating: 4.9,
    image: "https://stfatecdesafiod2026v3.blob.core.windows.net/assets-spa/esfoliante.jpg",
    description: "Esfoliante físico de açúcar de coco e grãos de café selecionados, infundidos com óleos vegetais. Remove células mortas, ativa a circulação e estimula a regeneração da pele.",
    ingredients: "Açúcar de Coco Orgânico, Café Arábica Moído, Óleo de Amêndoas Doces, Óleo de Coco, Extrato de Baunilha.",
    usage: "Durante o banho, aplique sobre a pele úmida com movimentos circulares e suaves. Enxágue apenas com água para manter a hidratação dos óleos naturais. Use 2 vezes por semana.",
    category: "body-care",
    badges: ["Biodegradável"]
  }
];

// Estado da Aplicação
let cart = [];
let selectedCategory = 'all';
let searchQuery = '';
let sortBy = 'popular';
const FREE_SHIPPING_THRESHOLD = 150.00;

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();
  renderProducts();
  setupEventListeners();
  updateCartUI();
});

// Salvar / Carregar do LocalStorage
function saveCartToLocalStorage() {
  localStorage.setItem('verdevida_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('verdevida_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Renderização dos Produtos
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  // Filtragem
  let filtered = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Ordenação
  if (sortBy === 'low-to-high') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-to-low') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'popular') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-slate-400 text-lg mb-2">Nenhum produto encontrado</p>
        <p class="text-sm text-slate-400">Tente buscar por termos diferentes ou selecione outra categoria.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-sage/5 transition-smooth flex flex-col h-full";
    
    // Badges HTML
    const badgesHtml = product.badges.map(b => 
      `<span class="bg-white/95 text-[10px] text-eucalyptus font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">${b}</span>`
    ).join(' ');

    // Estrelas HTML
    const starsHtml = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));

    card.innerHTML = `
      <div class="relative overflow-hidden aspect-[4/5] bg-mint">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
        <div class="absolute top-3 left-3 flex flex-wrap gap-1">
          ${badgesHtml}
        </div>
        <!-- Quick View Overlay Button -->
        <button onclick="openQuickView(${product.id})" class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 text-forest hover:bg-forest hover:text-white font-medium text-xs px-5 py-2.5 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth">
          Visualização Rápida
        </button>
      </div>
      <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center gap-1 mb-2 text-xs text-amber-500">
          <span class="font-medium">${product.rating}</span>
          <span class="tracking-widest text-[10px]">${starsHtml}</span>
        </div>
        <h3 class="font-serif text-lg text-forest mb-1 leading-snug group-hover:text-eucalyptus transition-colors">${product.name}</h3>
        <p class="text-xs text-slate-400 mb-4 line-clamp-2">${product.description}</p>
        <div class="mt-auto flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-400">Preço</span>
            <div class="font-semibold text-lg text-forest">R$ ${product.price.toFixed(2)}</div>
          </div>
          <button onclick="addToCart(${product.id})" class="bg-mint hover:bg-sage hover:text-white text-eucalyptus rounded-2xl p-3.5 transition-smooth shadow-sm" aria-label="Adicionar ao carrinho">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Configuração dos Listeners de Eventos
function setupEventListeners() {
  // Filtros de Categoria
  const filterBtns = document.querySelectorAll(".category-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("bg-sage", "text-white"));
      filterBtns.forEach(b => b.classList.add("bg-white", "text-forest"));
      
      const target = e.currentTarget;
      target.classList.remove("bg-white", "text-forest");
      target.classList.add("bg-sage", "text-white");
      
      selectedCategory = target.dataset.category;
      renderProducts();
    });
  });

  // Busca de Texto
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Ordenação
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      sortBy = e.target.value;
      renderProducts();
    });
  }

  // Controle da Gaveta do Carrinho
  const openCartBtn = document.getElementById("open-cart-btn");
  const closeCartBtn = document.getElementById("close-cart-btn");
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");

  if (openCartBtn && cartDrawer && cartOverlay) {
    openCartBtn.addEventListener("click", () => {
      cartDrawer.classList.remove("translate-x-full");
      cartOverlay.classList.remove("hidden");
      setTimeout(() => cartOverlay.classList.remove("opacity-0"), 10);
      document.body.style.overflow = "hidden"; // trava o scroll de trás
    });
  }

  const closeCart = () => {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add("translate-x-full");
      cartOverlay.classList.add("opacity-0");
      setTimeout(() => cartOverlay.classList.add("hidden"), 300);
      document.body.style.overflow = "";
    }
  };

  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Fecha modais com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCart();
      closeQuickView();
      closeCheckout();
    }
  });
}

// Funções do Carrinho
window.addToCart = function(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }

  saveCartToLocalStorage();
  updateCartUI();
  showToast(`${product.name} adicionado ao carrinho!`);

  // Abre a gaveta do carrinho automaticamente para dar feedback visual
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove("translate-x-full");
    cartOverlay.classList.remove("hidden");
    setTimeout(() => cartOverlay.classList.remove("opacity-0"), 10);
    document.body.style.overflow = "hidden";
  }
};

window.removeFromCart = function(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  saveCartToLocalStorage();
  updateCartUI();
  showToast("Item removido do carrinho.");
};

window.updateQuantity = function(productId, delta) {
  const item = cart.find(item => item.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToLocalStorage();
    updateCartUI();
  }
};

function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartBadge = document.getElementById("cart-badge");
  const cartSubtotal = document.getElementById("cart-subtotal");
  const cartTotal = document.getElementById("cart-total");
  const freeShippingProgress = document.getElementById("free-shipping-progress");
  const freeShippingMessage = document.getElementById("free-shipping-message");
  
  // Total de itens
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalItems;
    if (totalItems > 0) {
      cartBadge.classList.remove("scale-0");
      cartBadge.classList.add("scale-100");
    } else {
      cartBadge.classList.remove("scale-100");
      cartBadge.classList.add("scale-0");
    }
  }

  // Subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  if (cartSubtotal) cartSubtotal.textContent = `R$ ${subtotal.toFixed(2)}`;
  if (cartTotal) cartTotal.textContent = `R$ ${subtotal.toFixed(2)}`;

  // Progresso de Frete Grátis
  if (freeShippingProgress && freeShippingMessage) {
    if (subtotal === 0) {
      freeShippingProgress.style.width = "0%";
      freeShippingMessage.innerHTML = `Adicione mais <strong>R$ ${FREE_SHIPPING_THRESHOLD.toFixed(2)}</strong> para ganhar <strong>Frete Grátis</strong>!`;
    } else if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      freeShippingProgress.style.width = "100%";
      freeShippingMessage.innerHTML = `<span class="text-eucalyptus font-semibold">Parabéns! Você ganhou Frete Grátis! 🎉</span>`;
    } else {
      const needed = FREE_SHIPPING_THRESHOLD - subtotal;
      const percentage = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
      freeShippingProgress.style.width = `${percentage}%`;
      freeShippingMessage.innerHTML = `Falta apenas <strong>R$ ${needed.toFixed(2)}</strong> para garantir seu <strong>Frete Grátis</strong>!`;
    }
  }

  // Renderizar itens na gaveta
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="flex flex-col items-center justify-center py-20 text-center px-4">
        <div class="bg-mint p-4 rounded-full text-eucalyptus mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <p class="text-forest font-serif text-lg mb-1">Seu carrinho está vazio</p>
        <p class="text-xs text-slate-400 max-w-[200px] mb-6">Que tal adicionar produtos naturais à sua rotina de autocuidado?</p>
        <button onclick="closeCartDrawer()" class="bg-sage hover:bg-eucalyptus text-white text-xs font-semibold px-6 py-3 rounded-full shadow-md transition-smooth">
          Continuar Comprando
        </button>
      </div>
    `;
    // Desabilita botão de checkout se vazio
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  // Habilita checkout
  const checkoutBtn = document.getElementById("checkout-btn");
  if (checkoutBtn) checkoutBtn.disabled = false;

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl">
      <div class="w-20 h-20 bg-mint rounded-xl overflow-hidden flex-shrink-0">
        <img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col justify-between flex-grow">
        <div>
          <div class="flex justify-between items-start gap-1">
            <h4 class="font-serif text-sm font-semibold text-forest leading-snug line-clamp-1">${item.product.name}</h4>
            <button onclick="removeFromCart(${item.product.id})" class="text-slate-400 hover:text-rose-500 p-0.5 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold text-[10px]">${item.product.category === 'skin-care' ? 'Skin Care' : item.product.category === 'hair-care' ? 'Cabelo' : 'Corpo'}</span>
        </div>
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border border-slate-100 rounded-xl bg-slate-50/50 p-1">
            <button onclick="updateQuantity(${item.product.id}, -1)" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-forest hover:bg-white rounded-lg transition-all">-</button>
            <span class="w-8 text-center text-xs font-semibold text-forest">${item.quantity}</span>
            <button onclick="updateQuantity(${item.product.id}, 1)" class="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-forest hover:bg-white rounded-lg transition-all">+</button>
          </div>
          <div class="font-semibold text-sm text-forest">R$ ${(item.product.price * item.quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

window.closeCartDrawer = function() {
  const cartDrawer = document.getElementById("cart-drawer");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add("translate-x-full");
    cartOverlay.classList.add("opacity-0");
    setTimeout(() => cartOverlay.classList.add("hidden"), 300);
    document.body.style.overflow = "";
  }
};

// Modal de Quick View (Visualização Rápida)
window.openQuickView = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quick-view-modal");
  const container = document.getElementById("quick-view-content");
  if (!modal || !container) return;

  const starsHtml = '★'.repeat(Math.round(product.rating)) + '☆'.repeat(5 - Math.round(product.rating));
  const badgesHtml = product.badges.map(b => 
    `<span class="bg-mint text-eucalyptus text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">${b}</span>`
  ).join(' ');

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[85vh] overflow-y-auto md:overflow-hidden">
      <!-- Imagem -->
      <div class="relative bg-mint rounded-2xl overflow-hidden aspect-square md:aspect-auto md:h-full min-h-[300px]">
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
      </div>
      <!-- Detalhes -->
      <div class="flex flex-col justify-between py-1">
        <div>
          <div class="flex flex-wrap gap-1.5 mb-3">
            ${badgesHtml}
          </div>
          <h2 class="font-serif text-2xl md:text-3xl text-forest mb-2">${product.name}</h2>
          <div class="flex items-center gap-2 mb-4 text-xs text-amber-500">
            <span class="font-semibold text-sm">${product.rating}</span>
            <span class="tracking-widest">${starsHtml}</span>
            <span class="text-slate-400 ml-1">(48 avaliações)</span>
          </div>
          <div class="text-2xl font-bold text-forest mb-5">R$ ${product.price.toFixed(2)}</div>
          
          <!-- Tabs Rápidas (Descrição, Ingredientes, Uso) -->
          <div class="border-b border-slate-100 mb-4 flex gap-6 text-sm">
            <button onclick="switchModalTab(event, 'qv-desc')" class="qv-tab-btn border-b-2 border-sage text-forest font-semibold pb-2 transition-all">Descrição</button>
            <button onclick="switchModalTab(event, 'qv-ingredients')" class="qv-tab-btn border-b-2 border-transparent text-slate-400 hover:text-forest pb-2 transition-all">Ingredientes</button>
            <button onclick="switchModalTab(event, 'qv-usage')" class="qv-tab-btn border-b-2 border-transparent text-slate-400 hover:text-forest pb-2 transition-all">Como Usar</button>
          </div>
          
          <!-- Conteúdo Tabs -->
          <div id="qv-desc" class="qv-tab-content text-sm text-slate-500 leading-relaxed mb-6">
            ${product.description}
          </div>
          <div id="qv-ingredients" class="qv-tab-content text-sm text-slate-500 leading-relaxed mb-6 hidden">
            ${product.ingredients}
          </div>
          <div id="qv-usage" class="qv-tab-content text-sm text-slate-500 leading-relaxed mb-6 hidden">
            ${product.usage}
          </div>
        </div>

        <!-- Ações -->
        <div class="mt-auto">
          <div class="flex gap-4 items-center mb-4">
            <div class="flex items-center border border-slate-200 rounded-2xl bg-slate-50 p-1">
              <button onclick="adjustQuickViewQty(-1)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-forest hover:bg-white rounded-xl transition-all font-semibold">-</button>
              <span id="qv-qty" class="w-10 text-center text-sm font-semibold text-forest">1</span>
              <button onclick="adjustQuickViewQty(1)" class="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-forest hover:bg-white rounded-xl transition-all font-semibold">+</button>
            </div>
            <button onclick="addQuickViewToCart(${product.id})" class="flex-grow btn-primary bg-sage hover:bg-eucalyptus text-white py-3.5 px-6 rounded-2xl font-semibold shadow-md transition-smooth flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Adicionar ao Carrinho
            </button>
          </div>
          <div class="flex items-center gap-6 justify-center md:justify-start text-xs text-slate-400">
            <span class="flex items-center gap-1">
              <svg class="w-4.5 h-4.5 text-eucalyptus" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Fórmula Segura
            </span>
            <span class="flex items-center gap-1">
              <svg class="w-4.5 h-4.5 text-eucalyptus" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H17"></path></svg>
              Devolução Grátis
            </span>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeQuickView = function() {
  const modal = document.getElementById("quick-view-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    if (!document.getElementById("cart-drawer").classList.contains("translate-x-full")) {
      // mantém travado se o carrinho ainda estiver aberto
    } else {
      document.body.style.overflow = "";
    }
  }
};

window.switchModalTab = function(event, tabId) {
  const modal = document.getElementById("quick-view-modal");
  if (!modal) return;

  // Desativa tabs anteriores
  const tabs = modal.querySelectorAll(".qv-tab-btn");
  tabs.forEach(tab => {
    tab.classList.remove("border-forest", "text-forest", "font-semibold");
    tab.classList.add("border-transparent", "text-slate-400");
  });

  // Ativa tab atual
  event.currentTarget.classList.remove("border-transparent", "text-slate-400");
  event.currentTarget.classList.add("border-sage", "text-forest", "font-semibold");

  // Esconde conteúdos
  const contents = modal.querySelectorAll(".qv-tab-content");
  contents.forEach(content => content.classList.add("hidden"));

  // Mostra conteúdo atual
  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.remove("hidden");
};

// Funções de quantidade na visualização rápida
let currentQuickViewQty = 1;
window.adjustQuickViewQty = function(delta) {
  currentQuickViewQty += delta;
  if (currentQuickViewQty < 1) currentQuickViewQty = 1;
  const qtySpan = document.getElementById("qv-qty");
  if (qtySpan) qtySpan.textContent = currentQuickViewQty;
};

window.addQuickViewToCart = function(productId) {
  addToCart(productId, currentQuickViewQty);
  currentQuickViewQty = 1; // reseta
  closeQuickView();
};

// Checkout Simulado
window.openCheckout = function() {
  if (cart.length === 0) return;

  closeCartDrawer();
  
  const modal = document.getElementById("checkout-modal");
  const container = document.getElementById("checkout-summary");
  if (!modal || !container) return;

  // Renderizar o resumo do checkout
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0.00 : 15.00;
  const total = subtotal + shipping;

  container.innerHTML = `
    <div class="space-y-4 mb-6">
      <div class="max-h-[220px] overflow-y-auto space-y-3 pr-1">
        ${cart.map(item => `
          <div class="flex justify-between items-center text-sm">
            <span class="text-slate-500 line-clamp-1 flex-grow pr-4">${item.product.name} <strong class="text-forest">x${item.quantity}</strong></span>
            <span class="font-semibold text-forest flex-shrink-0">R$ ${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        `).join('')}
      </div>
      <div class="border-t border-slate-100 pt-4 space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-slate-400">Subtotal</span>
          <span class="font-semibold text-forest">R$ ${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-slate-400">Frete</span>
          <span class="font-semibold text-forest">${shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}</span>
        </div>
        <div class="flex justify-between text-base border-t border-slate-100 pt-3 font-bold text-forest">
          <span>Total</span>
          <span class="text-eucalyptus">R$ ${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
};

window.closeCheckout = function() {
  const modal = document.getElementById("checkout-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
  }
};

window.submitCheckout = function(event) {
  event.preventDefault();

  const checkoutForm = document.getElementById("checkout-form-element");
  const loading = document.getElementById("checkout-loading");
  const success = document.getElementById("checkout-success");
  
  if (!checkoutForm || !loading || !success) return;

  // Esconder formulário e mostrar carregamento
  checkoutForm.classList.add("hidden");
  loading.classList.remove("hidden");
  loading.classList.add("flex");

  // Simular processamento
  setTimeout(() => {
    loading.classList.add("hidden");
    loading.classList.remove("flex");
    success.classList.remove("hidden");
    success.classList.add("flex");
    
    // Gerar número de pedido aleatório
    const orderNum = Math.floor(100000 + Math.random() * 900000);
    const orderNumSpan = document.getElementById("order-number");
    if (orderNumSpan) orderNumSpan.textContent = `#VV-${orderNum}`;

    // Limpar o carrinho
    cart = [];
    saveCartToLocalStorage();
    updateCartUI();
  }, 2000);
};

window.finishOrder = function() {
  closeCheckout();
  // Recarrega layout inicial
  const checkoutForm = document.getElementById("checkout-form-element");
  const success = document.getElementById("checkout-success");
  if (checkoutForm && success) {
    checkoutForm.classList.remove("hidden");
    success.classList.add("hidden");
    success.classList.remove("flex");
    checkoutForm.reset();
  }
};

// Notificações Toast
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed bottom-5 right-5 z-[100] flex flex-col gap-2 max-w-sm pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "bg-forest/95 text-white text-xs font-semibold px-5 py-4 rounded-2xl shadow-xl backdrop-blur-md border border-white/10 flex items-center gap-3 animate-scale-up pointer-events-auto cursor-pointer";
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>${message}</span>
  `;

  // Fecha ao clicar
  toast.addEventListener("click", () => {
    toast.style.opacity = "0";
    toast.style.transform = "scale(0.95)";
    setTimeout(() => toast.remove(), 200);
  });

  container.appendChild(toast);

  // Auto-remove
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = "0";
      toast.style.transform = "scale(0.95)";
      setTimeout(() => toast.remove(), 200);
    }
  }, 4000);
}
