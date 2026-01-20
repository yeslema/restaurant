// Translations
const translations = {
  fr: {
    pageTitle: "Coffee Coup | Menu Moderne",
    logo: "Coffee Coup",
    tagline: "L'art du café",
    menuTitle: "Notre Carte",
    footerText: "Tous droits réservés &copy; 2026 Coffee Coup",
    scanQr: "Scannez pour emporter",
    // Categories
    all: "Tout",
    coffee: "Café",
    iced: "Iced Coffee",
    juice: "Jus",
    milkshake: "Milkshake",
    mojito: "Mojito",
    Dessert: "Dessert",
    Gratin: "Gratin"
  },
  ar: {
    pageTitle: "Coffee Coup | قائمة القهوة",
    logo: "Coffee Coup",
    tagline: "فن القهوة",
    menuTitle: "قائمتنا",
    footerText: "جميع الحقوق محفوظة &copy; 2026 Coffee Coup",
    scanQr: "امسح الكود",
    // Categories
    all: "الكل",
    coffee: "قهوة",
    iced: "قهوة مثلجة",
    juice: "عصائر",
    milkshake: "ميلك شيك",
    mojito: "موهيتو",
    Dessert: "Dessert",
    Gratin: "Gratin"
  },
  en: {
    pageTitle: "Coffee Coup | Modern Menu",
    logo: "Coffee Coup",
    tagline: "The Art of Coffee",
    menuTitle: "Our Menu",
    footerText: "All Rights Reserved &copy; 2026 Coffee Coup",
    scanQr: "Scan Menu",
    // Categories
    all: "All",
    coffee: "Coffee",
    iced: "Iced Coffee",
    juice: "Juices",
    milkshake: "Milkshake",
    mojito: "Mojito",
    Dessert: "Dessert",
    Gratin: "Gratin"
  }
};

// Menu Data
const menu = [
  // --- COFFEE (First as requested) ---
  {
    id: 1,
    category: "coffee",
    price: "80",
    isSeasonier: false,
    translations: {
      fr: { title: "Espresso" },
      ar: { title: "إسبريسو" },
      en: { title: "Espresso" }
    }
  },
  {
    id: 2,
    category: "coffee",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Cappuccino" },
      ar: { title: "كابتشينو" },
      en: { title: "Cappuccino" }
    }
  },
  {
    id: 3,
    category: "coffee",
    price: "80",
    isSeasonier: false,
    translations: {
      fr: { title: "Café au lait" },
      ar: { title: "قهوة بالحليب" },
      en: { title: "Café au lait" }
    }
  },
  {
    id: 4,
    category: "coffee",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Café crème" },
      ar: { title: "كافية كريم" },
      en: { title: "Café crème" }
    }
  },
  {
    id: 5,
    category: "coffee",
    price: "130",
    isSeasonier: false,
    translations: {
      fr: { title: "Coup" },
      ar: { title: "كو" },
      en: { title: "Coup" }
    }
  },

  // --- ICED COFFEE (Second) ---
  {
    id: 6,
    category: "iced",
    price: "120",
    isSeasonier: false,
    translations: {
      fr: { title: "Iced Latte" },
      ar: { title: "آيس لاتي" },
      en: { title: "Iced Latte" }
    }
  },
  {
    id: 7,
    category: "iced",
    price: "130",
    isSeasonier: false,
    translations: {
      fr: { title: "Spanish Latte" },
      ar: { title: "سبانيش لاتيه"},
      en: { title: "Spanish Latte"}
    }
  },
  {
    id: 8,
    category: "iced",
    price: "130",
    isSeasonier: false,
    translations: {
      fr: { title: "Iced Caramel latte" },
      ar: { title: " آيس كاراميل لاتي" },
      en: { title: "Iced Caramel latte"}
    }
  },
  {
    id: 9,
    category: "iced",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "iced Coup" },
      ar: { title: "آيس كو " },
      en: { title: "iced Coup" }
    }
  },
  // --- JUICES (Third) ---
  {
    id: 10,
    category: "juice",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Orange", },
      ar: { title: " برتقال ", },
      en: { title: "Orange", }
    }
  },
  {
    id: 11,
    category: "juice",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Queen's Fruit "},
      ar: { title: "كوينز فرويت" },
      en: { title: "Queen's Fruit" }
    }
  },
  {
    id: 12,
    category: "juice",
    price: "120",
    isSeasonier: true,
    translations: {
      fr: { title: "Humangosaur"},
      ar: { title: "هيومانجوسور" },
      en: { title: "Humangosaur" }
    }
  },
  {
    id: 13,
    category: "juice",
    price: "100",
    isSeasonier: true,
    translations: {
      fr: { title: "Mangue" },
      ar: { title: " مانجو" },
      en: { title: "Mango " }
    }
  },
  {
    id: 14,
    category: "juice",
    price: "130",
    isSeasonier: false,
    translations: {
      fr: { title: "Avocat (Banane,Date)" },
      ar: { title: "أفوكادو (موز و تمر )"},
      en: { title: "Avocado (Banana,Date)"}
    }
  },
  {
    id: 15,
    category: "juice",
    price: "150",
    isSeasonier: true,
    translations: {
      fr: { title: "Lassi" },
      ar: { title: "لاسي" },
      en: { title: "Lassi" }
    }
  },

  {
    id: 16,
    category: "juice",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Avocat (Date)" },
      ar: { title: "أفوكادو (التمر)"},
      en: { title: "Avocado (Date)"}
    }
  },
  {
    id: 25,
    category: "juice",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Secret Orange" },
      ar: { title: "سيكريت اورينج" },
      en: { title: "Secret Orange"}
    }
  },
  {
    id: 26,
    category: "juice",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "pasteque"},
      ar: { title: "البطيخ"},
      en: { title: "watermelon"}
    }
  },

  // --- MILKSHAKE (Fourth) ---
  {
    id: 17,
    category: "milkshake",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "Milkshake Chocolat"},
      ar: { title: "ميلك شيك شوكولاتة" },
      en: { title: "Chocolate Milkshake" }
    }
  },
  {
    id: 18,
    category: "milkshake",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "Milkshake Fraise"},
      ar: { title: "ميلك شيك فراولة",
      en: { title: "Strawberry Milkshake" }
    }
  },
  {
    id: 19,
    category: "milkshake",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "Milkshake Vanilla" },
      ar: { title: "ميلك شيك فانيليا" },
      en: { title: "Vanilla Milkshake" }
    }
  },

  // --- MOJITO (Last) ---
  {
    id: 20,
    category: "mojito",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Mojito " },
      ar: { title: "موهيتو " },
      en: { title: " Mojito" }
    }
  },
  {
    id: 21,
    category: "mojito",
    price: "120",
    isSeasonier: true,
    translations: {
      fr: { title: "Mojito Mangue" },
      ar: { title: "موهيتو مانجو" },
      en: { title: "Mango Mojito" }
    }
  },
  {
    id: 22,
    category: "mojito",
    price: "100",
    isSeasonier: false,
    translations: {
      fr: { title: "Mojito Blue" },
      ar: { title: "موهيتو أزرق" },
      en: { title: "Blue Mojito" }
    }
  },

  {
    id: 23,
    category: "Dessert",
    price: "80",
    isSeasonier: false,
    translations: {
      fr: { title: "Dessert jenga", desc: "" },
      ar: { title: "حلوى جينجا", desc: "" },
      en: { title: "Dessert jenga", desc: "" }
    }
  },
  {
    id: 24,
    category: "Gratin",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "Mini Gratin" },
      ar: { title: "جراتين صغيرة" },
      en: { title: "Mini Gratin" }
    }
  },
  {
    id: 25,
    category: "Gratin",
    price: "250",
    isSeasonier: false,
    translations: {
      fr: { title: "Grande Gratin" },
      ar: { title: "جراتين كبير" },
      en: { title: "Gr Gratin" }
    }
  },
  {
    id: 27,
    category: "Dessert",
    price: "150",
    isSeasonier: false,
    translations: {
      fr: { title: "Dessert ganacho" },
      ar: { title: "حلوى جاناتسو" },
      en: { title: "Dessert ganacho" }
    }
  },
  {
    id: 28,
    category: "Coffee",
    price: "120",
    isSeasonier: false,
    translations: {
      fr: { title: "Moka" },
      ar: { title: "موكا" },
      en: { title: "Moka" }
    }
  },
  {
    id: 29,
    category: "iced",
    price: "140",
    isSeasonier: false,
    translations: {
      fr: { title: "Iced Moka" },
      ar: { title: "ايس موكا" },
      en: { title: "Iced Moka" }
    }
  }
];

// App State
let currentLang = 'fr'; // Default requested by user
let currentCategory = 'all';

// DOM Elements
const sectionCenter = document.getElementById("menu-container");
const buttonContainer = document.getElementById("btn-container");
const qrBtn = document.getElementById("qr-btn");
const qrModal = document.getElementById("qr-modal");
const closeModal = document.querySelector(".close-modal");

// Initialization
window.addEventListener("DOMContentLoaded", function () {
  setLanguage(currentLang);
  setupModal();
});

// Language Logic
function setLanguage(lang) {
  currentLang = lang;

  // HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Active Button State
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.innerText.toLowerCase() === lang ||
      (lang === 'fr' && btn.innerText === 'FR') ||
      (lang === 'ar' && btn.innerText === 'AR') ||
      (lang === 'en' && btn.innerText === 'EN')) {
      btn.classList.add('active');
    }
  });

  // Translate Static Text
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Re-render
  displayMenuButtons();
  displayMenuItems(menu);
}

// Menu Display
function displayMenuItems(menuItems) {
  let itemsToDisplay = menuItems;
  if (currentCategory !== 'all') {
    itemsToDisplay = menuItems.filter(item => item.category === currentCategory);
  }

  let displayMenu = itemsToDisplay.map(function (item) {
    const info = item.translations[currentLang];
    const itemNum = String(item.id).padStart(2, '0');

    return `<article class="menu-item fade-in ${item.isSeasonier ? 'seasonier-active' : ''}">
          <div class="item-info">
            <header class="item-header">
              <h4>
                <span class="item-num">${itemNum}.</span> 
                ${info.title}
                ${item.isSeasonier ? '<span class="seasonier-badge">Seasonier</span>' : ''}
              </h4>
              <h4 class="price">${item.price} <span class="currency">MRU</span></h4>
            </header>
            ${info.desc ? `<p class="item-text">${info.desc}</p>` : ''}
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Category Buttons
function displayMenuButtons() {
  const categories = ["all", "coffee", "iced", "juice", "milkshake", "mojito", "Dessert", "Gratin"];

  const categoryBtns = categories
    .map(function (category) {
      const categoryName = translations[currentLang][category];
      return `<button type="button" class="filter-btn" data-id="${category}">
          ${categoryName}
        </button>`;
    })
    .join("");

  buttonContainer.innerHTML = categoryBtns;

  const filterBtns = buttonContainer.querySelectorAll(".filter-btn");

  // Set active class
  filterBtns.forEach(btn => {
    if (btn.dataset.id === currentCategory) {
      btn.classList.add('active');
    }

    btn.addEventListener("click", function (e) {
      currentCategory = e.currentTarget.dataset.id;

      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      displayMenuItems(menu);
    });
  });
}

// Modal Logic
function setupModal() {
  if (qrBtn) {
    qrBtn.addEventListener('click', () => {
      qrModal.style.display = "block";
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      qrModal.style.display = "none";
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target == qrModal) {
      qrModal.style.display = "none";
    }
  });
}
