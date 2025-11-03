// カートページのJavaScript

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    setupCheckoutButton();
});

// カートを表示
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    
    if (cart.items.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.image_url}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-header">
                    <div class="cart-item-info">
                        <h3>${item.name}</h3>
                        <div class="cart-item-category">${item.isPackage ? 'パッケージ' : getCategoryLabel(item.category)}</div>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="削除">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="cart-item-footer">
                    <div class="cart-item-quantity">
                        <button class="cart-quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity - 1})">-</button>
                        <span class="cart-quantity-value">${item.quantity}</span>
                        <button class="cart-quantity-btn" onclick="updateItemQuantity('${item.id}', ${item.quantity + 1})">+</button>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

// カートサマリーを更新
function updateCartSummary() {
    const subtotal = cart.getSubtotal();
    const shipping = cart.getShippingFee();
    const tax = cart.getTax();
    const total = cart.getTotal();
    
    document.getElementById('subtotal').textContent = formatPrice(subtotal);
    document.getElementById('shipping').textContent = shipping === 0 ? '無料' : formatPrice(shipping);
    document.getElementById('tax').textContent = formatPrice(tax);
    document.getElementById('total').textContent = formatPrice(total);
}

// カテゴリーラベルを取得
function getCategoryLabel(category) {
    const labels = {
        'furniture': '家具',
        'appliance': '家電'
    };
    return labels[category] || category;
}

// カートから削除
function removeFromCart(itemId) {
    if (confirm('この商品をカートから削除しますか？')) {
        cart.removeItem(itemId);
        displayCart();
    }
}

// 数量を更新
function updateItemQuantity(itemId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(itemId);
        return;
    }
    
    cart.updateQuantity(itemId, newQuantity);
    displayCart();
}

// チェックアウトボタンのセットアップ
function setupCheckoutButton() {
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.items.length === 0) {
            alert('カートに商品がありません。');
            return;
        }
        window.location.href = 'checkout.html';
    });
}
