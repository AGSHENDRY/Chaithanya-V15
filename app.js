(() => {
  'use strict';

  const ADMIN_USER = 'admin';
  const ADMIN_PASS = 'admin123';
  const WHATSAPP_NUMBER = '918848911811';
  const GST_NO = '';
  const UPI_ID = 'chaithanya@upi';
  let storeSettings = load('chaithanya_store_settings_fixed', { gstNumber: '', gstRate: 5, upiId: UPI_ID, social: { instagram: { url: '', likes: 0 }, facebook: { url: '', likes: 0 }, youtube: { url: '', likes: 0 }, whatsapp: { url: '', likes: 0 } } });
  storeSettings = { gstNumber: String(storeSettings?.gstNumber || ''), gstRate: Math.max(0, Number(storeSettings?.gstRate ?? 5)), upiId: String(storeSettings?.upiId || UPI_ID), social: { instagram: { url: String(storeSettings?.social?.instagram?.url || ''), likes: Math.max(0, Number(storeSettings?.social?.instagram?.likes || 0)) }, facebook: { url: String(storeSettings?.social?.facebook?.url || ''), likes: Math.max(0, Number(storeSettings?.social?.facebook?.likes || 0)) }, youtube: { url: String(storeSettings?.social?.youtube?.url || ''), likes: Math.max(0, Number(storeSettings?.social?.youtube?.likes || 0)) }, whatsapp: { url: String(storeSettings?.social?.whatsapp?.url || ''), likes: Math.max(0, Number(storeSettings?.social?.whatsapp?.likes || 0)) } } };
  const SIZES = ['Standard'];
  const COLORS = ['Gold Tone', 'Antique Finish', 'Classic Finish'];

  const starterCategories = [
    { id: 'rudraksha', name: 'Rudraksha', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop' },
    { id: 'panchaloha', name: 'Panchaloha Jewellery', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop' },
    { id: 'spiritual', name: 'Spiritual Collections', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop' }
  ];

  const starterHome = {
    eyebrow: 'Chalakudy • Panchaloha Jewellery',
    title: 'Tradition, crafted with devotion.',
    description: 'Discover timeless Panchaloha jewellery from Chaithanya, Main Road Chalakudy. Heritage-inspired pieces for devotion, gifting and everyday elegance.',
    primaryButton: 'Explore Jewellery',
    secondaryButton: 'Admin Login',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1600&auto=format&fit=crop'
    ],
    brandText: 'CHAITHANYA',
    smallText: 'PANCHALOHA JEWELLERY',
    clickCategory: 'panchaloha'
  };

  const starterModelGallery = [
    { id: 1, category: 'panchaloha', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=85&w=1200&auto=format&fit=crop', caption: 'Traditional elegance', alt: 'Model wearing Chaithanya Panchaloha jewellery' },
    { id: 2, category: 'panchaloha', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=85&w=1200&auto=format&fit=crop', caption: 'Timeless beauty', alt: 'Model wearing traditional Panchaloha jewellery' },
    { id: 3, category: 'rudraksha', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=85&w=1200&auto=format&fit=crop', caption: 'Everyday grace', alt: 'Model wearing Rudraksha jewellery' },
    { id: 4, category: 'spiritual', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=85&w=1200&auto=format&fit=crop', caption: 'Crafted for you', alt: 'Model styling spiritual jewellery' },
    { id: 5, category: 'rudraksha', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=85&w=1200&auto=format&fit=crop', caption: 'Natural character', alt: 'Model wearing Rudraksha jewellery' },
    { id: 6, category: 'spiritual', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=85&w=1200&auto=format&fit=crop', caption: 'Devotional style', alt: 'Model wearing spiritual jewellery' }
  ];

  const starterSeo = {
    title: 'Chaithanya Panchaloha Jewellery | Chalakudy',
    description: 'Chaithanya Panchaloha Jewellery, Main Road Chalakudy, near Kalyan Silks. Discover traditional Panchaloha jewellery and spiritual collections.',
    keywords: 'Chaithanya, Panchaloha jewellery, Chalakudy jewellery, Panchaloha, spiritual jewellery, Kerala jewellery',
    canonical: 'https://chaithanya.shop/'
  };

  const starterProducts = [
    { id: 1, name: 'Panchaloha Lakshmi Pendant', price: 0, category: 'panchaloha', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop'], description: 'A traditional Panchaloha-inspired pendant selected for its devotional character and timeless finish. Price can be updated from the admin panel.' },
    { id: 2, name: 'Rudraksha Jewellery', price: 0, category: 'rudraksha', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1200&auto=format&fit=crop'], description: 'Traditional Rudraksha-inspired jewellery for spiritual and everyday styling. Update the exact product specifications and price in the admin panel.' },
    { id: 3, name: 'Heritage Panchaloha Collection', price: 0, category: 'spiritual', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop'], description: 'A heritage-inspired collection created for gifting, devotion and timeless elegance.' }
  ];
  const $ = (id) => document.getElementById(id);
  const fallbackImage = 'assets/product-placeholder.svg';
  let heroContent = load('chaithanya_home_content_fixed', starterHome);
  let seoContent = load('chaithanya_seo_content_fixed', starterSeo);
  let modelGallery = load('chaithanya_model_gallery_fixed', starterModelGallery);
  let categories = load('chaithanya_categories_fixed', starterCategories);
  let products = load('chaithanya_products_fixed', starterProducts);
  // Normalize persisted data so one malformed/old localStorage value cannot break the admin panel.
  categories = Array.isArray(categories) ? categories : starterCategories;
  products = Array.isArray(products) ? products : starterProducts;
  let highlights = load('chaithanya_highlights_fixed', { newProducts: [], trendingProducts: [], autoTrending: true, autoTrendingLimit: 6 });
  highlights = { newProducts: Array.isArray(highlights?.newProducts) ? highlights.newProducts : [], trendingProducts: Array.isArray(highlights?.trendingProducts) ? highlights.trendingProducts : [], autoTrending: highlights?.autoTrending !== false, autoTrendingLimit: Math.max(1, Math.min(12, Number(highlights?.autoTrendingLimit || 6))) };
  let cart = load('chaithanya_cart_fixed', []);
  let orders = load('chaithanya_orders_fixed', []);
  let reviews = load('chaithanya_reviews_fixed', []);
  let users = load('chaithanya_users_fixed', []);
  let notifications = load('chaithanya_notifications_fixed', []);
  cart = Array.isArray(cart) ? cart : [];
  orders = Array.isArray(orders) ? orders : [];
  reviews = Array.isArray(reviews) ? reviews : [];
  users = Array.isArray(users) ? users : [];
  notifications = Array.isArray(notifications) ? notifications : [];
  let currentUser = load('chaithanya_current_user_fixed', null);
  let pendingUserAction = null;
  let visitors = Number(localStorage.getItem('chaithanya_visitors_fixed') || 0);
  let currentProduct = null;
  let productSlideIndex = 0;
  let productSlideTimer = null;
  let productSlidePaused = false;
  let productSearchTerm = '';
  let selectedSize = SIZES[0];
  let selectedColor = 'Black';
  let selectedQty = 1;
  let mongoReady = false;
  let syncingFromMongo = false;
  let firstMongoLoadDone = false;
  let mongoUpdatedAt = 0;
  let mongoRefreshTimer = null;
  let persistChain = Promise.resolve();
  let mongoLastError = '';
  const MONGO_REQUIRED_MESSAGE = 'MongoDB is not connected. Your change was not saved to the live website.';
  let localChangeVersion = 0;
  let lastLocalChangeAt = 0;
  const MONGO_REFRESH_GRACE_MS = 15000;


  function getPageFromHash() {
    const hash = String(location.hash || '#home').replace('#','').toLowerCase();
    if (hash === 'product' || hash === 'shop' || hash === 'drops') return 'product';
    if (hash === 'about' || hash === 'aboutpage') return 'about';
    if (hash === 'support' || hash === 'supportpage' || hash === 'contact') return 'support';
    if (hash === 'feedback' || hash === 'feedbackpage' || hash === 'reviews') return 'feedback';
    return 'home';
  }

  function setSitePage(page = getPageFromHash(), options = {}) {
    const allowed = ['home','product','about','support','feedback'];
    const current = allowed.includes(page) ? page : 'home';
    document.body.dataset.page = current;
    document.querySelectorAll('[data-page]').forEach(section => {
      const target = section.dataset.page;
      section.classList.toggle('route-hidden', target !== current);
    });
    document.querySelectorAll('[data-page-link]').forEach(link => {
      link.classList.toggle('active-page-link', link.dataset.pageLink === current);
    });
    if (!options.keepScroll) window.scrollTo({ top: 0, behavior: options.smooth ? 'smooth' : 'auto' });
    return current;
  }

  function navigateToPage(page, options = {}) {
    const map = { home:'#home', product:'#product', about:'#aboutPage', support:'#supportPage', feedback:'#feedbackPage' };
    const hash = map[page] || '#home';
    if (location.hash !== hash) history.pushState({ page }, '', hash);
    setSitePage(page, options);
  }

  function load(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
  }
  function getStoreData() {
    return { heroContent, seoContent, modelGallery, categories, products, highlights, orders, reviews, users, notifications, visitors, storeSettings, updatedAt: new Date().toISOString() };
  }

  function applyStoreData(data = {}) {
    if (data.updatedAt) mongoUpdatedAt = new Date(data.updatedAt).getTime() || mongoUpdatedAt;
    heroContent = data.heroContent || heroContent || starterHome;
    seoContent = data.seoContent || seoContent || starterSeo;
    modelGallery = Array.isArray(data.modelGallery) ? data.modelGallery : modelGallery;
    categories = Array.isArray(data.categories) ? data.categories : categories;
    products = Array.isArray(data.products) ? data.products : products;
    highlights = data.highlights && typeof data.highlights === 'object' ? { newProducts: Array.isArray(data.highlights.newProducts) ? data.highlights.newProducts : [], trendingProducts: Array.isArray(data.highlights.trendingProducts) ? data.highlights.trendingProducts : [], autoTrending: data.highlights.autoTrending !== false, autoTrendingLimit: Math.max(1, Math.min(12, Number(data.highlights.autoTrendingLimit || 6))) } : highlights;
    // Cart is device/user-local and must never be copied from the shared store document.
    orders = Array.isArray(data.orders) ? data.orders : orders;
    reviews = Array.isArray(data.reviews) ? data.reviews : reviews;
    users = Array.isArray(data.users) ? data.users : users;
    notifications = Array.isArray(data.notifications) ? data.notifications : notifications;
    storeSettings = data.storeSettings && typeof data.storeSettings === 'object' ? data.storeSettings : storeSettings;
    visitors = Number(data.visitors ?? visitors ?? 0);
    localOnlyPersist();
  }

  function localOnlyPersist() {
    localStorage.setItem('chaithanya_home_content_fixed', JSON.stringify(heroContent));
    localStorage.setItem('chaithanya_seo_content_fixed', JSON.stringify(seoContent));
    localStorage.setItem('chaithanya_model_gallery_fixed', JSON.stringify(modelGallery));
    localStorage.setItem('chaithanya_categories_fixed', JSON.stringify(categories));
    localStorage.setItem('chaithanya_products_fixed', JSON.stringify(products));
    localStorage.setItem('chaithanya_highlights_fixed', JSON.stringify(highlights));
    localStorage.setItem('chaithanya_cart_fixed', JSON.stringify(cart));
    localStorage.setItem('chaithanya_orders_fixed', JSON.stringify(orders));
    localStorage.setItem('chaithanya_reviews_fixed', JSON.stringify(reviews));
    localStorage.setItem('chaithanya_visitors_fixed', String(visitors));
    localStorage.setItem('chaithanya_users_fixed', JSON.stringify(users));
    localStorage.setItem('chaithanya_notifications_fixed', JSON.stringify(notifications));
    localStorage.setItem('chaithanya_store_settings_fixed', JSON.stringify(storeSettings));
    localStorage.setItem('chaithanya_current_user_fixed', JSON.stringify(currentUser));
  }

  function persist() {
    // LocalStorage is only a cache for this device. Shared store data is authoritative in MongoDB.
    localOnlyPersist();
    localChangeVersion += 1;
    lastLocalChangeAt = Date.now();
    if (!mongoReady || syncingFromMongo || !firstMongoLoadDone) {
      mongoLastError = MONGO_REQUIRED_MESSAGE;
      showToast(MONGO_REQUIRED_MESSAGE);
      return Promise.resolve(false);
    }

    // Serialize writes. Multiple fast admin actions must never race and overwrite
    // each other with an older snapshot of the store.
    persistChain = persistChain.then(async () => {
      const versionAtStart = localChangeVersion;
      try {
        const payload = getStoreData();
        try { localStorage.setItem('chaithanya_pending_shared_store_v2', JSON.stringify(payload)); } catch {}
        const res = await fetch('/api/store', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          cache: 'no-store',
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(await res.text());
        const result = await res.json().catch(() => ({}));
        const serverTime = new Date(result.updatedAt || payload.updatedAt).getTime() || Date.now();
        mongoUpdatedAt = Math.max(mongoUpdatedAt, serverTime);

        // Verify the write against MongoDB before reporting success. This
        // prevents the admin UI from claiming a save when the shared store
        // was not actually persisted.
        const verify = await fetch('/api/store?_=' + Date.now(), {
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache' }
        });
        if (!verify.ok) throw new Error(`MongoDB verification failed: ${verify.status}`);
        const verified = await verify.json();
        if (!verified?.exists || !verified?.data) throw new Error('MongoDB verification returned no store');
        const verifiedTime = new Date(verified.data.updatedAt || 0).getTime() || 0;
        if (verifiedTime < serverTime - 2000) throw new Error('MongoDB write verification is stale');

        try {
          localStorage.removeItem('chaithanya_pending_shared_store_v2');
        } catch {}
        mongoUpdatedAt = Math.max(mongoUpdatedAt, verifiedTime);
        mongoLastError = '';
        if (localChangeVersion === versionAtStart) lastLocalChangeAt = Date.now();
        return true;
      } catch (error) {
        mongoLastError = error?.message || MONGO_REQUIRED_MESSAGE;
        console.error('MongoDB live update failed:', mongoLastError);
        showToast(MONGO_REQUIRED_MESSAGE);
        return false;
      }
    });
    return persistChain;
  }

  async function refreshFromMongo() {
    if (!mongoReady || !firstMongoLoadDone || syncingFromMongo) return;
    // Never let a polling response overwrite a recent local/admin change.
    if (Date.now() - lastLocalChangeAt < MONGO_REFRESH_GRACE_MS) return;
    try {
      const res = await fetch('/api/store?_=' + Date.now(), { cache: 'no-store', headers: { 'Cache-Control': 'no-cache' } });
      if (!res.ok) return;
      const payload = await res.json();
      if (!payload?.exists || !payload?.data) return;
      const remoteTime = new Date(payload.data.updatedAt || 0).getTime() || 0;
      if (remoteTime > mongoUpdatedAt) {
        syncingFromMongo = true;
        applyStoreData(payload.data);
        syncingFromMongo = false;
        const safeRender = (name, fn) => { try { fn(); } catch (error) { console.warn(name + ' refresh skipped:', error); } };
        safeRender('home refresh', renderHomeContent);
        safeRender('seo refresh', applySeoContent);
        safeRender('categories refresh', renderCategories);
        safeRender('products refresh', renderProducts);
        safeRender('highlights refresh', renderHighlights);
        safeRender('model gallery refresh', renderModelGallery);
        safeRender('home reviews refresh', renderHomeReviews);
        safeRender('admin refresh', renderAdmin);
        safeRender('store settings refresh', fillStoreSettingsEditor);
        safeRender('footer refresh', renderFooterSocials);
        safeRender('cart refresh', renderCart);
        updateCartCount();
        updateUserButton();
      }
    } catch (error) {
      console.warn('MongoDB background refresh failed:', error.message);
    }
  }

  function startMongoLiveRefresh() {
    if (mongoRefreshTimer) clearInterval(mongoRefreshTimer);
    mongoRefreshTimer = setInterval(refreshFromMongo, 15000);
  }


  // MongoDB is the single source of truth for shared storefront data.
  // localStorage is only a device cache and is never treated as "new data"
  // unless an explicit pending-local snapshot was created by an admin action.
  function getPendingLocalSharedData() {
    try {
      const raw = localStorage.getItem('chaithanya_pending_shared_store_v2');
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch { return null; }
  }

  function clearPendingLocalSharedData() {
    try { localStorage.removeItem('chaithanya_pending_shared_store_v2'); } catch {}
  }

  async function loadMongoFirst() {
    try {
      const res = await fetch('/api/store?_=' + Date.now(), {
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (!res.ok) throw new Error(`Store API ${res.status}`);
      const payload = await res.json();
      if (!payload || payload.error) throw new Error(payload?.error || 'Invalid store response');
      // Accept both the current flat API response and legacy {data:{...}} store shapes.
      if (payload.data && payload.data.data && typeof payload.data.data === 'object' && !Array.isArray(payload.data.data)) payload.data = payload.data.data;
      if (payload.data && payload.data.store && typeof payload.data.store === 'object' && !Array.isArray(payload.data.store)) payload.data = payload.data.store;

      mongoReady = true;

      if (payload.exists && payload.data) {
        // Existing MongoDB data is authoritative. Do NOT merge starter/local
        // browser data into it automatically; that was causing one browser's
        // stale/default cache to overwrite the shared storefront.
        mongoUpdatedAt = new Date(payload.data.updatedAt || 0).getTime() || 0;
        syncingFromMongo = true;
        applyStoreData(payload.data);
        syncingFromMongo = false;
        clearPendingLocalSharedData();
      } else {
        // Only a genuinely empty/new database is seeded with the initial
        // application state.
        syncingFromMongo = true;
        const seedRes = await fetch('/api/store?_=' + Date.now(), {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
          cache: 'no-store',
          body: JSON.stringify(getStoreData())
        });
        if (!seedRes.ok) throw new Error(`Store seed failed: ${seedRes.status}`);
        const seeded = await seedRes.json().catch(() => ({}));
        mongoUpdatedAt = new Date(seeded.updatedAt || new Date()).getTime();
        syncingFromMongo = false;
      }

      firstMongoLoadDone = true;
      startMongoLiveRefresh();
    } catch (error) {
      syncingFromMongo = false;
      mongoReady = false;
      firstMongoLoadDone = true;
      mongoLastError = error?.message || 'MongoDB unavailable';
      console.error('MongoDB first load failed:', mongoLastError);
      showToast('MongoDB is unavailable. The site is read-only until the database reconnects.');
    }
  }

  function showToast(message) {
    const text = String(message || 'Done');
    let toast = document.getElementById('chaithanyaToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'chaithanyaToast';
      toast.style.position = 'fixed';
      toast.style.right = '22px';
      toast.style.bottom = '22px';
      toast.style.zIndex = '99999';
      toast.style.maxWidth = '360px';
      toast.style.padding = '14px 18px';
      toast.style.borderRadius = '18px';
      toast.style.background = '#fff';
      toast.style.color = '#000';
      toast.style.border = '1px solid rgba(255,255,255,.25)';
      toast.style.boxShadow = '0 20px 60px rgba(0,0,0,.45)';
      toast.style.fontWeight = '800';
      toast.style.transition = 'opacity .25s ease, transform .25s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    clearTimeout(window.__chaithanyaToastTimer);
    window.__chaithanyaToastTimer = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(12px)';
    }, 2800);
  }

  function money(amount) { return '₹' + Math.round(Number(amount || 0)).toLocaleString('en-IN'); }
  function productColors(product) { return (product.colors && product.colors.length ? product.colors : COLORS).filter(Boolean); }
  function discountAmount(product) { return Math.max(0, Number(product.discount || 0)); }
  function finalPrice(product) { return Math.max(0, Number(product.price || 0) - discountAmount(product)); }
  function shippingAmount(product) { return Math.max(0, Number(product.shipping || 0)); }
  function stockAmount(product) { return Number(product.stock ?? 50); }

  function productAnimation(product) {
    const allowed = ['none','zoom','float','slide','pulse'];
    const value = String(product?.animation || 'zoom').toLowerCase();
    return allowed.includes(value) ? value : 'zoom';
  }

  function formatSocialCount(value) {
    const n = Math.max(0, Number(value || 0));
    if (n >= 1000000) return `${(n/1000000).toFixed(n % 1000000 ? 1 : 0)}M`;
    if (n >= 1000) return `${(n/1000).toFixed(n % 1000 ? 1 : 0)}K`;
    return String(n);
  }

  function renderFooterSocials() {
    const grid = $('footerSocialGrid');
    if (!grid) return;
    const items = [
      { key:'instagram', name:'Instagram', countLabel:'Likes / followers', icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.7" r="1.2" fill="currentColor"/></svg>` },
      { key:'facebook', name:'Facebook', countLabel:'Likes / followers', icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z" fill="currentColor"/></svg>` },
      { key:'youtube', name:'YouTube', countLabel:'Subscribers', icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C2 9 2 12 2 12s0 3 .4 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2C22 15 22 12 22 12s0-3-.4-4.8Z" fill="currentColor"/><path d="m10 15.5 5-3.5-5-3.5v7Z" fill="#fff"/></svg>` },
      { key:'whatsapp', name:'WhatsApp', countLabel:'Contacts / followers', icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.2 11.2 0 0 0 12.6 1C6.5.7 1.4 5.5 1.1 11.5c-.1 2.1.4 4.1 1.5 5.8L1 23l5.9-1.5a11.4 11.4 0 0 0 5.4 1.4h.1c6.1 0 11-4.9 11-11 0-3.1-1-6.1-2.9-8.4ZM12.4 20.5c-1.7 0-3.4-.5-4.9-1.4l-.4-.2-3.5.9.9-3.4-.2-.4a8.9 8.9 0 1 1 8.1 4.5Zm4.9-6.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.7-.8-2.8-1.5-3.9-3.4-.3-.5.3-.5.8-1.7.1-.2 0-.4-.1-.6-.1-.2-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.3 3.5 5.6 4.8 2.1.8 2.9.8 3.9.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z" fill="currentColor"/></svg>` }
    ];
    grid.innerHTML = items.map(item => {
      const data = storeSettings?.social?.[item.key] || { url:'', likes:0 };
      const url = String(data.url || '').trim();
      const count = formatSocialCount(data.likes);
      const inner = `<span class="footer-social-icon">${item.icon}</span><span class="footer-social-copy"><b>${item.name}</b><small>${count} ${item.countLabel}</small></span>`;
      return url ? `<a class="footer-social-card" href="${escapeHtmlAttr(url)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<div class="footer-social-card disabled" aria-label="${item.name} social link not configured">${inner}</div>`;
    }).join('');
  }

  function escapeHtmlAttr(value) {
    return String(value || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function slug(text) { return String(text).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'category'; }
  function normalizeImageUrl(value) {
    if (!value) return '';
    if (typeof value === 'string') return value.trim();
    if (typeof value === 'object') return String(value.url || value.secure_url || value.src || value.path || '').trim();
    return '';
  }
  function getImages(product) {
    if (!product) return [];
    const raw = [product.image];
    if (Array.isArray(product.images)) raw.push(...product.images);
    else if (typeof product.images === 'string') raw.push(...product.images.split(','));
    return raw.map(normalizeImageUrl).filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
  }
  function normColorName(value) { return String(value || '').trim().toLowerCase().replace(/\s+/g, ' '); }
  function colorImageMap(product) {
    const map = {};
    if (!product) return map;
    if (product.colorImages && typeof product.colorImages === 'object') {
      Object.keys(product.colorImages).forEach(key => { if (product.colorImages[key]) map[normColorName(key)] = product.colorImages[key]; });
    }
    if (!Object.keys(map).length) {
      const colors = productColors(product);
      const imgs = getImages(product);
      colors.forEach((color, index) => { if (imgs[index]) map[normColorName(color)] = imgs[index]; });
    }
    return map;
  }
  function imageForColor(product, color) {
    const map = colorImageMap(product);
    return normalizeImageUrl(map[normColorName(color)]) || normalizeImageUrl(product?.image) || getImages(product)[0] || fallbackImage;
  }
  function parseColorImages(value) {
    const map = {};
    String(value || '').split(',').map(x => x.trim()).filter(Boolean).forEach(pair => {
      const parts = pair.split('=');
      if (parts.length >= 2) {
        const key = parts.shift().trim();
        const url = parts.join('=').trim();
        if (key && url) map[key] = url;
      }
    });
    return map;
  }
  function colorImagesToText(product) {
    return Object.entries(product?.colorImages || {}).map(([color, url]) => `${color}=${url}`).join(', ');
  }
  function safeText(text) { return String(text || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c])); }
  function shortText(text, limit = 155) { const value = String(text || 'Premium Chaithanya product.'); return value.length > limit ? value.slice(0, limit).trim() + '...' : value; }

  async function uploadImageToMongo(file) {
    if (!file) return '';
    if (!file.type || !file.type.startsWith('image/')) throw new Error('Please select an image file');

    // Keep Netlify's serverless request/response sizes safe while preserving good quality.
    let uploadFile = file;
    if (file.size > 4.5 * 1024 * 1024 && typeof createImageBitmap === 'function') {
      try {
        const bitmap = await createImageBitmap(file);
        const maxSide = 2200;
        const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
        const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.86));
        if (blob && blob.size < file.size) uploadFile = new File([blob], (file.name || 'image').replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' });
        bitmap.close();
      } catch (e) { console.warn('Image compression skipped:', e.message); }
    }

    const fd = new FormData();
    fd.append('image', uploadFile);
    const uploadEndpoint = location.protocol === 'file:' ? 'http://localhost:3000/api/upload' : '/api/upload';
    const res = await fetch(uploadEndpoint, { method: 'POST', body: fd, cache: 'no-store' });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) throw new Error(data.error || 'MongoDB image upload failed');
    return data.url;
  }

  async function uploadMultipleImages(files) {
    const urls = [];
    for (const file of Array.from(files || [])) urls.push(await uploadImageToMongo(file));
    return urls;
  }


  function renderHomeContent() {
    if ($('heroEyebrowText')) $('heroEyebrowText').textContent = heroContent.eyebrow || starterHome.eyebrow;
    if ($('heroTitleText')) $('heroTitleText').textContent = heroContent.title || starterHome.title;
    if ($('heroDescriptionText')) $('heroDescriptionText').textContent = heroContent.description || starterHome.description;
    const primary = document.querySelector('.hero .btn.primary');
    const secondary = $('heroAdminLoginBtn');
    if (primary) primary.textContent = heroContent.primaryButton || starterHome.primaryButton;
    if (secondary) secondary.textContent = heroContent.secondaryButton || starterHome.secondaryButton;

    const imgs = Array.isArray(heroContent.images) && heroContent.images.length
      ? heroContent.images
      : [heroContent.image || starterHome.image, ...(starterHome.images || []).slice(1)];
    const safeImgs = [imgs[0], imgs[1] || imgs[0], imgs[2] || imgs[0]].filter(Boolean);
    ['heroImagePreview','heroImagePreview2','heroImagePreview3'].forEach((id, i) => {
      const img = $(id);
      if (!img) return;
      img.src = safeImgs[i] || fallbackImage;
      img.classList.remove('hidden');
    });
    const dots = document.querySelectorAll('.hero-floating-dots i');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === 0));
    fillHomeEditor();
  }

  const headerCategoryProfiles = {
    panchaloha: { eyebrow: 'CHALAKUDY • PANCHALOHA JEWELLERY', title: 'Tradition, <em>crafted with devotion.</em>', description: 'Discover timeless Panchaloha jewellery for devotion, gifting and everyday elegance.', button: 'Explore Panchaloha', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=85&w=1800&auto=format&fit=crop' },
    rudraksha: { eyebrow: 'CHAITHANYA • RUDRAKSHA COLLECTION', title: 'Grounded in <em>natural energy.</em>', description: 'Explore Rudraksha styles made for spiritual practice, everyday wear and meaningful gifting.', button: 'Explore Rudraksha', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=85&w=1800&auto=format&fit=crop' },
    spiritual: { eyebrow: 'CHAITHANYA • SPIRITUAL JEWELLERY', title: 'Wear your <em>spiritual alignment.</em>', description: 'Meaningful jewellery inspired by devotion, balance and timeless Indian craft.', button: 'Explore Spiritual', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=85&w=1800&auto=format&fit=crop' },
    zodiac: { eyebrow: 'CHAITHANYA • RASHI / ZODIAC', title: 'A piece made for <em>your sign.</em>', description: 'Discover symbolic jewellery collections connected to zodiac-inspired meaning and gifting.', button: 'Explore Zodiac', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=85&w=1800&auto=format&fit=crop' },
    gifting: { eyebrow: 'CHAITHANYA • GIFT COLLECTIONS', title: 'Give something <em>meaningful.</em>', description: 'Thoughtful jewellery for celebrations, milestones, devotion and special moments.', button: 'Explore Gifts', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=85&w=1800&auto=format&fit=crop' },
    karungali: { eyebrow: 'CHAITHANYA • KARUNGALI', title: 'Classic craft with <em>grounded style.</em>', description: 'Explore Karungali-inspired jewellery for spiritual and everyday styling.', button: 'Explore Karungali', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=85&w=1800&auto=format&fit=crop' },
    'energy-stones': { eyebrow: 'CHAITHANYA • ENERGY STONES', title: 'Colour, character and <em>meaning.</em>', description: 'Discover expressive stone jewellery selected for gifting and personal styling.', button: 'Explore Energy Stones', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=85&w=1800&auto=format&fit=crop' },
    malas: { eyebrow: 'CHAITHANYA • MALAS', title: 'Tradition you can <em>carry with you.</em>', description: 'Explore mala-inspired designs for devotion, meditation and meaningful everyday wear.', button: 'Explore Malas', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=85&w=1800&auto=format&fit=crop' },
    bestsellers: { eyebrow: 'CHAITHANYA • BESTSELLERS', title: 'Loved pieces, <em>beautifully worn.</em>', description: 'Explore the pieces customers return to for everyday style and meaningful gifting.', button: 'View Bestsellers', image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=85&w=1800&auto=format&fit=crop' }
  };

  function animateHeaderCategory(category) {
    const key = String(category || '').toLowerCase();
    const profile = headerCategoryProfiles[key];
    const hero = document.querySelector('.hero');
    if (!profile || !hero) return;
    const image = $('heroImagePreview');
    const copy = document.querySelector('.hero-copy');
    const setText = (id, value) => { const el = $(id); if (el) el.innerHTML = value || ''; };
    hero.classList.remove('category-switching');
    copy?.classList.remove('category-copy-switching');
    void hero.offsetWidth;
    hero.classList.add('category-switching');
    copy?.classList.add('category-copy-switching');
    setText('heroEyebrowText', profile.eyebrow);
    setText('heroTitleText', profile.title);
    setText('heroDescriptionText', profile.description);
    const primary = document.querySelector('.hero .hero-shop-btn');
    if (primary) primary.innerHTML = `${safeText(profile.button)} <span>→</span>`;
    if (image) {
      image.classList.add('hero-category-image-out');
      setTimeout(() => {
        image.src = profile.image;
        image.onload = () => image.classList.remove('hero-category-image-out');
        setTimeout(() => image.classList.remove('hero-category-image-out'), 450);
      }, 160);
    }
    document.querySelectorAll('.jp-category-nav a[data-category-jump]').forEach(a => a.classList.toggle('active-category', a.dataset.categoryJump === key));
    document.querySelectorAll('.reference-category-rail [data-category-jump]').forEach(a => a.classList.toggle('active-category', a.dataset.categoryJump === key));
  }

  function openHeroCategory() {
    const key = String(heroContent.clickCategory || categories[0]?.id || starterHome.clickCategory || 'panchaloha').toLowerCase();
    applyHeaderCategory(key, { scroll: false });
    requestAnimationFrame(() => {
      document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { location.hash = '#shop'; } catch {}
    });
  }

  function applyHeaderCategory(category, options = {}) {
    const key = String(category || '').toLowerCase();
    animateHeaderCategory(key);
    const filter = $('categoryFilter');
    const hasExactFilter = filter && Array.from(filter.options).some(o => o.value === key);
    if (hasExactFilter) filter.value = key;
    else if (filter && ['karungali','energy-stones','malas','zodiac','gifting','bestsellers'].includes(key)) filter.value = key;
    if (filter) renderProducts();
    renderModelGallery(key);
    if (options.scroll !== false) {
      document.getElementById('modelGallerySection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  let heroFloatingTimer = null;
  let heroFloatingIndex = 0;
  function startHeroFloatingAnimation() {
    clearInterval(heroFloatingTimer);
    const cards = Array.from(document.querySelectorAll('.floating-image-card'));
    const dots = Array.from(document.querySelectorAll('.hero-floating-dots i'));
    if (cards.length < 3) return;
    heroFloatingIndex = 0;
    cards.forEach((card, i) => card.classList.toggle('is-active', i === 0));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === 0));
    heroFloatingTimer = setInterval(() => {
      heroFloatingIndex = (heroFloatingIndex + 1) % 3;
      cards.forEach((card, i) => card.classList.toggle('is-active', i === heroFloatingIndex));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === heroFloatingIndex));
    }, 4200);
  }

  function applySeoContent() {
    document.title = seoContent.title || starterSeo.title;
    const desc = document.querySelector('meta[name="description"]');
    const keys = document.querySelector('meta[name="keywords"]');
    const canonical = document.getElementById('canonicalLink');
    const ogTitle = document.getElementById('ogTitle');
    const ogDesc = document.getElementById('ogDescription');
    if (desc) desc.setAttribute('content', seoContent.description || starterSeo.description);
    if (keys) keys.setAttribute('content', seoContent.keywords || starterSeo.keywords);
    if (canonical) canonical.setAttribute('href', seoContent.canonical || starterSeo.canonical);
    if (ogTitle) ogTitle.setAttribute('content', seoContent.title || starterSeo.title);
    if (ogDesc) ogDesc.setAttribute('content', seoContent.description || starterSeo.description);
    fillSeoEditor();
  }

  function fillStoreSettingsEditor() {
    const set = (id, value) => { if ($(id)) $(id).value = value ?? ''; };
    set('settingsGstNumber', storeSettings.gstNumber);
    set('settingsGstRate', storeSettings.gstRate);
    set('settingsUpiId', storeSettings.upiId);
    set('settingsInstagramUrl', storeSettings.social.instagram.url); set('settingsInstagramLikes', storeSettings.social.instagram.likes);
    set('settingsFacebookUrl', storeSettings.social.facebook.url); set('settingsFacebookLikes', storeSettings.social.facebook.likes);
    set('settingsYoutubeUrl', storeSettings.social.youtube.url); set('settingsYoutubeLikes', storeSettings.social.youtube.likes);
    set('settingsWhatsappUrl', storeSettings.social.whatsapp.url); set('settingsWhatsappLikes', storeSettings.social.whatsapp.likes);
  }
  async function saveStoreSettings() {
    storeSettings = {
      gstNumber: $('settingsGstNumber')?.value.trim() || '', gstRate: Math.max(0, Number($('settingsGstRate')?.value || 0)), upiId: $('settingsUpiId')?.value.trim() || UPI_ID,
      social: {
        instagram: { url: $('settingsInstagramUrl')?.value.trim() || '', likes: Math.max(0, Number($('settingsInstagramLikes')?.value || 0)) },
        facebook: { url: $('settingsFacebookUrl')?.value.trim() || '', likes: Math.max(0, Number($('settingsFacebookLikes')?.value || 0)) },
        youtube: { url: $('settingsYoutubeUrl')?.value.trim() || '', likes: Math.max(0, Number($('settingsYoutubeLikes')?.value || 0)) },
        whatsapp: { url: $('settingsWhatsappUrl')?.value.trim() || '', likes: Math.max(0, Number($('settingsWhatsappLikes')?.value || 0)) }
      }
    };
    if (!await persist()) return; renderCart(); renderAdmin(); renderFooterSocials(); alert('Store settings saved to MongoDB and synced to all devices.');
  }

  function fillSeoEditor() {
    if ($('seoTitleInput')) $('seoTitleInput').value = seoContent.title || '';
    if ($('seoDescriptionInput')) $('seoDescriptionInput').value = seoContent.description || '';
    if ($('seoKeywordsInput')) $('seoKeywordsInput').value = seoContent.keywords || '';
    if ($('seoCanonicalInput')) $('seoCanonicalInput').value = seoContent.canonical || '';
    if ($('seoPreviewTitle')) $('seoPreviewTitle').textContent = seoContent.title || starterSeo.title;
    if ($('seoPreviewUrl')) $('seoPreviewUrl').textContent = seoContent.canonical || starterSeo.canonical;
    if ($('seoPreviewDescription')) $('seoPreviewDescription').textContent = seoContent.description || starterSeo.description;
  }

  async function saveSeoContent() {
    seoContent = {
      title: $('seoTitleInput')?.value.trim() || starterSeo.title,
      description: $('seoDescriptionInput')?.value.trim() || starterSeo.description,
      keywords: $('seoKeywordsInput')?.value.trim() || starterSeo.keywords,
      canonical: $('seoCanonicalInput')?.value.trim() || starterSeo.canonical
    };
    if (!await persist()) return; applySeoContent(); alert('SEO setup saved to MongoDB and synced to all devices.');
  }

  async function resetSeoContent() {
    if (!confirm('Reset SEO settings?')) return;
    seoContent = { ...starterSeo };
    if (!await persist()) return; applySeoContent();
  }

  function fillHomeEditor() {
    if ($('homeEyebrowInput')) $('homeEyebrowInput').value = heroContent.eyebrow || '';
    if ($('homeTitleInput')) $('homeTitleInput').value = heroContent.title || '';
    if ($('homeDescriptionInput')) $('homeDescriptionInput').value = heroContent.description || '';
    if ($('homePrimaryButtonInput')) $('homePrimaryButtonInput').value = heroContent.primaryButton || '';
    if ($('homeSecondaryButtonInput')) $('homeSecondaryButtonInput').value = heroContent.secondaryButton || '';
    const targetSelect = $('homeClickCategoryInput');
    if (targetSelect) {
      targetSelect.innerHTML = categories.map(c => `<option value="${safeText(c.id)}">${safeText(c.name)}</option>`).join('');
      targetSelect.value = heroContent.clickCategory || categories[0]?.id || starterHome.clickCategory;
    }
    const imgs = Array.isArray(heroContent.images) ? heroContent.images : [heroContent.image || ''];
    if ($('homeImageUrlInput')) $('homeImageUrlInput').value = imgs[0] && !String(imgs[0]).startsWith('data:') ? imgs[0] : '';
    if ($('homeImageUrlInput2')) $('homeImageUrlInput2').value = imgs[1] && !String(imgs[1]).startsWith('data:') ? imgs[1] : '';
    if ($('homeImageUrlInput3')) $('homeImageUrlInput3').value = imgs[2] && !String(imgs[2]).startsWith('data:') ? imgs[2] : '';
  }

  async function saveHomeContent() {
    const existing = Array.isArray(heroContent.images) ? heroContent.images : [heroContent.image || ''];
    const images = [
      $('homeImageUrlInput')?.value.trim() || existing[0] || starterHome.images[0],
      $('homeImageUrlInput2')?.value.trim() || existing[1] || starterHome.images[1],
      $('homeImageUrlInput3')?.value.trim() || existing[2] || starterHome.images[2]
    ];
    heroContent = {
      ...heroContent,
      eyebrow: $('homeEyebrowInput')?.value.trim() || starterHome.eyebrow,
      title: $('homeTitleInput')?.value.trim() || starterHome.title,
      description: $('homeDescriptionInput')?.value.trim() || starterHome.description,
      primaryButton: $('homePrimaryButtonInput')?.value.trim() || starterHome.primaryButton,
      secondaryButton: $('homeSecondaryButtonInput')?.value.trim() || starterHome.secondaryButton,
      clickCategory: $('homeClickCategoryInput')?.value || heroContent.clickCategory || categories[0]?.id || starterHome.clickCategory,
      image: images[0],
      images
    };
    if (!await persist()) return; renderHomeContent(); startHeroFloatingAnimation(); alert('Homepage hero saved to MongoDB and synced to all devices.');
  }

  async function resetHomeContent() {
    if (!confirm('Reset homepage hero to default?')) return;
    heroContent = { ...starterHome, images: [...starterHome.images] };
    if (!await persist()) return; renderHomeContent(); startHeroFloatingAnimation();
  }

  async function handleHomeImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const slot = Number(event.target.dataset.slot || 0);
    try {
      const url = await uploadImageToMongo(file);
      const imgs = Array.isArray(heroContent.images) ? [...heroContent.images] : [heroContent.image || starterHome.images[0], starterHome.images[1], starterHome.images[2]];
      imgs[slot] = url;
      heroContent = { ...heroContent, image: imgs[0], images: imgs };
      const input = $('homeImageUrlInput' + (slot ? String(slot + 1) : ''));
      if (input) input.value = url.startsWith('data:') ? '' : url;
      if (!await persist()) return; renderHomeContent(); startHeroFloatingAnimation();
      alert('Floating hero image saved to MongoDB.');
    } catch (err) {
      alert(err.message);
    }
  }


  function updateUserButton() {
    const btn = $('openUserLoginBtn');
    if (btn) btn.textContent = currentUser ? (currentUser.name || 'My Account') : 'User Login';
    updateNotificationBadge();
  }

  function userNotifications() {
    if (!currentUser) return [];
    return notifications.filter(n => !n.userId || String(n.userId) === String(currentUser.id));
  }

  function unreadNotifications() {
    return userNotifications().filter(n => !(n.readBy || []).includes(String(currentUser?.id))).length;
  }

  function updateNotificationBadge() {
    const badge = $('userNotificationBadge');
    if (!badge) return;
    const count = unreadNotifications();
    badge.textContent = count;
    badge.classList.toggle('hidden-badge', count === 0);
  }

  function isUserLoggedIn() { return !!(currentUser && (currentUser.phone || currentUser.email)); }

  function openUserAuth(reason = 'Please login or register to continue.', afterLogin = null) {
    pendingUserAction = afterLogin;
    if ($('userAuthNote')) $('userAuthNote').textContent = reason;
    $('userAuthOverlay')?.classList.remove('hidden');
    $('userAuthOverlay')?.setAttribute('aria-hidden', 'false');
    showUserLogin();
  }

  function closeUserAuth() {
    $('userAuthOverlay')?.classList.add('hidden');
    $('userAuthOverlay')?.setAttribute('aria-hidden', 'true');
  }

  function showUserLogin() {
    $('userLoginForm')?.classList.remove('hidden');
    $('userRegisterForm')?.classList.add('hidden');
    $('showUserLoginBtn')?.classList.add('active');
    $('showUserRegisterBtn')?.classList.remove('active');
    if ($('userAuthTitle')) $('userAuthTitle').textContent = 'User Login';
  }

  function showUserRegister() {
    $('userLoginForm')?.classList.add('hidden');
    $('userRegisterForm')?.classList.remove('hidden');
    $('showUserLoginBtn')?.classList.remove('active');
    $('showUserRegisterBtn')?.classList.add('active');
    if ($('userAuthTitle')) $('userAuthTitle').textContent = 'Create Account';
  }

  function finishUserLogin(user) {
    currentUser = { id: user.id, name: user.name, phone: user.phone, email: user.email, address: user.address || '', pin: user.pin || '' };
    localOnlyPersist();
    updateUserButton();
    closeUserAuth();
    const action = pendingUserAction;
    pendingUserAction = null;
    if (typeof action === 'function') action();
  }

  function findUserByEmail(email) {
    const normalized = String(email || '').trim().toLowerCase();
    if (!normalized) return null;
    return users.find(u => String(u.email || '').trim().toLowerCase() === normalized) || null;
  }

  function autoLoginWithEmail() {
    const input = $('loginUserPhone');
    const email = input?.value.trim().toLowerCase() || '';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;
    const user = findUserByEmail(email);
    if (!user) return false;
    finishUserLogin(user);
    return true;
  }

  function userLogin() {
    // Email-only login: if the email belongs to an existing registered user,
    // log them in immediately without asking for the password.
    if (autoLoginWithEmail()) return;

    const loginId = $('loginUserPhone')?.value.trim().toLowerCase();
    const pass = $('loginUserPassword')?.value || '';
    const user = users.find(u => (String(u.phone || '').toLowerCase() === loginId || String(u.email || '').toLowerCase() === loginId) && u.password === pass);
    if (!user) { alert('Account not found. Please register first or check your details.'); return; }
    finishUserLogin(user);
  }

  function userRegister() {
    const name = $('registerUserName')?.value.trim();
    const phone = $('registerUserPhone')?.value.trim();
    const email = $('registerUserEmail')?.value.trim().toLowerCase();
    const address = $('registerUserAddress')?.value.trim();
    const pin = $('registerUserPin')?.value.trim();
    const pass = $('registerUserPassword')?.value || '';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !phone || !email || !emailOk || !address || !pin || pass.length < 4) { alert('Enter name, phone number, valid email, full address, pin code and minimum 4 character password.'); return; }
    if (users.some(u => String(u.phone || '').toLowerCase() === phone.toLowerCase() || String(u.email || '').toLowerCase() === email)) { alert('This phone number or email already exists. Please login.'); showUserLogin(); return; }
    const user = { id: Date.now(), name, phone, email, address, pin, password: pass, createdAt: new Date().toLocaleString('en-IN') };
    users.unshift(user);
    finishUserLogin(user);
  }

  function requireUser(reason, action) {
    if (isUserLoggedIn()) { action(); return; }
    openUserAuth(reason, action);
  }

  function renderReferenceCategoryRail() {
    const items = $('referenceCategoryItems');
    if (!items) return;

    // Show every saved category. Categories must not disappear just because
    // there is currently no product assigned to them.
    const savedCategories = Array.isArray(categories) ? categories.filter(cat => cat && cat.id && cat.name) : [];
    items.innerHTML = savedCategories.length ? savedCategories.map(cat => {
      const product = products.find(p => String(p.category) === String(cat.id));
      const image = cat.image || product?.image || fallbackImage;
      return `<a href="#product" data-category-jump="${safeText(cat.id)}" title="${safeText(cat.name)}"><img src="${safeText(image)}" alt="${safeText(cat.name)}"><span>${safeText(String(cat.name).toUpperCase())}</span></a>`;
    }).join('') : '<p class="category-empty-state">No categories available yet.</p>';
  }

  function closeCategoryRail() {
    const rail = document.querySelector('.reference-category-rail');
    rail?.classList.add('category-rail-closed');
    $('reopenCategoryRailBtn')?.classList.remove('hidden');
  }

  function reopenCategoryRail() {
    const rail = document.querySelector('.reference-category-rail');
    rail?.classList.remove('category-rail-closed');
    $('reopenCategoryRailBtn')?.classList.add('hidden');
  }

  function renderCategories() {
    renderReferenceCategoryRail();
    // categoryGrid was removed from the Japam-style homepage. Keep this optional
    // so the admin/login system and product filters still work without it.
    const grid = $('categoryGrid');
    if (grid) {
      grid.innerHTML = categories.map(cat => `
        <button class="category-card" data-category-jump="${cat.id}" style="background-image:url('${cat.image || fallbackImage}')">
          <h3>${cat.name}</h3>
        </button>
      `).join('');
    }
    const filter = $('categoryFilter');
    if (filter) { const available = categories.filter(cat => products.some(p => String(p.category) === String(cat.id))); filter.innerHTML = '<option value="all">All Products</option>' + available.map(cat => `<option value="${safeText(cat.id)}">${safeText(cat.name)}</option>`).join(''); }
    const productCategory = $('productCategory');
    if (productCategory) productCategory.innerHTML = categories.map(cat => `<option value="${cat.id}">${cat.name}</option>`).join('');
  }

  function renderHeaderSearchResults() {
    const box = $('headerSearchResults');
    if (!box) return;
    const query = String(productSearchTerm || '').trim().toLowerCase();
    if (!query) { box.innerHTML = ''; box.classList.remove('has-results'); return; }
    const matches = products.filter((p) => {
      const categoryName = categories.find(c => String(c.id) === String(p.category))?.name || '';
      return [p.id, p.productId, p.sku, p.code, p.name, p.description, categoryName, ...(Array.isArray(p.colors) ? p.colors : [])]
        .some(value => String(value || '').toLowerCase().includes(query));
    }).slice(0, 8);
    if (!matches.length) {
      box.innerHTML = '<div class="header-search-no-results">No matching products</div>';
      box.classList.add('has-results');
      return;
    }
    box.innerHTML = matches.map(p => {
      const pid = p.productId || p.sku || p.code || p.id || '';
      return `<button type="button" class="header-search-result" data-search-product="${safeText(p.id)}" role="option">
        <img src="${safeText(p.image || fallbackImage)}" alt="${safeText(row.product.name || 'Product')}" onerror="this.src='${fallbackImage}'">
        <span class="header-search-result-copy"><strong>${safeText(p.name || 'Product')}</strong><small>${safeText(pid)}${p.price != null ? ' · ' + money(p.price) : ''}</small></span>
      </button>`;
    }).join('');
    box.classList.add('has-results');
  }

  function renderProducts() {
    const filter = $('categoryFilter')?.value || 'all';
    const query = String(productSearchTerm || '').trim().toLowerCase();
    const matchesSearch = (p) => {
      if (!query) return true;
      const categoryName = categories.find(c => String(c.id) === String(p.category))?.name || '';
      return [p.id, p.productId, p.sku, p.code, p.name, p.description, categoryName, ...(Array.isArray(p.colors) ? p.colors : [])]
        .some(value => String(value || '').toLowerCase().includes(query));
    };
    const filteredProducts = products.filter(matchesSearch);
    const card = (product) => `
      <article class="product-card product-card-animated product-anim-${safeText(productAnimation(product))}">
        <img src="${safeText(product.image || fallbackImage)}" alt="${safeText(product.name)}" data-view-product="${safeText(product.id)}" onerror="this.src='${fallbackImage}'" style="cursor:pointer">
        <div class="product-body">
          <p class="eyebrow">CHAITHANYA</p>
          <h3>${safeText(product.name)}</h3>
          <div class="card-desc-box" data-card-desc-box="${safeText(product.id)}">
            <p class="muted card-product-desc" data-card-desc="${safeText(product.id)}" data-full-desc="${safeText(product.description)}" data-short-desc="${safeText(shortText(product.description))}">${safeText(shortText(product.description))}</p>
            ${String(product.description || '').length > 155 ? `<button class="card-read-more" data-card-read-more="${safeText(product.id)}" type="button">Read More</button>` : ''}
          </div>
          <h2>${discountAmount(product) ? `<span class="old-price">${money(product.price)}</span> ${money(finalPrice(product))}` : money(product.price)}</h2>
          <p class="product-meta-line">Stock: ${stockAmount(product) || 'Out'} · Shipping: ${shippingAmount(product) ? money(shippingAmount(product)) : 'Free'}${discountAmount(product) ? ` · Discount ${money(discountAmount(product))}` : ''}</p>
          <div class="actions"><button class="btn primary" data-view-product="${safeText(product.id)}">View Product</button><button class="btn secondary" data-quick-cart="${safeText(product.id)}">Add Cart</button></div>
        </div>
      </article>`;
    if (filter !== 'all') {
      const visible = filteredProducts.filter(p => String(p.category) === String(filter));
      $('productGrid').innerHTML = visible.length ? visible.map(card).join('') : '<p class="muted">No products in this category.</p>';
    } else {
      const groups = categories.map(cat => ({ cat, items: filteredProducts.filter(p => String(p.category) === String(cat.id)) })).filter(g => g.items.length);
      const uncategorized = filteredProducts.filter(p => !categories.some(c => String(c.id) === String(p.category)));
      if (query && !groups.length && !uncategorized.length) { $('productGrid').innerHTML = '<p class="muted search-empty">No products found for “' + safeText(productSearchTerm) + '”. Try another search.</p>'; updateCartCount(); return; }
      $('productGrid').innerHTML = groups.map(({cat, items}) => `
        <section class="product-category-section" data-product-category-section="${safeText(cat.id)}">
          <div class="product-category-heading"><div><p class="eyebrow">COLLECTION</p><h3>${safeText(cat.name)}</h3></div><span>${items.length} product${items.length === 1 ? '' : 's'}</span></div>
          <div class="product-grid product-category-grid">${items.map(card).join('')}</div>
        </section>`).join('') + (uncategorized.length ? `
        <section class="product-category-section"><div class="product-category-heading"><div><p class="eyebrow">COLLECTION</p><h3>Other Products</h3></div><span>${uncategorized.length} products</span></div><div class="product-grid product-category-grid">${uncategorized.map(card).join('')}</div></section>` : '');
      if (!groups.length && !uncategorized.length) $('productGrid').innerHTML = '<p class="muted">No products available yet.</p>';
    }
    updateCartCount();
  }



  function findFullCurrentUser() {
    if (!currentUser) return null;
    return users.find(u => String(u.id) === String(currentUser.id)) || users.find(u => (u.email && u.email === currentUser.email) || (u.phone && u.phone === currentUser.phone)) || currentUser;
  }

  function openProfile() {
    if (!isUserLoggedIn()) { openUserAuth('Please login or register to open your profile.'); return; }
    renderProfile();
    $('profileDrawer')?.classList.remove('hidden');
    switchProfileTab('profileEditTab');
  }

  function closeProfile() { $('profileDrawer')?.classList.add('hidden'); }

  function switchProfileTab(tabId) {
    document.querySelectorAll('.profile-tab-panel').forEach(panel => panel.classList.add('hidden'));
    const panel = $(tabId);
    if (panel) panel.classList.remove('hidden');
    document.querySelectorAll('[data-profile-tab]').forEach(btn => {
      const active = btn.dataset.profileTab === tabId;
      btn.classList.toggle('active', active);
      btn.classList.toggle('profile-inner-active', active && btn.closest('.profile-inner-menu'));
    });
    renderProfile();
  }

  function renderProfile() {
    const user = findFullCurrentUser();
    if (!user) return;
    if ($('profileAvatar')) $('profileAvatar').textContent = safeText((user.name || 'U').slice(0, 1).toUpperCase());
    if ($('profileAvatarLarge')) $('profileAvatarLarge').textContent = safeText((user.name || 'U').slice(0, 1).toUpperCase());
    if ($('profileNameText')) $('profileNameText').textContent = user.name || 'Customer';
    if ($('profileEmailText')) $('profileEmailText').textContent = user.email || 'No email';
    if ($('profilePhoneText')) $('profilePhoneText').textContent = user.phone || 'No phone';
    if ($('profileNameInput')) $('profileNameInput').value = user.name || '';
    if ($('profilePhoneInput')) $('profilePhoneInput').value = user.phone || '';
    if ($('profileEmailInput')) $('profileEmailInput').value = user.email || '';
    if ($('profileAddressInput')) $('profileAddressInput').value = user.address || '';
    if ($('profilePinInput')) $('profilePinInput').value = user.pin || '';
    if ($('profileDetailName')) $('profileDetailName').textContent = user.name || '-';
    if ($('profileDetailPhone')) $('profileDetailPhone').textContent = user.phone || '-';
    if ($('profileDetailEmail')) $('profileDetailEmail').textContent = user.email || '-';
    if ($('profileDetailAddress')) $('profileDetailAddress').textContent = user.address || '-';
    if ($('profileDetailPin')) $('profileDetailPin').textContent = user.pin || '-';
    if ($('profileNotificationList')) $('profileNotificationList').innerHTML = userNotifications().length ? userNotifications().map(n => `<div class="profile-order-card"><b>${safeText(n.title || 'Chaithanya update')}</b><p class="muted small">${safeText(n.message || '')}</p><small>${safeText(n.date || '')}</small></div>`).join('') : '<p class="muted">No notifications yet.</p>';

    if ($('profileCartList')) $('profileCartList').innerHTML = cart.length ? cart.map(item => `
      <div class="profile-product-row">
        <img src="${item.image || fallbackImage}" onerror="this.src='${fallbackImage}'" alt="${safeText(item.name)}">
        <div><b>${safeText(item.name)}</b><p class="muted small">${safeText(item.size)} / ${safeText(item.color)} · Qty ${item.qty}</p><span>${money(Number(item.price) * Number(item.qty || 1))}</span></div>
      </div>
    `).join('') : '<p class="muted">No carted products yet.</p>';

    const myOrders = orders.filter(order => String(order.userId || '') === String(user.id || '') || (user.email && order.email === user.email) || (user.phone && order.phone === user.phone));
    if ($('profilePurchasedList')) $('profilePurchasedList').innerHTML = myOrders.length ? myOrders.map(order => `
      <div class="profile-order-card">
        <b>Order #${String(order.id).slice(-6)} · ${money(order.total || 0)}</b>
        <p class="muted small">${safeText(order.date || '')} · ${safeText(order.address || user.address || '')} · PIN ${safeText(order.pin || user.pin || '-')}</p>
        ${(order.items || []).map(item => `<div class="profile-product-row mini"><img src="${item.image || fallbackImage}" onerror="this.src='${fallbackImage}'" alt="${safeText(item.name)}"><div><b>${safeText(item.name)}</b><p class="muted small">${safeText(item.size)} / ${safeText(item.color)} · Qty ${item.qty}</p></div></div>`).join('')}
      </div>
    `).join('') : '<p class="muted">No purchased products yet.</p>';
  }

  function saveProfile() {
    if (!isUserLoggedIn()) return;
    const name = $('profileNameInput')?.value.trim();
    const phone = $('profilePhoneInput')?.value.trim();
    const email = $('profileEmailInput')?.value.trim().toLowerCase();
    const address = $('profileAddressInput')?.value.trim();
    const pin = $('profilePinInput')?.value.trim();
    if (!name || !phone || !email || !address || !pin) { alert('Please fill name, address, phone, email and pin code.'); return; }
    const index = users.findIndex(u => String(u.id) === String(currentUser.id));
    if (index >= 0) users[index] = { ...users[index], name, phone, email, address, pin };
    currentUser = { ...(currentUser || {}), id: users[index]?.id || currentUser.id, name, phone, email, address, pin };
    persist(); updateUserButton(); renderProfile(); renderAdmin(); alert('Profile updated.');
  }

  function renderUserNotifications() {
    if (!$('userNotificationList')) return;
    if (!isUserLoggedIn()) {
      $('userNotificationList').innerHTML = '<p class="muted">Login to see your offers and new product alerts.</p>';
      updateNotificationBadge();
      return;
    }
    const list = userNotifications();
    $('userNotificationList').innerHTML = list.length ? list.map(n => `
      <article class="notification-card ${!(n.readBy || []).includes(String(currentUser.id)) ? 'unread' : ''}">
        <span>${n.type === 'offer' ? '🔥 OFFER' : n.type === 'new-product' ? '🛍 NEW PRODUCT' : '✨ DROP'}</span>
        <h4>${safeText(n.title)}</h4>
        <p>${safeText(n.message)}</p>
        <small>${safeText(n.date || '')}</small>
        ${n.link ? `<a href="${safeText(n.link)}" class="small-link">Open</a>` : ''}
      </article>
    `).join('') : '<p class="muted">No notifications yet.</p>';
    notifications = notifications.map(n => ({...n, readBy: Array.from(new Set([...(n.readBy || []), String(currentUser.id)]))}));
    persist();
    updateNotificationBadge();
  }

  function openNotifications() {
    if (!isUserLoggedIn()) { openUserAuth('Please login or register to see offer notifications.'); return; }
    $('notificationDrawer')?.classList.remove('hidden');
    renderUserNotifications();
  }

  function closeNotifications() { $('notificationDrawer')?.classList.add('hidden'); }

  function clearUserNotifications() {
    if (!currentUser) return;
    notifications = notifications.filter(n => n.userId && String(n.userId) !== String(currentUser.id));
    persist();
    renderUserNotifications();
    renderAdmin();
  }

  function sendBrowserNotification(title, message) {
    if (!$('notifyBrowserPopup')?.checked) return;
    if (!('Notification' in window)) return;
    if (Notification.permission === 'granted') new Notification(title, { body: message, icon: '' });
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') new Notification(title, { body: message, icon: '' });
      });
    }
  }



  function storeUrl() {
    return location.origin && location.origin !== 'null' ? location.origin + location.pathname : 'https://chaithanya.store';
  }

  function buildNotificationMessage(title, message, link) {
    const url = link && link.startsWith('http') ? link : storeUrl() + (link || '#shop');
    return `CHAITHANYA UPDATE\n\n${title}\n${message}\n\nShop now: ${url}`;
  }

  async function emailAllUsers(title, message, link) {
    const emailUsers = users.filter(u => u.email);
    const emails = emailUsers.map(u => u.email);
    if (!emails.length) { alert('No registered user email found.'); return false; }
    const body = buildNotificationMessage(title, message, link);

    // Real email sending needs the included Node.js backend.
    // Start it with: npm install && npm start, then open http://localhost:3000
    try {
      const res = await fetch('/api/send-notification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emails, subject: title, message: body })
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error || 'Email failed');
      alert(`Email sent successfully to ${data.sent} registered user(s).`);
      return true;
    } catch (err) {
      console.warn('Backend email failed. Opening mail app fallback:', err);
      window.location.href = `mailto:?bcc=${encodeURIComponent(emails.join(','))}&subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
      alert('Email server is not running or SMTP is not configured. I opened your email app as fallback. For automatic sending, run the included Node server and add SMTP details in .env.');
      return false;
    }
  }

  function whatsappUser(phone, title, message, link) {
    if (!phone) { alert('This user has no phone number.'); return; }
    const cleanPhone = String(phone).replace(/\D/g, '');
    const finalPhone = cleanPhone.length === 10 ? '91' + cleanPhone : cleanPhone;
    const body = buildNotificationMessage(title, message, link);
    window.open(`https://wa.me/${finalPhone}?text=${encodeURIComponent(body)}`, '_blank');
  }

  function whatsappAllUsers(title, message, link) {
    const phoneUsers = users.filter(u => u.phone);
    if (!phoneUsers.length) { alert('No registered user phone number found.'); return false; }
    phoneUsers.forEach((u, index) => setTimeout(() => whatsappUser(u.phone, title, message, link), index * 850));
    return true;
  }

  async function sendNotificationToRegisteredUsers(title, message, link) {
    let sentWhatsApp = false;
    let sentEmail = false;
    if ($('notifySendWhatsApp')?.checked) sentWhatsApp = whatsappAllUsers(title, message, link);
    if ($('notifySendEmail')?.checked) sentEmail = await emailAllUsers(title, message, link);
    if (sentWhatsApp || sentEmail) {
      alert('Notification process completed. WhatsApp chats may open separately; email sends automatically when backend SMTP is configured.');
    }
  }

  function latestNotice() { return notifications[0] || null; }

  function createNotification(type, title, message, link = '#shop', showPopup = true, autoSend = false) {
    if (!title || !message) { alert('Add notification title and message'); return; }
    const notice = { id: Date.now(), type, title, message, link, date: new Date().toLocaleString('en-IN'), readBy: [] };
    notifications.unshift(notice);
    persist();
    renderAdmin();
    updateNotificationBadge();
    if (showPopup && isUserLoggedIn()) sendBrowserNotification(title, message);
    if ($('lastShareActions')) { $('lastShareActions').classList.remove('hidden'); $('lastShareActions').dataset.title = title; $('lastShareActions').dataset.message = message; $('lastShareActions').dataset.link = link; }
    if (autoSend) sendNotificationToRegisteredUsers(title, message, link);
    else alert('Notification saved. Use WhatsApp All / Email All to send it to registered users.');
  }

  function sendAdminNotification() {
    createNotification($('notifyType')?.value || 'offer', $('notifyTitle')?.value.trim(), $('notifyMessage')?.value.trim(), $('notifyLink')?.value.trim() || '#shop', true, true);
    if ($('notifyTitle')) $('notifyTitle').value = '';
    if ($('notifyMessage')) $('notifyMessage').value = '';
  }

  function sendNewProductTemplate() {
    const product = products[0];
    const title = product ? `New Product: ${product.name}` : 'New Chaithanya Product Live';
    const message = product ? `${product.name} is now available at ${money(finalPrice(product))}. Tap to shop now.` : 'A new Chaithanya product is now live. Tap to shop now.';
    createNotification('new-product', title, message, '#shop', true, true);
  }

  function renderAdmin() {
    // Keep every admin section independent: a bad record in one list must not hide
    // products, categories, reviews or registered users from the administrator.
    const safeCategories = Array.isArray(categories) ? categories : [];
    const safeProducts = Array.isArray(products) ? products : [];
    const safeOrders = Array.isArray(orders) ? orders : [];
    const safeReviews = Array.isArray(reviews) ? reviews : [];
    const safeUsers = Array.isArray(users) ? users : [];
    const safeNotifications = Array.isArray(notifications) ? notifications : [];

    try { fillHighlightsEditor(); } catch (error) { console.warn('Highlights admin render skipped:', error); }

    const revenue = safeOrders.reduce((sum, order) => sum + Number(order?.total || 0), 0);
    const itemsSold = safeOrders.reduce((sum, order) => sum + (Array.isArray(order?.items) ? order.items.reduce((n, item) => n + Number(item?.qty || 1), 0) : 0), 0);
    const conversion = visitors ? ((safeOrders.length / visitors) * 100).toFixed(1) + '%' : '0%';
    const avgOrder = safeOrders.length ? money(revenue / safeOrders.length) : money(0);
    const latest = safeOrders[0]?.date || safeReviews[0]?.date || 'No activity';
    if ($('statVisitors')) $('statVisitors').textContent = visitors;
    if ($('statProducts')) $('statProducts').textContent = safeProducts.length;
    if ($('statCategories')) $('statCategories').textContent = safeCategories.length;
    if ($('statOrders')) $('statOrders').textContent = safeOrders.length;
    if ($('statItemsSold')) $('statItemsSold').textContent = itemsSold;
    if ($('statSellingStatus')) $('statSellingStatus').textContent = revenue > 0 ? 'Active' : 'No Sales';
    if ($('statRevenue')) $('statRevenue').textContent = money(revenue) + ' revenue';
    if ($('statReviews')) $('statReviews').textContent = safeReviews.length;
    if ($('statConversion')) $('statConversion').textContent = conversion;
    if ($('statAvgOrder')) $('statAvgOrder').textContent = avgOrder;
    if ($('statLatestActivity')) $('statLatestActivity').textContent = latest;

    const productBox = $('adminProductList');
    if (productBox) {
      try {
        productBox.innerHTML = safeProducts.length ? safeProducts.map(product => `
          <div class="admin-row">
            <img src="${safeText(product?.image || fallbackImage)}" onerror="this.src='${fallbackImage}'" alt="${safeText(product?.name || 'Product')}">
            <div><b>${safeText(product?.name || 'Unnamed Product')}</b><p class="muted small">${discountAmount(product) ? money(finalPrice(product)) + ' sale · MRP ' + money(product.price) : money(product.price)} · Stock ${stockAmount(product)} · Ship ${shippingAmount(product) ? money(shippingAmount(product)) : 'Free'} · ${safeText(productColors(product).join(', '))}</p></div>
            <div class="mini-actions"><button type="button" data-edit-product="${safeText(product?.id)}">Edit Product</button><button type="button" data-delete-product="${safeText(product?.id)}">Delete</button></div>
          </div>
        `).join('') : '<p class="muted">No products yet. Add a product above.</p>';
      } catch (error) {
        console.warn('Product admin list render skipped:', error);
        productBox.innerHTML = '<p class="muted">Product list could not be rendered. Try refreshing the page.</p>';
      }
    }

    const categoryBox = $('adminCategoryList');
    if (categoryBox) {
      try {
        categoryBox.innerHTML = safeCategories.length ? safeCategories.map(cat => `
          <div class="admin-row">
            <img src="${safeText(cat?.image || fallbackImage)}" onerror="this.src='${fallbackImage}'" alt="${safeText(cat?.name || 'Category')}">
            <div><b>${safeText(cat?.name || 'Unnamed Category')}</b><p class="muted small">${safeText(cat?.id || '')}</p></div>
            <div class="mini-actions"><button type="button" data-edit-category="${safeText(cat?.id)}">Edit Category</button><button type="button" data-delete-category="${safeText(cat?.id)}">Delete</button></div>
          </div>
        `).join('') : '<p class="muted">No categories yet. Add a category above.</p>';
      } catch (error) {
        console.warn('Category admin list render skipped:', error);
        categoryBox.innerHTML = '<p class="muted">Category list could not be rendered. Try refreshing the page.</p>';
      }
    }

    const orderBox = $('adminOrderList');
    if (orderBox) orderBox.innerHTML = safeOrders.length ? safeOrders.map(order => `
      <div class="admin-row"><div></div><div><b>${safeText(order?.name || 'Customer')} · ${safeText(order?.phone || 'No phone')}</b><p class="muted small">${safeText(order?.email || 'No email')} · ${safeText(order?.date || '')} · ${money(order?.total || 0)} · ${Array.isArray(order?.items) ? order.items.length : 0} item(s)</p><p class="small">${safeText(order?.address || '')} · PIN: ${safeText(order?.pin || '-')}</p></div><div class="mini-actions"><button type="button" data-delete-order="${safeText(order?.id)}">Delete</button></div></div>
    `).join('') : '<p class="muted">No orders yet.</p>';

    const reviewBox = $('adminReviewList');
    if (reviewBox) {
      reviewBox.innerHTML = safeReviews.length ? safeReviews.map(review => {
        const product = safeProducts.find(p => String(p?.id) === String(review?.productId));
        return `<div class="admin-row">
          <img src="${safeText(review?.photo || fallbackImage)}" onerror="this.src='${fallbackImage}'" alt="Review">
          <div><b>${safeText(review?.name || 'Customer')} · ${'★'.repeat(Math.max(0, Math.min(5, Number(review?.rating || 5))) || 5)}</b><p class="muted small">${safeText(product?.name || 'Product removed')} · ${safeText(review?.date || '')}</p><p class="small">${safeText(review?.text || '')}</p><small class="muted">Customer review</small></div>
          <div class="mini-actions"><button type="button" data-delete-review="${safeText(review?.id)}">Delete Review</button></div>
        </div>`;
      }).join('') : '<p class="muted">No customer reviews yet. Reviews submitted by customers will appear here.</p>';
    }

    const userBox = $('adminUserList');
    if (userBox) {
      userBox.innerHTML = safeUsers.length ? safeUsers.map(user => `
        <div class="admin-row user-detail-row">
          <div class="user-avatar">${safeText((user?.name || 'U').slice(0,1).toUpperCase())}</div>
          <div><b>${safeText(user?.name || 'Customer')}</b><p class="muted small">Phone: ${safeText(user?.phone || '-')} · Email: ${safeText(user?.email || '-')}</p><p class="small">Address: ${safeText(user?.address || '-')} · PIN: ${safeText(user?.pin || '-')}</p><p class="small">Registered: ${safeText(user?.createdAt || '-')}</p></div>
          <div class="mini-actions"><button type="button" data-whatsapp-user="${safeText(user?.id)}">WhatsApp</button><button type="button" data-email-user="${safeText(user?.id)}">Email</button><button type="button" data-delete-user="${safeText(user?.id)}">Delete</button></div>
        </div>
      `).join('') : '<p class="muted">No registered users yet. New customer registrations will appear here.</p>';
    }

    const notificationBox = $('adminNotificationList');
    if (notificationBox) notificationBox.innerHTML = safeNotifications.length ? safeNotifications.map(n => `
      <div class="admin-row notification-admin-row"><div class="notice-icon">${n?.type === 'offer' ? '🔥' : n?.type === 'new-product' ? '🛍' : '✨'}</div><div><b>${safeText(n?.title || '')}</b><p class="muted small">${safeText(n?.type || '')} · ${safeText(n?.date || '')}</p><p class="small">${safeText(n?.message || '')}</p></div><div class="mini-actions"><button type="button" data-whatsapp-notice="${safeText(n?.id)}">WhatsApp All</button><button type="button" data-email-notice="${safeText(n?.id)}">Email All</button><button type="button" data-delete-notification="${safeText(n?.id)}">Delete</button></div></div>
    `).join('') : '<p class="muted">No notifications sent yet.</p>';
  }

  function renderHighlightProductCard(product) {
    return `<article class="highlight-product-card" data-view-product="${safeText(product.id)}">
      <button class="highlight-product-image" type="button" data-view-product="${safeText(product.id)}" aria-label="View ${safeText(product.name)}">
        <img src="${safeText(product.image || fallbackImage)}" alt="${safeText(product.name)}" loading="lazy" onerror="this.src='${fallbackImage}'">
      </button>
      <div class="highlight-product-body">
        <p class="eyebrow">${safeText(categories.find(c => String(c.id) === String(product.category))?.name || 'Chaithanya Jewellery')}</p>
        <h4>${safeText(product.name)}</h4>
        <div class="highlight-product-price">${discountAmount(product) ? `<span class="old-price">${money(product.price)}</span>` : ''}${money(finalPrice(product))}</div>
        <button class="btn secondary small" type="button" data-view-product="${safeText(product.id)}">View Product →</button>
      </div>
    </article>`;
  }

  function salesByProduct() {
    const stats = new Map();
    (orders || []).forEach(order => {
      (order.items || []).forEach(item => {
        const id = String(item.id || '');
        if (!id) return;
        const row = stats.get(id) || { qty: 0, revenue: 0, orders: 0 };
        row.qty += Number(item.qty || 1);
        row.revenue += Number(item.price || 0) * Number(item.qty || 1);
        row.orders += 1;
        stats.set(id, row);
      });
    });
    return stats;
  }

  function getAutomaticTrendingIds() {
    const stats = salesByProduct();
    return products
      .filter(p => stats.has(String(p.id)))
      .map(p => ({ id: String(p.id), ...stats.get(String(p.id)) }))
      .sort((a, b) => b.qty - a.qty || b.orders - a.orders || b.revenue - a.revenue)
      .slice(0, Math.max(1, Math.min(12, Number(highlights.autoTrendingLimit || 6))))
      .map(row => row.id);
  }

  function getTrendingIdsForHome() {
    const manual = Array.isArray(highlights.trendingProducts) ? highlights.trendingProducts.map(String) : [];
    const automatic = highlights.autoTrending !== false ? getAutomaticTrendingIds() : [];
    return [...manual, ...automatic.filter(id => !manual.includes(id))];
  }

  function renderHighlights() {
    const section = $('highlightsSection');
    const newGrid = $('newProductsHighlightGrid');
    const trendingGrid = $('trendingProductsHighlightGrid');
    if (!section || !newGrid || !trendingGrid) return;
    const findProducts = ids => (Array.isArray(ids) ? ids : []).map(id => products.find(p => String(p.id) === String(id))).filter(Boolean);
    const newItems = findProducts(highlights.newProducts);
    const trendingItems = findProducts(getTrendingIdsForHome());
    const hasAny = newItems.length || trendingItems.length;
    section.classList.toggle('hidden', !hasAny);
    newGrid.innerHTML = newItems.length ? newItems.map(renderHighlightProductCard).join('') : '<p class="muted highlight-empty">No new products selected yet.</p>';
    trendingGrid.innerHTML = trendingItems.length ? trendingItems.map(renderHighlightProductCard).join('') : '<p class="muted highlight-empty">No sales data yet. Select manual trending products in Admin.</p>';
  }

  function highlightProductOptions(selectedIds = []) {
    const selected = new Set((selectedIds || []).map(String));
    return products.map(product => `
      <label class="highlight-admin-product">
        <input type="checkbox" value="${safeText(product.id)}" ${selected.has(String(product.id)) ? 'checked' : ''}>
        <img src="${safeText(product.image || fallbackImage)}" alt="${safeText(row.product.name || 'Product')}" onerror="this.src='${fallbackImage}' loading="lazy">
        <span><b>${safeText(product.name)}</b><small>${money(finalPrice(product))} · ${safeText(categories.find(c => String(c.id) === String(product.category))?.name || product.category || '')}</small></span>
      </label>`).join('') || '<p class="muted small">Add products first from the Products panel.</p>';
  }

  function fillHighlightPicker(id, selectedIds = []) {
    const picker = $(id);
    if (!picker) return;
    const selected = new Set((selectedIds || []).map(String));
    picker.innerHTML = '<option value=\"\">Select an existing product…</option>' + products.map(product => `<option value=\"${safeText(product.id)}\" ${selected.has(String(product.id)) ? 'disabled' : ''}>${safeText(product.name || 'Product')} — ${money(finalPrice(product))}</option>`).join('');
  }

  async function addHighlightProduct(listKey, pickerId) {
    const picker = $(pickerId);
    if (!picker || !picker.value) return;
    const id = String(picker.value);
    const current = Array.isArray(highlights[listKey]) ? highlights[listKey].map(String) : [];
    if (!current.includes(id)) current.push(id);
    highlights[listKey] = current;
    if (!await persist()) return;
    fillHighlightsEditor();
    renderHighlights();
    picker.value = '';
  }

  function fillHighlightsEditor() {
    if ($('newHighlightsAdminList')) $('newHighlightsAdminList').innerHTML = highlightProductOptions(highlights.newProducts);
    if ($('trendingHighlightsAdminList')) $('trendingHighlightsAdminList').innerHTML = highlightProductOptions(highlights.trendingProducts);
    fillHighlightPicker('newHighlightProductPicker', highlights.newProducts);
    fillHighlightPicker('trendingHighlightProductPicker', highlights.trendingProducts);
    if ($('autoTrendingEnabled')) $('autoTrendingEnabled').checked = highlights.autoTrending !== false;
    if ($('autoTrendingLimit')) $('autoTrendingLimit').value = highlights.autoTrendingLimit || 6;
    const stats = salesByProduct();
    const rows = products.map(product => ({ product, ...(stats.get(String(product.id)) || { qty: 0, revenue: 0, orders: 0 }) }))
      .filter(row => row.qty > 0)
      .sort((a,b) => b.qty - a.qty || b.orders - a.orders || b.revenue - a.revenue)
      .slice(0, 12);
    if ($('autoTrendingSalesList')) {
      $('autoTrendingSalesList').innerHTML = rows.length ? rows.map((row, i) => `<div class="auto-trending-row"><span class="auto-rank">${i + 1}</span><img src="${safeText(row.product.image || fallbackImage)}" alt="${safeText(row.product.name || 'Product')}" onerror="this.src='${fallbackImage}'"><div><b>${safeText(row.product.name)}</b><small>${row.qty} sold · ${row.orders} order${row.orders === 1 ? '' : 's'} · ${money(row.revenue)}</small></div></div>`).join('') : '<p class="muted small">No completed orders yet. Automatic trending will appear here after customers place orders.</p>';
    }
  }

  function readHighlightIds(containerId) {
    return Array.from(document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`)).map(input => input.value);
  }

  async function saveHighlights() {
    highlights = {
      newProducts: readHighlightIds('newHighlightsAdminList'),
      trendingProducts: readHighlightIds('trendingHighlightsAdminList'),
      autoTrending: $('autoTrendingEnabled') ? $('autoTrendingEnabled').checked : true,
      autoTrendingLimit: Math.max(1, Math.min(12, Number($('autoTrendingLimit')?.value || 6)))
    };
    if (!await persist()) return;
    fillHighlightsEditor();
    renderHighlights();
    alert('Homepage highlights saved to MongoDB and synced to all devices.');
  }

  async function clearHighlights() {
    if (!confirm('Remove all products from New and Trending highlights?')) return;
    highlights = { newProducts: [], trendingProducts: [], autoTrending: true, autoTrendingLimit: 6 };
    if (!await persist()) return;
    fillHighlightsEditor();
    renderHighlights();
  }

  function renderProductReviews(productId) {
    if (!$('productReviews')) return;
    const productReviews = reviews.filter(r => String(r.productId) === String(productId));
    $('productReviews').innerHTML = productReviews.length ? productReviews.map(r => `
      <article class="photo-review-card">
        <img src="${r.photo || fallbackImage}" onerror="this.src='${fallbackImage}'" alt="Customer review">
        <div><b>${safeText(r.name || 'Customer')}</b><span>${'★'.repeat(Number(r.rating || 5))}</span><p>${safeText(r.text || '')}</p><small class="muted">Registered customer feedback</small></div>
      </article>
    `).join('') : '<p class="muted small">No photo reviews yet for this product.</p>';
  }


  function renderModelGallery(categoryOverride) {
    const grid = $('modelGalleryGrid');
    const section = $('modelGallerySection');
    if (!grid || !section) return;
    const selected = categoryOverride || $('categoryFilter')?.value || 'all';
    const allItems = Array.isArray(modelGallery) ? modelGallery.filter(item => item && item.image) : [];
    const matching = selected === 'all' ? allItems : allItems.filter(item => String(item.category || '').toLowerCase() === String(selected).toLowerCase());
    const items = matching.length ? matching : allItems;
    section.classList.toggle('hidden', items.length === 0);
    const cat = categories.find(c => String(c.id) === String(selected));
    const title = $('modelGalleryTitle');
    const sub = $('modelGallerySubtitle');
    if (title) title.textContent = selected === 'all' ? 'Chaithanya On You' : `${cat?.name || 'Collection'} On You`;
    if (sub) sub.textContent = selected === 'all' ? 'See how our jewellery feels when worn.' : `See ${cat?.name || 'this collection'} styled on our models.`;
    grid.classList.remove('model-gallery-enter');
    void grid.offsetWidth;
    grid.classList.add('model-gallery-enter');
    grid.innerHTML = items.map((item, index) => `
      <article class="model-gallery-card" style="--delay:${(index % 16) * 70}ms">
        <img src="${safeText(item.image)}" alt="${safeText(item.alt || 'Chaithanya jewellery model')}" loading="lazy" onerror="this.src='${fallbackImage}'">
        <div class="model-gallery-caption"><span>${safeText(item.caption || 'Chaithanya Jewellery')}</span><i>${String(index + 1).padStart(2, '0')}</i></div>
      </article>
    `).join('');
  }

  function modelGalleryCategoryOptions(value = 'all') {
    return '<option value="all">All categories</option>' + categories.map(c => `<option value="${safeText(c.id)}">${safeText(c.name)}</option>`).join('');
  }

  function createModelGalleryAdminCard(item = {}, index = 0) {
    const card = document.createElement('article');
    card.className = 'model-gallery-admin-item';
    card.innerHTML = `
      <div class="model-gallery-admin-title">
        <b>Model Photo ${index + 1}</b>
        <button type="button" class="model-photo-remove" data-remove-model-photo title="Remove this photo">Remove</button>
      </div>
      <input data-model-url placeholder="Image URL" value="${safeText(String(item.image || '').startsWith('data:') ? '' : (item.image || ''))}" />
      <input data-model-file type="file" accept="image/*" />
      <input data-model-caption placeholder="Caption e.g. Panchaloha Lakshmi Pendant" value="${safeText(item.caption || '')}" />
      <input data-model-alt placeholder="Alt text e.g. Model wearing Panchaloha pendant" value="${safeText(item.alt || '')}" />
      <select data-model-category aria-label="Model photo category">${modelGalleryCategoryOptions(item.category || 'all')}</select>
    `;
    const select = card.querySelector('[data-model-category]');
    if (select) select.value = item.category || 'all';
    card.querySelector('[data-remove-model-photo]')?.addEventListener('click', () => {
      card.remove();
      renumberModelGalleryAdminCards();
      updateModelGalleryCount();
    });
    return card;
  }

  function renumberModelGalleryAdminCards() {
    document.querySelectorAll('#modelGalleryAdminList .model-gallery-admin-item').forEach((card, index) => {
      const label = card.querySelector('.model-gallery-admin-title b');
      if (label) label.textContent = `Model Photo ${index + 1}`;
    });
  }

  function updateModelGalleryCount() {
    const count = document.querySelectorAll('#modelGalleryAdminList .model-gallery-admin-item').length;
    const label = $('modelGalleryCount');
    if (label) label.textContent = `${count} photo${count === 1 ? '' : 's'} ready`;
  }

  function fillModelGalleryEditor() {
    const list = $('modelGalleryAdminList');
    if (!list) return;
    list.innerHTML = '';
    const items = Array.isArray(modelGallery) ? modelGallery : [];
    items.forEach((item, index) => list.appendChild(createModelGalleryAdminCard(item, index)));
    if (!items.length) list.appendChild(createModelGalleryAdminCard({}, 0));
    updateModelGalleryCount();
  }

  function addModelGalleryAdminCard() {
    const list = $('modelGalleryAdminList');
    if (!list) return;
    const index = list.querySelectorAll('.model-gallery-admin-item').length;
    list.appendChild(createModelGalleryAdminCard({}, index));
    updateModelGalleryCount();
    list.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  async function saveModelGallery() {
    const next = [];
    const cards = Array.from(document.querySelectorAll('#modelGalleryAdminList .model-gallery-admin-item'));
    for (let index = 0; index < cards.length; index++) {
      const card = cards[index];
      const urlInput = card.querySelector('[data-model-url]');
      const fileInput = card.querySelector('[data-model-file]');
      const captionInput = card.querySelector('[data-model-caption]');
      const altInput = card.querySelector('[data-model-alt]');
      const categoryInput = card.querySelector('[data-model-category]');
      let image = urlInput?.value.trim() || '';
      try {
        const file = fileInput?.files?.[0];
        if (file) image = await uploadImageToMongo(file);
      } catch (err) { alert(err.message); return; }
      if (!image) {
        const previous = modelGallery[index];
        image = previous?.image || '';
      }
      if (!image) continue;
      next.push({ id: index + 1, category: categoryInput?.value || 'all', image, caption: captionInput?.value.trim() || 'Chaithanya Jewellery', alt: altInput?.value.trim() || 'Model wearing Chaithanya jewellery' });
    }
    modelGallery = next;
    if (!await persist()) return;
    renderModelGallery();
    fillModelGalleryEditor();
    alert(`Model gallery saved to MongoDB. ${next.length} photo${next.length === 1 ? '' : 's'} synced to all devices.`);
  }

  async function resetModelGallery() {
    if (!confirm('Reset model gallery to the default images?')) return;
    modelGallery = starterModelGallery.map(item => ({ ...item }));
    if (!await persist()) return;
    renderModelGallery();
    fillModelGalleryEditor();
  }

  function renderModelGalleryAdmin() {
    fillModelGalleryEditor();
  }

  function renderHomeReviews() {
    const grid = $('homepageReviewGrid');
    if (!grid) return;
    const latestReviews = reviews.slice(0, 12);
    if (!latestReviews.length) {
      grid.innerHTML = `
        <article>“Premium fitting and cloth feels heavy.”<b>— Adhil</b></article>
        <article>“The black/white website look is very clean.”<b>— Nihal</b></article>
        <article>“WhatsApp checkout is easy for customers.”<b>— Arjun</b></article>`;
    } else {
      grid.innerHTML = latestReviews.map(r => {
        const product = products.find(p => String(p.id) === String(r.productId));
        const stars = '★'.repeat(Number(r.rating || 5));
        return `<article class="customer-feedback-card">
          ${r.photo ? `<img src="${r.photo}" onerror="this.style.display='none'" alt="Customer feedback photo">` : ''}
          <p>“${safeText(r.text || 'Premium quality and perfect oversized fit.')}”</p>
          <span>${stars}</span>
          <small class="muted">${product ? safeText(product.name) : 'Chaithanya Customer Feedback'}</small>
          <b>— ${safeText(r.name || 'Customer')}</b>
        </article>`;
      }).join('');
    }

    const productSelect = $('homeReviewProduct');
    if (productSelect) {
      productSelect.innerHTML = '<option value="general">General Chaithanya Review</option>' + products.map(p => `<option value="${p.id}">${safeText(p.name)}</option>`).join('');
    }
  }

  function submitHomeReview() {
    if (!isUserLoggedIn()) { openUserAuth('Please login or register to add your review.', () => submitHomeReview()); return; }
    const fileInput = $('homeReviewPhoto');
    const file = fileInput?.files?.[0];
    const text = $('homeReviewText')?.value.trim();
    if (!text) { showToast('Please write your review first.'); return; }
    const save = (photoData) => {
      const review = {
        id: Date.now(),
        productId: $('homeReviewProduct')?.value || 'general',
        userId: currentUser?.id || '',
        name: currentUser?.name || 'Chaithanya Customer',
        email: currentUser?.email || '',
        phone: currentUser?.phone || '',
        photo: photoData || '',
        rating: $('homeReviewRating')?.value || '5',
        text,
        date: new Date().toLocaleString('en-IN')
      };
      reviews.unshift(review);
      if ($('homeReviewText')) $('homeReviewText').value = '';
      if (fileInput) fileInput.value = '';
      persist();
      renderHomeReviews();
      if (currentProduct) renderProductReviews(currentProduct.id);
      renderAdmin();
      showToast('Review added. Admin can manage it in Customer Feedback.');
    };
    if (file) { const reader = new FileReader(); reader.onload = () => save(reader.result); reader.readAsDataURL(file); }
    else save('');
  }

  function submitUserReview() {
    if (!isUserLoggedIn()) { openUserAuth('Please login or register to submit a photo review.', () => submitUserReview()); return; }
    if (!currentProduct) { alert('Open a product first'); return; }
    const fileInput = $('userReviewPhoto');
    const file = fileInput?.files?.[0];
    const save = (photoData) => {
      const review = {
        id: Date.now(),
        productId: currentProduct.id,
        userId: currentUser?.id || '',
        name: currentUser?.name || 'Chaithanya Customer',
        email: currentUser?.email || '',
        phone: currentUser?.phone || '',
        photo: photoData || fallbackImage,
        rating: $('userReviewRating')?.value || '5',
        text: $('userReviewText')?.value.trim() || 'Premium quality and perfect oversized fit.',
        date: new Date().toLocaleString('en-IN')
      };
      reviews.unshift(review);
      ['userReviewText'].forEach(id => { if ($(id)) $(id).value = ''; });
      if (fileInput) fileInput.value = '';
      persist();
      renderProductReviews(currentProduct.id);
      renderHomeReviews();
      renderAdmin();
      showToast('Thank you! Your customer feedback is added. Admin can manage it.');
    };
    if (file) {
      uploadImageToMongo(file).then(save).catch(err => alert(err.message));
    } else {
      save(fallbackImage);
    }
  }


  function setProductDescription(text) {
    const desc = $('modalProductDescription');
    const btn = $('readMoreDescBtn');
    if (!desc || !btn) return;
    desc.textContent = text || 'Premium Chaithanya product.';
    desc.classList.add('collapsed');
    btn.textContent = 'Read More';
    requestAnimationFrame(() => {
      const needsReadMore = desc.scrollHeight > desc.clientHeight + 4 || (text || '').length > 140;
      btn.classList.toggle('hidden', !needsReadMore);
    });
  }

  function toggleDescription() {
    const desc = $('modalProductDescription');
    const btn = $('readMoreDescBtn');
    if (!desc || !btn) return;
    const isCollapsed = desc.classList.toggle('collapsed');
    btn.textContent = isCollapsed ? 'Read More' : 'Show Less';
  }

  function openProduct(id, updateUrl = true) {
    const wanted = String(id ?? '').trim();
    currentProduct = products.find(p => String(p.id) === wanted || String(p.slug || '') === wanted || String(p.name || '').toLowerCase() === wanted.toLowerCase());
    if (!currentProduct) { showToast('Product could not be loaded. Please refresh and try again.'); return; }
    selectedSize = SIZES[0];
    selectedColor = productColors(currentProduct)[0] || COLORS[0];
    selectedQty = 1;
    $('modalProductName').textContent = currentProduct.name;
    setProductDescription(currentProduct.description);
    $('modalProductPrice').innerHTML = discountAmount(currentProduct) ? `<span class="old-price">${money(currentProduct.price)}</span> ${money(finalPrice(currentProduct))}` : money(currentProduct.price);
    const stockNote = document.getElementById('stockNote');
    if (stockNote) stockNote.textContent = `Stock: ${stockAmount(currentProduct) || 'Out of stock'} · Shipping: ${shippingAmount(currentProduct) ? money(shippingAmount(currentProduct)) : 'Free delivery'}`;
    renderGallery(currentProduct);
    renderOptions();
    renderProductReviews(currentProduct.id);
    $('productModal').classList.remove('hidden');
    $('productModal').setAttribute('aria-hidden', 'false');
    initProductViewExtras();
    if ($('modalDescriptionCopy')) $('modalDescriptionCopy').textContent = String(currentProduct.description || 'Authentic Chaithanya jewellery made for gifting, devotion and everyday wear.');
    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set('product', String(currentProduct.id));
      window.history.pushState({ product: String(currentProduct.id) }, '', url.toString());
    }
  }

  function stopProductSlideshow() {
    if (productSlideTimer) { clearInterval(productSlideTimer); productSlideTimer = null; }
  }

  function startProductSlideshow() {
    stopProductSlideshow();
    const images = getImages(currentProduct);
    if (images.length < 2) return;
    productSlideTimer = setInterval(() => {
      if (!productSlidePaused) showProductSlide(productSlideIndex + 1, true);
    }, 4000);
  }

  function showProductSlide(index, restartTimer = false) {
    const images = getImages(currentProduct);
    if (!images.length) return;
    productSlideIndex = ((Number(index) || 0) % images.length + images.length) % images.length;
    const img = images[productSlideIndex];
    const main = $('modalMainImage');
    if (!main) return;
    main.classList.remove('product-slide-in');
    void main.offsetWidth;
    main.classList.add('product-slide-in');
    main.src = img;
    main.dataset.galleryImage = img;
    document.querySelectorAll('#thumbRow [data-thumb]').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === productSlideIndex);
    });
    if (restartTimer) startProductSlideshow();
  }

  function renderGallery(product) {
    stopProductSlideshow();
    const images = getImages(product);
    const selectedImage = imageForColor(product, selectedColor) || images[0] || fallbackImage;
    const main = $('modalMainImage');
    const wrap = $('productMainImageWrap');
    const fallback = $('productImageFallback');
    productSlideIndex = Math.max(0, images.indexOf(selectedImage));
    if (wrap) wrap.className = `product-main-image-wrap product-animation-${productAnimation(product)}`;
    if (fallback) fallback.classList.add('hidden');
    if (main) {
      main.onerror = () => {
        main.onerror = null;
        main.src = fallbackImage;
        main.classList.add('is-fallback');
        if (fallback) fallback.classList.remove('hidden');
      };
      main.onload = () => {
        main.classList.remove('is-fallback');
        if (fallback) fallback.classList.add('hidden');
      };
      main.classList.remove('is-fallback');
      main.src = selectedImage || fallbackImage;
      main.dataset.galleryImage = selectedImage || fallbackImage;
    }
    const gallery = images.length ? images : [selectedImage || fallbackImage];
    $('thumbRow').innerHTML = gallery.map((img, index) => `<button type="button" class="product-gallery-thumb ${index === productSlideIndex ? 'active' : ''}" data-thumb="${safeText(img)}" aria-label="View product image ${index + 1}"><img src="${safeText(img)}" alt="Product thumbnail" onerror="this.style.display='none'"></button>`).join('');
    if (gallery.length > 1) {
      startProductSlideshow();
    }
  }

  function renderOptions() {
    $('sizeOptions').innerHTML = SIZES.map(size => `<button class="chip ${size === selectedSize ? 'active' : ''}" data-size="${size}">${size}</button>`).join('');
    $('colorOptions').innerHTML = productColors(currentProduct || {}).map(color => `<button class="chip ${color === selectedColor ? 'active' : ''}" data-color="${color}">${color}</button>`).join('');
    $('qtyValue').textContent = selectedQty;
  }

  function initProductViewExtras() {
    const check = $('checkProductPinBtn');
    if (check && !check.dataset.bound) {
      check.dataset.bound = '1';
      check.addEventListener('click', () => {
        const pin = String($('productPincode')?.value || '').replace(/\D/g,'');
        const status = $('productPinStatus');
        if (!status) return;
        if (/^\d{6}$/.test(pin)) { status.textContent = 'Delivery available to this pincode. Exact date will be confirmed at checkout.'; }
        else { status.textContent = 'Please enter a valid 6-digit pincode.'; status.style.color = '#b42318'; }
      });
    }
  }

  function closeProduct() {
    stopProductSlideshow();
    productSlidePaused = false;
    $('productModal').classList.add('hidden');
    $('productModal').setAttribute('aria-hidden', 'true');
    const url = new URL(window.location.href);
    if (url.searchParams.has('product')) {
      url.searchParams.delete('product');
      window.history.pushState({}, '', url.toString());
    }
  }

  function openProductFromUrl() {
    const id = new URLSearchParams(window.location.search).get('product');
    if (id) setTimeout(() => openProduct(id, false), 120);
  }
  function fillCheckoutFromUser() {
    const user = findFullCurrentUser();
    if (!user) return;
    if ($('customerName') && !$('customerName').value) $('customerName').value = user.name || '';
    if ($('customerPhone') && !$('customerPhone').value) $('customerPhone').value = user.phone || '';
    if ($('customerEmail') && !$('customerEmail').value) $('customerEmail').value = user.email || '';
    if ($('customerAddress') && !$('customerAddress').value) $('customerAddress').value = user.address || '';
    if ($('customerPin') && !$('customerPin').value) $('customerPin').value = user.pin || '';
  }
  function openCart() {
    const drawer = $('cartDrawer');
    if (!drawer) return;
    drawer.classList.remove('hidden');
    drawer.setAttribute('aria-hidden', 'false');
    fillCheckoutFromUser();
    renderCart();
  }
  function closeCart() {
    const drawer = $('cartDrawer');
    if (!drawer) return;
    drawer.classList.add('hidden');
    drawer.setAttribute('aria-hidden', 'true');
  }
  function updateCartCount() { $('cartCount').textContent = cart.reduce((sum, item) => sum + Number(item.qty || 1), 0); }

  function addToCart(product = currentProduct, open = true) {
    if (!product) return;
    if (stockAmount(product) <= 0) { alert('This product is out of stock'); return; }
    const existing = cart.find(item => item.id === product.id && item.size === selectedSize && item.color === selectedColor);
    if (existing) existing.qty += selectedQty;
    else cart.push({ id: product.id, name: product.name, price: finalPrice(product), mrp: Number(product.price), discount: discountAmount(product), shipping: shippingAmount(product), image: imageForColor(product, selectedColor), size: selectedSize, color: selectedColor, qty: selectedQty });
    localOnlyPersist(); updateCartCount();
    if (open) { closeProduct(); openCart(); }
  }

  function renderCart() {
    $('cartItems').innerHTML = cart.length ? cart.map((item, index) => `
      <div class="cart-row">
        <img src="${item.image || fallbackImage}" onerror="this.src='${fallbackImage}'" alt="${item.name}">
        <div><b>${item.name}</b><p class="muted small">${item.size} / ${item.color} · Qty ${item.qty} · Shipping ${item.shipping ? money(item.shipping) : 'Free'}</p><b>${money(item.price * item.qty)}</b></div>
        <button data-remove-cart="${index}">Remove</button>
      </div>
    `).join('') : '<p class="muted">Cart is empty.</p>';
    const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty || 1), 0);
    const shipping = cart.reduce((sum, item) => sum + Number(item.shipping || 0), 0);
    const gst = subtotal * (Math.max(0, Number(storeSettings.gstRate || 0)) / 100);
    const total = subtotal + gst + shipping;
    $('subtotalAmount').textContent = money(subtotal);
    $('gstAmount').textContent = money(gst);
    const shipEl = document.getElementById('shippingAmount'); if (shipEl) shipEl.textContent = money(shipping);
    $('totalAmount').textContent = money(total);
  }

  function checkout() {
    if (!cart.length) { alert('Cart is empty'); return; }
    const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.qty || 1), 0);
    const shipping = cart.reduce((sum, item) => sum + Number(item.shipping || 0), 0);
    const gst = subtotal * (Math.max(0, Number(storeSettings.gstRate || 0)) / 100);
    const total = subtotal + gst + shipping;
    const order = { id: Date.now(), date: new Date().toLocaleString('en-IN'), name: $('customerName').value.trim() || currentUser?.name || '', phone: $('customerPhone').value.trim() || currentUser?.phone || '', email: $('customerEmail')?.value.trim() || currentUser?.email || '', address: $('customerAddress').value.trim() || currentUser?.address || '', pin: $('customerPin')?.value.trim() || currentUser?.pin || '', userId: currentUser?.id || '', items: [...cart], subtotal, gst, shipping, total };
    orders.unshift(order);
    persist(); renderAdmin(); renderProfile();
    const lines = cart.map((item, i) => `${i + 1}. ${item.name} | ${item.size}/${item.color} | Qty ${item.qty} | ${money(item.price * item.qty)}`).join('\n');
    const message = `CHAITHANYA ORDER\n\nName: ${order.name || '-'}\nPhone: ${order.phone || '-'}\nEmail: ${order.email || '-'}\nAddress: ${order.address || '-'}\nPin Code: ${order.pin || '-'}\n\n${lines}\n\nSubtotal: ${money(subtotal)}\nGST ${Number(storeSettings.gstRate || 0)}%: ${money(gst)}\nShipping: ${money(shipping)}\nTotal: ${money(total)}\n\nGST No: ${storeSettings.gstNumber || GST_NO}\nUPI ID: ${storeSettings.upiId || UPI_ID}\nPlease attach payment screenshot.`;
    if (!WHATSAPP_NUMBER) { alert('WhatsApp number is not set yet. Add the store WhatsApp number in app.js before enabling WhatsApp checkout.'); return; }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  }

  function openAdminLogin() {
    const overlay = $('adminLoginOverlay');
    if (!overlay) return;
    if ($('adminUsername')) $('adminUsername').value = '';
    if ($('adminPassword')) $('adminPassword').value = '';
    overlay.classList.remove('hidden');
    overlay.setAttribute('aria-hidden', 'false');
    setTimeout(() => $('adminUsername')?.focus(), 80);
  }

  function closeAdminLogin() {
    $('adminLoginOverlay').classList.add('hidden');
    $('adminLoginOverlay').setAttribute('aria-hidden', 'true');
  }

  function showAdminDashboard() {
    closeAdminLogin();
    $('adminDashboard').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderAdmin();
  }

  function hideAdminDashboard() {
    $('adminDashboard').classList.add('hidden');
  }

  function login() {
    if ($('adminUsername').value.trim() === ADMIN_USER && $('adminPassword').value === ADMIN_PASS) {
      showAdminDashboard();
    } else alert('Wrong username or password');
  }

  function clearProductForm() {
    ['productId','productName','productPrice','productDiscount','productStock','productShipping','productColors','productImage','productImages','productColorImages','productDescription','productAnimation','productImageFile','productImagesFile'].forEach(id => $(id) && ($(id).value = ''));
    if (categories[0]) $('productCategory').value = categories[0].id;
  }

  async function saveProduct() {
    const name = $('productName').value.trim();
    const price = Number($('productPrice').value);
    if (!name || !price) { alert('Add product name and price'); return; }
    let mainImage = $('productImage').value.trim();
    let moreImages = $('productImages').value.split(',').map(x => x.trim()).filter(Boolean);
    try {
      const mainFile = $('productImageFile')?.files?.[0];
      const moreFiles = $('productImagesFile')?.files;
      if (mainFile) mainImage = await uploadImageToMongo(mainFile);
      if (moreFiles && moreFiles.length) moreImages = moreImages.concat(await uploadMultipleImages(moreFiles));
    } catch (err) { alert(err.message); return; }
    const data = { id: $('productId').value ? Number($('productId').value) : Date.now(), name, price, discount: Number($('productDiscount').value || 0), stock: Number($('productStock').value || 0), shipping: Number($('productShipping').value || 0), colors: $('productColors').value.split(',').map(x => x.trim()).filter(Boolean), animation: $('productAnimation')?.value || 'zoom', colorImages: parseColorImages($('productColorImages')?.value || ''), category: $('productCategory').value, image: mainImage || fallbackImage, images: moreImages, description: $('productDescription').value.trim() || 'Premium Chaithanya product.' };
    const index = products.findIndex(p => String(p.id) === String(data.id));
    const isNewProduct = index < 0;
    if (index >= 0) products[index] = data; else products.unshift(data);
    if (isNewProduct) notifications.unshift({ id: Date.now() + 7, type: 'new-product', title: `New Product: ${data.name}`, message: `${data.name} is now available at ${money(finalPrice(data))}. Tap to shop now.`, link: '#shop', date: new Date().toLocaleString('en-IN'), readBy: [] });
    const saved = await persist();
    if (!saved) return;
    clearProductForm(); renderCategories(); renderProducts(); renderAdmin(); updateNotificationBadge();
  }

  function editProduct(id) {
    const product = products.find(p => String(p.id) === String(id));
    if (!product) return;
    $('productId').value = product.id; $('productName').value = product.name; $('productPrice').value = product.price; $('productDiscount').value = product.discount || 0; $('productStock').value = product.stock || 0; $('productShipping').value = product.shipping || 0; $('productColors').value = productColors(product).join(', '); $('productCategory').value = product.category; $('productImage').value = product.image; $('productImages').value = (product.images || []).join(', '); if ($('productColorImages')) $('productColorImages').value = colorImagesToText(product); if ($('productAnimation')) $('productAnimation').value = productAnimation(product); $('productDescription').value = product.description;
    document.querySelector('[data-tab="productsPanel"]').click();
  }

  async function deleteProduct(id) {
    const product = products.find(p => String(p.id) === String(id));
    products = products.filter(p => String(p.id) !== String(id));
    cart = cart.filter(i => String(i.id) !== String(id));
    await persist();
    // Remove associated GridFS files after the product record is safely persisted.
    const imageUrls = [product?.image, ...(Array.isArray(product?.images) ? product.images : []), ...Object.values(product?.colorImages || {})]
      .filter(url => typeof url === 'string' && url.includes('/api/image?id='));
    for (const url of [...new Set(imageUrls)]) {
      try { await fetch(url, { method: 'DELETE', cache: 'no-store' }); } catch (e) { console.warn('GridFS cleanup skipped:', e.message); }
    }
    renderProducts(); renderAdmin(); renderCart();
  }

  function clearCategoryForm() {
    if ($('categoryId')) $('categoryId').value = '';
    if ($('categoryName')) $('categoryName').value = '';
    if ($('categoryImage')) $('categoryImage').value = '';
    if ($('categoryImageFile')) $('categoryImageFile').value = '';
    if ($('saveCategoryBtn')) $('saveCategoryBtn').textContent = 'Add Category';
    $('cancelCategoryEditBtn')?.classList.add('hidden');
  }

  function editCategory(id) {
    const category = categories.find(c => String(c.id) === String(id));
    if (!category) return;
    if ($('categoryId')) $('categoryId').value = category.id;
    if ($('categoryName')) $('categoryName').value = category.name || '';
    if ($('categoryImage')) $('categoryImage').value = category.image || '';
    if ($('saveCategoryBtn')) $('saveCategoryBtn').textContent = 'Update Category';
    $('cancelCategoryEditBtn')?.classList.remove('hidden');
    document.querySelector('[data-tab="categoriesPanel"]')?.click();
    setTimeout(() => $('categoryName')?.focus(), 50);
  }

  async function saveCategory() {
    const name = $('categoryName').value.trim();
    if (!name) { alert('Add category name'); return; }
    let image = $('categoryImage').value.trim();
    try {
      const file = $('categoryImageFile')?.files?.[0];
      if (file) image = await uploadImageToMongo(file);
    } catch (err) { alert(err.message); return; }
    const existingId = $('categoryId')?.value || '';
    if (existingId) {
      const index = categories.findIndex(c => String(c.id) === String(existingId));
      if (index >= 0) categories[index] = { ...categories[index], name, image: image || categories[index].image || fallbackImage };
    } else {
      categories.push({ id: slug(name) + '-' + Date.now().toString().slice(-4), name, image: image || fallbackImage });
    }
    if (!await persist()) return;
    clearCategoryForm(); renderCategories(); renderProducts(); renderAdmin();
  }

  async function deleteCategory(id) {
    if (products.some(p => p.category === id)) { alert('Delete or move products from this category first'); return; }
    categories = categories.filter(c => c.id !== id);
    if (!await persist()) return; renderCategories(); renderAdmin();
  }

  function bindEvents() {
    $('closeCategoryRailBtn')?.addEventListener('click', closeCategoryRail);
    $('reopenCategoryRailBtn')?.addEventListener('click', reopenCategoryRail);
    fillModelGalleryEditor();
    renderModelGalleryAdmin();
    $('addModelPhotoBtn')?.addEventListener('click', addModelGalleryAdminCard);
    $('saveModelGalleryBtn')?.addEventListener('click', saveModelGallery);
    $('resetModelGalleryBtn')?.addEventListener('click', resetModelGallery);
    $('saveHighlightsBtn')?.addEventListener('click', saveHighlights);
    $('clearHighlightsBtn')?.addEventListener('click', clearHighlights);
    $('addNewHighlightProductBtn')?.addEventListener('click', () => addHighlightProduct('newProducts', 'newHighlightProductPicker'));
    $('addTrendingHighlightProductBtn')?.addEventListener('click', () => addHighlightProduct('trendingProducts', 'trendingHighlightProductPicker'));
    $('saveHomeContentBtn')?.addEventListener('click', saveHomeContent);
    $('resetHomeContentBtn')?.addEventListener('click', resetHomeContent);
    $('hero')?.addEventListener('click', (event) => {
      if (event.target.closest('a, button, input, textarea, select')) return;
      openHeroCategory();
    });
    $('hero')?.setAttribute('role', 'link');
    $('hero')?.setAttribute('tabindex', '0');
    $('hero')?.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('a, button, input, textarea, select')) {
        event.preventDefault();
        openHeroCategory();
      }
    });
    ['homeImageFileInput','homeImageFileInput2','homeImageFileInput3'].forEach((id, i) => { const el = $(id); if (el) { el.dataset.slot = String(i); el.addEventListener('change', handleHomeImageUpload); } });
    $('saveSeoBtn')?.addEventListener('click', saveSeoContent);
    $('saveStoreSettingsBtn')?.addEventListener('click', saveStoreSettings);
    $('resetSeoBtn')?.addEventListener('click', resetSeoContent);
    ['seoTitleInput','seoDescriptionInput','seoKeywordsInput','seoCanonicalInput'].forEach(id => $(id)?.addEventListener('input', () => {
      const temp = { title: $('seoTitleInput')?.value || starterSeo.title, description: $('seoDescriptionInput')?.value || starterSeo.description, canonical: $('seoCanonicalInput')?.value || starterSeo.canonical };
      if ($('seoPreviewTitle')) $('seoPreviewTitle').textContent = temp.title;
      if ($('seoPreviewUrl')) $('seoPreviewUrl').textContent = temp.canonical;
      if ($('seoPreviewDescription')) $('seoPreviewDescription').textContent = temp.description;
    }));
    $('headerSearchBtn')?.addEventListener('click', () => {
      const panel = $('headerSearchPanel');
      const input = $('headerSearchInput');
      if (!panel || !input) return;
      const willOpen = panel.classList.contains('hidden');
      panel.classList.toggle('hidden', !willOpen);
      $('headerSearchBtn').setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      if (willOpen) {
        requestAnimationFrame(() => input.focus());
        $('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    $('headerSearchInput')?.addEventListener('input', (event) => {
      productSearchTerm = event.target.value || '';
      renderHeaderSearchResults();
      renderProducts();
      if (productSearchTerm.trim()) $('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    $('headerSearchResults')?.addEventListener('click', (event) => {
      const item = event.target.closest('[data-search-product]');
      if (!item) return;
      const productId = item.getAttribute('data-search-product');
      const product = products.find(p => String(p.id) === String(productId));
      if (!product) return;
      productSearchTerm = product.name || productId || '';
      if ($('headerSearchInput')) $('headerSearchInput').value = productSearchTerm;
      renderHeaderSearchResults();
      renderProducts();
      requestAnimationFrame(() => document.querySelector(`[data-view-product="${CSS.escape(String(product.id))}"]`)?.scrollIntoView({behavior:'smooth', block:'center'}));
    });
    $('headerSearchInput')?.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        productSearchTerm = '';
        event.target.value = '';
        renderHeaderSearchResults();
        renderProducts();
        $('headerSearchPanel')?.classList.add('hidden');
        $('headerSearchBtn')?.setAttribute('aria-expanded', 'false');
      }
    });
    $('headerSearchClear')?.addEventListener('click', () => {
      productSearchTerm = '';
      if ($('headerSearchInput')) $('headerSearchInput').value = '';
      renderHeaderSearchResults();
      renderProducts();
      $('headerSearchInput')?.focus();
    });

    $('cartOpenBtn')?.addEventListener('click', openCart);
    $('openUserLoginBtn')?.addEventListener('click', () => { if (isUserLoggedIn()) { if (confirm('Logout current user?')) { currentUser = null; localOnlyPersist(); updateUserButton(); closeNotifications(); } } else openUserAuth('Login or register to shop on Chaithanya.'); });
    $('openUserNotificationsBtn')?.addEventListener('click', openNotifications);
    $('openUserProfileBtn')?.addEventListener('click', openProfile);
    $('closeProfileBtn')?.addEventListener('click', closeProfile);
    $('saveProfileBtn')?.addEventListener('click', saveProfile);
    $('closeNotificationsBtn')?.addEventListener('click', closeNotifications);
    $('clearUserNotificationsBtn')?.addEventListener('click', clearUserNotifications);
    $('sendNotificationBtn')?.addEventListener('click', sendAdminNotification);
    $('emailAllUsersBtn')?.addEventListener('click', () => { const box = $('lastShareActions'); emailAllUsers(box?.dataset.title || $('notifyTitle')?.value || 'Chaithanya Offer', box?.dataset.message || $('notifyMessage')?.value || 'New offer is live on Chaithanya.', box?.dataset.link || $('notifyLink')?.value || '#shop'); });
    $('whatsappAllUsersBtn')?.addEventListener('click', () => { const box = $('lastShareActions'); whatsappAllUsers(box?.dataset.title || $('notifyTitle')?.value || 'Chaithanya Offer', box?.dataset.message || $('notifyMessage')?.value || 'New offer is live on Chaithanya.', box?.dataset.link || $('notifyLink')?.value || '#shop'); });
    $('sendNewProductTemplateBtn')?.addEventListener('click', sendNewProductTemplate);
    $('closeUserAuthBtn')?.addEventListener('click', closeUserAuth);
    $('showUserLoginBtn')?.addEventListener('click', showUserLogin);
    $('showUserRegisterBtn')?.addEventListener('click', showUserRegister);
    $('userLoginSubmitBtn')?.addEventListener('click', userLogin);
    $('userRegisterSubmitBtn')?.addEventListener('click', userRegister);
    $('loginUserPhone')?.addEventListener('blur', autoLoginWithEmail);
    $('loginUserPhone')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') userLogin(); });
    $('loginUserPassword')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') userLogin(); });
    $('registerUserPassword')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') userRegister(); });
    $('closeCartBtn')?.addEventListener('click', closeCart);
    $('closeProductBtn')?.addEventListener('click', closeProduct);
    $('categoryFilter')?.addEventListener('change', () => { renderProducts(); renderModelGallery($('categoryFilter').value || 'all'); });
    ['openAdminLoginBtn','heroAdminLoginBtn','teaserAdminLoginBtn','openAdminMobileBtn','footerAdminLoginBtn'].forEach(id => $(id)?.addEventListener('click', openAdminLogin));
    $('closeAdminLoginBtn')?.addEventListener('click', closeAdminLogin);
    $('closeAdminDashboardBtn')?.addEventListener('click', hideAdminDashboard);
    $('loginBtn')?.addEventListener('click', login);
    $('adminPassword')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') login(); });
    $('logoutBtn')?.addEventListener('click', () => { hideAdminDashboard(); openAdminLogin(); });
    $('saveProductBtn')?.addEventListener('click', saveProduct);
    $('clearProductBtn')?.addEventListener('click', clearProductForm);
    $('saveCategoryBtn')?.addEventListener('click', saveCategory);
    $('cancelCategoryEditBtn')?.addEventListener('click', clearCategoryForm);
    $('submitUserReviewBtn')?.addEventListener('click', submitUserReview);
    $('submitHomeReviewBtn')?.addEventListener('click', submitHomeReview);
    $('readMoreDescBtn')?.addEventListener('click', toggleDescription);
    $('addToCartBtn')?.addEventListener('click', () => requireUser('Please login or register to add product to cart.', () => addToCart(currentProduct, true)));
    $('buyNowBtn')?.addEventListener('click', () => requireUser('Please login or register to buy this product.', () => { addToCart(currentProduct, false); closeProduct(); openCart(); }));
    $('checkoutBtn')?.addEventListener('click', () => requireUser('Please login or register before checkout.', checkout));
    $('qtyMinus')?.addEventListener('click', () => { selectedQty = Math.max(1, selectedQty - 1); renderOptions(); });
    $('qtyPlus')?.addEventListener('click', () => { selectedQty += 1; renderOptions(); });

    $('productMainImageWrap')?.addEventListener('mouseenter', () => { productSlidePaused = true; });
    $('productMainImageWrap')?.addEventListener('mouseleave', () => { productSlidePaused = false; });
    $('productMainImageWrap')?.addEventListener('touchstart', () => { productSlidePaused = true; }, { passive: true });
    $('productMainImageWrap')?.addEventListener('touchend', () => { productSlidePaused = false; }, { passive: true });
    document.body.addEventListener('keydown', (event) => {
      if ($('productModal')?.classList.contains('hidden')) return;
      if (event.key === 'ArrowLeft') showProductSlide(productSlideIndex - 1, true);
      if (event.key === 'ArrowRight') showProductSlide(productSlideIndex + 1, true);
    });

    document.body.addEventListener('click', (event) => {
      const target = event.target.closest('button, img');
      if (!target) return;
      const viewId = target.dataset.viewProduct;
      const quickId = target.dataset.quickCart;
      const removeIndex = target.dataset.removeCart;
      const editId = target.dataset.editProduct;
      const deleteId = target.dataset.deleteProduct;
      const deleteCatId = target.dataset.deleteCategory;
      const editCatId = target.dataset.editCategory;
      const deleteOrderId = target.dataset.deleteOrder;
      const deleteReviewId = target.dataset.deleteReview;
      const deleteNotificationId = target.dataset.deleteNotification;
      const size = target.dataset.size;
      const color = target.dataset.color;
      const thumb = target.dataset.thumb;
      const tab = target.dataset.tab;
      const catJump = target.dataset.categoryJump;
      const cardReadMoreId = target.dataset.cardReadMore;
      const profileTabId = target.dataset.profileTab;

      if (profileTabId) { switchProfileTab(profileTabId); return; }
      if (cardReadMoreId) {
        const desc = document.querySelector(`[data-card-desc="${cardReadMoreId}"]`);
        if (desc) {
          const expanded = desc.classList.toggle('expanded');
          desc.textContent = expanded ? desc.dataset.fullDesc : desc.dataset.shortDesc;
          target.textContent = expanded ? 'Show Less' : 'Read More';
        }
      }
      if (viewId) openProduct(viewId);
      if (quickId) requireUser('Please login or register to add product to cart.', () => { const product = products.find(p => String(p.id) === String(quickId)); selectedSize = SIZES[0]; selectedColor = productColors(product || {})[0] || 'Black'; selectedQty = 1; addToCart(product, true); });
      if (removeIndex !== undefined) { cart.splice(Number(removeIndex), 1); localOnlyPersist(); renderCart(); updateCartCount(); }
      if (editId) editProduct(editId);
      if (editCatId) editCategory(editCatId);
      if (deleteId && confirm('Delete this product?')) deleteProduct(deleteId);
      if (deleteCatId && confirm('Delete this category?')) deleteCategory(deleteCatId);
      if (deleteOrderId) { orders = orders.filter(o => String(o.id) !== String(deleteOrderId)); persist(); renderAdmin(); }
      if (deleteReviewId) { reviews = reviews.filter(r => String(r.id) !== String(deleteReviewId)); persist(); renderHomeReviews(); renderAdmin(); if (currentProduct) renderProductReviews(currentProduct.id); }
      if (deleteNotificationId) { notifications = notifications.filter(n => String(n.id) !== String(deleteNotificationId)); persist(); renderAdmin(); updateNotificationBadge(); }
      const deleteUserId = target.dataset.deleteUser;
      const whatsappNoticeId = target.dataset.whatsappNotice;
      const emailNoticeId = target.dataset.emailNotice;
      const whatsappUserId = target.dataset.whatsappUser;
      const emailUserId = target.dataset.emailUser;
      if (whatsappNoticeId) { const n = notifications.find(x => String(x.id) === String(whatsappNoticeId)); if (n) whatsappAllUsers(n.title, n.message, n.link); }
      if (emailNoticeId) { const n = notifications.find(x => String(x.id) === String(emailNoticeId)); if (n) emailAllUsers(n.title, n.message, n.link); }
      if (whatsappUserId) { const u = users.find(x => String(x.id) === String(whatsappUserId)); const n = latestNotice(); if (u) whatsappUser(u.phone, n?.title || 'Chaithanya Offer', n?.message || 'New offer is live on Chaithanya.', n?.link || '#shop'); }
      if (emailUserId) { const u = users.find(x => String(x.id) === String(emailUserId)); const n = latestNotice(); if (u?.email) window.location.href = `mailto:${encodeURIComponent(u.email)}?subject=${encodeURIComponent(n?.title || 'Chaithanya Offer')}&body=${encodeURIComponent(buildNotificationMessage(n?.title || 'Chaithanya Offer', n?.message || 'New offer is live on Chaithanya.', n?.link || '#shop'))}`; }
      if (deleteUserId) { users = users.filter(u => String(u.id) !== String(deleteUserId)); if (currentUser && String(currentUser.id) === String(deleteUserId)) currentUser = null; persist(); renderAdmin(); updateUserButton(); }
      if (size) { selectedSize = size; renderOptions(); }
      if (color) { selectedColor = color; renderOptions(); renderGallery(currentProduct); }
      if (thumb) { const idx = getImages(currentProduct).indexOf(thumb); showProductSlide(idx >= 0 ? idx : 0, true); }
      if (tab) {
        const panel = $(tab);
        if (panel) {
          document.querySelectorAll('.admin-panel').forEach(p => p.classList.add('hidden'));
          document.querySelectorAll('.admin-nav.tab').forEach(btn => btn.classList.remove('active'));
          target.classList.add('active');
          panel.classList.remove('hidden');
          if (tab === 'productsPanel' || tab === 'categoriesPanel' || tab === 'reviewsPanel' || tab === 'usersPanel' || tab === 'ordersPanel') renderAdmin();
          panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }
      if (catJump) { event.preventDefault(); applyHeaderCategory(catJump, { scroll: false }); navigateToPage('product', { keepScroll: false }); setTimeout(() => $('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40); }
    });

    document.addEventListener('click', (event) => {
      const pageLink = event.target.closest('[data-page-link]');
      if (!pageLink) return;
      event.preventDefault();
      const page = pageLink.dataset.pageLink;
      toggleMobileMenu(false);
      navigateToPage(page);
    });

    document.addEventListener('click', (event) => {
      const anchor = event.target.closest('a[href="#shop"], a[href="#drops"], a[href="#reviews"], a[href="#about"], a[href="#contact"]');
      if (!anchor || anchor.matches('[data-category-jump]')) return;
      const href = anchor.getAttribute('href');
      event.preventDefault();
      const page = href === '#shop' || href === '#drops' ? 'product' : href === '#reviews' ? 'feedback' : href === '#about' ? 'about' : 'support';
      navigateToPage(page);
    });

    // Global close handling keeps overlays usable even if an optional panel fails to initialize.
    document.addEventListener('click', (event) => {
      const closeTarget = event.target.closest('#closeCartBtn, #closeProductBtn, #closeAdminDashboardBtn, #closeAdminLoginBtn, #closeProfileBtn, #closeNotificationsBtn, .login-close');
      if (!closeTarget) return;
      if (closeTarget.id === 'closeCartBtn') closeCart();
      else if (closeTarget.id === 'closeProductBtn') closeProduct();
      else if (closeTarget.id === 'closeAdminDashboardBtn') hideAdminDashboard();
      else if (closeTarget.id === 'closeAdminLoginBtn' || closeTarget.classList.contains('login-close')) closeAdminLogin();
      else if (closeTarget.id === 'closeProfileBtn') closeProfile();
      else if (closeTarget.id === 'closeNotificationsBtn') closeNotifications();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      if (!$('productModal')?.classList.contains('hidden')) closeProduct();
      if (!$('cartDrawer')?.classList.contains('hidden')) closeCart();
      if (!$('profileDrawer')?.classList.contains('hidden')) closeProfile();
      if (!$('notificationDrawer')?.classList.contains('hidden')) closeNotifications();
      if (!$('adminLoginOverlay')?.classList.contains('hidden')) closeAdminLogin();
      if (!$('adminDashboard')?.classList.contains('hidden')) hideAdminDashboard();
    });

    $('productModal')?.addEventListener('click', (event) => { if (event.target.id === 'productModal') closeProduct(); });
    $('cartDrawer')?.addEventListener('click', (event) => { if (event.target.id === 'cartDrawer') closeCart(); });
    $('notificationDrawer')?.addEventListener('click', (event) => { if (event.target.id === 'notificationDrawer') closeNotifications(); });
    $('profileDrawer')?.addEventListener('click', (event) => { if (event.target.id === 'profileDrawer') closeProfile(); });
    $('adminLoginOverlay')?.addEventListener('click', (event) => { if (event.target.id === 'adminLoginOverlay') closeAdminLogin(); });
    $('userAuthOverlay')?.addEventListener('click', (event) => { if (event.target.id === 'userAuthOverlay') closeUserAuth(); });
  }

  async function init() {
    // Bind navigation/admin controls first so a missing optional homepage section
    // can never prevent the Admin Login window from opening.
    bindEvents();
    setSitePage(getPageFromHash(), { keepScroll: true });
    try { await loadMongoFirst(); } catch (error) { console.warn('MongoDB startup skipped:', error); }
    try {
      if (!sessionStorage.getItem('chaithanya_visit_counted')) { visitors += 1; sessionStorage.setItem('chaithanya_visit_counted', 'yes'); persist(); }
    } catch {}
    const safeRender = (name, fn) => { try { fn(); } catch (error) { console.warn(name + ' render skipped:', error); } };
    safeRender('home', renderHomeContent);
    // Start the homepage image animation only after MongoDB content has been rendered.
    // This keeps the animation working even when hero images are loaded from GridFS.
    try { startHeroFloatingAnimation(); } catch (error) { console.warn('Hero animation skipped:', error); }
    safeRender('seo', applySeoContent);
    safeRender('categories', renderCategories);
    safeRender('products', renderProducts);
    safeRender('highlights', renderHighlights);
    safeRender('model gallery', renderModelGallery);
    safeRender('model gallery admin', renderModelGalleryAdmin);
    safeRender('highlights admin', fillHighlightsEditor);
    safeRender('home reviews', renderHomeReviews);
    safeRender('admin', renderAdmin);
    safeRender('store settings', fillStoreSettingsEditor);
    safeRender('footer socials', renderFooterSocials);
    safeRender('cart', renderCart);
    safeRender('product form', clearProductForm);
    updateCartCount();
    updateUserButton();
    setSitePage(getPageFromHash(), { keepScroll: true });
    openProductFromUrl();
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === '1') setTimeout(openAdminLogin, 160);
  }

  window.addEventListener('popstate', () => {
    setSitePage(getPageFromHash());
    const id = new URLSearchParams(window.location.search).get('product');
    if (id) openProduct(id, false);
    else closeProduct();
  });

  window.addEventListener('hashchange', () => {
    setSitePage(getPageFromHash());
  });

  document.addEventListener('DOMContentLoaded', init);
  function toggleMobileMenu(force) {
    const menu = document.querySelector('.jp-header .mobile-menu-btn');
    const nav = document.querySelector('.jp-header .jp-primary-nav');
    if (!menu || !nav) return;
    const open = typeof force === 'boolean' ? force : !nav.classList.contains('mobile-open');
    nav.classList.toggle('mobile-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  document.addEventListener('click', (event) => {
    const menu = event.target.closest('.jp-header .mobile-menu-btn');
    if (!menu) return;
    event.preventDefault();
    event.stopPropagation();
    toggleMobileMenu();
  });

  document.addEventListener('click', (event) => {
    const adminLink = event.target.closest('#openAdminMobileBtn');
    if (adminLink) {
      toggleMobileMenu(false);
    }
  });

})();

