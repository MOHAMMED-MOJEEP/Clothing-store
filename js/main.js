/**
 * ============================================================================
 * متجر باريس للأزياء - ملف الجافا سكريبت المطور
 * ============================================================================
 */

// ============================================================================
// بيانات المنتجات - منظمة حسب الفئات (نسائي، رجالي، أطفال)
// ============================================================================

const PRODUCTS = [
    // القسم النسائي
    { id: 1, name: 'فانيله سوداء فاخره', price: 2000, image: 'images/women/product-1.jpg', category: 'فساتين', gender: 'women', reviews: 128 },
    { id: 2, name: 'فستان ', price: 5000, image: 'images/women/product-2.jpg', category: 'بليزرات', gender: 'women', reviews: 95 },
    { id: 3, name: 'فستان صيفي ناعم', price: 9500, image: 'images/women/product-3.jpg', category: 'فساتين', gender: 'women', reviews: 156 },
    { id: 4, name: 'بنطال أسود فاخر', price: 4500, image: 'images/women/product-4.jpg', category: 'فساتين', gender: 'women', reviews: 128 },
    { id: 5, name: 'بليزر كريمي أنيق', price: 320, image: 'images/women/product-5.jpg', category: 'بليزرات', gender: 'women', reviews: 95 },
    { id: 6, name: 'فستان  ناعم', price: 8500, image: 'images/women/product-6.jpg', category: 'فساتين', gender: 'women', reviews: 156 }, 
    { id: 7, name: 'فستان صيفي ناعم', price: 3000, image: 'images/women/product-7.jpg', category: 'فساتين', gender: 'women', reviews: 156 }, 
    { id: 8, name: 'فستان صيفي ناعم', price:4000, image: 'images/women/product-8.jpg', category: 'فساتين', gender: 'women', reviews: 156 }, 
    { id: 9, name: 'بليزر كريمي أنيق', price: 3000, image: 'images/women/product-9.jpg', category: 'بليزرات', gender: 'women', reviews: 95 },
    { id: 10, name: 'فستان صيفي ناعم', price: 4000, image: 'images/women/product-10.jpg', category: 'فساتين', gender: 'women', reviews: 156 }, 
    { id: 11, name: 'بليزر كريمي أنيق', price: 8500, image: 'images/women/product-11.jpg', category: 'بليزرات', gender: 'women', reviews: 95 },
    { id: 12, name: 'فستان صيفي ناعم', price: 4000, image: 'images/women/product-12.jpg', category: 'فساتين', gender: 'women', reviews: 156 },
    { id: 13, name: 'فانيله فاخره', price: 8500, image: 'images/women/product-13.jpg', category: 'فساتين', gender: 'women', reviews: 128 },
    { id: 14, name: 'بليزر كريمي أنيق', price: 8500, image: 'images/women/product-14.jpg', category: 'بليزرات', gender: 'women', reviews: 95 },
    { id: 15, name: 'فستان سهرة أسود فاخر', price: 4000, image: 'images/women/product-15.jpg', category: 'فساتين', gender: 'women', reviews: 128 },
    // القسم الرجالي
    { id: 16, name: 'بدلة رسمية زرقاء', price: 8500, image: 'images/men/product-1.jpg', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 17, name: 'بدلة رسمية زرقاء', price: 4200, image: 'images/men/product-2.jpg', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 18, name: 'فانيله رسمية زرقاء', price: 9050, image: 'images/men/product-3.jpg', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 19, name: 'فانيله كاجوال عصري', price: 4000, image: 'images/men/product-4.jpg', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 20, name: 'فانيله رسمية زرقاء', price: 8000, image: 'images/men/product-5.jpg', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 21, name: 'جاكيت كاجوال عصري', price: 4000, image: 'images/men/product-6.jpg', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 22, name: ' بنطال صيفي', price: 1000, image: 'images/men/product7.png', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 23, name: ' شورت صيفي', price: 4200, image: 'images/men/product8.png', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 24, name: ' جاكيت أسود', price: 8500, image: 'images/men/product9.png', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 25, name: 'جاكيت كاجوال عصري', price: 3000, image: 'images/men/product10.png', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 26, name: 'بدلة  سوداء', price: 8000, image: 'images/men/product11.png', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 27, name: 'جاكيت كاجوال عصري', price: 7000, image: 'images/men/product-12.jpg', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 28, name: 'بدلة رسمية زرقاء', price: 9800, image: 'images/men/product-13.jpg', category: 'بدلات', gender: 'men', reviews: 89 },
    { id: 29, name: 'جاكيت كاجوال عصري', price: 11000, image: 'images/men/product-14.jpg', category: 'جاكيتات', gender: 'men', reviews: 112 },
    { id: 30, name: ' جاكيت عصري', price: 1500, image: 'images/men/product15.png', category: 'بدلات', gender: 'men', reviews: 89 },
    // قسم الأطفال
    { id: 31, name: 'طقم أطفال قطني', price: 15000, image: 'images/kids/product-1.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
    { id: 32, name: 'فستان بناتي رقيق', price: 18000, image: 'images/kids/product-2.jpg', category: 'فساتين', gender: 'kids', reviews: 45 },
    { id: 33, name: 'طقم أطفال قطني', price: 10000, image: 'images/kids/product-3.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
    { id: 34, name: 'فستان بناتي رقيق', price: 8000, image: 'images/kids/product-4.jpg', category: 'فساتين', gender: 'kids', reviews: 45 },
    { id: 35, name: 'طقم أطفال قطني', price: 5000, image: 'images/kids/product-5.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
    { id: 36, name: 'فستان بناتي رقيق', price: 9000, image: 'images/kids/product-6.jpg', category: 'فساتين', gender: 'kids', reviews: 45 },
    { id: 37, name: 'طقم أطفال قطني', price: 10000, image: 'images/kids/product-7.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
    { id: 38, name: 'فستان بناتي رقيق', price: 11000, image: 'images/kids/product-8.jpg', category: 'فساتين', gender: 'kids', reviews: 45 },
    { id: 39, name: 'طقم أطفال قطني', price: 12000, image: 'images/kids/product-9.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
    { id: 40, name: 'فستان بناتي رقيق', price: 18000, image: 'images/kids/product-10.jpg', category: 'فساتين', gender: 'kids', reviews: 45 },
    { id: 41, name: 'طقم أطفال قطني', price: 15000, image: 'images/kids/product-11.jpg', category: 'أطقم', gender: 'kids', reviews: 67 },
];

// بيانات آراء العملاء
const TESTIMONIALS = [
    { id: 1, name: 'محمد مجيب ', image: 'images/testimonial-1.jpg', text: 'جودة استثنائية وخدمة عملاء رائعة. أنا مسرورة جداً بشرائي من باريس!', rating: 5 },
    { id: 2, name: 'نور علي', image: 'images/testimonial-2.jpg', text: 'الملابس فاخرة وسعر مناسب. التوصيل سريع جداً وآمن.', rating: 5 }
];

// ============================================================================
// المتغيرات العامة للسلة والتحكم
// ============================================================================

let cart = [];
let selectedSizes = {}; // لتخزين المقاس المختار لكل منتج مؤقتاً
let currentFilter = 'all';

// ============================================================================
// تهيئة الصفحة عند التحميل
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderTestimonials();
    loadCartFromStorage();
    updateCartCount();
    setupSearchListener();
});

// ============================================================================
// وظائف البحث والفلترة
// ============================================================================

function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterAndSearchProducts();
        });
    }
}

function toggleSearchBar() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');
    
    searchBar.classList.toggle('active');
    
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    } else {
        // عند إغلاق البحث، نقوم بمسح النص وإعادة عرض كل المنتجات
        searchInput.value = '';
        filterAndSearchProducts();
    }
}

function filterProducts(gender) {
    currentFilter = gender;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    filterAndSearchProducts();
}

function filterAndSearchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = PRODUCTS.filter(product => {
        const matchesFilter = currentFilter === 'all' || product.gender === currentFilter;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.category.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });
    
    renderFilteredProducts(filtered);
}

function renderFilteredProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:40px;">لم يتم العثور على منتجات</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// ============================================================================
// وظائف عرض المنتجات
// ============================================================================

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';
    
    PRODUCTS.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x500?text=Paris+Fashion'">
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">${product.price} ريال</div>
            <div class="product-actions">
                <select class="size-select" id="size-${product.id}" onchange="selectSize(${product.id}, this.value)">
                    <option value="">اختر المقاس</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
                <button class="add-to-cart" onclick="addToCart(${product.id})">أضف للسلة</button>
            </div>
        </div>
    `;
    
    return card;
}

// ============================================================================
// وظائف السلة والمقاسات
// ============================================================================

function selectSize(productId, size) {
    selectedSizes[productId] = size;
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    const size = selectedSizes[productId];

    // التحقق من اختيار المقاس برسالة محسنة
    if (!size || size === "") {
        showNotification("يرجى اختيار المقاس أولاً قبل الإضافة للسلة", "error");
        return;
    }

    // إضافة المنتج للسلة
    const existingItem = cart.find(item => item.id === productId && item.size === size);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            size: size,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    showNotification(`تم إضافة "${product.name}" بمقاس (${size}) إلى السلة`);
}

function showNotification(message, type = "success") {
    // إزالة أي تنبيهات سابقة
    const oldNote = document.querySelector('.notification');
    if (oldNote) oldNote.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }, 100);
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function saveCartToStorage() {
    localStorage.setItem('paris_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('paris_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// ============================================================================
// وظائف السلة والدفع
// ============================================================================

const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');

if (cartBtn) {
    cartBtn.onclick = () => {
        renderCartItems();
        cartModal.style.display = 'block';
    };
}

function closeCart() {
    cartModal.style.display = 'none';
}

function renderCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-shopping-bag"></i>
                <p>سلة المشتريات فارغة حالياً</p>
                <p style="font-size: 0.8rem;">ابدأ بالتسوق لإضافة منتجاتك المفضلة</p>
            </div>
        `;
        cartTotal.textContent = 'الإجمالي: صفر';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>المقاس: ${item.size}</p>
                <p>${item.price} ريال</p>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                    <span class="qty-num">${item.quantity}</span>
                    <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" style="background:none; border:none; color:#e74c3c; cursor:pointer; font-size:1.2rem;">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        cartItems.appendChild(itemEl);
    });
    
    cartTotal.textContent = `الإجمالي: ${total} ريال`;
}

function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        removeFromCart(index);
    } else {
        saveCartToStorage();
        updateCartCount();
        renderCartItems();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartCount();
    renderCartItems();
}

function goToCheckout() {
    if (cart.length === 0) {
        showNotification("السلة فارغة! يرجى إضافة منتجات أولاً", "error");
        return;
    }
    closeCart();
    document.getElementById('checkoutPage').style.display = 'block';
    renderCheckoutSummary();
}

function backToShop() {
    document.getElementById('checkoutPage').style.display = 'none';
}

function renderCheckoutSummary() {
    const summaryItems = document.getElementById('summaryItems');
    const checkoutTotal = document.getElementById('checkoutTotal');
    
    summaryItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemEl = document.createElement('div');
        itemEl.className = 'summary-item';
        itemEl.innerHTML = `
            <div class="summary-item-info">
                <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover; border-radius:5px; margin-left:10px;">
                <span>${item.name} (x${item.quantity}) - ${item.size}</span>
            </div>
            <span>${item.price * item.quantity} ريال</span>
        `;
        summaryItems.appendChild(itemEl);
    });
    
    checkoutTotal.textContent = `${total} ريال`;
}

function handleCheckout(event) {
    event.preventDefault();
    alert("تم استلام طلبك بنجاح! شكراً لتسوقك من باريس.");
    cart = [];
    saveCartToStorage();
    updateCartCount();
    backToShop();
}

function renderTestimonials() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    TESTIMONIALS.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <img src="${t.image}" alt="${t.name}">
            <h3>${t.name}</h3>
            <p>"${t.text}"</p>
            <div class="stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
        `;
        grid.appendChild(card);
    });
}

function handleContactForm(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.");
    event.target.reset();
}
