// 商品詳細ページのJavaScript

let currentProduct = null;
let relatedProducts = [];

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        await loadProductDetail(productId);
    } else {
        document.getElementById('product-detail').innerHTML = '<p class="error-message">商品が見つかりませんでした。</p>';
    }
});

// 商品詳細を読み込み
async function loadProductDetail(productId) {
    try {
        const response = await fetch(`tables/products/${productId}`);
        
        if (!response.ok) {
            throw new Error('商品が見つかりません');
        }
        
        currentProduct = await response.json();
        displayProductDetail(currentProduct);
        updateBreadcrumb(currentProduct.name);
        await loadRelatedProducts(currentProduct.category);
    } catch (error) {
        console.error('商品の読み込みエラー:', error);
        document.getElementById('product-detail').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <p class="error-message">商品の読み込みに失敗しました。</p>
                <a href="index.html" class="btn btn-primary" style="margin-top: 20px;">トップページへ戻る</a>
            </div>
        `;
    }
}

// 商品詳細を表示
function displayProductDetail(product) {
    const productDetail = document.getElementById('product-detail');
    
    const stockStatus = getStockStatus(product.stock);
    
    productDetail.innerHTML = `
        <img src="${product.image_url}" alt="${product.name}" class="product-detail-image">
        <div class="product-detail-info">
            <div class="product-detail-category">${getCategoryLabel(product.category)} / ${product.subcategory}</div>
            <h1 class="product-detail-name">${product.name}</h1>
            <div class="product-detail-price">${formatPrice(product.price)}</div>
            <p class="product-detail-description">${product.description}</p>
            <div class="product-detail-stock">
                在庫状況: <span class="${stockStatus.class}">${stockStatus.text}</span>
            </div>
            <div class="quantity-selector">
                <label>数量:</label>
                <div class="quantity-controls">
                    <button type="button" class="quantity-btn" onclick="decreaseQuantity()">-</button>
                    <input type="number" id="quantity" class="quantity-input" value="1" min="1" max="${product.stock}" readonly>
                    <button type="button" class="quantity-btn" onclick="increaseQuantity()">+</button>
                </div>
            </div>
            <div class="product-actions">
                <button class="btn btn-accent add-to-cart-btn" onclick="addToCart()" ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart"></i> カートに追加
                </button>
            </div>
            <div class="product-features">
                <h3>商品の特徴</h3>
                <ul class="features-list">
                    <li>高品質な素材を使用</li>
                    <li>洗練されたデザイン</li>
                    <li>安心の1年間保証</li>
                    <li>配送・組立サポート対応</li>
                </ul>
            </div>
        </div>
    `;
}

// 在庫状態を取得
function getStockStatus(stock) {
    if (stock === 0) {
        return { text: '在庫切れ', class: 'stock-out' };
    } else if (stock <= 5) {
        return { text: `残り${stock}点`, class: 'stock-low' };
    } else {
        return { text: '在庫あり', class: 'stock-available' };
    }
}

// カテゴリーラベルを取得
function getCategoryLabel(category) {
    const labels = {
        'furniture': '家具',
        'appliance': '家電'
    };
    return labels[category] || category;
}

// パンくずリストを更新
function updateBreadcrumb(productName) {
    const breadcrumbName = document.getElementById('breadcrumb-name');
    if (breadcrumbName) {
        breadcrumbName.textContent = productName;
    }
    document.title = `${productName} - Well Planning`;
}

// 数量を増やす
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    const maxValue = parseInt(quantityInput.max);
    
    if (currentValue < maxValue) {
        quantityInput.value = currentValue + 1;
    }
}

// 数量を減らす
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    const currentValue = parseInt(quantityInput.value);
    
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
}

// カートに追加
function addToCart() {
    if (!currentProduct) return;
    
    const quantityInput = document.getElementById('quantity');
    const quantity = parseInt(quantityInput.value);
    
    cart.addItem(currentProduct, quantity);
}

// 関連商品を読み込み
async function loadRelatedProducts(category) {
    try {
        const response = await fetch(`tables/products?limit=100`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // 同じカテゴリーで現在の商品を除外
        relatedProducts = (data.data || [])
            .filter(p => p.category === category && p.id !== currentProduct.id)
            .slice(0, 4);
        
        displayRelatedProducts(relatedProducts);
    } catch (error) {
        console.error('関連商品の読み込みエラー:', error);
        relatedProducts = [];
        displayRelatedProducts([]);
    }
}

// 関連商品を表示
function displayRelatedProducts(products) {
    const relatedProductsContainer = document.getElementById('related-products');
    
    if (products.length === 0) {
        relatedProductsContainer.innerHTML = '<p class="no-products">関連商品が見つかりませんでした。</p>';
        return;
    }

    relatedProductsContainer.innerHTML = products.map(product => `
        <div class="product-card" onclick="goToProductDetail('${product.id}')">
            <img src="${product.image_url}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="btn btn-primary" onclick="event.stopPropagation(); addProductToCartFromRelated('${product.id}')">
                    <i class="fas fa-shopping-cart"></i> カートに追加
                </button>
            </div>
        </div>
    `).join('');
}

// 商品詳細ページへ移動
function goToProductDetail(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// 関連商品からカートに追加
function addProductToCartFromRelated(productId) {
    const product = relatedProducts.find(p => p.id === productId);
    if (product) {
        cart.addItem(product, 1);
    }
}
