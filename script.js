// === المنتجات الرقمية ===
const products = [
  {
    id: 1,
    name: "هوية بصرية احترافية",
    description: "شعار + ألوان + خطوط + دليل استخدام + ملفات PSD/AI/Canva جاهزة.",
    price: "99 ريال",
    image: "https://placehold.co/600x400/2563eb/white?text=هوية+بصرية"
  },
  {
    id: 2,
    name: "قوالب تطبيقات (Figma)",
    description: "واجهات مستخدم جاهزة لتطبيقات الجوال: تسوق، صحة، تعليم، وخدمات.",
    price: "79 ريال",
    image: "https://placehold.co/600x400/7e22ce/white?text=قوالب+Figma"
  },
  {
    id: 3,
    name: "حزمة صور ستوك عربية",
    description: "صور أصلية عالية الجودة، خالية من الحقوق، مثالية للسوشيال ميديا والإعلانات.",
    price: "49 ريال",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 4,
    name: "قوالب كانفا احترافية",
    description: "للمحتوى، الإعلانات، القصص، والمنشورات — جاهزة للتخصيص خلال دقائق.",
    price: "39 ريال",
    image: "https://placehold.co/600x400/f97316/white?text=قوالب+كانفا"
  }
];

// === التطبيقات ===
const apps = [
  {
    id: 1,
    name: "تطبيق صحي متكامل",
    description: "تتبع اللياقة، التغذية، والنوم. واجهة مستخدم سلسة ومريحة.",
    price: "199 ريال",
    image: "https://placehold.co/600x400/10b981/white?text=تطبيق+صحي"
  },
  {
    id: 2,
    name: "تطبيق تسوق إلكتروني",
    description: "واجهة بائع ومشتري، سلة شراء، دفع إلكتروني، وإشعارات فورية.",
    price: "249 ريال",
    image: "https://placehold.co/600x400/ef4444/white?text=تطبيق+تسوق"
  },
  {
    id: 3,
    name: "تطبيق تعليمي للأطفال",
    description: "تعلم الألوان، الأرقام، واللغة العربية عبر ألعاب تفاعلية.",
    price: "179 ريال",
    image: "https://placehold.co/600x400/8b5cf6/white?text=تطبيق+تعليمي"
  },
  {
    id: 4,
    name: "تطبيق خدمات منزلية",
    description: "حجز خدمات: تنظيف، صيانة، توصيل — مع خريطة مباشرة وتقييمات.",
    price: "229 ريال",
    image: "https://placehold.co/600x400/0d9488/white?text=خدمات+منزلية"
  }
];

// === عرض المنتجات ===
function renderProducts() {
  const container = document.getElementById('products-container');
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">${product.price}</div>
        <a 
          href="https://wa.me/966500000000?text=مرحباً، أرغب في شراء: ${encodeURIComponent(product.name)} من طموح العليمي" 
          class="btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اطلب ${product.name} عبر واتساب"
        >
          اطلب الآن عبر واتساب
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// === عرض التطبيقات ===
function renderApps() {
  const container = document.getElementById('apps-container');
  if (!container) return;
  
  apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-image">
        <img src="${app.image}" alt="${app.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <div class="price">${app.price}</div>
        <a 
          href="https://wa.me/966500000000?text=مرحباً، أرغب في شراء: ${encodeURIComponent(app.name)} من طموح العليمي" 
          class="btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="اطلب ${app.name} عبر واتساب"
        >
          اطلب الآن عبر واتساب
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// === تشغيل عند التحميل ===
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderApps();
});
