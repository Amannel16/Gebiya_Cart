const products = [
  {
    id: 1,
    name: "Habesha Kemis Dress",
    price: 4200,
    category: "fashion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20Folk%20wear.jpg",
    rating: 4.8,
    stock: 8,
    badge: "Best Seller",
    description: "Traditional white cotton Habesha dress with colorful woven tibeb trim for holidays and ceremonies."
  },
  {
    id: 2,
    name: "Netela Cotton Shawl",
    price: 1600,
    category: "fashion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20women%20in%20traditional%20netela%20at%20Jerusalem%20market.jpg",
    rating: 4.6,
    stock: 12,
    badge: "Handwoven",
    description: "Lightweight Ethiopian cotton shawl worn over traditional outfits for cultural and formal occasions."
  },
  {
    id: 3,
    name: "Oromo Cultural Outfit",
    price: 3800,
    category: "fashion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oromo%20Cultural%20dressing.jpg",
    rating: 4.7,
    stock: 9,
    badge: "Cultural Wear",
    description: "Oromo-inspired cultural clothing with distinctive colors and patterns for Irreecha and celebrations."
  },
  {
    id: 4,
    name: "Traditional Gabi Wrap",
    price: 2400,
    category: "fashion",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Traditional%20Costume%20-%20National%20Museum%20of%20Ethiopia%20-%20Addis%20Ababa%20-%20Ethiopia%20-%2001%20%288743136699%29.jpg",
    rating: 4.5,
    stock: 6,
    badge: "Classic",
    description: "Warm Ethiopian gabi-style cotton wrap inspired by highland traditional clothing."
  },
  {
    id: 5,
    name: "Jebena Coffee Pot",
    price: 950,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20traditional%20coffee%20pot%28%20Jebena%29.jpg",
    rating: 4.9,
    stock: 10,
    badge: "Coffee Culture",
    description: "Clay Jebena coffee pot for preparing and serving Ethiopian buna in the traditional ceremony."
  },
  {
    id: 6,
    name: "Coffee Ceremony Set",
    price: 2100,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coffee%20ceremony%20of%20Ethiopia%20and%20Eritrea%204.jpg",
    rating: 4.8,
    stock: 7,
    badge: "Top Rated",
    description: "Complete buna ceremony set with Jebena, small cups, and serving pieces for guests and family."
  },
  {
    id: 7,
    name: "Mesob Basket Table",
    price: 3200,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20and%20Eritrean%20Mesob.jpg",
    rating: 4.7,
    stock: 5,
    badge: "Artisan Made",
    description: "Colorful woven Mesob table used for serving injera and shared Ethiopian meals."
  },
  {
    id: 8,
    name: "Harar Woven Basket",
    price: 1200,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harar%20Mesob.jpg",
    rating: 4.4,
    stock: 11,
    badge: "Harar Craft",
    description: "Decorative handwoven basket inspired by Harar craft traditions and home decor."
  },
  {
    id: 9,
    name: "Ethiopian Hand Cross",
    price: 1800,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ethiopian%20-%20Hand%20Cross%20-%20Walters%2061342.jpg",
    rating: 4.6,
    stock: 4,
    badge: "Heritage",
    description: "Intricate Ethiopian hand cross inspired by historic Orthodox metalwork designs."
  },
  {
    id: 10,
    name: "Kebero Drum",
    price: 2800,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Collection%20of%20Ethiopian%20Liturgical%20Drums%20%283424574812%29.jpg",
    rating: 4.5,
    stock: 6,
    badge: "Music",
    description: "Traditional double-headed Kebero drum used in Ethiopian church and cultural music."
  },
  {
    id: 11,
    name: "Krar Lyre",
    price: 3600,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Masinko%20and%20krar.jpg",
    rating: 4.7,
    stock: 3,
    badge: "Musical Craft",
    description: "Ethiopian Krar lyre inspired by azmari music traditions and handmade string instruments."
  },
  {
    id: 12,
    name: "Berbere Spice Set",
    price: 650,
    category: "accessories",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/BerbereOtherIngredients.JPG",
    rating: 4.6,
    stock: 14,
    badge: "Kitchen Staple",
    description: "Aromatic berbere spice blend ingredients for preparing classic Ethiopian stews and sauces."
  }
];

const I18N = {
  en: {
    languageName: "English",
    navHome: "Home",
    navProducts: "Products",
    navFeatures: "Features",
    navCart: "Cart",
    navCheckout: "Secure Order",
    navOrders: "Orders",
    navShop: "Shop",
    heroTag: "Premium Shopping Experience",
    heroTitle: "Shop smarter with <span>Gebiya</span>",
    heroText: "Discover premium products with a smooth shopping experience. Search fast, filter easily, save favorites, and checkout like a real app.",
    shopNow: "Shop Now",
    exploreFeatures: "Explore Features",
    productsReady: "Products Ready",
    smoothUi: "Smooth UI",
    easyShopping: "Easy Shopping",
    topRatedProducts: "Top Rated Products",
    whyGebiya: "Why Gebiya",
    featuresTitle: "Built like a real shopping platform",
    featuresText: "Premium look, smart filtering, wishlist, cart management, coupons, checkout, authentication, and order tracking.",
    fastSearch: "Fast Search",
    fastSearchText: "Find products instantly with live search.",
    smartFilters: "Smart Filters",
    smartFiltersText: "Filter by category and sort by price or rating.",
    wishlist: "Wishlist",
    wishlistText: "Save your favorite items for later.",
    cartSystem: "Cart System",
    cartSystemText: "Manage quantity, remove items, and track total easily.",
    coupons: "Coupons",
    couponsText: "Apply discount codes like SAVE10 during checkout.",
    userAuth: "User Authentication",
    userAuthText: "Register, login, and place orders as a real user.",
    ourCollection: "Our Collection",
    trendingProducts: "Trending Products",
    productsText: "Browse premium picks with category filters, sorting options, and quick-view product modal.",
    searchPlaceholder: "Search products...",
    allCategories: "All Categories",
    fashion: "Fashion",
    electronics: "Electronics",
    footwear: "Footwear",
    accessories: "Accessories",
    sortBy: "Sort By",
    priceLowHigh: "Price: Low to High",
    priceHighLow: "Price: High to Low",
    ratingHighLow: "Rating: High to Low",
    shoppingCart: "Shopping Cart",
    clearCart: "Clear Cart",
    orderSummary: "Order Summary",
    couponCode: "Coupon Code",
    couponPlaceholder: "Enter coupon code",
    apply: "Apply",
    tryCode: "Try:",
    subtotal: "Subtotal",
    discount: "Discount",
    gst: "GST (18%)",
    gstShort: "GST",
    delivery: "Delivery",
    total: "Total",
    totalPayable: "Total Payable",
    proceedCheckout: "Proceed to Checkout",
    secureOrder: "Secure Order",
    checkoutTitle: "Checkout",
    checkoutText: "Fill in your details to place your order successfully.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    emailAddress: "Email Address",
    city: "City",
    address: "Address",
    pincode: "Pincode",
    paymentMethod: "Payment Method",
    fullNamePlaceholder: "Enter full name",
    phonePlaceholder: "Enter phone number",
    emailPlaceholder: "Enter email address",
    cityPlaceholder: "Enter city",
    addressPlaceholder: "Enter full address",
    pincodePlaceholder: "Enter pincode",
    selectPayment: "Select payment method",
    telebirr: "TeleBirr",
    chapa: "Chapa",
    santimpay: "SantimPay",
    placeOrder: "Place Order",
    finalSummary: "Final Summary",
    items: "Items",
    purchaseRecords: "Purchase Records",
    yourOrders: "Your Orders",
    ordersText: "View all placed orders with customer details, payment method, ordered items, tracking status, and total amount.",
    clearOrderHistory: "Clear Order History",
    totalOrders: "Total Orders: {count}",
    finalCtaTitle: "Your Journey Doesn't End Here",
    finalCtaText: "Explore more products or track your next order",
    exploreMore: "Explore More",
    refreshOrders: "Refresh Orders",
    footerText: "Premium e-commerce internship project built with clean UI, smooth UX, authentication, MongoDB orders, and real shopping flow.",
    login: "Login",
    register: "Register",
    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    email: "Email",
    password: "Password",
    emptyProductsTitle: "No products found",
    emptyProductsText: "Try changing search, category, or sorting options.",
    emptyCartTitle: "Your cart is empty",
    emptyCartText: "Looks like you have not added anything yet.",
    emptyWishlistTitle: "Your wishlist is empty",
    emptyWishlistText: "Save your favorite products here.",
    noOrdersTitle: "No orders placed yet",
    noOrdersText: "Your past orders will appear here.",
    loadingOrdersTitle: "Loading orders...",
    loadingOrdersText: "Please wait while we fetch your orders.",
    failedOrdersTitle: "Failed to load orders",
    failedOrdersText: "Make sure backend server is running on port 5000.",
    recentlyAdded: "Recently Added",
    addToCart: "Add to Cart",
    quickView: "Quick View",
    remove: "Remove",
    onlyLeft: "Only {count} left",
    stock: "Stock: {count}",
    stockLabel: "Stock:",
    available: "available",
    badgeLabel: "Badge:",
    addWishlist: "Add Wishlist",
    removeWishlist: "Remove Wishlist",
    orderNumber: "Order #{count}",
    pending: "Pending",
    shipped: "Shipped",
    delivered: "Delivered",
    payment: "Payment:",
    deleteOrder: "Delete Order",
    myOrders: "My Orders",
    logout: "Logout",
    successTitle: "Order Placed Successfully!",
    successText: "Thank you for shopping with Gebiya. Your order has been confirmed.",
    viewOrders: "View Orders",
    toastLanguage: "Language set to {language}",
    toastMaxStock: "Maximum stock limit reached",
    toastAddedCart: "{product} added to cart",
    toastRemovedCart: "{product} removed from cart",
    toastStockExceeded: "Cannot exceed available stock",
    toastRemovedWishlist: "{product} removed from wishlist",
    toastAddedWishlist: "{product} added to wishlist",
    toastAddCartFirst: "Add products to cart first",
    toastEnterCoupon: "Please enter coupon code",
    toastCouponApplied: "Coupon applied successfully",
    toastInvalidCoupon: "Invalid coupon code",
    toastCartEmpty: "Cart is already empty",
    toastCartCleared: "Cart cleared",
    toastFillCheckout: "Please fill all checkout details",
    toastValidPhone: "Enter valid 10-digit phone number",
    toastValidEmail: "Enter valid email address",
    toastValidPincode: "Enter valid 6-digit pincode",
    toastNoOrders: "No orders to clear",
    confirmClearOrders: "Are you sure you want to clear all orders?",
    toastOrderHistoryCleared: "Order history cleared",
    toastFailedClearOrders: "Failed to clear order history",
    toastOrderDeleted: "Order deleted successfully",
    toastFailedDeleteOrder: "Failed to delete order",
    toastOrderMarked: "Order marked as {status}",
    toastFailedStatus: "Failed to update order status",
    toastLoginToOrder: "Please login to place order",
    toastYourCartEmpty: "Your cart is empty",
    toastOrderSaveFailed: "Order could not be saved",
    toastLoggedOut: "Logged out successfully",
    toastLoginSuccess: "Login successful",
    toastLoginFailed: "Login failed",
    toastServerError: "Server error",
    toastRegisterSuccess: "Registered successfully",
    toastRegisterFailed: "Register failed",
    productNames: ["", "Habesha Kemis Dress", "Netela Cotton Shawl", "Oromo Cultural Outfit", "Traditional Gabi Wrap", "Jebena Coffee Pot", "Coffee Ceremony Set", "Mesob Basket Table", "Harar Woven Basket", "Ethiopian Hand Cross", "Kebero Drum", "Krar Lyre", "Berbere Spice Set"],
    productDescriptions: ["", "Traditional white cotton Habesha dress with colorful woven tibeb trim for holidays and ceremonies.", "Lightweight Ethiopian cotton shawl worn over traditional outfits for cultural and formal occasions.", "Oromo-inspired cultural clothing with distinctive colors and patterns for Irreecha and celebrations.", "Warm Ethiopian gabi-style cotton wrap inspired by highland traditional clothing.", "Clay Jebena coffee pot for preparing and serving Ethiopian buna in the traditional ceremony.", "Complete buna ceremony set with Jebena, small cups, and serving pieces for guests and family.", "Colorful woven Mesob table used for serving injera and shared Ethiopian meals.", "Decorative handwoven basket inspired by Harar craft traditions and home decor.", "Intricate Ethiopian hand cross inspired by historic Orthodox metalwork designs.", "Traditional double-headed Kebero drum used in Ethiopian church and cultural music.", "Ethiopian Krar lyre inspired by azmari music traditions and handmade string instruments.", "Aromatic berbere spice blend ingredients for preparing classic Ethiopian stews and sauces."],
    badges: ["", "Best Seller", "Handwoven", "Cultural Wear", "Classic", "Coffee Culture", "Top Rated", "Artisan Made", "Harar Craft", "Heritage", "Music", "Musical Craft", "Kitchen Staple"]
  },
  am: {
    languageName: "Amharic",
    navHome: "መነሻ",
    navProducts: "ምርቶች",
    navFeatures: "ባህሪዎች",
    navCart: "ጋሪ",
    navCheckout: "ክፍያ",
    navOrders: "ትዕዛዞች",
    navShop: "ግዛ",
    heroTag: "የተሻለ የግብይት ተሞክሮ",
    heroTitle: "በ<span>Gebiya</span> በቀላሉ ይግዙ",
    heroText: "ጥራት ያላቸውን ምርቶች በቀላል የግብይት ተሞክሮ ያግኙ። ፈጣን ፍለጋ፣ ቀላል ማጣሪያ፣ የምኞት ዝርዝር እና ክፍያ አለ።",
    shopNow: "አሁን ይግዙ",
    exploreFeatures: "ባህሪዎችን ይመልከቱ",
    productsReady: "ምርቶች ዝግጁ",
    smoothUi: "ቀላል UI",
    easyShopping: "ቀላል ግብይት",
    topRatedProducts: "ከፍተኛ ደረጃ ምርቶች",
    whyGebiya: "ለምን Gebiya",
    featuresTitle: "እንደ እውነተኛ የግብይት መድረክ የተገነባ",
    featuresText: "ዘመናዊ እይታ፣ ማጣሪያ፣ የምኞት ዝርዝር፣ ጋሪ፣ ኩፖን፣ ክፍያ፣ መግቢያ እና ትዕዛዝ መከታተያ።",
    fastSearch: "ፈጣን ፍለጋ",
    fastSearchText: "ምርቶችን በቀጥታ ፍለጋ በፍጥነት ያግኙ።",
    smartFilters: "ብልህ ማጣሪያዎች",
    smartFiltersText: "በምድብ፣ በዋጋ ወይም በደረጃ ያጣሩ።",
    wishlist: "የምኞት ዝርዝር",
    wishlistText: "የወደዱትን ምርት ለኋላ ያስቀምጡ።",
    cartSystem: "የጋሪ ስርዓት",
    cartSystemText: "መጠን ያስተካክሉ፣ ያስወግዱ እና ድምር ይከታተሉ።",
    coupons: "ኩፖኖች",
    couponsText: "በክፍያ ጊዜ እንደ SAVE10 ያሉ ኮዶችን ይጠቀሙ።",
    userAuth: "የተጠቃሚ መግቢያ",
    userAuthText: "ይመዝገቡ፣ ይግቡ እና ትዕዛዝ ያድርጉ።",
    ourCollection: "ስብስባችን",
    trendingProducts: "ተወዳጅ ምርቶች",
    productsText: "ምርቶችን በምድብ ማጣሪያ፣ በመደርደር እና በፈጣን እይታ ይመልከቱ።",
    searchPlaceholder: "ምርቶችን ፈልግ...",
    allCategories: "ሁሉም ምድቦች",
    fashion: "ፋሽን",
    electronics: "ኤሌክትሮኒክስ",
    footwear: "ጫማ",
    accessories: "መለዋወጫዎች",
    sortBy: "መደርደር",
    priceLowHigh: "ዋጋ፡ ከዝቅተኛ ወደ ከፍተኛ",
    priceHighLow: "ዋጋ፡ ከከፍተኛ ወደ ዝቅተኛ",
    ratingHighLow: "ደረጃ፡ ከከፍተኛ ወደ ዝቅተኛ",
    shoppingCart: "የግብይት ጋሪ",
    clearCart: "ጋሪ አጽዳ",
    orderSummary: "የትዕዛዝ ማጠቃለያ",
    couponCode: "የኩፖን ኮድ",
    couponPlaceholder: "የኩፖን ኮድ ያስገቡ",
    apply: "ተግብር",
    tryCode: "ይሞክሩ:",
    subtotal: "ንዑስ ድምር",
    discount: "ቅናሽ",
    gst: "GST (18%)",
    gstShort: "GST",
    delivery: "መላኪያ",
    total: "ጠቅላላ",
    totalPayable: "የሚከፈል ድምር",
    proceedCheckout: "ወደ ክፍያ ቀጥል",
    secureOrder: "ደህንነቱ የተጠበቀ ትዕዛዝ",
    checkoutTitle: "ክፍያ",
    checkoutText: "ትዕዛዝዎን ለማስገባት መረጃዎን ይሙሉ።",
    fullName: "ሙሉ ስም",
    phoneNumber: "ስልክ ቁጥር",
    emailAddress: "ኢሜይል",
    city: "ከተማ",
    address: "አድራሻ",
    pincode: "ፒን ኮድ",
    paymentMethod: "የክፍያ ዘዴ",
    fullNamePlaceholder: "ሙሉ ስም ያስገቡ",
    phonePlaceholder: "ስልክ ቁጥር ያስገቡ",
    emailPlaceholder: "ኢሜይል ያስገቡ",
    cityPlaceholder: "ከተማ ያስገቡ",
    addressPlaceholder: "ሙሉ አድራሻ ያስገቡ",
    pincodePlaceholder: "ፒን ኮድ ያስገቡ",
    selectPayment: "የክፍያ ዘዴ ይምረጡ",
    telebirr: "TeleBirr",
    chapa: "Chapa",
    santimpay: "SantimPay",
    placeOrder: "ትዕዛዝ አስገባ",
    finalSummary: "የመጨረሻ ማጠቃለያ",
    items: "እቃዎች",
    purchaseRecords: "የግዢ መዝገቦች",
    yourOrders: "ትዕዛዞችዎ",
    ordersText: "የደንበኛ መረጃ፣ የክፍያ ዘዴ፣ እቃዎች፣ ሁኔታ እና ድምር ይመልከቱ።",
    clearOrderHistory: "የትዕዛዝ ታሪክ አጽዳ",
    totalOrders: "ጠቅላላ ትዕዛዞች: {count}",
    finalCtaTitle: "ጉዞዎ እዚህ አያበቃም",
    finalCtaText: "ተጨማሪ ምርቶችን ይመልከቱ ወይም ትዕዛዝዎን ይከታተሉ",
    exploreMore: "ተጨማሪ ይመልከቱ",
    refreshOrders: "ትዕዛዞችን አድስ",
    footerText: "በንጹህ UI፣ ቀላል UX፣ መግቢያ፣ MongoDB ትዕዛዞች እና የግብይት ፍሰት የተገነባ ፕሮጀክት።",
    login: "ግባ",
    register: "መዝገብ",
    welcomeBack: "እንኳን ደህና መጡ",
    createAccount: "መለያ ፍጠር",
    email: "ኢሜይል",
    password: "የይለፍ ቃል",
    emptyProductsTitle: "ምርት አልተገኘም",
    emptyProductsText: "ፍለጋ፣ ምድብ ወይም መደርደሪያ ይቀይሩ።",
    emptyCartTitle: "ጋሪዎ ባዶ ነው",
    emptyCartText: "እስካሁን ምንም አልጨመሩም።",
    emptyWishlistTitle: "የምኞት ዝርዝርዎ ባዶ ነው",
    emptyWishlistText: "የወደዱትን ምርት እዚህ ያስቀምጡ።",
    noOrdersTitle: "እስካሁን ትዕዛዝ የለም",
    noOrdersText: "ያለፉ ትዕዛዞችዎ እዚህ ይታያሉ።",
    loadingOrdersTitle: "ትዕዛዞች በመጫን ላይ...",
    loadingOrdersText: "ትዕዛዞችን እያመጣን ነው።",
    failedOrdersTitle: "ትዕዛዞች መጫን አልተሳካም",
    failedOrdersText: "backend server በ port 5000 መሮጡን ያረጋግጡ።",
    recentlyAdded: "በቅርብ የተጨመረ",
    addToCart: "ወደ ጋሪ ጨምር",
    quickView: "ፈጣን እይታ",
    remove: "አስወግድ",
    onlyLeft: "{count} ብቻ ቀርቷል",
    stock: "በመጋዘን: {count}",
    stockLabel: "በመጋዘን:",
    available: "ይገኛል",
    badgeLabel: "መለያ:",
    addWishlist: "ወደ ምኞት ጨምር",
    removeWishlist: "ከምኞት አስወግድ",
    orderNumber: "ትዕዛዝ #{count}",
    pending: "በመጠባበቅ ላይ",
    shipped: "ተልኳል",
    delivered: "ደርሷል",
    payment: "ክፍያ:",
    deleteOrder: "ትዕዛዝ ሰርዝ",
    myOrders: "የእኔ ትዕዛዞች",
    logout: "ውጣ",
    successTitle: "ትዕዛዝ ተሳክቷል!",
    successText: "Gebiyaን ስለተጠቀሙ እናመሰግናለን። ትዕዛዝዎ ተረጋግጧል።",
    viewOrders: "ትዕዛዞችን ይመልከቱ",
    productNames: ["", "የሀበሻ ቀሚስ", "የጥጥ ነጠላ", "የኦሮሞ ባህላዊ ልብስ", "ባህላዊ ጋቢ", "ጀበና", "የቡና ሥነ ሥርዓት ስብስብ", "መሶብ", "የሐረር ቅርጫት", "የኢትዮጵያ የእጅ መስቀል", "ከበሮ", "ክራር", "የበርበሬ ቅመም ስብስብ"],
    productDescriptions: ["", "ለበዓላትና ለሥነ ሥርዓቶች የሚሆን በቲቤብ የተዋበ የጥጥ የሀበሻ ቀሚስ።", "በባህላዊ ልብስ ላይ የሚለበስ ቀላል የኢትዮጵያ የጥጥ ነጠላ።", "በኦሮሞ ባህል የተ प्रेरित ቀለማትና ንድፎች ያሉት ልብስ።", "በከፍተኛ ቦታዎች ባህላዊ ልብስ የተ प्रेरित ሙቀት ያለው ጋቢ።", "ለባህላዊ የቡና ሥነ ሥርዓት ቡና ለማፍላትና ለማቅረብ የሚጠቅም የሸክላ ጀበና።", "ጀበና፣ ፊንጃንና የማቅረቢያ እቃዎች ያሉት የቡና ሥነ ሥርዓት ስብስብ።", "እንጀራንና የጋራ ምግብን ለማቅረብ የሚጠቅም ቀለማማ የተሸመነ መሶብ።", "በሐረር የእጅ ሥራ ባህል የተ प्रेरित የቤት ማስዋቢያ ቅርጫት።", "በኢትዮጵያ ኦርቶዶክስ የብረት ሥራ ንድፍ የተ प्रेरित የእጅ መስቀል።", "በኢትዮጵያ የቤተ ክርስቲያንና ባህላዊ ሙዚቃ የሚጠቀሙበት ባለሁለት ጎን ከበሮ።", "በአዝማሪ ሙዚቃ ባህል የተ प्रेरित የኢትዮጵያ ባህላዊ ሕብረት መሣሪያ።", "ለባህላዊ ወጥና ሶስ የሚጠቅም ጣዕም ያለው የበርበሬ ቅመም ስብስብ።"],
    badges: ["", "ተወዳጅ", "በእጅ የተሸመነ", "ባህላዊ ልብስ", "ክላሲክ", "የቡና ባህል", "ከፍተኛ ደረጃ", "የእጅ ሥራ", "የሐረር ሥራ", "ቅርስ", "ሙዚቃ", "የሙዚቃ እጅ ሥራ", "የማብሰያ መሠረት"]
  },
  om: {
    languageName: "Afan Oromo",
    navHome: "Mana",
    navProducts: "Oomishaalee",
    navFeatures: "Amaloota",
    navCart: "Gaarii",
    navCheckout: "Kaffaltii",
    navOrders: "Ajajawwan",
    navShop: "Bituu",
    heroTag: "Muuxannoo bittaa olaanaa",
    heroTitle: "<span>Gebiya</span> waliin salphaatti bitaa",
    heroText: "Oomishaalee qulqullina qaban muuxannoo bittaa laafaa waliin argadhaa. Dafaa barbaadaa, salphaatti filadhaa, jaallattan olkaa'aa, kaffaltii xumuraa.",
    shopNow: "Amma Biti",
    exploreFeatures: "Amaloota Ilaali",
    productsReady: "Oomishaalee Qophaa'an",
    smoothUi: "UI Laafaa",
    easyShopping: "Bittaa Salphaa",
    topRatedProducts: "Oomishaalee Sadarkaa Olaanaa",
    whyGebiya: "Maaliif Gebiya",
    featuresTitle: "Akka waltajjii bittaa dhugaa ijaarame",
    featuresText: "Bifa bareedaa, filannoo beekamaa, wishlist, gaarii, coupon, kaffaltii, seensa fi hordoffii ajajaa.",
    fastSearch: "Barbaacha Saffisaa",
    fastSearchText: "Oomishaalee battalumatti barbaacha kallattiin argadhu.",
    smartFilters: "Filannoo Beekamaa",
    smartFiltersText: "Gosa, gatii yookaan sadarkaan filadhu.",
    wishlist: "Wishlist",
    wishlistText: "Oomisha jaallatte boodaaf olkaa'i.",
    cartSystem: "Sirna Gaarii",
    cartSystemText: "Baay'ina sirreessi, balleessi, waliigala hordofi.",
    coupons: "Coupon",
    couponsText: "Yeroo kaffaltii code akka SAVE10 fayyadami.",
    userAuth: "Seensa Fayyadamaa",
    userAuthText: "Galmaa'i, seeni, ajaja kaa'i.",
    ourCollection: "Kuusaa Keenya",
    trendingProducts: "Oomishaalee Beekamoo",
    productsText: "Oomishaalee filannoo gosa, tartiiba fi quick-view waliin ilaali.",
    searchPlaceholder: "Oomisha barbaadi...",
    allCategories: "Gosoota Hunda",
    fashion: "Faashinii",
    electronics: "Eleekirooniksii",
    footwear: "Kophee",
    accessories: "Meeshaalee Dabalataa",
    sortBy: "Tartiibessi",
    priceLowHigh: "Gatii: xiqqaa gara guddaa",
    priceHighLow: "Gatii: guddaa gara xiqqaa",
    ratingHighLow: "Sadarkaa: guddaa gara xiqqaa",
    shoppingCart: "Gaarii Bittaa",
    clearCart: "Gaarii Qulqulleessi",
    orderSummary: "Cuunfaa Ajajaa",
    couponCode: "Code Coupon",
    couponPlaceholder: "Code coupon galchi",
    apply: "Fayyadami",
    tryCode: "Yaali:",
    subtotal: "Waliigala xiqqaa",
    discount: "Hir'ina gatii",
    gst: "GST (18%)",
    gstShort: "GST",
    delivery: "Geessuu",
    total: "Waliigala",
    totalPayable: "Kaffaltii Waliigalaa",
    proceedCheckout: "Gara Kaffaltii Itti Fufi",
    secureOrder: "Ajaja Amansiisaa",
    checkoutTitle: "Kaffaltii",
    checkoutText: "Ajaja kee galchuuf odeeffannoo guuti.",
    fullName: "Maqaa Guutuu",
    phoneNumber: "Lakkoofsa Bilbilaa",
    emailAddress: "Email",
    city: "Magaalaa",
    address: "Teessoo",
    pincode: "Pincode",
    paymentMethod: "Mala Kaffaltii",
    fullNamePlaceholder: "Maqaa guutuu galchi",
    phonePlaceholder: "Lakkoofsa bilbilaa galchi",
    emailPlaceholder: "Email galchi",
    cityPlaceholder: "Magaalaa galchi",
    addressPlaceholder: "Teessoo guutuu galchi",
    pincodePlaceholder: "Pincode galchi",
    selectPayment: "Mala kaffaltii filadhu",
    telebirr: "TeleBirr",
    chapa: "Chapa",
    santimpay: "SantimPay",
    placeOrder: "Ajaja Galchi",
    finalSummary: "Cuunfaa Xumuraa",
    items: "Meeshaalee",
    purchaseRecords: "Galmee Bittaa",
    yourOrders: "Ajajawwan Kee",
    ordersText: "Ajajawwan odeeffannoo maamilaa, mala kaffaltii, meeshaalee, haala hordoffii fi waliigala waliin ilaali.",
    clearOrderHistory: "Seenaa Ajajaa Qulqulleessi",
    totalOrders: "Ajajawwan Waliigalaa: {count}",
    finalCtaTitle: "Imalli kee asitti hin dhaabbatu",
    finalCtaText: "Oomisha dabalataa ilaali yookaan ajaja kee hordofi",
    exploreMore: "Dabalata Ilaali",
    refreshOrders: "Ajajawwan Haaromsi",
    footerText: "Pirojektii e-commerce UI qulqulluu, UX laafaa, seensa, ajajawwan MongoDB fi adeemsa bittaa qabu.",
    login: "Seeni",
    register: "Galmaa'i",
    welcomeBack: "Baga Nagaan Deebite",
    createAccount: "Herrega Uumi",
    email: "Email",
    password: "Jecha Darbii",
    emptyProductsTitle: "Oomishni hin argamne",
    emptyProductsText: "Barbaacha, gosa yookaan tartiiba jijjiiri.",
    emptyCartTitle: "Gaariin kee duwwaa dha",
    emptyCartText: "Ammaaf waan itti hin daballe.",
    emptyWishlistTitle: "Wishlist kee duwwaa dha",
    emptyWishlistText: "Oomisha jaallatte asitti olkaa'i.",
    noOrdersTitle: "Ajajni ammatti hin jiru",
    noOrdersText: "Ajajawwan kee darban asitti ni mul'atu.",
    loadingOrdersTitle: "Ajajawwan fe'amaa jiru...",
    loadingOrdersText: "Mee eegaa, ajajawwan kee fidna.",
    failedOrdersTitle: "Ajajawwan fe'uu hin dandeenye",
    failedOrdersText: "Backend server port 5000 irratti akka hojjetu mirkaneessi.",
    recentlyAdded: "Dhiheenya Dabalame",
    addToCart: "Gara Gaarii Dabaluu",
    quickView: "Dafii Ilaali",
    remove: "Haqi",
    onlyLeft: "{count} qofatu hafe",
    stock: "Kuusaa: {count}",
    stockLabel: "Kuusaa:",
    available: "jira",
    badgeLabel: "Mallattoo:",
    addWishlist: "Wishlistitti Dabaluu",
    removeWishlist: "Wishlist irraa Haqi",
    orderNumber: "Ajaja #{count}",
    pending: "Eegamaa jira",
    shipped: "Ergameera",
    delivered: "Geessameera",
    payment: "Kaffaltii:",
    deleteOrder: "Ajaja Haqi",
    myOrders: "Ajajawwan Koo",
    logout: "Ba'i",
    successTitle: "Ajajni Milkaa'e!",
    successText: "Gebiya fayyadamuu keetiif galatoomi. Ajajni kee mirkanaa'eera.",
    viewOrders: "Ajajawwan Ilaali",
    productNames: ["", "Uffata Habesha Kemis", "Shaashii Netela", "Uffata Aadaa Oromoo", "Gabi Aadaa", "Jebena Buna", "Meeshaa Sirna Buna", "Gabatee Mesob", "Gundoo Harar", "Fannoo Harkaa Itoophiyaa", "Dibbee Kebero", "Krar", "Mi'eessituu Berbere"],
    productDescriptions: ["", "Uffata Habesha adii kan tibeb halluu qabu, ayyaanaafi sirna aadaaf mijatu.", "Shaashii cuquliisa Itoophiyaa salphaa, uffata aadaa irratti uffatamu.", "Uffata aadaa Oromoo halluu fi faaya addaatiin Irreechaafi ayyaanaaf mijatu.", "Gabi cuquliisaa ho'aa, uffata aadaa lafa olka'aa Itoophiyaa irraa kaka'e.", "Jebena suphee buna aadaa Itoophiyaa danfisuufi dhiheessuuf oolu.", "Meeshaalee sirna buna kan Jebena, finjaanii fi meeshaalee dhiheessii of keessaa qabu.", "Mesob halluu qabu kan injeraa fi nyaata waliinii dhiheessuuf oolu.", "Gundoo harkaatiin hojjetame kan aadaa hojii Harar irraa kaka'e.", "Fannoo harkaa faaya sibiilaa Ortodoksii Itoophiyaa irraa kaka'e.", "Kebero mataa lama qabu kan muuziqaa mana amantaafi aadaa Itoophiyaa keessatti oolu.", "Krar Itoophiyaa kan aadaa muuziqaa azmarii fi meeshaa funyoo harkaatiin hojjetamu irraa kaka'e.", "Berbere urgaa qabu kan nyaata wotii fi soossii Itoophiyaa qopheessuuf oolu."],
    badges: ["", "Baay'ee Gurgurame", "Harkaatiin Hodame", "Uffata Aadaa", "Classic", "Aadaa Buna", "Sadarkaa Olaanaa", "Hojii Ogeessaa", "Hojii Harar", "Hambaa", "Muuziqaa", "Ogummaa Muuziqaa", "Bu'uura Mana Nyaataa"]
  },
  ti: {
    languageName: "Tigray",
    navHome: "መጀመርታ",
    navProducts: "ፍርያታት",
    navFeatures: "ባህርያት",
    navCart: "ዓረብያ",
    navCheckout: "ክፍሊት",
    navOrders: "ትእዛዛት",
    navShop: "ዕድጊ",
    heroTag: "ዝለዓለ ተመኩሮ ዕድጊ",
    heroTitle: "ምስ <span>Gebiya</span> ብቐሊሉ ዕደጉ",
    heroText: "ጽሬት ዘለዎም ፍርያታት ብቐሊል ተመኩሮ ዕድጊ ርኸቡ። ቀልጢፍኩም ድለዩ፣ ኣጣርዩ፣ ዝፈተኹሞ ኣቐምጡ፣ ክፍሊት ዛዝሙ።",
    shopNow: "ሕጂ ዕደጉ",
    exploreFeatures: "ባህርያት ርአዩ",
    productsReady: "ፍርያታት ድሉዋት",
    smoothUi: "ቀሊል UI",
    easyShopping: "ቀሊል ዕድጊ",
    topRatedProducts: "ልዑል ደረጃ ፍርያታት",
    whyGebiya: "ስለምንታይ Gebiya",
    featuresTitle: "ከም ናይ ሓቂ መድረኽ ዕድጊ ዝተሃንጸ",
    featuresText: "ጽቡቕ መልክዕ፣ ብልሒ ምጽራይ፣ wishlist፣ ዓረብያ፣ coupon፣ ክፍሊት፣ መእተዊን ምክትታል ትእዛዝን።",
    fastSearch: "ቅልጡፍ ድለያ",
    fastSearchText: "ፍርያታት ብቐጥታ ድለያ ብቕልጡፍ ርኸቡ።",
    smartFilters: "ብልሒ መጻረዪ",
    smartFiltersText: "ብምድብ፣ ብዋጋ ወይ ብደረጃ ኣጣርዩ።",
    wishlist: "Wishlist",
    wishlistText: "ዝፈተኹሞ ፍርያት ንድሕሪት ኣቐምጡ።",
    cartSystem: "ስርዓት ዓረብያ",
    cartSystemText: "ብዝሒ ኣስተኻኽሉ፣ ኣልግሱ፣ ድምር ተኸታተሉ።",
    coupons: "Coupon",
    couponsText: "ኣብ ክፍሊት code ከም SAVE10 ተጠቐሙ።",
    userAuth: "መእተዊ ተጠቃሚ",
    userAuthText: "ተመዝገቡ፣ እተዉ፣ ትእዛዝ ግበሩ።",
    ourCollection: "ስብስብና",
    trendingProducts: "ፍሉጣት ፍርያታት",
    productsText: "ፍርያታት ብምድብ መጻረዪ፣ ምድላውን ቅልጡፍ ርእይቶን ርአዩ።",
    searchPlaceholder: "ፍርያታት ድለዩ...",
    allCategories: "ኩሎም ምድባት",
    fashion: "ፋሽን",
    electronics: "ኤሌክትሮኒክስ",
    footwear: "ጫማ",
    accessories: "መለዋወጢ",
    sortBy: "ኣደራርዩ",
    priceLowHigh: "ዋጋ፡ ትሑት ናብ ልዑል",
    priceHighLow: "ዋጋ፡ ልዑል ናብ ትሑት",
    ratingHighLow: "ደረጃ፡ ልዑል ናብ ትሑት",
    shoppingCart: "ዓረብያ ዕድጊ",
    clearCart: "ዓረብያ ኣጽርዩ",
    orderSummary: "ሓጺር ትእዛዝ",
    couponCode: "Code Coupon",
    couponPlaceholder: "Code coupon ኣእትዉ",
    apply: "ተግብሩ",
    tryCode: "ፈትኑ:",
    subtotal: "ንኡስ ድምር",
    discount: "ቅናሽ",
    gst: "GST (18%)",
    gstShort: "GST",
    delivery: "ምብጻሕ",
    total: "ድምር",
    totalPayable: "ዝኽፈል ድምር",
    proceedCheckout: "ናብ ክፍሊት ቀጽሉ",
    secureOrder: "ውሑስ ትእዛዝ",
    checkoutTitle: "ክፍሊት",
    checkoutText: "ትእዛዝኩም ንምቕማጥ ዝርዝርኩም ምልኡ።",
    fullName: "ምሉእ ስም",
    phoneNumber: "ቁጽሪ ተሌፎን",
    emailAddress: "Email",
    city: "ከተማ",
    address: "ኣድራሻ",
    pincode: "Pincode",
    paymentMethod: "መንገዲ ክፍሊት",
    fullNamePlaceholder: "ምሉእ ስም ኣእትዉ",
    phonePlaceholder: "ቁጽሪ ተሌፎን ኣእትዉ",
    emailPlaceholder: "Email ኣእትዉ",
    cityPlaceholder: "ከተማ ኣእትዉ",
    addressPlaceholder: "ምሉእ ኣድራሻ ኣእትዉ",
    pincodePlaceholder: "Pincode ኣእትዉ",
    selectPayment: "መንገዲ ክፍሊት ምረጹ",
    telebirr: "TeleBirr",
    chapa: "Chapa",
    santimpay: "SantimPay",
    placeOrder: "ትእዛዝ ኣቐምጡ",
    finalSummary: "መወዳእታ ሓጺር",
    items: "ኣቕሑት",
    purchaseRecords: "መዝገብ ዕድጊ",
    yourOrders: "ትእዛዛትኩም",
    ordersText: "ዝተቐመጡ ትእዛዛት ምስ ዝርዝር ዓሚል፣ መንገዲ ክፍሊት፣ ኣቕሑት፣ ምክትታልን ድምርን ርአዩ።",
    clearOrderHistory: "ታሪኽ ትእዛዝ ኣጽርዩ",
    totalOrders: "ጠቕላላ ትእዛዛት: {count}",
    finalCtaTitle: "ጉዕዞኹም ኣብዚ ኣይውዳእን",
    finalCtaText: "ተወሳኺ ፍርያታት ርአዩ ወይ ትእዛዝኩም ተኸታተሉ",
    exploreMore: "ተወሳኺ ርአዩ",
    refreshOrders: "ትእዛዛት ኣሐድሱ",
    footerText: "ብንጹህ UI፣ ቀሊል UX፣ መእተዊ፣ MongoDB ትእዛዛትን ናይ ዕድጊ ፍሰትን ዝተሃንጸ ፕሮጀክት።",
    login: "እተዉ",
    register: "ተመዝገቡ",
    welcomeBack: "እንቋዕ ብደሓን መጻእኩም",
    createAccount: "መለያ ፍጠሩ",
    email: "Email",
    password: "Password",
    emptyProductsTitle: "ፍርያት ኣይተረኽበን",
    emptyProductsText: "ድለያ፣ ምድብ ወይ ምድላው ቀይሩ።",
    emptyCartTitle: "ዓረብያኹም ባዶ እዩ",
    emptyCartText: "ክሳብ ሕጂ ዝወሰኽኩሞ የለን።",
    emptyWishlistTitle: "Wishlist ባዶ እዩ",
    emptyWishlistText: "ዝፈተኹሞ ፍርያት ኣብዚ ኣቐምጡ።",
    noOrdersTitle: "ገና ትእዛዝ የለን",
    noOrdersText: "ዝሓለፉ ትእዛዛትኩም ኣብዚ ክረኣዩ እዮም።",
    loadingOrdersTitle: "ትእዛዛት ይጽዓኑ ኣለዉ...",
    loadingOrdersText: "ትእዛዛትኩም እናምጻእና ኢና።",
    failedOrdersTitle: "ትእዛዛት ምጽዓን ኣይተኻእለን",
    failedOrdersText: "backend server ኣብ port 5000 ከምዝሰርሕ ኣረጋግጹ።",
    recentlyAdded: "ብቐረባ ዝተወሰኸ",
    addToCart: "ናብ ዓረብያ ወስኹ",
    quickView: "ቅልጡፍ ርእይቶ",
    remove: "ኣልግሱ",
    onlyLeft: "{count} ጥራይ ተሪፉ",
    stock: "ኣብ መኽዘን: {count}",
    stockLabel: "ኣብ መኽዘን:",
    available: "ኣሎ",
    badgeLabel: "መለለዪ:",
    addWishlist: "ናብ Wishlist ወስኹ",
    removeWishlist: "ካብ Wishlist ኣልግሱ",
    orderNumber: "ትእዛዝ #{count}",
    pending: "ይጽበ ኣሎ",
    shipped: "ተላኢኹ",
    delivered: "በጺሑ",
    payment: "ክፍሊት:",
    deleteOrder: "ትእዛዝ ሰርዙ",
    myOrders: "ትእዛዛተይ",
    logout: "ውጹ",
    successTitle: "ትእዛዝ ተዓዊቱ!",
    successText: "Gebiya ስለዝተጠቐምኩም ነመስግን። ትእዛዝኩም ተረጋጊጹ።",
    viewOrders: "ትእዛዛት ርአዩ",
    productNames: ["", "ሓበሻ ቀሚስ", "ነጠላ ጥጥ", "ናይ ኦሮሞ ባህላዊ ክዳን", "ባህላዊ ጋቢ", "ጀበና", "ስብስብ ሥነ ሥርዓት ቡና", "መሶብ", "ናይ ሐረር ቅርጫት", "ናይ ኢትዮጵያ መስቀል ኢድ", "ከበሮ", "ክራር", "ስብስብ በርበሬ"],
    productDescriptions: ["", "ንበዓላትን ሥነ ሥርዓታትን ዝምችእ ብቲቤብ ዝተሰለመ ጻዕዳ ሓበሻ ቀሚስ።", "ኣብ ልዕሊ ባህላዊ ክዳን ዝልበስ ቀሊል ናይ ጥጥ ነጠላ።", "ብባህሊ ኦሮሞ ዝተ प्रेरित ሕብርን ንድፍን ዘለዎ ክዳን።", "ካብ ባህላዊ ክዳን ከበሳ ዝተ प्रेरित ውዑይ ጋቢ።", "ንባህላዊ ሥነ ሥርዓት ቡና ቡና ንምፍላሕን ንምቕራብን ዝጠቅም ጀበና።", "ጀበና፣ ፊንጃንን ናይ ምቕራብ ኣቕሑትን ዘለዎ ስብስብ ቡና።", "እንጀራን ሓባራዊ ምግብን ንምቕራብ ዝጠቅም ቀለማዊ መሶብ።", "ብናይ ሐረር ስራሕ ኢድ ባህሊ ዝተ प्रेरित መስዋቢ ቅርጫት።", "ብታሪኻዊ ኦርቶዶክስ ስራሕ ብረት ዝተ प्रेरित መስቀል ኢድ።", "ኣብ ናይ ኢትዮጵያ ቤተ ክርስቲያንን ባህላዊ ሙዚቃን ዝጥቀሙሉ ባለ ክልተ ገጽ ከበሮ።", "ካብ ኣዝማሪ ሙዚቃን ስራሕ ኢድ መሳርሒ ገመድን ዝተ प्रेरित ክራር።", "ንባህላዊ ወጥን ሶስን ዝጠቅም ጨና ዘለዎ በርበሬ።"],
    badges: ["", "ብዙሕ ዝተሸጠ", "ብኢድ ዝተሰርሐ", "ባህላዊ ክዳን", "ክላሲክ", "ባህሊ ቡና", "ልዑል ደረጃ", "ስራሕ ኢድ", "ስራሕ ሐረር", "ቅርሲ", "ሙዚቃ", "ስራሕ ሙዚቃ", "መሠረት ክሽነ"]
  }
};

Object.assign(I18N.am, {
  toastLanguage: "ቋንቋ ወደ {language} ተቀይሯል",
  toastMaxStock: "ከመጋዘን መጠን በላይ መጨመር አይቻልም",
  toastAddedCart: "{product} ወደ ጋሪ ተጨምሯል",
  toastRemovedCart: "{product} ከጋሪ ተወግዷል",
  toastStockExceeded: "ከሚገኘው መጠን በላይ አይቻልም",
  toastRemovedWishlist: "{product} ከምኞት ዝርዝር ተወግዷል",
  toastAddedWishlist: "{product} ወደ ምኞት ዝርዝር ተጨምሯል",
  toastAddCartFirst: "መጀመሪያ ምርቶችን ወደ ጋሪ ያክሉ",
  toastEnterCoupon: "የኩፖን ኮድ ያስገቡ",
  toastCouponApplied: "ኩፖን ተተግብሯል",
  toastInvalidCoupon: "የተሳሳተ ኩፖን ኮድ",
  toastCartEmpty: "ጋሪው አስቀድሞ ባዶ ነው",
  toastCartCleared: "ጋሪ ተጠርጓል",
  toastFillCheckout: "የክፍያ መረጃዎችን ሁሉ ይሙሉ",
  toastValidPhone: "ትክክለኛ 10 አሃዝ ስልክ ያስገቡ",
  toastValidEmail: "ትክክለኛ ኢሜይል ያስገቡ",
  toastValidPincode: "ትክክለኛ 6 አሃዝ ፒን ኮድ ያስገቡ",
  toastNoOrders: "የሚጠረጉ ትዕዛዞች የሉም",
  confirmClearOrders: "ትዕዛዞችን ሁሉ ማጽዳት ይፈልጋሉ?",
  toastOrderHistoryCleared: "የትዕዛዝ ታሪክ ተጠርጓል",
  toastFailedClearOrders: "የትዕዛዝ ታሪክ ማጽዳት አልተሳካም",
  toastOrderDeleted: "ትዕዛዝ ተሰርዟል",
  toastFailedDeleteOrder: "ትዕዛዝ መሰረዝ አልተሳካም",
  toastOrderMarked: "ትዕዛዝ እንደ {status} ተመዝግቧል",
  toastFailedStatus: "የትዕዛዝ ሁኔታ መቀየር አልተሳካም",
  toastLoginToOrder: "ትዕዛዝ ለማስገባት እባክዎ ይግቡ",
  toastYourCartEmpty: "ጋሪዎ ባዶ ነው",
  toastOrderSaveFailed: "ትዕዛዝ መቀመጥ አልቻለም",
  toastLoggedOut: "በተሳካ ሁኔታ ወጥተዋል",
  toastLoginSuccess: "መግባት ተሳክቷል",
  toastLoginFailed: "መግባት አልተሳካም",
  toastServerError: "የሰርቨር ስህተት",
  toastRegisterSuccess: "ምዝገባ ተሳክቷል",
  toastRegisterFailed: "ምዝገባ አልተሳካም"
});

Object.assign(I18N.om, {
  toastLanguage: "Afaan gara {language} jijjiirame",
  toastMaxStock: "Daangaa kuusaa bira darbuun hin danda'amu",
  toastAddedCart: "{product} gara gaarii dabalame",
  toastRemovedCart: "{product} gaarii irraa haqame",
  toastStockExceeded: "Kuusaa jiru bira darbuun hin danda'amu",
  toastRemovedWishlist: "{product} wishlist irraa haqame",
  toastAddedWishlist: "{product} wishlistitti dabalame",
  toastAddCartFirst: "Jalqaba oomisha gara gaarii dabali",
  toastEnterCoupon: "Code coupon galchi",
  toastCouponApplied: "Coupon hojiirra oole",
  toastInvalidCoupon: "Code coupon sirrii miti",
  toastCartEmpty: "Gaariin duraan duwwaa dha",
  toastCartCleared: "Gaariin qulqullaa'e",
  toastFillCheckout: "Odeeffannoo kaffaltii hunda guuti",
  toastValidPhone: "Lakkoofsa bilbilaa dijiitii 10 sirrii galchi",
  toastValidEmail: "Email sirrii galchi",
  toastValidPincode: "Pincode dijiitii 6 sirrii galchi",
  toastNoOrders: "Ajajni haqamu hin jiru",
  confirmClearOrders: "Ajajawwan hunda qulqulleessuu barbaaddaa?",
  toastOrderHistoryCleared: "Seenaan ajajaa qulqullaa'e",
  toastFailedClearOrders: "Seenaa ajajaa qulqulleessuun hin milkoofne",
  toastOrderDeleted: "Ajajni haqame",
  toastFailedDeleteOrder: "Ajaja haquun hin milkoofne",
  toastOrderMarked: "Ajajni akka {status} mallatteeffame",
  toastFailedStatus: "Haala ajajaa jijjiiruun hin milkoofne",
  toastLoginToOrder: "Ajaja kaa'uuf seeni",
  toastYourCartEmpty: "Gaariin kee duwwaa dha",
  toastOrderSaveFailed: "Ajajni kuufamuu hin dandeenye",
  toastLoggedOut: "Milkaa'inaan baate",
  toastLoginSuccess: "Seenuun milkaa'e",
  toastLoginFailed: "Seenuun hin milkoofne",
  toastServerError: "Dogoggora server",
  toastRegisterSuccess: "Galmeen milkaa'e",
  toastRegisterFailed: "Galmeen hin milkoofne"
});

Object.assign(I18N.ti, {
  toastLanguage: "ቋንቋ ናብ {language} ተቐይሩ",
  toastMaxStock: "ካብ መኽዘን ንላዕሊ ምውሳኽ ኣይከኣልን",
  toastAddedCart: "{product} ናብ ዓረብያ ተወሲኹ",
  toastRemovedCart: "{product} ካብ ዓረብያ ተኣልዩ",
  toastStockExceeded: "ካብ ዘሎ ብዝሒ ንላዕሊ ኣይከኣልን",
  toastRemovedWishlist: "{product} ካብ wishlist ተኣልዩ",
  toastAddedWishlist: "{product} ናብ wishlist ተወሲኹ",
  toastAddCartFirst: "መጀመርታ ፍርያት ናብ ዓረብያ ወስኹ",
  toastEnterCoupon: "Code coupon ኣእትዉ",
  toastCouponApplied: "Coupon ተተግቢሩ",
  toastInvalidCoupon: "ዘይቅኑዕ code coupon",
  toastCartEmpty: "ዓረብያ ባዶ እዩ",
  toastCartCleared: "ዓረብያ ተጸሪጉ",
  toastFillCheckout: "ኩሉ ዝርዝር ክፍሊት ምልኡ",
  toastValidPhone: "ቅኑዕ 10 ዲጂት ቁጽሪ ተሌፎን ኣእትዉ",
  toastValidEmail: "ቅኑዕ email ኣእትዉ",
  toastValidPincode: "ቅኑዕ 6 ዲጂት pincode ኣእትዉ",
  toastNoOrders: "ዝስረዝ ትእዛዝ የለን",
  confirmClearOrders: "ኩሎም ትእዛዛት ክትጸርጉ ትደልዩ?",
  toastOrderHistoryCleared: "ታሪኽ ትእዛዝ ተጸሪጉ",
  toastFailedClearOrders: "ታሪኽ ትእዛዝ ምጽራግ ኣይተኻእለን",
  toastOrderDeleted: "ትእዛዝ ተሰሪዙ",
  toastFailedDeleteOrder: "ትእዛዝ ምስራዝ ኣይተኻእለን",
  toastOrderMarked: "ትእዛዝ ከም {status} ተመልኪቱ",
  toastFailedStatus: "ሁኔታ ትእዛዝ ምቕያር ኣይተኻእለን",
  toastLoginToOrder: "ትእዛዝ ንምግባር እተዉ",
  toastYourCartEmpty: "ዓረብያኹም ባዶ እዩ",
  toastOrderSaveFailed: "ትእዛዝ ምቕማጥ ኣይተኻእለን",
  toastLoggedOut: "ብዓወት ወጺእኩም",
  toastLoginSuccess: "መእተዊ ተዓዊቱ",
  toastLoginFailed: "መእተዊ ኣይተዓወተን",
  toastServerError: "ጌጋ server",
  toastRegisterSuccess: "ምዝገባ ተዓዊቱ",
  toastRegisterFailed: "ምዝገባ ኣይተዓወተን"
});

const FALLBACK_LANGUAGE = "en";
let currentLanguage = localStorage.getItem("GebiyaLanguage") || FALLBACK_LANGUAGE;

function t(key, values = {}) {
  const dictionary = I18N[currentLanguage] || I18N[FALLBACK_LANGUAGE];
  let text = dictionary[key] ?? I18N[FALLBACK_LANGUAGE][key] ?? key;

  Object.entries(values).forEach(([name, value]) => {
    text = String(text).replaceAll(`{${name}}`, value);
  });

  return text;
}

function localizedProduct(product, field) {
  const dictionary = I18N[currentLanguage] || I18N[FALLBACK_LANGUAGE];
  const fallback = I18N[FALLBACK_LANGUAGE];

  if (field === "category") {
    return t(product.category);
  }

  const collection = field === "name"
    ? "productNames"
    : field === "description"
      ? "productDescriptions"
      : "badges";

  return dictionary[collection]?.[product.id] || fallback[collection]?.[product.id] || product[field];
}

function translatedStatus(status) {
  const key = String(status || "Pending").toLowerCase();
  return t(key);
}

function translatedPayment(method) {
  const key = String(method || "").toLowerCase();
  return I18N.en[key] ? t(key) : method;
}

function highlight(text, search) {
  if (!search) return text;
  const regex = new RegExp(`(${search})`, "gi");
  return text.replace(regex, `<mark>$1</mark>`);
}

let cart = JSON.parse(localStorage.getItem("GebiyaCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("GebiyaWishlist")) || [];
let appliedCoupon = localStorage.getItem("GebiyaCoupon") || "";
let orders = [];
let filteredProducts = [...products];

const GST_RATE = 0.18;
const DELIVERY_CHARGE = 99;
const COUPON_CODE = "SAVE10";
const COUPON_DISCOUNT_RATE = 0.1;
const API_BASE_URL = "http://localhost:5000";

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");
const wishlistItems = document.getElementById("wishlistItems");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const mobileCartCount = document.getElementById("mobileCartCount");
const toast = document.getElementById("toast");
const loaderWrapper = document.getElementById("loaderWrapper");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

const subtotalEl = document.getElementById("subtotal");
const discountEl = document.getElementById("discount");
const gstEl = document.getElementById("gst");
const deliveryEl = document.getElementById("delivery");
const finalTotalEl = document.getElementById("finalTotal");

const checkoutItemsCount = document.getElementById("checkoutItemsCount");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutDiscount = document.getElementById("checkoutDiscount");
const checkoutGST = document.getElementById("checkoutGST");
const checkoutDelivery = document.getElementById("checkoutDelivery");
const checkoutTotal = document.getElementById("checkoutTotal");

const couponInput = document.getElementById("couponInput");
const applyCouponBtn = document.getElementById("applyCouponBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const goToCheckoutBtn = document.getElementById("goToCheckoutBtn");
const clearOrdersBtn = document.getElementById("clearOrdersBtn");

const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const closeModalBtn = document.getElementById("closeModalBtn");

const successModal = document.getElementById("successModal");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");

const checkoutForm = document.getElementById("checkoutForm");
const cartBtn = document.getElementById("cartBtn");
const wishlistBtn = document.getElementById("wishlistBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const authSection = document.getElementById("authSection");
const languageSelector = document.getElementById("languageSelector");

function saveState() {
  localStorage.setItem("GebiyaCart", JSON.stringify(cart));
  localStorage.setItem("GebiyaWishlist", JSON.stringify(wishlist));
  localStorage.setItem("GebiyaCoupon", appliedCoupon);
}

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️"
  };

  toast.innerHTML = `${icons[type]} ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 7000);
}

function formatPrice(amount) {
  return `ETB ${Number(amount || 0).toLocaleString("en-US")}`;
}

function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}

function getCartItemCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function updateCounts() {
  if (cartCount) cartCount.textContent = getCartItemCount();
  if (mobileCartCount) mobileCartCount.textContent = getCartItemCount();
  if (wishlistCount) wishlistCount.textContent = wishlist.length;
}

function setText(selector, key, values) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = t(key, values);
  });
}

function setHTML(selector, key, values) {
  document.querySelectorAll(selector).forEach((element) => {
    element.innerHTML = t(key, values);
  });
}

function setPlaceholder(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = t(key);
}

function setOptionText(selector, key) {
  const element = document.querySelector(selector);
  if (element) element.textContent = t(key);
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;

  setText('.nav-links a[href="#home"], .nav-links a[href="index.html#home"], .footer-links a[href="#home"], .footer-links a[href="index.html#home"], .mobile-bottom-nav a[href="#home"] span, .mobile-bottom-nav a[href="index.html#home"] span', "navHome");
  setText('.nav-links a[href="#products"], .nav-links a[href="index.html#products"], .footer-links a[href="#products"], .footer-links a[href="index.html#products"]', "navProducts");
  setText('.mobile-bottom-nav a[href="#products"] span, .mobile-bottom-nav a[href="index.html#products"] span', "navShop");
  setText('.nav-links a[href="#features"], .nav-links a[href="index.html#features"]', "navFeatures");
  setText('.nav-links a[href="#cartSection"], .nav-links a[href="cart.html"], .footer-links a[href="#cartSection"], .footer-links a[href="cart.html"], .mobile-bottom-nav a[href="#cartSection"] span, .mobile-bottom-nav a[href="cart.html"] span', "navCart");
  setText('.nav-links a[href="#checkout"], .nav-links a[href="secure-order.html"], .footer-links a[href="#checkout"], .footer-links a[href="secure-order.html"], .mobile-bottom-nav a[href="#checkout"] span, .mobile-bottom-nav a[href="secure-order.html"] span', "navCheckout");
  setText('.nav-links a[href="#orders"], .nav-links a[href="index.html#orders"], .footer-links a[href="#orders"], .footer-links a[href="index.html#orders"], .mobile-bottom-nav a[href="#orders"] span, .mobile-bottom-nav a[href="index.html#orders"] span', "navOrders");

  setText(".hero .tag", "heroTag");
  setHTML(".hero-text h1", "heroTitle");
  setText(".hero-text p", "heroText");
  setText('.hero-buttons a[href="#products"]', "shopNow");
  setText('.hero-buttons a[href="#features"]', "exploreFeatures");
  setText(".hero-stats .stat-card:nth-child(1) p", "productsReady");
  setText(".hero-stats .stat-card:nth-child(2) p", "smoothUi");
  setText(".hero-stats .stat-card:nth-child(3) p", "easyShopping");
  setText(".floating-badge span", "topRatedProducts");

  setText("#features .section-heading span", "whyGebiya");
  setText("#features .section-heading h2", "featuresTitle");
  setText("#features .section-heading p", "featuresText");
  setText("#features .feature-card:nth-child(1) h3", "fastSearch");
  setText("#features .feature-card:nth-child(1) p", "fastSearchText");
  setText("#features .feature-card:nth-child(2) h3", "smartFilters");
  setText("#features .feature-card:nth-child(2) p", "smartFiltersText");
  setText("#features .feature-card:nth-child(3) h3", "wishlist");
  setText("#features .feature-card:nth-child(3) p", "wishlistText");
  setText("#features .feature-card:nth-child(4) h3", "cartSystem");
  setText("#features .feature-card:nth-child(4) p", "cartSystemText");
  setText("#features .feature-card:nth-child(5) h3", "coupons");
  setText("#features .feature-card:nth-child(5) p", "couponsText");
  setText("#features .feature-card:nth-child(6) h3", "userAuth");
  setText("#features .feature-card:nth-child(6) p", "userAuthText");

  setText("#products .section-heading span", "ourCollection");
  setText("#products .section-heading h2", "trendingProducts");
  setText("#products .section-heading p", "productsText");
  setPlaceholder("#searchInput", "searchPlaceholder");
  setOptionText('#categoryFilter option[value="all"]', "allCategories");
  setOptionText('#categoryFilter option[value="fashion"]', "fashion");
  setOptionText('#categoryFilter option[value="electronics"]', "electronics");
  setOptionText('#categoryFilter option[value="footwear"]', "footwear");
  setOptionText('#categoryFilter option[value="accessories"]', "accessories");
  setOptionText('#sortOption option[value="default"]', "sortBy");
  setOptionText('#sortOption option[value="priceLowHigh"]', "priceLowHigh");
  setOptionText('#sortOption option[value="priceHighLow"]', "priceHighLow");
  setOptionText('#sortOption option[value="ratingHighLow"]', "ratingHighLow");

  setHTML("#cartSection .cart-panel .panel-header h2", "shoppingCart");
  const cartHeading = document.querySelector("#cartSection .cart-panel .panel-header h2");
  if (cartHeading) cartHeading.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${t("shoppingCart")}`;
  setText("#clearCartBtn", "clearCart");
  const summaryHeading = document.querySelector("#cartSection .summary-panel .panel-header h2");
  if (summaryHeading) summaryHeading.innerHTML = `<i class="fa-solid fa-receipt"></i> ${t("orderSummary")}`;
  setText('.coupon-box label[for="couponInput"]', "couponCode");
  setPlaceholder("#couponInput", "couponPlaceholder");
  setText("#applyCouponBtn", "apply");
  const couponHint = document.querySelector(".coupon-hint");
  if (couponHint) couponHint.innerHTML = `${t("tryCode")} <strong>${COUPON_CODE}</strong>`;
  setText(".bill-box .bill-row:nth-child(1) span:first-child, .mini-summary .bill-row:nth-child(2) span:first-child", "subtotal");
  setText(".bill-box .bill-row:nth-child(2) span:first-child, .mini-summary .bill-row:nth-child(3) span:first-child", "discount");
  setText(".bill-box .bill-row:nth-child(3) span:first-child", "gst");
  setText(".mini-summary .bill-row:nth-child(4) span:first-child", "gstShort");
  setText(".bill-box .bill-row:nth-child(4) span:first-child, .mini-summary .bill-row:nth-child(5) span:first-child", "delivery");
  setText(".bill-box .bill-row:nth-child(5) span:first-child", "total");
  setText("#goToCheckoutBtn", "proceedCheckout");
  setText("#cartSection .section-heading span", "shoppingCart");
  setText("#cartSection .section-heading h2", "shoppingCart");
  setText("#cartSection .section-heading p", "proceedCheckout");
  setText(".page-link-btn", "navCart");

  const wishlistHeading = document.querySelector(".wishlist-section .panel-header h2");
  if (wishlistHeading) wishlistHeading.innerHTML = `<i class="fa-regular fa-heart"></i> ${t("wishlist")}`;

  setText("#checkout .section-heading span", "secureOrder");
  setText("#checkout .section-heading h2", "checkoutTitle");
  setText("#checkout .section-heading p", "checkoutText");
  setText('label[for="fullName"]', "fullName");
  setText('label[for="phone"]', "phoneNumber");
  setText('label[for="email"]', "emailAddress");
  setText('label[for="city"]', "city");
  setText('label[for="address"]', "address");
  setText('label[for="pincode"]', "pincode");
  setText('label[for="paymentMethod"]', "paymentMethod");
  setPlaceholder("#fullName", "fullNamePlaceholder");
  setPlaceholder("#phone", "phonePlaceholder");
  setPlaceholder("#email", "emailPlaceholder");
  setPlaceholder("#city", "cityPlaceholder");
  setPlaceholder("#address", "addressPlaceholder");
  setPlaceholder("#pincode", "pincodePlaceholder");
  setOptionText('#paymentMethod option[value=""]', "selectPayment");
  setOptionText('#paymentMethod option[value="telebirr"]', "telebirr");
  setOptionText('#paymentMethod option[value="chapa"]', "chapa");
  setOptionText('#paymentMethod option[value="santimpay"]', "santimpay");
  setText(".place-order-btn", "placeOrder");
  const finalHeading = document.querySelector(".checkout-summary-box .panel-header h2");
  if (finalHeading) finalHeading.innerHTML = `<i class="fa-solid fa-box"></i> ${t("finalSummary")}`;
  setText(".mini-summary .bill-row:nth-child(1) span:first-child", "items");
  setText(".mini-summary .bill-row:nth-child(6) span:first-child", "totalPayable");

  setText("#orders .section-heading span", "purchaseRecords");
  setText("#orders .section-heading h2", "yourOrders");
  setText("#orders .section-heading p", "ordersText");
  setText("#clearOrdersBtn", "clearOrderHistory");

  setText(".final-cta h2", "finalCtaTitle");
  setText(".final-cta p", "finalCtaText");
  setText(".final-actions .primary-btn", "exploreMore");
  setText(".final-actions .secondary-btn", "refreshOrders");
  setText(".footer p", "footerText");

  setText("#loginTab", "login");
  setText("#registerTab", "register");
  setText("#loginForm h2", "welcomeBack");
  setText("#registerForm h2", "createAccount");
  setPlaceholder("#loginEmail", "email");
  setPlaceholder("#loginPassword", "password");
  setPlaceholder("#registerName", "fullName");
  setPlaceholder("#registerEmail", "email");
  setPlaceholder("#registerPassword", "password");
  setText("#loginForm .auth-btn", "login");
  setText("#registerForm .auth-btn", "register");

  const successTitle = document.querySelector(".success-modal-box h2");
  if (successTitle) successTitle.textContent = t("successTitle");
  const successText = document.querySelector(".success-modal-box p");
  if (successText) successText.textContent = t("successText");
  if (continueShoppingBtn) continueShoppingBtn.textContent = t("viewOrders");

  renderAuthSection();
}

function setLanguage(language, showMessage = false) {
  currentLanguage = I18N[language] ? language : FALLBACK_LANGUAGE;
  localStorage.setItem("GebiyaLanguage", currentLanguage);
  if (languageSelector) languageSelector.value = currentLanguage;
  applyLanguage();
  filterAndSortProducts();
  refreshUI();

  if (showMessage) {
    showToast(t("toastLanguage", { language: t("languageName") }), "success");
  }
}

function calculateSummary() {
  const subtotal = cart.reduce((total, item) => {
    const product = getProductById(item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const discount = appliedCoupon === COUPON_CODE ? Math.round(subtotal * COUPON_DISCOUNT_RATE) : 0;
  const taxableAmount = Math.max(subtotal - discount, 0);
  const gst = Math.round(taxableAmount * GST_RATE);
  const delivery = subtotal > 1000 ? 0 : (cart.length ? DELIVERY_CHARGE : 0);
  const finalTotal = taxableAmount + gst + delivery;

  return { subtotal, discount, gst, delivery, finalTotal };
}

function renderProducts(items) {
  if (!productGrid) return;

  if (!items.length) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-box-open"></i>
        <h3>${t("emptyProductsTitle")}</h3>
        <p>${t("emptyProductsText")}</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = items.map((product) => {
    const isWishlisted = wishlist.includes(product.id);
    const productName = localizedProduct(product, "name");
    const productDescription = localizedProduct(product, "description");
    const productBadge = localizedProduct(product, "badge");

    return `
      <div class="product-card glass">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${productName}" />
          ${localStorage.getItem("lastAdded") == product.id 
  ? `<span class="badge">${t("recentlyAdded")}</span>` 
  : `<span class="badge">${productBadge}</span>`}
          <button class="wishlist-icon ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${product.id})">
            <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
          </button>
        </div>

        <div class="product-info">
          <span class="product-category">${localizedProduct(product, "category")}</span>
          <h3 class="product-title">${highlight(productName, searchInput?.value)}</h3>
          <p class="product-desc">${productDescription}</p>

          <div class="product-meta">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
          </div>

          <p class="stock ${product.stock <= 5 ? 'low-stock' : ''}">
  ${product.stock <= 5 ? `⚠ Only ${product.stock} left` : `Stock: ${product.stock}`}
</p>

          <div class="product-actions">
            <button class="add-cart-btn" onclick="addToCart(${product.id})">${t("addToCart")}</button>
            <button class="quick-view-btn" onclick="openModal(${product.id})">${t("quickView")}</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}
function renderCart() {
  if (!cartItems) return;

if (!cart.length) {
  cartItems.innerHTML = `
    <div class="empty-state">
      <i class="fa-solid fa-cart-shopping"></i>
      <h3>Your cart is empty 😢</h3>
      <p>Looks like you haven’t added anything yet.</p>

      <button onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})" 
              class="primary-btn" 
              style="margin-top:10px;">
        Shop Now
      </button>
    </div>
  `;
  return;
}
  cartItems.innerHTML = cart.map((item) => {
    const product = getProductById(item.id);
    if (!product) return "";

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" />

        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <p>${product.category}</p>
          <div class="cart-price">${formatPrice(product.price)}</div>

          <div class="qty-controls">
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
  }).join("");
}

function renderWishlist() {
  if (!wishlistItems) return;

  if (!wishlist.length) {
    wishlistItems.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-heart"></i>
        <h3>Your wishlist is empty</h3>
        <p>Save your favorite products here.</p>
      </div>
    `;
    return;
  }


  wishlistItems.innerHTML = wishlist.map((id) => {
    const product = getProductById(id);
    if (!product) return "";

    return `
      <div class="wishlist-card">
        <img src="${product.image}" alt="${product.name}" />

        <div class="wishlist-card-info">
          <h4>${product.name}</h4>
          <p>${product.description}</p>
          <strong>${formatPrice(product.price)}</strong>
        </div>

        <div class="wishlist-card-actions">
          <button class="move-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
          <button class="remove-wishlist-btn" onclick="toggleWishlist(${product.id})">Remove</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderOrders() {
  const ordersList = document.getElementById("ordersList");
  if (!ordersList) return;

  const ordersCountTitle = document.getElementById("ordersCountTitle");
  if (ordersCountTitle) ordersCountTitle.textContent = `Total Orders: ${orders.length}`;

  if (!orders.length) {
    ordersList.innerHTML = `
      <div class="orders-empty">
        <i class="fa-solid fa-box-open"></i>
        <h3>No orders placed yet</h3>
        <p>Your past orders will appear here.</p>
      </div>
    `;
    return;
  }

  ordersList.innerHTML = orders.map((order, index) => {
    const status = order.status || "Pending";
    const statusClass = status.toLowerCase();

    return `
      <div class="order-card">
        <div class="order-header">
          <span class="order-id">Order #${orders.length - index}</span>
          <span class="order-date">${order.orderedAt || ""}</span>
        </div>

        <div class="order-top-row">
          <div class="order-status ${statusClass}">${status}</div>
        </div>

        <div class="tracking-bar">
          <div class="tracking-step active">
            <span>1</span>
            <p>Pending</p>
          </div>
          

          <div class="tracking-line ${status === "Shipped" || status === "Delivered" ? "active" : ""}"></div>
          <div class="tracking-step ${status === "Shipped" || status === "Delivered" ? "active" : ""}">
            <span>2</span>
            <p>Shipped</p>
          </div>
          <div class="tracking-line ${status === "Delivered" ? "active" : ""}"></div>
          <div class="tracking-step ${status === "Delivered" ? "active" : ""}">
            <span>3</span>
            <p>Delivered</p>
          </div>
        </div>

        <div class="order-customer">
          <strong>${order.customer?.fullName || ""}</strong> | ${order.customer?.phone || ""}<br>
          ${order.customer?.city || ""}, ${order.customer?.pincode || ""}<br>
          Payment: ${translatedPayment(order.customer?.paymentMethod || "")}
        </div>

        <div class="order-items">
          ${(order.items || []).map((item) => {
            const product = getProductById(item.id);
            if (!product) return "";

            return `
              <div class="order-item">
                <span class="order-item-name">${product.name}</span>
                <span class="order-item-qty">x${item.quantity}</span>
                <span class="order-item-price">${formatPrice(product.price * item.quantity)}</span>
              </div>
            `;
          }).join("")}
        </div>

        <div class="order-summary">
          <span><span>Subtotal</span><span>${formatPrice(order.summary?.subtotal)}</span></span>
          <span><span>Discount</span><span>- ${formatPrice(order.summary?.discount)}</span></span>
          <span><span>GST</span><span>${formatPrice(order.summary?.gst)}</span></span>
          <span><span>Delivery</span><span>${formatPrice(order.summary?.delivery)}</span></span>
          <span class="order-total"><span>Total</span><span>${formatPrice(order.summary?.finalTotal)}</span></span>
        </div>

        <div class="order-actions">
          <select onchange="updateOrderStatus('${order._id}', this.value)">
            <option value="Pending" ${status === "Pending" ? "selected" : ""}>Pending</option>
            <option value="Shipped" ${status === "Shipped" ? "selected" : ""}>Shipped</option>
            <option value="Delivered" ${status === "Delivered" ? "selected" : ""}>Delivered</option>
          </select>

          <button class="remove-btn" onclick="deleteOrder('${order._id}')">Delete Order</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderSummary() {
  const summary = calculateSummary();

  if (subtotalEl) subtotalEl.textContent = formatPrice(summary.subtotal);
  if (discountEl) discountEl.textContent = summary.discount ? `- ${formatPrice(summary.discount)}` : "ETB 0";
  if (gstEl) gstEl.textContent = formatPrice(summary.gst);
  if (deliveryEl) deliveryEl.textContent = formatPrice(summary.delivery);
  if (finalTotalEl) finalTotalEl.textContent = formatPrice(summary.finalTotal);

  if (checkoutItemsCount) checkoutItemsCount.textContent = getCartItemCount();
  if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(summary.subtotal);
  if (checkoutDiscount) checkoutDiscount.textContent = summary.discount ? `- ${formatPrice(summary.discount)}` : "ETB 0";
  if (checkoutGST) checkoutGST.textContent = formatPrice(summary.gst);
  if (checkoutDelivery) checkoutDelivery.textContent = formatPrice(summary.delivery);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(summary.finalTotal);

  if (couponInput) couponInput.value = appliedCoupon;
}

function refreshUI() {
  saveState();
  updateCounts();
  renderProducts(filteredProducts);
  renderCart();
  renderWishlist();
  renderSummary();
  renderOrders();
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= product.stock) {
      showToast(t("toastMaxStock"));
      return;
    }
    existingItem.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }
  refreshUI();
  showToast(t("toastAddedCart", { product: localizedProduct(product, "name") }));
}
// DELETE THIS COMPLETELY ❌

function removeFromCart(productId) {
  const product = getProductById(productId);
  cart = cart.filter((item) => item.id !== productId);
  refreshUI();
  showToast(t("toastRemovedCart", { product: product ? localizedProduct(product, "name") : t("items") }));
}

function changeQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  const product = getProductById(productId);

  if (!cartItem || !product) return;

  const newQuantity = cartItem.quantity + change;

  if (newQuantity <= 0) {
    removeFromCart(productId);
    return;
  }

  if (newQuantity > product.stock) {
    showToast(t("toastStockExceeded"));
    return;
  }

  cartItem.quantity = newQuantity;
  refreshUI();
}

function toggleWishlist(productId) {
  const product = getProductById(productId);
  if (!product) return;

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
    showToast(t("toastRemovedWishlist", { product: localizedProduct(product, "name") }));
  } else {
    wishlist.push(productId);
    showToast(t("toastAddedWishlist", { product: localizedProduct(product, "name") }));
  }

  refreshUI();
}

function openModal(productId) {
  const product = getProductById(productId);
  if (!product || !modalContent || !productModal) return;

  const isWishlisted = wishlist.includes(product.id);

  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>

    <div class="modal-details">
      <span class="modal-category">${product.category}</span>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <div class="modal-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
      <p><strong>Stock:</strong> ${product.stock} available</p>
      <p><strong>Badge:</strong> ${product.badge}</p>

      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
        <button class="modal-wishlist" onclick="toggleWishlist(${product.id}); openModal(${product.id});">
          ${isWishlisted ? "Remove Wishlist" : "Add Wishlist"}
        </button>
      </div>
    </div>
  `;

  productModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!productModal) return;
  productModal.classList.remove("show");
  document.body.style.overflow = "";
}
function openSuccessModal() {
  if (!successModal) return;

  successModal.classList.add("show");
  document.body.style.overflow = "hidden";

  launchConfetti();

  // 🔁 Restart truck animation
  const truck = document.querySelector(".truck");
  if (truck) {
    truck.style.animation = "none";
    truck.offsetHeight; // trigger reflow
    truck.style.animation = "truckMove 3s ease forwards";
  }
}
  
function closeSuccessModal() {
  if (!successModal) return;
  successModal.classList.remove("show");
  document.body.style.overflow = "";
}

function applyCoupon() {
  if (!couponInput) return;

  const enteredCoupon = couponInput.value.trim().toUpperCase();

  if (!cart.length) {
    showToast(t("toastAddCartFirst"));
    return;
  }

  if (!enteredCoupon) {
    showToast(t("toastEnterCoupon"));
    return;
  }

  if (enteredCoupon === COUPON_CODE) {
    appliedCoupon = COUPON_CODE;
    refreshUI();
    showToast(t("toastCouponApplied"));
  } else {
    appliedCoupon = "";
    refreshUI();
    showToast(t("toastInvalidCoupon"));
  }
}

function clearCart() {
  if (!cart.length) {
    showToast(t("toastCartEmpty"));
    return;
  }

  cart = [];
  appliedCoupon = "";
  refreshUI();
  showToast(t("toastCartCleared"));
}

function filterAndSortProducts() {
  const searchValue = (searchInput?.value || "").trim().toLowerCase();
  const selectedCategory = categoryFilter?.value || "all";
  const selectedSort = sortOption?.value || "default";

  filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue);

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filteredProducts);
}

function validateCheckoutForm() {
  const fullName = document.getElementById("fullName")?.value.trim();
  const phone = document.getElementById("phone")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const city = document.getElementById("city")?.value.trim();
  const address = document.getElementById("address")?.value.trim();
  const pincode = document.getElementById("pincode")?.value.trim();
  const paymentMethod = document.getElementById("paymentMethod")?.value;

  if (!fullName || !phone || !email || !city || !address || !pincode || !paymentMethod) {
    showToast(t("toastFillCheckout"));
    return false;
  }

  if (!/^\d{10}$/.test(phone)) {
    showToast(t("toastValidPhone"));
    return false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showToast(t("toastValidEmail"));
    return false;
  }

  if (!/^\d{6}$/.test(pincode)) {
    showToast(t("toastValidPincode"));
    return false;
  }

  return true;
}

async function loadOrdersFromBackend() {
  const ordersList = document.getElementById("ordersList");
  if (!ordersList) return;

  try {
    ordersList.innerHTML = `
      <div class="orders-empty">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <h3>${t("loadingOrdersTitle")}</h3>
        <p>${t("loadingOrdersText")}</p>
      </div>
    `;

    const response = await fetch(`${API_BASE_URL}/api/orders`);
    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch orders");
    }

    orders = result.data || [];
    renderOrders();
  } catch (error) {
    console.error("Load orders error:", error);

    ordersList.innerHTML = `
      <div class="orders-empty">
        <i class="fa-solid fa-triangle-exclamation"></i>
        <h3>${t("failedOrdersTitle")}</h3>
        <p>${t("failedOrdersText")}</p>
      </div>
    `;
  }
}

async function clearAllOrdersFromBackend() {
  if (!orders.length) {
    showToast(t("toastNoOrders"));
    return;
  }

  const ok = window.confirm(t("confirmClearOrders"));
  if (!ok) return;

  try {
    for (const order of orders) {
      if (order._id) {
        await fetch(`${API_BASE_URL}/api/orders/${order._id}`, {
          method: "DELETE"
        });
      }
    }

    orders = [];
    renderOrders();
    showToast(t("toastOrderHistoryCleared"));
  } catch (error) {
    console.error("Clear orders error:", error);
    showToast(t("toastFailedClearOrders"));
  }
}

async function deleteOrder(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders/${id}`, {
      method: "DELETE"
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to delete order");
    }

    showToast(t("toastOrderDeleted"));
    loadOrdersFromBackend();
  } catch (error) {
    console.error("Delete order error:", error);
    showToast(t("toastFailedDeleteOrder"));
  }
}

async function updateOrderStatus(id, newStatus) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ status: newStatus })
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to update status");
    }

    showToast(t("toastOrderMarked", { status: translatedStatus(newStatus) }));
    loadOrdersFromBackend();
  } catch (error) {
    console.error("Update status error:", error);
    showToast(t("toastFailedStatus"));
  }
}

async function placeOrder(e) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("GebiyaUser"));

  if (!user) {
    showToast(t("toastLoginToOrder"));
    openAuthModal();
    return;
  }

  if (!validateCheckoutForm()) return;

  if (!cart.length) {
    showToast(t("toastYourCartEmpty"));
    return;
  }

  const orderData = {
    user: {
      name: user.name,
      email: user.email
    },
    customer: {
      fullName: document.getElementById("fullName").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      email: document.getElementById("email").value.trim(),
      city: document.getElementById("city").value.trim(),
      address: document.getElementById("address").value.trim(),
      pincode: document.getElementById("pincode").value.trim(),
      paymentMethod: document.getElementById("paymentMethod").value
    },
    items: [...cart],
    summary: calculateSummary(),
    orderedAt: new Date().toLocaleString(),
    status: "Pending"
  };

  try {
    const response = await fetch(`${API_BASE_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to place order");
    }

    cart = [];
    appliedCoupon = "";
    checkoutForm.reset();
    saveState();
    refreshUI();
    openSuccessModal();

    setTimeout(() => {
      closeSuccessModal();
      if (document.getElementById("orders")) {
        document.getElementById("orders")?.scrollIntoView({ behavior: "smooth" });
        loadOrdersFromBackend();
      } else {
        window.location.href = "index.html#orders";
      }
    }, 1500);
  } catch (error) {
    console.error("Place order error:", error);
    showToast(t("toastOrderSaveFailed"));
  }
}
/* AUTH MODAL + PROFILE DROPDOWN */
function openAuthModal() {
  document.getElementById("authModal").classList.add("show");
}

function closeAuthModal() {
  document.getElementById("authModal").classList.remove("show");
}

function switchTab(tab) {
  document.getElementById("loginForm").classList.toggle("hidden", tab !== "login");
  document.getElementById("registerForm").classList.toggle("hidden", tab !== "register");

  document.getElementById("loginTab").classList.toggle("active", tab === "login");
  document.getElementById("registerTab").classList.toggle("active", tab === "register");
}

function renderAuthSection() {
  const user = JSON.parse(localStorage.getItem("GebiyaUser"));

  if (!authSection) return;

  if (!user) {
    authSection.innerHTML = `
      <button onclick="openAuthModal()" class="primary-btn" type="button">
        Login
      </button>
    `;
    return;
  }

  const letter = user.name ? user.name.charAt(0).toUpperCase() : "U";

  authSection.innerHTML = `
    <div class="profile-dropdown">
      <button class="profile-btn" onclick="toggleProfileMenu()" type="button">
        <span class="avatar-circle">${letter}</span>
        <span class="profile-name">${user.name}</span>
        <i class="fa-solid fa-angle-down"></i>
      </button>

      <div class="profile-menu" id="profileMenu">
        <div class="profile-menu-header">
          <span class="avatar-circle big">${letter}</span>
          <div>
            <strong>${user.name}</strong>
            <p>${user.email}</p>
          </div>
        </div>

        <button onclick="document.getElementById('orders').scrollIntoView({behavior:'smooth'})">
          <i class="fa-solid fa-box"></i> My Orders
        </button>

        <button onclick="logout()">
          <i class="fa-solid fa-right-from-bracket"></i> Logout
        </button>
      </div>
    </div>
  `;
}

function toggleProfileMenu() {
  document.getElementById("profileMenu")?.classList.toggle("show");
}

function logout() {
  localStorage.removeItem("GebiyaUser");
  showToast(t("toastLoggedOut"));
  setTimeout(() => location.reload(), 600);
}

function renderProducts(items) {
  if (!productGrid) return;

  if (!items.length) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <i class="fa-solid fa-box-open"></i>
        <h3>${t("emptyProductsTitle")}</h3>
        <p>${t("emptyProductsText")}</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = items.map((product) => {
    const isWishlisted = wishlist.includes(product.id);
    const productName = localizedProduct(product, "name");

    return `
      <div class="product-card glass">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${productName}" />
          ${localStorage.getItem("lastAdded") == product.id
            ? `<span class="badge">${t("recentlyAdded")}</span>`
            : `<span class="badge">${localizedProduct(product, "badge")}</span>`}
          <button class="wishlist-icon ${isWishlisted ? "active" : ""}" onclick="toggleWishlist(${product.id})">
            <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
          </button>
        </div>

        <div class="product-info">
          <span class="product-category">${localizedProduct(product, "category")}</span>
          <h3 class="product-title">${highlight(productName, searchInput?.value)}</h3>
          <p class="product-desc">${localizedProduct(product, "description")}</p>

          <div class="product-meta">
            <span class="price">${formatPrice(product.price)}</span>
            <span class="rating"><i class="fa-solid fa-star"></i> ${product.rating}</span>
          </div>

          <p class="stock ${product.stock <= 5 ? "low-stock" : ""}">
            ${product.stock <= 5 ? `! ${t("onlyLeft", { count: product.stock })}` : t("stock", { count: product.stock })}
          </p>

          <div class="product-actions">
            <button class="add-cart-btn" onclick="addToCart(${product.id})">${t("addToCart")}</button>
            <button class="quick-view-btn" onclick="openModal(${product.id})">${t("quickView")}</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderCart() {
  if (!cartItems) return;

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-cart-shopping"></i>
        <h3>${t("emptyCartTitle")}</h3>
        <p>${t("emptyCartText")}</p>
        <button onclick="document.getElementById('products').scrollIntoView({behavior:'smooth'})"
                class="primary-btn"
                style="margin-top:10px;">
          ${t("shopNow")}
        </button>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const product = getProductById(item.id);
    if (!product) return "";
    const productName = localizedProduct(product, "name");

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${productName}" />
        <div class="cart-item-info">
          <h4>${productName}</h4>
          <p>${localizedProduct(product, "category")}</p>
          <div class="cart-price">${formatPrice(product.price)}</div>
          <div class="qty-controls">
            <button onclick="changeQuantity(${item.id}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">${t("remove")}</button>
      </div>
    `;
  }).join("");
}

function renderWishlist() {
  if (!wishlistItems) return;

  if (!wishlist.length) {
    wishlistItems.innerHTML = `
      <div class="empty-state">
        <i class="fa-regular fa-heart"></i>
        <h3>${t("emptyWishlistTitle")}</h3>
        <p>${t("emptyWishlistText")}</p>
      </div>
    `;
    return;
  }

  wishlistItems.innerHTML = wishlist.map((id) => {
    const product = getProductById(id);
    if (!product) return "";
    const productName = localizedProduct(product, "name");

    return `
      <div class="wishlist-card">
        <img src="${product.image}" alt="${productName}" />
        <div class="wishlist-card-info">
          <h4>${productName}</h4>
          <p>${localizedProduct(product, "description")}</p>
          <strong>${formatPrice(product.price)}</strong>
        </div>
        <div class="wishlist-card-actions">
          <button class="move-cart-btn" onclick="addToCart(${product.id})">${t("addToCart")}</button>
          <button class="remove-wishlist-btn" onclick="toggleWishlist(${product.id})">${t("remove")}</button>
        </div>
      </div>
    `;
  }).join("");
}

function renderOrders() {
  const ordersList = document.getElementById("ordersList");
  if (!ordersList) return;

  const ordersCountTitle = document.getElementById("ordersCountTitle");
  if (ordersCountTitle) ordersCountTitle.textContent = t("totalOrders", { count: orders.length });

  if (!orders.length) {
    ordersList.innerHTML = `
      <div class="orders-empty">
        <i class="fa-solid fa-box-open"></i>
        <h3>${t("noOrdersTitle")}</h3>
        <p>${t("noOrdersText")}</p>
      </div>
    `;
    return;
  }

  ordersList.innerHTML = orders.map((order, index) => {
    const status = order.status || "Pending";
    const statusClass = status.toLowerCase();

    return `
      <div class="order-card">
        <div class="order-header">
          <span class="order-id">${t("orderNumber", { count: orders.length - index })}</span>
          <span class="order-date">${order.orderedAt || ""}</span>
        </div>

        <div class="order-top-row">
          <div class="order-status ${statusClass}">${translatedStatus(status)}</div>
        </div>

        <div class="tracking-bar">
          <div class="tracking-step active"><span>1</span><p>${t("pending")}</p></div>
          <div class="tracking-line ${status === "Shipped" || status === "Delivered" ? "active" : ""}"></div>
          <div class="tracking-step ${status === "Shipped" || status === "Delivered" ? "active" : ""}"><span>2</span><p>${t("shipped")}</p></div>
          <div class="tracking-line ${status === "Delivered" ? "active" : ""}"></div>
          <div class="tracking-step ${status === "Delivered" ? "active" : ""}"><span>3</span><p>${t("delivered")}</p></div>
        </div>

        <div class="order-customer">
          <strong>${order.customer?.fullName || ""}</strong> | ${order.customer?.phone || ""}<br>
          ${order.customer?.city || ""}, ${order.customer?.pincode || ""}<br>
          ${t("payment")} ${translatedPayment(order.customer?.paymentMethod || "")}
        </div>

        <div class="order-items">
          ${(order.items || []).map((item) => {
            const product = getProductById(item.id);
            if (!product) return "";
            return `
              <div class="order-item">
                <span class="order-item-name">${localizedProduct(product, "name")}</span>
                <span class="order-item-qty">x${item.quantity}</span>
                <span class="order-item-price">${formatPrice(product.price * item.quantity)}</span>
              </div>
            `;
          }).join("")}
        </div>

        <div class="order-summary">
          <span><span>${t("subtotal")}</span><span>${formatPrice(order.summary?.subtotal)}</span></span>
          <span><span>${t("discount")}</span><span>- ${formatPrice(order.summary?.discount)}</span></span>
          <span><span>${t("gstShort")}</span><span>${formatPrice(order.summary?.gst)}</span></span>
          <span><span>${t("delivery")}</span><span>${formatPrice(order.summary?.delivery)}</span></span>
          <span class="order-total"><span>${t("total")}</span><span>${formatPrice(order.summary?.finalTotal)}</span></span>
        </div>

        <div class="order-actions">
          <select onchange="updateOrderStatus('${order._id}', this.value)">
            <option value="Pending" ${status === "Pending" ? "selected" : ""}>${t("pending")}</option>
            <option value="Shipped" ${status === "Shipped" ? "selected" : ""}>${t("shipped")}</option>
            <option value="Delivered" ${status === "Delivered" ? "selected" : ""}>${t("delivered")}</option>
          </select>
          <button class="remove-btn" onclick="deleteOrder('${order._id}')">${t("deleteOrder")}</button>
        </div>
      </div>
    `;
  }).join("");
}

function filterAndSortProducts() {
  const searchValue = (searchInput?.value || "").trim().toLowerCase();
  const selectedCategory = categoryFilter?.value || "all";
  const selectedSort = sortOption?.value || "default";

  filteredProducts = products.filter((product) => {
    const productName = localizedProduct(product, "name").toLowerCase();
    const productCategory = localizedProduct(product, "category").toLowerCase();
    const productDescription = localizedProduct(product, "description").toLowerCase();
    const matchesSearch =
      productName.includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      productCategory.includes(searchValue) ||
      productDescription.includes(searchValue);

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "ratingHighLow") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filteredProducts);
}

function openModal(productId) {
  const product = getProductById(productId);
  if (!product || !modalContent || !productModal) return;

  const isWishlisted = wishlist.includes(product.id);
  const productName = localizedProduct(product, "name");

  modalContent.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${productName}" />
    </div>

    <div class="modal-details">
      <span class="modal-category">${localizedProduct(product, "category")}</span>
      <h2>${productName}</h2>
      <p>${localizedProduct(product, "description")}</p>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <div class="modal-rating"><i class="fa-solid fa-star"></i> ${product.rating}</div>
      <p><strong>${t("stockLabel")}</strong> ${product.stock} ${t("available")}</p>
      <p><strong>${t("badgeLabel")}</strong> ${localizedProduct(product, "badge")}</p>

      <div class="modal-actions">
        <button class="modal-add-cart" onclick="addToCart(${product.id}); closeModal();">${t("addToCart")}</button>
        <button class="modal-wishlist" onclick="toggleWishlist(${product.id}); openModal(${product.id});">
          ${isWishlisted ? t("removeWishlist") : t("addWishlist")}
        </button>
      </div>
    </div>
  `;

  productModal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function renderAuthSection() {
  const user = JSON.parse(localStorage.getItem("GebiyaUser"));

  if (!authSection) return;

  if (!user) {
    authSection.innerHTML = `
      <button onclick="openAuthModal()" class="primary-btn" type="button">
        ${t("login")}
      </button>
    `;
    return;
  }

  const letter = user.name ? user.name.charAt(0).toUpperCase() : "U";

  authSection.innerHTML = `
    <div class="profile-dropdown">
      <button class="profile-btn" onclick="toggleProfileMenu()" type="button">
        <span class="avatar-circle">${letter}</span>
        <span class="profile-name">${user.name}</span>
        <i class="fa-solid fa-angle-down"></i>
      </button>

      <div class="profile-menu" id="profileMenu">
        <div class="profile-menu-header">
          <span class="avatar-circle big">${letter}</span>
          <div>
            <strong>${user.name}</strong>
            <p>${user.email}</p>
          </div>
        </div>

        <button onclick="document.getElementById('orders').scrollIntoView({behavior:'smooth'})">
          <i class="fa-solid fa-box"></i> ${t("myOrders")}
        </button>

        <button onclick="logout()">
          <i class="fa-solid fa-right-from-bracket"></i> ${t("logout")}
        </button>
      </div>
    </div>
  `;
}

function formatPrice(amount) {
  return `ETB ${Number(amount || 0).toLocaleString("en-US")}`;
}

function renderSummary() {
  const summary = calculateSummary();
  const zero = formatPrice(0);

  if (subtotalEl) subtotalEl.textContent = formatPrice(summary.subtotal);
  if (discountEl) discountEl.textContent = summary.discount ? `- ${formatPrice(summary.discount)}` : zero;
  if (gstEl) gstEl.textContent = formatPrice(summary.gst);
  if (deliveryEl) deliveryEl.textContent = formatPrice(summary.delivery);
  if (finalTotalEl) finalTotalEl.textContent = formatPrice(summary.finalTotal);

  if (checkoutItemsCount) checkoutItemsCount.textContent = getCartItemCount();
  if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(summary.subtotal);
  if (checkoutDiscount) checkoutDiscount.textContent = summary.discount ? `- ${formatPrice(summary.discount)}` : zero;
  if (checkoutGST) checkoutGST.textContent = formatPrice(summary.gst);
  if (checkoutDelivery) checkoutDelivery.textContent = formatPrice(summary.delivery);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(summary.finalTotal);

  if (couponInput) couponInput.value = appliedCoupon;
}

/* EVENTS */
window.addEventListener("load", () => {
  setTimeout(() => {
    if (loaderWrapper) loaderWrapper.classList.add("hide");
  }, 700);
});

if (searchInput) searchInput.addEventListener("input", filterAndSortProducts);
if (categoryFilter) categoryFilter.addEventListener("change", filterAndSortProducts);
if (sortOption) sortOption.addEventListener("change", filterAndSortProducts);

if (applyCouponBtn) applyCouponBtn.addEventListener("click", applyCoupon);
if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);
if (clearOrdersBtn) clearOrdersBtn.addEventListener("click", clearAllOrdersFromBackend);

if (goToCheckoutBtn) {
  goToCheckoutBtn.addEventListener("click", () => {
    window.location.href = "secure-order.html";
  });
}

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

if (productModal) {
  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeModal();
  });
}

if (continueShoppingBtn) {
  continueShoppingBtn.setAttribute("type", "button");
  continueShoppingBtn.textContent = t("viewOrders");

  continueShoppingBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeSuccessModal();
    if (document.getElementById("orders")) {
      document.getElementById("orders")?.scrollIntoView({ behavior: "smooth" });
      loadOrdersFromBackend();
    } else {
      window.location.href = "index.html#orders";
    }
  });
}

if (successModal) {
  successModal.addEventListener("click", (event) => {
    if (event.target === successModal) closeSuccessModal();
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener("submit", placeOrder);
}

if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    window.location.href = "cart.html";
  });
}

if (wishlistBtn) {
  wishlistBtn.addEventListener("click", () => {
    document.querySelector(".wishlist-section")?.scrollIntoView({ behavior: "smooth" });
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

if (navLinks) {
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

if (languageSelector) {
  languageSelector.value = currentLanguage;

  languageSelector.addEventListener("change", () => {
    setLanguage(languageSelector.value, true);
  });
}

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.innerText = "☀";
  } else {
    themeToggle.innerText = "🌙";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerText = "☀";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerText = "🌙";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAuthSection();

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const user = {
        email: document.getElementById("loginEmail").value.trim(),
        password: document.getElementById("loginPassword").value.trim()
      };

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("GebiyaUser", JSON.stringify(data.user));
          showToast(t("toastLoginSuccess"), "success");
          closeAuthModal();
          renderAuthSection();
        } else {
          showToast(data.message || t("toastLoginFailed"), "error");
        }
      } catch (error) {
        console.error("Login error:", error);
        showToast(t("toastServerError"), "error");
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const user = {
        name: document.getElementById("registerName").value.trim(),
        email: document.getElementById("registerEmail").value.trim(),
        password: document.getElementById("registerPassword").value.trim()
      };

      try {
        const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        });

        const data = await response.json();

        if (data.success) {
          showToast(t("toastRegisterSuccess"), "success");
          switchTab("login");
        } else {
          showToast(data.message || t("toastRegisterFailed"), "error");
        }
      } catch (error) {
        console.error("Register error:", error);
        showToast(t("toastServerError"), "error");
      }
    });
  }
});

window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.changeQuantity = changeQuantity;
window.toggleWishlist = toggleWishlist;
window.openModal = openModal;
window.closeModal = closeModal;
window.deleteOrder = deleteOrder;
window.updateOrderStatus = updateOrderStatus;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchTab = switchTab;
window.toggleProfileMenu = toggleProfileMenu;
window.logout = logout;

setLanguage(currentLanguage);
loadOrdersFromBackend();


// 🎉 CONFETTI ANIMATION
function launchConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 150; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = -10;

      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(update);
  }

  update();

  // stop after 3 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}
const faders = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});
