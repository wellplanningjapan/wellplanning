

let allProducts = [];
let allPackages = [];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
    await loadPackages();
    await loadProducts();
    setupFilterButtons();
});

// パッケージを読み込み
async function loadPackages() {
    try {
        const response = await fetch('tables/packages?limit=100');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allPackages = data.data || [];
        
       // カスタム画像URLを設定
allPackages.forEach(pkg => {
     pkg.image_url = '/images/hotel-room.jpg'; // 👈 相対パスに修正
 });

displayPackages(allPackages);
        });
        
        displayPackages(allPackages);
    } catch (error) {
        console.error('パッケージの読み込みエラー:', error);
        allPackages = [];
        displayPackages([]);
    }
}

// パッケージを表示
function displayPackages(packages) {
    const packagesGrid = document.getElementById('packages-grid');
    
    if (packages.length === 0) {
        packagesGrid.innerHTML = `<p class="no-products">${i18n.translate('message.noProducts')}</p>`;
        return;
    }

    packagesGrid.innerHTML = packages.map(pkg => {
        const isComingSoon = pkg.id === 'package_1' || pkg.name.includes('スターター');
        const comingSoonBadge = isComingSoon ? `<div class="coming-soon-badge">${i18n.currentLanguage === 'ja' ? '準備中' : 'Coming Soon'}</div>` : '';
        const cardClass = isComingSoon ? 'package-card coming-soon' : 'package-card';
        const cardOnclick = isComingSoon ? '' : `onclick="addPackageToCart('${pkg.id}')"`;
        
        return `
        <div class="${cardClass}" ${cardOnclick}>
            ${comingSoonBadge}
            <img src="${pkg.image_url}" alt="${i18n.translatePackageName(pkg.id, pkg.name)}" class="package-image">
            <div class="package-content">
                <h3 class="package-name">${i18n.translatePackageName(pkg.id, pkg.name)}</h3>
                <p class="package-description">${i18n.translatePackageDescription(pkg.id, pkg.description)}</p>
                <div class="package-price">${formatPrice(pkg.price)}</div>
                <div class="package-items">
                    <div class="package-items-label" data-i18n="packages.items">${i18n.translate('packages.items')}</div>
                    <div class="package-items-count">${pkg.items ? pkg.items.length : 0}${i18n.translate('packages.items.count')}</div>
                </div>
                ${isComingSoon ? 
                    `<button class="btn btn-secondary" disabled>
                        <i class="fas fa-clock"></i> <span>${i18n.currentLanguage === 'ja' ? '準備中' : 'Coming Soon'}</span>
                    </button>` :
                    `<button class="btn btn-primary" onclick="event.stopPropagation(); addPackageToCart('${pkg.id}')">
                        <i class="fas fa-shopping-cart"></i> <span data-i18n="packages.addToCart">${i18n.translate('packages.addToCart')}</span>
                    </button>`
                }
            </div>
        </div>
        `;
    }).join('');
}

// 商品を読み込み
async function loadProducts() {
    try {
        const response = await fetch('tables/products?limit=100');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        allProducts = data.data || [];
        displayProducts(allProducts);
    } catch (error) {
        console.error('商品の読み込みエラー:', error);
        allProducts = [];
        displayProducts([]);
    }
}

// 商品を表示
function displayProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = `<p class="no-products">${i18n.translate('message.noProducts')}</p>`;
        return;
    }

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" onclick="goToProductDetail('${product.id}')">
            <img src="${product.image_url}" alt="${i18n.translateProductName(product.id, product.name)}" class="product-image">
            <div class="product-content">
                <div class="product-category">${i18n.translateCategoryLabel(product.category)}</div>
                <h3 class="product-name">${i18n.translateProductName(product.id, product.name)}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn btn-primary" onclick="event.stopPropagation(); addProductToCart('${product.id}')">
                    <i class="fas fa-shopping-cart"></i> <span data-i18n="products.addToCart">${i18n.translate('products.addToCart')}</span>
                </button>
            </div>
        </div>
    `).join('');
}

// フィルターボタンのセットアップ
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // アクティブクラスの切り替え
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // フィルター処理
            const filter = btn.getAttribute('data-filter');
            let filteredProducts = allProducts;

            if (filter !== 'all') {
                filteredProducts = allProducts.filter(product => product.category === filter);
            }

            displayProducts(filteredProducts);
        });
    });
}

// カテゴリーラベルを取得
function getCategoryLabel(category) {
    const labels = {
        'furniture': '家具',
        'appliance': '家電'
    };
    return labels[category] || category;
}

// 商品詳細ページへ移動
function goToProductDetail(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// 商品をカートに追加
function addProductToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
        cart.addItem(product, 1);
    }
}

// パッケージをカートに追加
function addPackageToCart(packageId) {
    const pkg = allPackages.find(p => p.id === packageId);
    if (pkg) {
        cart.addPackage(pkg, 1);
    }
}

// カタログダウンロードボタン
// ★★★ GoogleフォームのURLをここに設定してください ★★★
// 例: const CATALOG_FORM_URL = 'https://forms.gle/xxxxx';
const CATALOG_FORM_URL = '#'; // ← ここにGoogleフォームのURLを入れてください

document.addEventListener('DOMContentLoaded', () => {
    const catalogBtn = document.getElementById('catalog-download-btn');
    if (catalogBtn) {
        catalogBtn.href = CATALOG_FORM_URL;
        // 外部リンクの場合は新しいタブで開く
        if (CATALOG_FORM_URL !== '#') {
            catalogBtn.target = '_blank';
        }
    }
});

// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
