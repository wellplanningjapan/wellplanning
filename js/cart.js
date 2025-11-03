// ショッピングカート管理

class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    // ローカルストレージからカートを読み込み
    loadCart() {
        const cartData = localStorage.getItem('wellplanning_cart');
        return cartData ? JSON.parse(cartData) : [];
    }

    // ローカルストレージにカートを保存
    saveCart() {
        localStorage.setItem('wellplanning_cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // カート数量を更新
    updateCartCount() {
        const count = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.textContent = count;
            el.style.display = count > 0 ? 'block' : 'none';
        });
    }

    // 商品を追加
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                category: product.category,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.showNotification(`${product.name}をカートに追加しました`);
    }

    // パッケージを追加
    addPackage(pkg, quantity = 1) {
        const existingItem = this.items.find(item => item.id === pkg.id && item.isPackage);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: pkg.id,
                name: pkg.name,
                price: pkg.price,
                image_url: pkg.image_url,
                quantity: quantity,
                isPackage: true
            });
        }
        
        this.saveCart();
        this.showNotification(`${pkg.name}をカートに追加しました`);
    }

    // 商品を削除
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.saveCart();
    }

    // 数量を更新
    updateQuantity(id, quantity) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
        }
    }

    // カートをクリア
    clearCart() {
        this.items = [];
        this.saveCart();
    }

    // 合計金額を計算
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // 配送料を計算
    getShippingFee() {
        const subtotal = this.getSubtotal();
        return subtotal >= 100000 ? 0 : 5000; // 10万円以上で送料無料
    }

    // 消費税を計算
    getTax() {
        const subtotal = this.getSubtotal();
        return Math.floor(subtotal * 0.1);
    }

    // 合計金額を計算
    getTotal() {
        return this.getSubtotal() + this.getShippingFee() + this.getTax();
    }

    // 通知を表示
    showNotification(message) {
        // 既存の通知を削除
        const existingNotification = document.querySelector('.cart-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // 新しい通知を作成
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(notification);

        // スタイルを追加（初回のみ）
        if (!document.getElementById('cart-notification-style')) {
            const style = document.createElement('style');
            style.id = 'cart-notification-style';
            style.textContent = `
                .cart-notification {
                    position: fixed;
                    top: 100px;
                    right: 20px;
                    background-color: var(--primary-color);
                    color: white;
                    padding: 15px 25px;
                    border-radius: 8px;
                    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    z-index: 10000;
                    animation: slideInRight 0.3s ease, slideOutRight 0.3s ease 2.7s;
                }
                @keyframes slideInRight {
                    from {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOutRight {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(400px);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        // 3秒後に削除
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// グローバルカートインスタンスを作成
const cart = new Cart();

// 金額をフォーマット
function formatPrice(price) {
    return `¥${price.toLocaleString()}`;
}

// ハンバーガーメニューの処理
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // メニュー項目をクリックしたら閉じる
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});
