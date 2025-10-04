/*
  هذا الملف يحتوي على قائمة المنتجات الرقمية التي تبيعها.
  كل منتج يحتوي على:
  - id: رقم فريد
  - name: اسم المنتج
  - description: وصف مختصر
  - price: السعر بالريال السعودي
  - image: نص توضيحي يظهر مكان الصورة (يمكنك لاحقًا استبداله بصورة حقيقية)
*/
const products = [
  {
    id: 1,
    name: "هوية بصرية احترافية",
    description: "شعار + ألوان + خطوط + دليل استخدام + ملفات PSD/AI/Canva جاهزة.",
    price: "99 ريال",
    image: "🎨 هوية بصرية"
  },
  {
    id: 2,
    name: "قوالب تطبيقات (Figma)",
    description: "واجهات مستخدم جاهزة لتطبيقات الجوال: تسوق، صحة، تعليم، وخدمات.",
    price: "79 ريال",
    image: "📱 واجهات تطبيقات"
  },
  {
    id: 3,
    name: "حزمة صور ستوك عربية",
    description: "صور أصلية عالية الجودة، خالية من الحقوق، مثالية للسوشيال ميديا والإعلانات.",
    price: "49 ريال",
    image: "🖼️ صور رقمية"
  },
  {
    id: 4,
    name: "قوالب كانفا احترافية",
    description: "للمحتوى، الإعلانات، القصص، والمنشورات — جاهزة للتخصيص خلال دقائق.",
    price: "39 ريال",
    image: "✨ قوالب كانفا"
  }
];

/*
  نحصل على عنصر HTML الذي سيحتوي البطاقات
  (الذي له id = "products-container")
*/
const container = document.getElementById('products-container');

/*
  نمرّ على كل منتج في القائمة وننشئ بطاقة HTML خاصة به
*/
products.forEach(product => {
  // ننشئ عنصر div جديد لكل منتج
  const card = document.createElement('div');
  card.className = 'product-card';

  // نملأ البطاقة بمحتوى HTML ديناميكي
  card.innerHTML = `
    <!-- صورة أو رمز توضيحي -->
    <div class="product-image">${product.image}</div>
    
    <!-- معلومات المنتج -->
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      
      <!-- زر الطلب: يفتح واتساب مع رسالة تلقائية -->
      <a 
        href="https://wa.me/966500000000?text=مرحباً، أرغب في شراء: ${encodeURIComponent(product.name)} من طموح العليمي" 
        class="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        اطلب الآن عبر واتساب
      </a>
    </div>
  `;

  // نضيف البطاقة إلى قسم المنتجات في الصفحة
  container.appendChild(card);
});
