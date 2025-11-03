// 多言語対応システム (i18n = internationalization)

class I18n {
    constructor() {
        this.currentLanguage = this.loadLanguage();
        this.init();
    }

    // 保存された言語を読み込み（デフォルト: 日本語）
    loadLanguage() {
        return localStorage.getItem('wellplanning_language') || 'ja';
    }

    // 言語を保存
    saveLanguage(lang) {
        localStorage.setItem('wellplanning_language', lang);
        this.currentLanguage = lang;
    }

    // 初期化
    init() {
        this.updateLanguage();
        this.updateLanguageButton();
    }

    // 言語を切り替え
    switchLanguage() {
        const newLang = this.currentLanguage === 'ja' ? 'en' : 'ja';
        this.saveLanguage(newLang);
        this.updateLanguage();
        this.updateLanguageButton();
        
        // ページ固有の更新処理
        this.reloadPageContent();
    }

    // ページ内容を更新
    updateLanguage() {
        // data-i18n属性を持つ全ての要素を更新
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        });

        // HTML lang属性を更新
        document.documentElement.lang = this.currentLanguage;
    }

    // 翻訳を取得
    translate(key) {
        return translations[this.currentLanguage][key] || key;
    }

    // 言語ボタンを更新
    updateLanguageButton() {
        const langBtn = document.getElementById('language-toggle');
        if (langBtn) {
            if (this.currentLanguage === 'ja') {
                langBtn.innerHTML = '<i class="fas fa-globe"></i> EN';
                langBtn.title = 'Switch to English';
            } else {
                langBtn.innerHTML = '<i class="fas fa-globe"></i> 日本語';
                langBtn.title = '日本語に切り替え';
            }
        }
    }

    // ページ固有の内容を再読み込み
    reloadPageContent() {
        // 商品データが読み込まれている場合は再表示
        if (typeof allProducts !== 'undefined' && allProducts.length > 0) {
            displayProducts(allProducts);
        }
        
        // パッケージデータが読み込まれている場合は再表示
        if (typeof allPackages !== 'undefined' && allPackages.length > 0) {
            displayPackages(allPackages);
        }

        // 商品詳細ページの場合
        if (typeof currentProduct !== 'undefined' && currentProduct) {
            displayProductDetail(currentProduct);
        }

        // 関連商品の場合
        if (typeof relatedProducts !== 'undefined' && relatedProducts.length > 0) {
            displayRelatedProducts(relatedProducts);
        }

        // カートページの場合
        if (document.getElementById('cart-items')) {
            displayCart();
        }

        // チェックアウトページの場合
        if (document.getElementById('order-items')) {
            displayOrderSummary();
        }
    }

    // 商品名を翻訳
    translateProductName(productId, defaultName) {
        if (productTranslations[this.currentLanguage] && 
            productTranslations[this.currentLanguage][productId]) {
            return productTranslations[this.currentLanguage][productId].name;
        }
        return defaultName;
    }

    // 商品説明を翻訳
    translateProductDescription(productId, defaultDescription) {
        if (productTranslations[this.currentLanguage] && 
            productTranslations[this.currentLanguage][productId]) {
            return productTranslations[this.currentLanguage][productId].description;
        }
        return defaultDescription;
    }

    // サブカテゴリーを翻訳
    translateSubcategory(productId, defaultSubcategory) {
        if (productTranslations[this.currentLanguage] && 
            productTranslations[this.currentLanguage][productId]) {
            return productTranslations[this.currentLanguage][productId].subcategory;
        }
        return defaultSubcategory;
    }

    // パッケージ名を翻訳
    translatePackageName(packageId, defaultName) {
        if (packageTranslations[this.currentLanguage] && 
            packageTranslations[this.currentLanguage][packageId]) {
            return packageTranslations[this.currentLanguage][packageId].name;
        }
        return defaultName;
    }

    // パッケージ説明を翻訳
    translatePackageDescription(packageId, defaultDescription) {
        if (packageTranslations[this.currentLanguage] && 
            packageTranslations[this.currentLanguage][packageId]) {
            return packageTranslations[this.currentLanguage][packageId].description;
        }
        return defaultDescription;
    }

    // カテゴリーラベルを翻訳
    translateCategoryLabel(category) {
        return this.translate(`category.${category}`);
    }

    // 在庫状態を翻訳
    translateStockStatus(stock) {
        if (stock === 0) {
            return this.translate('product.stock.out');
        } else if (stock <= 5) {
            return `${this.translate('product.stock.low')} ${stock}${this.currentLanguage === 'ja' ? '点' : ' left'}`;
        } else {
            return this.translate('product.stock.available');
        }
    }
}

// グローバルインスタンスを作成
const i18n = new I18n();

// DOMが読み込まれた後に言語ボタンのイベントリスナーを設定
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            i18n.switchLanguage();
        });
    }
});
