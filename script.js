/**
 * BLEND — Luxury Botanical Menu Card Application Logic
 * 3D Page Turns, Integrated Pricing, Event Inquiry Cart, Search & Book Spread
 */

// Complete 5-Page Menu Dataset with Integrated Pricing & Notes
const menuData = [
  {
    id: "signatures",
    tabTitle: "Signatures",
    brandInitial: "B",
    brandSub: ". B L E N D .",
    mainTitle: "MENU",
    tagline: ". HERE'S TO GOOD TIMES .",
    bottomBrand: "", // 5th item is . B L E N D .
    footerText: "SIGNATURE DRINKS . CATERING . EVENTS",
    items: [
      {
        name: "Spanish",
        numericPrice: "26",
        currency: "SAR",
        desc: "Rich espresso folded with creamy condensed milk & silky microfoam",
        casingClass: "case-as-written"
      },
      {
        name: "salted caramel",
        numericPrice: "28",
        currency: "SAR",
        desc: "House-crafted buttery caramel, double espresso & Maldon sea salt flakes",
        casingClass: "case-as-written"
      },
      {
        name: "White moka",
        numericPrice: "28",
        currency: "SAR",
        desc: "Velvety melted white chocolate, espresso & steamed textured milk",
        casingClass: "case-as-written"
      },
      {
        name: "Hacienda",
        numericPrice: "32",
        currency: "SAR",
        desc: "Single-estate Hacienda Geisha beans with delicate floral & peach notes",
        casingClass: "case-as-written"
      },
      {
        name: ". B L E N D .",
        numericPrice: "30",
        currency: "SAR",
        desc: "The house secret reserve iced blend with roasted hazelnut cream",
        casingClass: "case-as-written"
      }
    ]
  },
  {
    id: "coffee",
    tabTitle: "Coffee",
    brandInitial: "B",
    brandSub: ". B L E N D .",
    mainTitle: "COFFEE",
    tagline: ". FRESHLY BREWED EXCELLENCE .",
    bottomBrand: ". B L E N D .",
    footerText: "100% ARABICA . SINGLE ORIGIN . ROASTED",
    items: [
      {
        name: "Flat White",
        numericPrice: "22",
        currency: "SAR",
        desc: "Double ristretto with micro-textured velvety whole milk",
        casingClass: "case-as-written"
      },
      {
        name: "Cortado",
        numericPrice: "20",
        currency: "SAR",
        desc: "Equal parts intense espresso and warm silky steamed milk",
        casingClass: "case-as-written"
      },
      {
        name: "V60 Specialty Drip",
        numericPrice: "26",
        currency: "SAR",
        desc: "Hand-poured single origin Ethiopian or Colombian roast",
        casingClass: "case-as-written"
      },
      {
        name: "Cold Brew",
        numericPrice: "24",
        currency: "SAR",
        desc: "Slow steeped for 18 hours with subtle chocolate & dark fruit notes",
        casingClass: "case-as-written"
      },
      {
        name: "Americano",
        numericPrice: "18",
        currency: "SAR",
        desc: "Double shot espresso elongated over hot or iced filtered water",
        casingClass: "case-as-written"
      }
    ]
  },
  {
    id: "refreshers",
    tabTitle: "Refreshers",
    brandInitial: "B",
    brandSub: ". B L E N D .",
    mainTitle: "REFRESH",
    tagline: ". PURE SIP OF JOY .",
    bottomBrand: ". B L E N D .",
    footerText: "HANDCRAFTED . ICED . BOTANICALS",
    items: [
      {
        name: "Ceremonial Matcha",
        numericPrice: "28",
        currency: "SAR",
        desc: "Stone-ground Uji matcha whisked with oat or almond milk",
        casingClass: "case-as-written"
      },
      {
        name: "Vanilla Cloud Matcha",
        numericPrice: "30",
        currency: "SAR",
        desc: "Cold matcha layered over Madagascar vanilla sweet cream",
        casingClass: "case-as-written"
      },
      {
        name: "Hibiscus Bloom",
        numericPrice: "24",
        currency: "SAR",
        desc: "Brewed whole hibiscus flowers, fresh mint & pomegranate fizz",
        casingClass: "case-as-written"
      },
      {
        name: "Passion Cold Brew",
        numericPrice: "27",
        currency: "SAR",
        desc: "Signature cold brew infused with vibrant tropical passion fruit",
        casingClass: "case-as-written"
      },
      {
        name: "Peach Sparkler",
        numericPrice: "25",
        currency: "SAR",
        desc: "Artisan white peach puree with botanical sparkling soda",
        casingClass: "case-as-written"
      }
    ]
  },
  {
    id: "sweets",
    tabTitle: "Sweets",
    brandInitial: "B",
    brandSub: ". B L E N D .",
    mainTitle: "SWEETS",
    tagline: ". FRESHLY BAKED DAILY .",
    bottomBrand: ". B L E N D .",
    footerText: "PURE BUTTER . BAKED IN-HOUSE . CRAFT",
    items: [
      {
        name: "Pistachio Babka",
        numericPrice: "26",
        currency: "SAR",
        desc: "Braided brioche ribboned with rich Sicilian pistachio cream",
        casingClass: "case-as-written"
      },
      {
        name: "San Sebastián",
        numericPrice: "32",
        currency: "SAR",
        desc: "Basque burnt cheesecake with creamy molten center",
        casingClass: "case-as-written"
      },
      {
        name: "Salted Choc Cookie",
        numericPrice: "16",
        currency: "SAR",
        desc: "Warm dark Belgian chocolate chunks sprinkled with sea salt",
        casingClass: "case-as-written"
      },
      {
        name: "Almond Croissant",
        numericPrice: "22",
        currency: "SAR",
        desc: "Flaky all-butter croissant filled with toasted almond frangipane",
        casingClass: "case-as-written"
      },
      {
        name: "Pecan Honey Tart",
        numericPrice: "28",
        currency: "SAR",
        desc: "Caramelized Texas pecans on crisp buttery shortcrust",
        casingClass: "case-as-written"
      }
    ]
  },
  {
    id: "catering",
    tabTitle: "Catering",
    brandInitial: "B",
    brandSub: ". B L E N D .",
    mainTitle: "CATERING",
    tagline: ". ELEVATE YOUR GATHERINGS .",
    bottomBrand: ". B L E N D .",
    footerText: "WEDDINGS . CORPORATE . PRIVATE PARTIES",
    items: [
      {
        name: "Private Coffee Bar",
        numericPrice: "1,800",
        currency: "SAR",
        desc: "Custom aesthetic wooden cart, dual group machine & barista team",
        casingClass: "case-as-written"
      },
      {
        name: "Signature Drink Bar",
        numericPrice: "Custom",
        currency: "Quote",
        desc: "Live station pouring Spanish, Salted Caramel & White Moka",
        casingClass: "case-as-written"
      },
      {
        name: "Custom Brand Cups",
        numericPrice: "Included",
        currency: "Per Event",
        desc: "Personalized brand logos or wedding couple monograms",
        casingClass: "case-as-written"
      },
      {
        name: "Matcha & Mocktail Cart",
        numericPrice: "Add-On",
        currency: "Station",
        desc: "Fresh botanical iced sparklers & ceremonial whisked matcha",
        casingClass: "case-as-written"
      },
      {
        name: "Private Barista On-Site",
        numericPrice: "Full",
        currency: "Service",
        desc: "Turnkey beverage hospitality, glassware & beans supplied",
        casingClass: "case-as-written"
      }
    ]
  }
];

// Inlined Botanical Vector SVG for Crisp Print & Instant Load
const BOTANICAL_FRAME_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 680" width="100%" height="100%" preserveAspectRatio="none">
    <g stroke="#93988C" stroke-width="0.85" fill="none" opacity="0.75">
      <line x1="130" y1="28" x2="205" y2="28" />
      <line x1="235" y1="28" x2="310" y2="28" />
      <line x1="130" y1="652" x2="205" y2="652" />
      <line x1="235" y1="652" x2="310" y2="652" />
      <line x1="32" y1="135" x2="32" y2="315" />
      <line x1="32" y1="365" x2="32" y2="545" />
      <line x1="408" y1="135" x2="408" y2="315" />
      <line x1="408" y1="365" x2="408" y2="545" />
      <path d="M 130 28 C 75 28 32 71 32 135" />
      <path d="M 310 28 C 365 28 408 71 408 135" />
      <path d="M 32 545 C 32 609 75 652 130 652" />
      <path d="M 408 545 C 408 609 365 652 310 652" />
    </g>
    <g transform="translate(220, 28)">
      <circle cx="0" cy="0" r="1.8" fill="#6A7263" />
      <circle cx="-12" cy="0" r="1.2" fill="#6A7263" />
      <circle cx="12" cy="0" r="1.2" fill="#6A7263" />
      <path d="M -8 0 Q 0 -4 8 0" fill="none" stroke="#6A7263" stroke-width="0.75" />
    </g>
    <g transform="translate(220, 652)">
      <circle cx="0" cy="0" r="1.8" fill="#6A7263" />
      <circle cx="-12" cy="0" r="1.2" fill="#6A7263" />
      <circle cx="12" cy="0" r="1.2" fill="#6A7263" />
      <path d="M -8 0 Q 0 4 8 0" fill="none" stroke="#6A7263" stroke-width="0.75" />
    </g>
    <g id="corner-botanical">
      <path d="M 132 28 C 78 28 32 74 32 138" fill="none" stroke="#636A5D" stroke-width="1.2" stroke-linecap="round" />
      <path d="M 62 48 C 50 36 38 42 26 50" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />
      <path d="M 56 68 C 70 82 86 96 104 102" fill="none" stroke="#636A5D" stroke-width="0.85" stroke-linecap="round" />
      <path d="M 100 29 C 114 27 128 32 142 30" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />
      <path d="M 32 100 C 30 114 35 128 33 144" fill="none" stroke="#636A5D" stroke-width="0.8" stroke-linecap="round" />
      <path d="M 128.0 28.0 C 122.3 23.8, 116.3 25.7, 112.8 29.4 C 116.9 32.3, 123.1 33.2, 128.0 28.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 112.0 30.0 C 105.4 29.3, 101.6 33.7, 100.5 38.3 C 105.1 38.7, 110.5 36.6, 112.0 30.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 92.0 36.0 C 85.1 37.1, 82.2 42.8, 82.3 47.9 C 87.2 47.0, 92.2 43.1, 92.0 36.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 74.0 46.0 C 66.8 49.5, 65.2 56.6, 66.5 62.1 C 71.7 59.5, 75.9 53.8, 74.0 46.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 58.0 60.0 C 52.0 65.8, 53.0 73.1, 56.3 78.0 C 60.6 73.8, 62.9 66.8, 58.0 60.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 46.0 78.0 C 42.4 85.2, 45.7 91.5, 50.4 94.7 C 52.8 89.5, 52.6 82.5, 46.0 78.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 38.0 98.0 C 36.5 106.2, 41.5 111.7, 47.0 113.8 C 48.0 108.0, 45.8 100.9, 38.0 98.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 33.0 120.0 C 32.9 127.9, 38.5 132.2, 44.0 133.2 C 44.0 127.6, 40.8 121.3, 33.0 120.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 32.0 140.0 C 33.0 147.1, 38.5 150.0, 43.6 149.9 C 42.8 144.9, 39.1 139.9, 32.0 140.0 Z" fill="#727A6B" opacity="0.82" />
      <circle cx="50" cy="36" r="1.6" fill="#586052" />
      <circle cx="36" cy="50" r="1.6" fill="#586052" />
      <circle cx="98" cy="44" r="1.6" fill="#586052" />
      <circle cx="108" cy="106" r="1.6" fill="#586052" />
      <circle cx="32" cy="148" r="1.6" fill="#586052" />
    </g>
    <g id="side-accent">
      <circle cx="32" cy="328" r="1.5" fill="#6A7263" />
      <circle cx="32" cy="340" r="2.1" fill="#5A6253" />
      <circle cx="32" cy="352" r="1.5" fill="#6A7263" />
      <path d="M 32 340 C 44 336 56 334 68 340" fill="none" stroke="#636A5D" stroke-width="1.0" />
      <path d="M 42.0 336.0 C 47.9 338.4, 52.4 335.4, 54.5 331.4 C 50.3 329.7, 44.8 330.3, 42.0 336.0 Z" fill="#727A6B" opacity="0.82" />
      <path d="M 48.0 342.0 C 50.5 348.3, 56.3 349.5, 60.8 348.0 C 58.9 343.6, 54.4 340.0, 48.0 342.0 Z" fill="#727A6B" opacity="0.82" />
      <circle cx="70" cy="340" r="1.6" fill="#586052" />
    </g>
    <use href="#corner-botanical" />
    <use href="#corner-botanical" transform="translate(440, 0) scale(-1, 1)" />
    <use href="#corner-botanical" transform="translate(0, 680) scale(1, -1)" />
    <use href="#corner-botanical" transform="translate(440, 680) scale(-1, -1)" />
    <use href="#side-accent" />
    <use href="#side-accent" transform="translate(440, 0) scale(-1, 1)" />
</svg>`;

// App State
let currentPage = 0;
let isEditMode = false;
let isBookSpread = false;
let cartItems = []; // Array of { name, priceNum, qty, desc }

// DOM Elements
const activeCardContent = document.getElementById("activeCardContent");
const cardFrameSvg = document.getElementById("cardFrameSvg");
const cardSheen = document.getElementById("cardSheen");
const activeMenuCard = document.getElementById("activeMenuCard");
const bookSpreadRightCard = document.getElementById("bookSpreadRightCard");
const bookRightFrameSvg = document.getElementById("bookRightFrameSvg");
const bookRightCardContent = document.getElementById("bookRightCardContent");

// Navigation Elements
const categoryTabs = document.getElementById("categoryTabs");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dockCurrentPage = document.getElementById("dockCurrentPage");
const dockPageName = document.getElementById("dockPageName");
const dockThumbnails = document.getElementById("dockThumbnails");

// Header Tools
const searchToggleBtn = document.getElementById("searchToggleBtn");
const searchPanel = document.getElementById("searchPanel");
const menuSearchInput = document.getElementById("menuSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const searchResultsList = document.getElementById("searchResultsList");
const bookViewToggleBtn = document.getElementById("bookViewToggleBtn");
const toggleEditBtn = document.getElementById("toggleEditBtn");
const editBtnLabel = document.getElementById("editBtnLabel");
const exportPngBtn = document.getElementById("exportPngBtn");
const printBtn = document.getElementById("printBtn");

// Cart Elements
const openCartBtn = document.getElementById("openCartBtn");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartTotalSum = document.getElementById("cartTotalSum");
const cartDrawerOverlay = document.getElementById("cartDrawerOverlay");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const drawerTotalAmount = document.getElementById("drawerTotalAmount");
const drawerSendWhatsAppBtn = document.getElementById("drawerSendWhatsAppBtn");
const toastPill = document.getElementById("toastPill");

// Modal Elements
const itemModal = document.getElementById("itemModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDesc = document.getElementById("modalDesc");
const modalAddCartBtn = document.getElementById("modalAddCartBtn");
const modalWhatsAppBtn = document.getElementById("modalWhatsAppBtn");
let selectedModalItem = null;

// Initialize App
function initApp() {
  cardFrameSvg.innerHTML = BOTANICAL_FRAME_SVG;
  bookRightFrameSvg.innerHTML = BOTANICAL_FRAME_SVG;

  renderActivePage();
  setupEventListeners();
  renderAllBoardsGallery();
  updateCartUI();
}

// Render the active card with 3D animation
function renderActivePage(direction = 'none') {
  const page = menuData[currentPage];
  if (!page) return;

  // Trigger 3D flip animation
  activeMenuCard.classList.remove("card-flip-next", "card-flip-prev");
  cardSheen.classList.remove("sweep-sheen-anim");
  void activeMenuCard.offsetWidth; // force reflow

  if (direction === 'next') {
    activeMenuCard.classList.add("card-flip-next");
    cardSheen.classList.add("sweep-sheen-anim");
  } else if (direction === 'prev') {
    activeMenuCard.classList.add("card-flip-prev");
    cardSheen.classList.add("sweep-sheen-anim");
  }

  // Populate card inner content
  activeCardContent.innerHTML = generateCardInnerHtml(page, isEditMode);
  attachItemClickEvents(activeCardContent);

  // If book spread mode is active, render the second card (next page)
  if (isBookSpread) {
    const nextIdx = (currentPage + 1) % menuData.length;
    const nextPage = menuData[nextIdx];
    bookRightCardContent.innerHTML = generateCardInnerHtml(nextPage, isEditMode);
    attachItemClickEvents(bookRightCardContent);
  }

  // Update Category Tabs
  const tabs = categoryTabs.querySelectorAll(".cat-tab");
  tabs.forEach((tab) => {
    const pIdx = tab.getAttribute("data-page");
    if (pIdx === String(currentPage)) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  // Update Dock Counter & Name
  dockCurrentPage.textContent = `0${currentPage + 1}`;
  dockPageName.textContent = page.tabTitle;

  // Update Dock Thumbnails
  const thumbNodes = dockThumbnails.querySelectorAll(".thumb-node");
  thumbNodes.forEach((node) => {
    const nodeIdx = parseInt(node.getAttribute("data-index"), 10);
    node.classList.toggle("active", nodeIdx === currentPage);
  });

  // Arrows visibility
  prevBtn.style.opacity = currentPage === 0 ? "0.4" : "1";
  nextBtn.style.opacity = currentPage === menuData.length - 1 ? "0.4" : "1";
}

// Generate Card Inner HTML matching Canva fidelity with integrated prices
function generateCardInnerHtml(page, editable) {
  const editAttr = editable ? 'contenteditable="true" spellcheck="false"' : '';

  let itemsHtml = page.items.map((item, idx) => {
    const dividerHtml = idx < page.items.length - 1 ? `
      <div class="item-divider">
        <div class="line"></div>
        <span class="heart">&#9825;</span>
        <div class="line"></div>
      </div>
    ` : '';

    return `
      <div class="menu-item-row" data-name="${item.name}" data-price="${item.numericPrice}" data-currency="${item.currency || 'SAR'}" data-desc="${item.desc}">
        <div class="item-primary-line">
          <span class="item-name ${item.casingClass || ''}" ${editAttr}>${item.name}</span>
          <span class="item-price-tag" ${editAttr}>
            ${item.numericPrice} <span class="sar-curr">${item.currency || 'SAR'}</span>
          </span>
        </div>
        <div class="item-tasting-notes" ${editAttr}>${item.desc}</div>
      </div>
      ${dividerHtml}
    `;
  }).join("");

  return `
    <!-- Top Brand Header -->
    <div class="card-brand-header">
      <div class="brand-initial" ${editAttr}>${page.brandInitial}</div>
      <div class="brand-subtext" ${editAttr}>${page.brandSub}</div>
      <div class="mini-heart-divider">
        <div class="line"></div>
        <span class="heart-icon">&#9825;</span>
        <div class="line"></div>
      </div>
      <h1 class="card-main-title" ${editAttr}>${page.mainTitle}</h1>
      <div class="card-tagline" ${editAttr}>${page.tagline}</div>
    </div>

    <!-- Items List with Price alongside name -->
    <div class="card-items-list">
      ${itemsHtml}
    </div>

    <!-- Bottom Brand Seal & Subtitle -->
    <div class="card-bottom-footer">
      ${page.bottomBrand ? `<div class="bottom-brand-seal" ${editAttr}>${page.bottomBrand}</div>` : ''}
      <div class="bottom-tagline" ${editAttr}>${page.footerText}</div>
    </div>
  `;
}

// Attach Item Click Handlers
function attachItemClickEvents(container) {
  const rows = container.querySelectorAll(".menu-item-row");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      if (isEditMode) return;
      const name = row.getAttribute("data-name");
      const price = row.getAttribute("data-price");
      const currency = row.getAttribute("data-currency");
      const desc = row.getAttribute("data-desc");

      selectedModalItem = { name, price, currency, desc };
      openItemModal(selectedModalItem);
    });
  });
}

// Modal Details & Add to Selection
function openItemModal(item) {
  modalTitle.textContent = item.name;
  modalPrice.textContent = `${item.price} ${item.currency}`;
  modalDesc.textContent = item.desc;

  const msg = encodeURIComponent(`مرحباً BLEND، أود الاستفسار عن مشروب/خدمة "${item.name}" من المنيو.`);
  modalWhatsAppBtn.href = `https://wa.me/?text=${msg}`;

  itemModal.classList.add("open");
}

function closeItemModal() {
  itemModal.classList.remove("open");
}

// Quick Add to Event Selection
function addToCart(name, price, currency) {
  const existing = cartItems.find((i) => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({ name, price, currency, qty: 1 });
  }
  updateCartUI();
  showToast(`Added "${name}" to your Event Selection`);
}

function updateCartUI() {
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  let totalSum = 0;

  cartItemsList.innerHTML = "";

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = `
      <div class="empty-cart-msg">
        <p>No items selected yet.</p>
        <small>Click on any drink or catering item to add it to your event proposal!</small>
      </div>
    `;
    cartBadgeCount.textContent = "0";
    cartTotalSum.textContent = "0 SAR";
    drawerTotalAmount.textContent = "0 SAR";
    return;
  }

  cartItems.forEach((item) => {
    const numPrice = parseFloat(item.price.replace(/,/g, "")) || 0;
    const itemTotal = numPrice * item.qty;
    totalSum += itemTotal;

    const row = document.createElement("div");
    row.className = "cart-item-row";
    row.innerHTML = `
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price} ${item.currency}</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" data-action="minus" data-name="${item.name}">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-action="plus" data-name="${item.name}">+</button>
      </div>
    `;
    cartItemsList.appendChild(row);
  });

  cartBadgeCount.textContent = String(totalCount);
  cartTotalSum.textContent = `${totalSum.toLocaleString()} SAR`;
  drawerTotalAmount.textContent = `${totalSum.toLocaleString()} SAR`;

  // Pre-fill WhatsApp message
  let waText = `مرحباً BLEND! أود الاستفسار وطلب التالي لمناسبتي من المنيو:\n\n`;
  cartItems.forEach((i) => {
    waText += `• ${i.name} (العدد: ${i.qty}) - ${i.price} ${i.currency}\n`;
  });
  waText += `\nالإجمالي التقديري: ${totalSum.toLocaleString()} SAR\nيرجى التواصل لتأكيد التفاصيل.`;
  drawerSendWhatsAppBtn.href = `https://wa.me/?text=${encodeURIComponent(waText)}`;
}

// Toast Feedback Notification
function showToast(text) {
  toastPill.textContent = text;
  toastPill.classList.add("show");
  setTimeout(() => {
    toastPill.classList.remove("show");
  }, 2400);
}

// Render All Boards Gallery (Grid View)
function renderAllBoardsGallery() {
  const gallery = document.getElementById("allPagesGrid");
  gallery.innerHTML = "";

  menuData.forEach((page, idx) => {
    const cardEl = document.createElement("div");
    cardEl.className = "menu-card";
    cardEl.style.cursor = "pointer";
    cardEl.setAttribute("data-index", idx);

    cardEl.innerHTML = `
      <div class="botanical-frame-svg">${BOTANICAL_FRAME_SVG}</div>
      <div class="card-content">
        ${generateCardInnerHtml(page, false)}
      </div>
    `;

    cardEl.addEventListener("click", () => {
      currentPage = idx;
      document.body.classList.remove("gallery-view");
      renderActivePage('next');
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    gallery.appendChild(cardEl);
  });
}

// Search Menu Logic
function setupSearch() {
  menuSearchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      searchResultsList.classList.remove("has-results");
      searchResultsList.innerHTML = "";
      return;
    }

    const matches = [];
    menuData.forEach((page, pIdx) => {
      page.items.forEach((item) => {
        if (item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)) {
          matches.push({ ...item, pageIndex: pIdx, categoryName: page.tabTitle });
        }
      });
    });

    if (matches.length === 0) {
      searchResultsList.innerHTML = `<div style="padding: 1rem; text-align: center; color: #888; font-size: 0.85rem;">No drinks found matching "${q}"</div>`;
      searchResultsList.classList.add("has-results");
      return;
    }

    searchResultsList.innerHTML = matches.map((m) => `
      <div class="search-res-item" data-page="${m.pageIndex}" data-name="${m.name}">
        <div>
          <div class="search-res-name">${m.name}</div>
          <div class="search-res-category">${m.categoryName} &bull; ${m.desc}</div>
        </div>
        <div class="search-res-price">${m.numericPrice} SAR</div>
      </div>
    `).join("");

    searchResultsList.classList.add("has-results");
  });

  searchResultsList.addEventListener("click", (e) => {
    const itemEl = e.target.closest(".search-res-item");
    if (!itemEl) return;
    const pIdx = parseInt(itemEl.getAttribute("data-page"), 10);
    currentPage = pIdx;
    document.body.classList.remove("gallery-view");
    renderActivePage('next');
    searchPanel.classList.remove("open");
    menuSearchInput.value = "";
    searchResultsList.classList.remove("has-results");
  });

  clearSearchBtn.addEventListener("click", () => {
    menuSearchInput.value = "";
    searchResultsList.classList.remove("has-results");
    menuSearchInput.focus();
  });
}

// Event Listeners Setup
function setupEventListeners() {
  // Category Dock Tabs
  categoryTabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".cat-tab");
    if (!tab) return;
    const pageAttr = tab.getAttribute("data-page");

    if (pageAttr === "all") {
      document.body.classList.toggle("gallery-view");
      const isGallery = document.body.classList.contains("gallery-view");
      tab.classList.toggle("active", isGallery);
      if (isGallery) {
        renderAllBoardsGallery();
      } else {
        renderActivePage();
      }
    } else {
      document.body.classList.remove("gallery-view");
      const targetIdx = parseInt(pageAttr, 10);
      const dir = targetIdx > currentPage ? 'next' : 'prev';
      currentPage = targetIdx;
      renderActivePage(dir);
    }
  });

  // Dock Thumbnail nodes
  dockThumbnails.addEventListener("click", (e) => {
    const node = e.target.closest(".thumb-node");
    if (!node) return;
    const targetIdx = parseInt(node.getAttribute("data-index"), 10);
    if (targetIdx !== currentPage) {
      const dir = targetIdx > currentPage ? 'next' : 'prev';
      currentPage = targetIdx;
      document.body.classList.remove("gallery-view");
      renderActivePage(dir);
    }
  });

  // Navigation Arrows
  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      renderActivePage('prev');
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < menuData.length - 1) {
      currentPage++;
      renderActivePage('next');
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (isEditMode) return;
    if (e.key === "ArrowLeft") {
      if (currentPage > 0) {
        currentPage--;
        renderActivePage('prev');
      }
    } else if (e.key === "ArrowRight") {
      if (currentPage < menuData.length - 1) {
        currentPage++;
        renderActivePage('next');
      }
    } else if (e.key === "Escape") {
      closeItemModal();
      cartDrawerOverlay.classList.remove("open");
      searchPanel.classList.remove("open");
    }
  });

  // Touch Swipe for Mobile
  let touchStartX = 0;
  let touchEndX = 0;
  const viewport = document.getElementById("cardStageViewport");

  viewport.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  viewport.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0 && currentPage < menuData.length - 1) {
        currentPage++;
        renderActivePage('next');
      } else if (diff > 0 && currentPage > 0) {
        currentPage--;
        renderActivePage('prev');
      }
    }
  }, { passive: true });

  // Search Toggle
  searchToggleBtn.addEventListener("click", () => {
    searchPanel.classList.toggle("open");
    if (searchPanel.classList.contains("open")) {
      menuSearchInput.focus();
    }
  });
  setupSearch();

  // Book Spread Toggle (Desktop)
  bookViewToggleBtn.addEventListener("click", () => {
    isBookSpread = !isBookSpread;
    document.body.classList.toggle("book-spread-active", isBookSpread);
    bookViewToggleBtn.classList.toggle("active", isBookSpread);
    renderActivePage();
  });

  // Edit Mode Toggle
  toggleEditBtn.addEventListener("click", () => {
    isEditMode = !isEditMode;
    toggleEditBtn.classList.toggle("active", isEditMode);
    editBtnLabel.textContent = isEditMode ? "Done" : "Edit";
    renderActivePage();
  });

  // Modal Handlers
  modalCloseBtn.addEventListener("click", closeItemModal);
  itemModal.addEventListener("click", (e) => {
    if (e.target === itemModal) closeItemModal();
  });

  modalAddCartBtn.addEventListener("click", () => {
    if (selectedModalItem) {
      addToCart(selectedModalItem.name, selectedModalItem.price, selectedModalItem.currency);
      closeItemModal();
    }
  });

  // Cart Drawer Handlers
  openCartBtn.addEventListener("click", () => {
    cartDrawerOverlay.classList.add("open");
  });

  closeCartBtn.addEventListener("click", () => {
    cartDrawerOverlay.classList.remove("open");
  });

  cartDrawerOverlay.addEventListener("click", (e) => {
    if (e.target === cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove("open");
    }
  });

  // Cart Qty +/- clicks
  cartItemsList.addEventListener("click", (e) => {
    const btn = e.target.closest(".qty-btn");
    if (!btn) return;
    const action = btn.getAttribute("data-action");
    const name = btn.getAttribute("data-name");
    const item = cartItems.find((i) => i.name === name);

    if (item) {
      if (action === "plus") {
        item.qty += 1;
      } else if (action === "minus") {
        item.qty -= 1;
        if (item.qty <= 0) {
          cartItems = cartItems.filter((i) => i.name !== name);
        }
      }
      updateCartUI();
    }
  });

  // Print Menu
  printBtn.addEventListener("click", () => {
    window.print();
  });

  // Export High-Res PNG
  exportPngBtn.addEventListener("click", async () => {
    const targetCard = document.getElementById("activeMenuCard");
    const originalLabel = exportPngBtn.querySelector(".btn-label").textContent;
    exportPngBtn.querySelector(".btn-label").textContent = "...";
    exportPngBtn.disabled = true;

    try {
      if (typeof html2canvas !== "undefined") {
        const canvas = await html2canvas(targetCard, {
          scale: 3, // 300 DPI high resolution
          useCORS: true,
          backgroundColor: "#FAF6EE",
          logging: false
        });

        const imageUri = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        const pageTitle = menuData[currentPage].mainTitle.toLowerCase().replace(/\s+/g, "_");
        link.download = `BLEND_${pageTitle}_menu.png`;
        link.href = imageUri;
        link.click();
        showToast("High-resolution PNG downloaded!");
      }
    } catch (err) {
      console.error("Export error:", err);
      showToast("Could not export image. Try Print to PDF!");
    } finally {
      exportPngBtn.querySelector(".btn-label").textContent = originalLabel;
      exportPngBtn.disabled = false;
    }
  });
}

// Launch
document.addEventListener("DOMContentLoaded", initApp);
