// 多言語対応の翻訳データ

const translations = {
    ja: {
        // ヘッダー
        'nav.home': 'ホーム',
        'nav.packages': 'パッケージ',
        'nav.about': '私たちについて',
        
        // ヒーローセクション
        'hero.title': 'ホテルライクな暮らしを、<br>初日から。',
        'hero.subtitle': '洗練された空間で、理想の生活を始めませんか？',
        'hero.cta': 'パッケージを見る',
        
        // パッケージセクション
        'packages.title': 'おすすめパッケージ',
        'packages.subtitle': '新生活に必要な家具・家電をワンストップで。',
        'packages.items': '含まれる商品',
        'packages.items.count': '点',
        'packages.addToCart': 'カートに追加',
        
        // 商品セクション
        'products.title': '商品一覧',
        'filter.all': 'すべて',
        'filter.furniture': '家具',
        'filter.appliance': '家電',
        'products.addToCart': 'カートに追加',
        
        // カテゴリー
        'category.furniture': '家具',
        'category.appliance': '家電',
        
        // カタログセクション
        'catalog.title': 'カタログダウンロード',
        'catalog.description': '詳細なパッケージ情報や商品カタログをダウンロードいただけます。',
        'catalog.button': 'カタログをダウンロード',
        'catalog.note': '※ダウンロードにはメールアドレスの登録が必要です',
        
        // Aboutセクション
        'about.title': 'Well Planningについて',
        'about.description1': 'Well Planningは、ホテルライクな暮らしをコンセプトに、洗練されたインテリアコーディネートサービスを提供しています。',
        'about.description2': '新生活を始める方、引越しを考えている方、お部屋の模様替えをしたい方に、厳選された家具・家電をパッケージでご提供。初日から快適で美しい暮らしを実現します。',
        'about.feature1.title': 'ワンストップ',
        'about.feature1.text': '必要なものが全て揃うパッケージ',
        'about.feature2.title': '洗練されたデザイン',
        'about.feature2.text': 'プロが厳選した上質な家具・家電',
        'about.feature3.title': '迅速な配送',
        'about.feature3.text': 'スムーズな新生活スタートをサポート',
        
        // フッター
        'footer.tagline': 'ホテルライクな暮らしを、初日から。',
        'footer.links': 'リンク',
        'footer.contact': 'お問い合わせ',
        'footer.followUs': 'Follow Us',
        'footer.scanQR': 'スキャンしてフォロー',
        'footer.copyright': '© 2024 Well Planning. All rights reserved.',
        
        // カートページ
        'cart.title': 'ショッピングカート',
        'cart.empty': 'カートは空です',
        'cart.continueShopping': '商品を見る',
        'cart.orderSummary': 'ご注文内容',
        'cart.subtotal': '小計',
        'cart.shipping': '配送料',
        'cart.tax': '消費税',
        'cart.total': '合計',
        'cart.checkout': 'レジに進む',
        'cart.keepShopping': 'お買い物を続ける',
        'cart.remove': '削除',
        'cart.package': 'パッケージ',
        'cart.free': '無料',
        
        // 商品詳細ページ
        'product.stock.available': '在庫あり',
        'product.stock.low': '残り',
        'product.stock.out': '在庫切れ',
        'product.quantity': '数量:',
        'product.addToCart': 'カートに追加',
        'product.features.title': '商品の特徴',
        'product.feature1': '高品質な素材を使用',
        'product.feature2': '洗練されたデザイン',
        'product.feature3': '安心の1年間保証',
        'product.feature4': '配送・組立サポート対応',
        'product.relatedProducts': '関連商品',
        'product.notFound': '商品が見つかりませんでした。',
        'product.backToHome': 'トップページへ戻る',
        
        // チェックアウトページ
        'checkout.step1': 'お客様情報',
        'checkout.step2': '配送情報',
        'checkout.step3': 'お支払い方法',
        'checkout.step4': '注文確認',
        'checkout.customerInfo.title': 'お客様情報',
        'checkout.name': 'お名前',
        'checkout.email': 'メールアドレス',
        'checkout.phone': '電話番号',
        'checkout.shippingInfo.title': '配送情報',
        'checkout.postalCode': '郵便番号',
        'checkout.prefecture': '都道府県',
        'checkout.city': '市区町村',
        'checkout.address': '番地・建物名',
        'checkout.deliveryDate': '配送希望日',
        'checkout.paymentInfo.title': 'お支払い方法',
        'checkout.payment.creditCard': 'クレジットカード',
        'checkout.payment.bankTransfer': '銀行振込',
        'checkout.payment.convenience': 'コンビニ決済',
        'checkout.payment.cod': '代金引換',
        'checkout.orderConfirm.title': '注文確認',
        'checkout.orderConfirm.customer': 'お客様情報',
        'checkout.orderConfirm.shipping': '配送先',
        'checkout.orderConfirm.payment': 'お支払い方法',
        'checkout.terms': '利用規約とプライバシーポリシーに同意する',
        'checkout.submit': '注文を確定する',
        'checkout.next': '次へ',
        'checkout.back': '戻る',
        'checkout.required': '*',
        'checkout.selectPrefecture': '選択してください',
        'checkout.success.title': 'ご注文ありがとうございます！',
        'checkout.success.orderNumber': '注文番号:',
        'checkout.success.message': 'ご登録いただいたメールアドレスに確認メールをお送りしました。',
        'checkout.success.backToHome': 'トップページへ戻る',
        
        // メッセージ
        'message.addedToCart': 'をカートに追加しました',
        'message.loading': '読み込み中...',
        'message.error': 'エラーが発生しました',
        'message.noProducts': '商品が見つかりませんでした。',
        'message.confirmRemove': 'この商品をカートから削除しますか？',
        'message.emptyCart': 'カートに商品がありません。',
        'message.fillRequired': '必須項目を入力してください。',
        'message.agreeTerms': '利用規約とプライバシーポリシーに同意してください。',
    },
    
    en: {
        // Header
        'nav.home': 'Home',
        'nav.packages': 'Packages',
        'nav.about': 'About Us',
        
        // Hero Section
        'hero.title': 'Hotel-like living,<br>from day one.',
        'hero.subtitle': 'Start your ideal life in a refined space.',
        'hero.cta': 'View Packages',
        
        // Packages Section
        'packages.title': 'Recommended Packages',
        'packages.subtitle': 'Everything you need for your new life in one place.',
        'packages.items': 'Included Items',
        'packages.items.count': ' items',
        'packages.addToCart': 'Add to Cart',
        
        // Products Section
        'products.title': 'Products',
        'filter.all': 'All',
        'filter.furniture': 'Furniture',
        'filter.appliance': 'Appliances',
        'products.addToCart': 'Add to Cart',
        
        // Categories
        'category.furniture': 'Furniture',
        'category.appliance': 'Appliance',
        
        // Catalog Section
        'catalog.title': 'Download Catalog',
        'catalog.description': 'Download detailed package information and product catalogs.',
        'catalog.button': 'Download Catalog',
        'catalog.note': '* Email registration required for download',
        
        // About Section
        'about.title': 'About Well Planning',
        'about.description1': 'Well Planning provides refined interior coordination services with the concept of hotel-like living.',
        'about.description2': 'For those starting a new life, considering moving, or wanting to redecorate their room, we offer carefully selected furniture and appliances in packages. Experience comfortable and beautiful living from day one.',
        'about.feature1.title': 'One-Stop',
        'about.feature1.text': 'Packages with everything you need',
        'about.feature2.title': 'Refined Design',
        'about.feature2.text': 'Premium furniture & appliances selected by professionals',
        'about.feature3.title': 'Fast Delivery',
        'about.feature3.text': 'Supporting a smooth start to your new life',
        
        // Footer
        'footer.tagline': 'Hotel-like living, from day one.',
        'footer.links': 'Links',
        'footer.contact': 'Contact',
        'footer.followUs': 'Follow Us',
        'footer.scanQR': 'Scan to Follow',
        'footer.copyright': '© 2024 Well Planning. All rights reserved.',
        
        // Cart Page
        'cart.title': 'Shopping Cart',
        'cart.empty': 'Your cart is empty',
        'cart.continueShopping': 'View Products',
        'cart.orderSummary': 'Order Summary',
        'cart.subtotal': 'Subtotal',
        'cart.shipping': 'Shipping',
        'cart.tax': 'Tax',
        'cart.total': 'Total',
        'cart.checkout': 'Proceed to Checkout',
        'cart.keepShopping': 'Continue Shopping',
        'cart.remove': 'Remove',
        'cart.package': 'Package',
        'cart.free': 'Free',
        
        // Product Detail Page
        'product.stock.available': 'In Stock',
        'product.stock.low': 'Only',
        'product.stock.out': 'Out of Stock',
        'product.quantity': 'Quantity:',
        'product.addToCart': 'Add to Cart',
        'product.features.title': 'Product Features',
        'product.feature1': 'High-quality materials',
        'product.feature2': 'Refined design',
        'product.feature3': '1-year warranty',
        'product.feature4': 'Delivery & assembly support',
        'product.relatedProducts': 'Related Products',
        'product.notFound': 'Product not found.',
        'product.backToHome': 'Back to Home',
        
        // Checkout Page
        'checkout.step1': 'Customer Info',
        'checkout.step2': 'Shipping',
        'checkout.step3': 'Payment',
        'checkout.step4': 'Confirmation',
        'checkout.customerInfo.title': 'Customer Information',
        'checkout.name': 'Full Name',
        'checkout.email': 'Email Address',
        'checkout.phone': 'Phone Number',
        'checkout.shippingInfo.title': 'Shipping Information',
        'checkout.postalCode': 'Postal Code',
        'checkout.prefecture': 'State/Prefecture',
        'checkout.city': 'City',
        'checkout.address': 'Address',
        'checkout.deliveryDate': 'Preferred Delivery Date',
        'checkout.paymentInfo.title': 'Payment Method',
        'checkout.payment.creditCard': 'Credit Card',
        'checkout.payment.bankTransfer': 'Bank Transfer',
        'checkout.payment.convenience': 'Convenience Store',
        'checkout.payment.cod': 'Cash on Delivery',
        'checkout.orderConfirm.title': 'Order Confirmation',
        'checkout.orderConfirm.customer': 'Customer Information',
        'checkout.orderConfirm.shipping': 'Shipping Address',
        'checkout.orderConfirm.payment': 'Payment Method',
        'checkout.terms': 'I agree to the Terms of Service and Privacy Policy',
        'checkout.submit': 'Place Order',
        'checkout.next': 'Next',
        'checkout.back': 'Back',
        'checkout.required': '*',
        'checkout.selectPrefecture': 'Please select',
        'checkout.success.title': 'Thank you for your order!',
        'checkout.success.orderNumber': 'Order Number:',
        'checkout.success.message': 'A confirmation email has been sent to your registered email address.',
        'checkout.success.backToHome': 'Back to Home',
        
        // Messages
        'message.addedToCart': ' added to cart',
        'message.loading': 'Loading...',
        'message.error': 'An error occurred',
        'message.noProducts': 'No products found.',
        'message.confirmRemove': 'Remove this item from cart?',
        'message.emptyCart': 'Your cart is empty.',
        'message.fillRequired': 'Please fill in all required fields.',
        'message.agreeTerms': 'Please agree to the Terms of Service and Privacy Policy.',
    }
};

// 商品データの翻訳
const productTranslations = {
    ja: {
        'product_1': {
            name: 'モダンソファ',
            description: 'ホテルライクな空間を演出する上質なモダンソファ。ゆったりとした座り心地と洗練されたデザインが特徴です。',
            subcategory: 'リビング'
        },
        'product_2': {
            name: 'ワークデスク',
            description: 'シンプルで機能的なワークデスク。在宅勤務にも最適な広々とした作業スペースを提供します。',
            subcategory: 'オフィス'
        },
        'product_3': {
            name: 'プレミアムベッド',
            description: '上質な睡眠を約束するプレミアムベッド。マットレス付きで快適な眠りをサポートします。',
            subcategory: '寝室'
        },
        'product_4': {
            name: 'ダイニングテーブルセット',
            description: '4人掛けのダイニングテーブルとチェアのセット。家族での食事時間を豊かにします。',
            subcategory: 'ダイニング'
        },
        'product_5': {
            name: 'テレビボード',
            description: 'シンプルで収納力のあるテレビボード。リビングをスッキリと整理整頓できます。',
            subcategory: 'リビング'
        },
        'product_6': {
            name: '冷蔵庫（300L）',
            description: 'エネルギー効率の高い300L冷蔵庫。静音設計で快適な生活をサポートします。',
            subcategory: 'キッチン家電'
        },
        'product_7': {
            name: '電子レンジ',
            description: '多機能電子レンジ。オーブン機能付きで料理の幅が広がります。',
            subcategory: 'キッチン家電'
        },
        'product_8': {
            name: '洗濯機（8kg）',
            description: '静音設計の全自動洗濯機。省エネ機能搭載で経済的です。',
            subcategory: '生活家電'
        },
        'product_9': {
            name: '掃除機',
            description: 'コードレススティック掃除機。軽量で取り回しやすく、毎日の掃除が楽になります。',
            subcategory: '生活家電'
        },
        'product_10': {
            name: 'エアコン',
            description: '省エネ性能の高いエアコン。一年中快適な室温を保ちます。',
            subcategory: '空調家電'
        },
        'product_11': {
            name: 'ドライヤー',
            description: '速乾性の高いプロ仕様ドライヤー。髪に優しいイオン機能付き。',
            subcategory: '生活家電'
        },
        'product_12': {
            name: '電源タップ（6口）',
            description: '安全設計の電源タップ。個別スイッチ付きで便利です。',
            subcategory: 'その他'
        }
    },
    en: {
        'product_1': {
            name: 'Modern Sofa',
            description: 'A premium modern sofa that creates a hotel-like atmosphere. Features comfortable seating and refined design.',
            subcategory: 'Living Room'
        },
        'product_2': {
            name: 'Work Desk',
            description: 'Simple and functional work desk. Provides spacious workspace ideal for remote work.',
            subcategory: 'Office'
        },
        'product_3': {
            name: 'Premium Bed',
            description: 'Premium bed that promises quality sleep. Comes with mattress for comfortable rest.',
            subcategory: 'Bedroom'
        },
        'product_4': {
            name: 'Dining Table Set',
            description: 'Dining table set for 4 people with chairs. Enriches family meal times.',
            subcategory: 'Dining'
        },
        'product_5': {
            name: 'TV Stand',
            description: 'Simple TV stand with ample storage. Keeps your living room neat and organized.',
            subcategory: 'Living Room'
        },
        'product_6': {
            name: 'Refrigerator (300L)',
            description: 'Energy-efficient 300L refrigerator. Quiet design supports comfortable living.',
            subcategory: 'Kitchen Appliances'
        },
        'product_7': {
            name: 'Microwave Oven',
            description: 'Multi-function microwave. With oven function to expand your cooking options.',
            subcategory: 'Kitchen Appliances'
        },
        'product_8': {
            name: 'Washing Machine (8kg)',
            description: 'Quiet fully-automatic washing machine. Energy-saving and economical.',
            subcategory: 'Home Appliances'
        },
        'product_9': {
            name: 'Vacuum Cleaner',
            description: 'Cordless stick vacuum. Lightweight and easy to handle, making daily cleaning easier.',
            subcategory: 'Home Appliances'
        },
        'product_10': {
            name: 'Air Conditioner',
            description: 'High energy-efficiency air conditioner. Maintains comfortable room temperature year-round.',
            subcategory: 'Climate Control'
        },
        'product_11': {
            name: 'Hair Dryer',
            description: 'Professional-grade hair dryer with fast drying. Ion function for hair care.',
            subcategory: 'Home Appliances'
        },
        'product_12': {
            name: 'Power Strip (6 outlets)',
            description: 'Safety-designed power strip. Convenient with individual switches.',
            subcategory: 'Other'
        }
    }
};

// パッケージデータの翻訳
const packageTranslations = {
    ja: {
        'package_1': {
            name: 'スターターパッケージ',
            description: '新生活を始める方に最適な基本セット。必要最低限の家具・家電を揃えました。'
        },
        'package_2': {
            name: 'スタンダードパッケージ',
            description: '充実した生活を送るための充実セット。リビング、寝室、キッチンの基本を網羅します。'
        },
        'package_3': {
            name: 'プレミアムパッケージ',
            description: 'ホテルライクな暮らしを完璧に再現するプレミアムセット。全ての家具・家電が含まれています。'
        }
    },
    en: {
        'package_1': {
            name: 'Starter Package',
            description: 'Basic set perfect for starting a new life. Includes essential furniture and appliances.'
        },
        'package_2': {
            name: 'Standard Package',
            description: 'Complete set for a fulfilling life. Covers basics for living room, bedroom, and kitchen.'
        },
        'package_3': {
            name: 'Premium Package',
            description: 'Premium set that perfectly recreates hotel-like living. Includes all furniture and appliances.'
        }
    }
};
