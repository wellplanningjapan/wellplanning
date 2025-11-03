// チェックアウトページのJavaScript

let currentStep = 1;
let formData = {};

// ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', () => {
    // カートが空の場合はカートページへリダイレクト
    if (cart.items.length === 0) {
        alert('カートに商品がありません。');
        window.location.href = 'cart.html';
        return;
    }

    displayOrderSummary();
    setupStepNavigation();
    setupFormSubmit();
});

// 注文サマリーを表示
function displayOrderSummary() {
    const orderItemsContainer = document.getElementById('order-items');
    
    orderItemsContainer.innerHTML = cart.items.map(item => `
        <div class="order-item">
            <img src="${item.image_url}" alt="${item.name}" class="order-item-image">
            <div class="order-item-info">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-details">数量: ${item.quantity}</div>
                <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
        </div>
    `).join('');
    
    updateOrderSummary();
}

// 注文サマリーを更新
function updateOrderSummary() {
    const subtotal = cart.getSubtotal();
    const shipping = cart.getShippingFee();
    const tax = cart.getTax();
    const total = cart.getTotal();
    
    document.getElementById('summary-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('summary-shipping').textContent = shipping === 0 ? '無料' : formatPrice(shipping);
    document.getElementById('summary-tax').textContent = formatPrice(tax);
    document.getElementById('summary-total').textContent = formatPrice(total);
}

// ステップナビゲーションのセットアップ
function setupStepNavigation() {
    // 次へボタン
    document.querySelectorAll('.next-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const currentSection = e.target.closest('.form-section');
            
            // バリデーション
            if (!validateSection(currentSection)) {
                return;
            }
            
            // フォームデータを保存
            saveFormData(currentSection);
            
            const nextSectionId = e.target.getAttribute('data-next');
            goToStep(nextSectionId);
        });
    });
    
    // 戻るボタン
    document.querySelectorAll('.prev-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const prevSectionId = e.target.getAttribute('data-prev');
            goToStep(prevSectionId);
        });
    });
}

// セクションのバリデーション
function validateSection(section) {
    const inputs = section.querySelectorAll('input[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        alert('必須項目を入力してください。');
    }
    
    return isValid;
}

// フォームデータを保存
function saveFormData(section) {
    const inputs = section.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (input.type === 'radio') {
            if (input.checked) {
                formData[input.name] = input.value;
            }
        } else {
            formData[input.name] = input.value;
        }
    });
}

// ステップに移動
function goToStep(sectionId) {
    // すべてのセクションを非表示
    document.querySelectorAll('.form-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 指定されたセクションを表示
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // ステップインジケーターを更新
    updateStepIndicator(sectionId);
    
    // 注文確認ページの場合は確認情報を表示
    if (sectionId === 'order-confirm') {
        displayConfirmation();
    }
}

// ステップインジケーターを更新
function updateStepIndicator(sectionId) {
    const stepMap = {
        'customer-info': 1,
        'shipping-info': 2,
        'payment-info': 3,
        'order-confirm': 4
    };
    
    currentStep = stepMap[sectionId] || 1;
    
    document.querySelectorAll('.step').forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// 確認情報を表示
function displayConfirmation() {
    // お客様情報
    document.getElementById('confirm-customer').innerHTML = `
        <p><strong>お名前:</strong> ${formData.name || ''}</p>
        <p><strong>メールアドレス:</strong> ${formData.email || ''}</p>
        <p><strong>電話番号:</strong> ${formData.phone || ''}</p>
    `;
    
    // 配送先
    document.getElementById('confirm-shipping').innerHTML = `
        <p><strong>郵便番号:</strong> ${formData.postalCode || ''}</p>
        <p><strong>都道府県:</strong> ${formData.prefecture || ''}</p>
        <p><strong>市区町村:</strong> ${formData.city || ''}</p>
        <p><strong>番地・建物名:</strong> ${formData.address || ''}</p>
        ${formData.deliveryDate ? `<p><strong>配送希望日:</strong> ${formData.deliveryDate}</p>` : ''}
    `;
    
    // お支払い方法
    const paymentLabels = {
        'credit-card': 'クレジットカード',
        'bank-transfer': '銀行振込',
        'convenience-store': 'コンビニ決済',
        'cash-on-delivery': '代金引換'
    };
    document.getElementById('confirm-payment').innerHTML = `
        <p><strong>お支払い方法:</strong> ${paymentLabels[formData.payment] || ''}</p>
    `;
}

// フォーム送信のセットアップ
function setupFormSubmit() {
    const form = document.getElementById('checkout-form');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 利用規約の確認
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            alert('利用規約とプライバシーポリシーに同意してください。');
            return;
        }
        
        // 注文を送信
        await submitOrder();
    });
}

// 注文を送信
async function submitOrder() {
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 処理中...';
    
    try {
        // 実際のプロジェクトでは、ここでサーバーに注文を送信します
        // この例では、シミュレーションとして1秒待機します
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // 注文番号を生成
        const orderNumber = 'WP' + Date.now().toString().slice(-8);
        
        // カートをクリア
        cart.clearCart();
        
        // 成功モーダルを表示
        showSuccessModal(orderNumber);
        
    } catch (error) {
        console.error('注文送信エラー:', error);
        alert('注文の送信に失敗しました。もう一度お試しください。');
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> 注文を確定する';
    }
}

// 成功モーダルを表示
function showSuccessModal(orderNumber) {
    const modal = document.getElementById('success-modal');
    document.getElementById('order-number').textContent = orderNumber;
    modal.classList.add('active');
}
