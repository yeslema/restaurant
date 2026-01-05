// Translations for Static Text
const translations = {
  ar: {
    pageTitle: "مطعم الذواقة | Gourmet Restaurant",
    logo: "مطعـم <span>الـذواقـة</span>",
    tagline: "تجربة فريدة من المذاق الأصيل",
    menuTitle: "قائمة الطعـام",
    footerText: "جميع الحقوق محفوظة &copy; 2024 مطعم الذواقة",
    all: "الكل",
    main: "وجبات رئيسية",
    starter: "مقبلات",
    drink: "مشروبات",
    dessert: "حلويات"
  },
  en: {
    pageTitle: "Gourmet Restaurant",
    logo: "Gourmet <span>Restaurant</span>",
    tagline: "A Unique Experience of Authentic Taste",
    menuTitle: "Our Menu",
    footerText: "All Rights Reserved &copy; 2024 Gourmet Restaurant",
    all: "All",
    main: "Main Courses",
    starter: "Starters",
    drink: "Drinks",
    dessert: "Desserts"
  },
  fr: {
    pageTitle: "Restaurant Gourmet",
    logo: "Restaurant <span>Gourmet</span>",
    tagline: "Une Expérience Unique de Goût Authentique",
    menuTitle: "Notre Menu",
    footerText: "Tous Droits Réservés &copy; 2024 Restaurant Gourmet",
    all: "Tout",
    main: "Plats Principaux",
    starter: "Entrées",
    drink: "Boissons",
    dessert: "Desserts"
  }
};

// Menu Data with Multi-language support
const menu = [
  {
    id: 1,
    category: "main",
    price: "85", // Numeric value, currency sorted in display
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "مشاوي مشكلة فاخرة", desc: "تشكيلة مميزة من اللحوم الطازجة المشوية على الفحم، تقدم مع الأرز والصلصات الخاصة." },
      en: { title: "Mixed Grill Deluxe", desc: "Premium selection of charcoal-grilled fresh meats, served with rice and special sauces." },
      fr: { title: "Grillade Mixte", desc: "Sélection premium de viandes fraîches grillées au charbon, servies avec riz et sauces spéciales." }
    }
  },
  {
    id: 2,
    category: "starter",
    price: "35",
    img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "سلطة السيزر", desc: "خس طازج مع قطع الدجاج المشوي، جبنة البارميزان، وقطع الخبز المحمص." },
      en: { title: "Caesar Salad", desc: "Fresh lettuce with grilled chicken pieces, parmesan cheese, and croutons." },
      fr: { title: "Salade César", desc: "Laitue fraîche avec morceaux de poulet grillé, parmesan et croûtons." }
    }
  },
  {
    id: 3,
    category: "drink",
    price: "20",
    img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "عصير برتقال طبيعي", desc: "عصير برتقال طازج يعصر عند الطلب بدون إضافة سكر." },
      en: { title: "Fresh Orange Juice", desc: "Freshly squeezed orange juice upon request, no sugar added." },
      fr: { title: "Jus d'Orange Frais", desc: "Jus d'orange pressé frais sur demande, sans sucre ajouté." }
    }
  },
  {
    id: 4,
    category: "main",
    price: "120",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "ستيك ريب آي", desc: "شريحة لحم بقر واغيو فاخرة، تقدم مع البطاطس المهروسة والخضار سوتيه." },
      en: { title: "Ribeye Steak", desc: "Premium Wagyu beef steak, served with mashed potatoes and sautéed vegetables." },
      fr: { title: "Steak Faux-filet", desc: "Steak de bœuf Wagyu premium, servi avec purée de pommes de terre et légumes sautés." }
    }
  },
  {
    id: 5,
    category: "dessert",
    price: "40",
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "تشيز كيك فراولة", desc: "طبقة غنية من الجبنة الكريمية مع قاعدة بسكويت وصلصة الفراولة الطازجة." },
      en: { title: "Strawberry Cheesecake", desc: "Rich layer of cream cheese with biscuit base and fresh strawberry sauce." },
      fr: { title: "Cheesecake Fraise", desc: "Riche couche de fromage à la crème avec base biscuit et coulis de fraise fraîche." }
    }
  },
  {
    id: 6,
    category: "drink",
    price: "18",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "قهوة لاتيه", desc: "اسبريسو غني مع حليب مبخر ورغوة كثيفة." },
      en: { title: "Cafe Latte", desc: "Rich espresso with steamed milk and thick foam." },
      fr: { title: "Café Latte", desc: "Espresso riche avec lait chaud et mousse épaisse." }
    }
  },
  {
    id: 7,
    category: "main",
    price: "55",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "باستا ألفريدو", desc: "مكرونة فيتوتشيني مع صلصة الكريمة البيضاء وجبنة البارميزان." },
      en: { title: "Fettuccine Alfredo", desc: "Fettuccine pasta with white cream sauce and parmesan cheese." },
      fr: { title: "Fettuccine Alfredo", desc: "Pâtes fettuccine avec sauce à la crème blanche et parmesan." }
    }
  },
  {
    id: 8,
    category: "starter",
    price: "25",
    img: "https://images.unsplash.com/photo-1630409351241-e90e7f5e47ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "حمص بيروتي", desc: "حمص ناعم مع البقدونس، الثوم، زيت الزيتون ودبس الرمان." },
      en: { title: "Beirut Hummus", desc: "Smooth hummus with parsley, garlic, olive oil, and pomegranate molasses." },
      fr: { title: "Houmous Beyrouthi", desc: "Houmous onctueux avec persil, ail, huile d'olive et mélasse de grenade." }
    }
  },
  {
    id: 9,
    category: "dessert",
    price: "45",
    img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    translations: {
      ar: { title: "مولتن كيك", desc: "كيكة الشوكولاتة الساخنة مع قلب سائل، تقدم مع آيس كريم فانيليا." },
      en: { title: "Molten Cake", desc: "Hot chocolate cake with liquid center, served with vanilla ice cream." },
      fr: { title: "Gâteau Fondant", desc: "Gâteau au chocolat chaud avec cœur liquide, servi avec glace vanille." }
    }
  }
];

// Current Language State
let currentLang = 'ar';
let currentCategory = 'all';

// Selectors
const sectionCenter = document.getElementById("menu-container");
const buttonContainer = document.getElementById("btn-container");

// Load Items
window.addEventListener("DOMContentLoaded", function () {
  setLanguage('ar'); // Default language
});

function setLanguage(lang) {
  currentLang = lang;

  // Update HTML dir and lang attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  // Update Static Texts
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Re-render menu and buttons
  displayMenuItems(menu);
  displayMenuButtons();
}

function displayMenuItems(menuItems) {
  // Filter if needed (handling logic here to make sure filter stays applied when lang changes)
  let itemsToDisplay = menuItems;
  if (currentCategory !== 'all') {
    itemsToDisplay = menuItems.filter(item => item.category === currentCategory);
  }

  let displayMenu = itemsToDisplay.map(function (item) {
    // Get info based on current language
    const info = item.translations[currentLang];
    const itemCurrency = currentLang === 'ar' ? 'ر.س' : (currentLang === 'fr' ? 'SAR' : 'SAR'); // Simple currency handling

    return `<article class="menu-item fade-in">
          <div class="photo-container">
            <img src="${item.img}" alt="${info.title}" class="photo" />
          </div>
          <div class="item-info">
            <header class="item-header">
              <h4>${info.title}</h4>
              <h4 class="price">${item.price} <span style="font-size:0.8em">${itemCurrency}</span></h4>
            </header>
            <p class="item-text">
              ${info.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  // Get unique categories
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories
    .map(function (category) {
      // Get translated name for category
      const categoryName = translations[currentLang][category] || category;
      return `<button type="button" class="filter-btn" data-id="${category}">
          ${categoryName}
        </button>`;
    })
    .join("");

  buttonContainer.innerHTML = categoryBtns;

  // Logic to keep the active button highlighted
  const filterBtns = buttonContainer.querySelectorAll(".filter-btn");

  // Find the button that corresponds to the currentCategory and make it active
  filterBtns.forEach(btn => {
    if (btn.dataset.id === currentCategory) {
      btn.classList.add('active');
    }
  });

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      currentCategory = e.currentTarget.dataset.id;

      // Update Active Status
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');

      displayMenuItems(menu);
    });
  });
}
