// ===================================
// PRODUCT DATA ARRAY
// ===================================
const productsData = [
    {
        id: 1,
        name: "Canon EOS 2000 Camera",
        price: 998,
        oldPrice: 1128,
        rating: 5,
        orders: 7500,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
        description: "Professional DSLR camera with 4K video recording and advanced autofocus system.",
        category: "cameras",
        brand: "sony",
        condition: "new",
        freeShipping: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S23 Ultra",
        price: 1199,
        oldPrice: null,
        rating: 5,
        orders: 12300,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        description: "Flagship smartphone with 200MP camera, S Pen, and powerful performance.",
        category: "mobile",
        brand: "samsung",
        condition: "new",
        freeShipping: true
    },
    {
        id: 3,
        name: "Apple MacBook Pro 16",
        price: 2499,
        oldPrice: 2799,
        rating: 5,
        orders: 8900,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        description: "Powerful laptop with M2 Pro chip, stunning display, and all-day battery life.",
        category: "laptops",
        brand: "apple",
        condition: "new",
        freeShipping: true
    },
    {
        id: 4,
        name: "Sony WH-1000XM5 Headphones",
        price: 399,
        oldPrice: 449,
        rating: 5,
        orders: 15600,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
        description: "Premium noise-cancelling headphones with exceptional sound quality and comfort.",
        category: "audio",
        brand: "sony",
        condition: "new",
        freeShipping: true
    },
    {
        id: 5,
        name: "Apple iPhone 15 Pro Max",
        price: 1299,
        oldPrice: null,
        rating: 5,
        orders: 21000,
        image: "https://images.unsplash.com/photo-1592286927505-697cc0faef6e?w=400",
        description: "Latest iPhone with titanium design, A17 Pro chip, and advanced camera system.",
        category: "mobile",
        brand: "apple",
        condition: "new",
        freeShipping: true
    },
    {
        id: 6,
        name: "Dell XPS 13 Laptop",
        price: 1299,
        oldPrice: 1499,
        rating: 4,
        orders: 6700,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
        description: "Ultraportable laptop with InfinityEdge display and premium build quality.",
        category: "laptops",
        brand: "lg",
        condition: "new",
        freeShipping: true
    },
    {
        id: 7,
        name: "GoPro HERO 11 Black",
        price: 499,
        oldPrice: 599,
        rating: 5,
        orders: 9200,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        description: "Action camera with 5.3K video, waterproof design, and advanced stabilization.",
        category: "cameras",
        brand: "sony",
        condition: "new",
        freeShipping: true
    },
    {
        id: 8,
        name: "Xiaomi Mi 13 Pro",
        price: 899,
        oldPrice: null,
        rating: 4,
        orders: 5400,
        image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",
        description: "Flagship smartphone with Leica camera system and fast charging technology.",
        category: "mobile",
        brand: "xiaomi",
        condition: "new",
        freeShipping: false
    },
    {
        id: 9,
        name: "Apple AirPods Pro 2",
        price: 249,
        oldPrice: 279,
        rating: 5,
        orders: 18900,
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400",
        description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
        category: "audio",
        brand: "apple",
        condition: "new",
        freeShipping: true
    },
    {
        id: 10,
        name: "Samsung Galaxy Tab S9",
        price: 799,
        oldPrice: 899,
        rating: 4,
        orders: 4300,
        image: "https://images.unsplash.com/photo-1585790050230-5dd28404f3ce?w=400",
        description: "Premium Android tablet with S Pen, AMOLED display, and multitasking features.",
        category: "accessories",
        brand: "samsung",
        condition: "new",
        freeShipping: true
    },
    {
        id: 11,
        name: "LG UltraWide Monitor 34",
        price: 599,
        oldPrice: null,
        rating: 4,
        orders: 3200,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
        description: "Curved ultrawide monitor perfect for productivity and entertainment.",
        category: "accessories",
        brand: "lg",
        condition: "new",
        freeShipping: true
    },
    {
        id: 12,
        name: "Apple Watch Series 9",
        price: 429,
        oldPrice: null,
        rating: 5,
        orders: 14200,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
        description: "Advanced smartwatch with health monitoring, fitness tracking, and always-on display.",
        category: "accessories",
        brand: "apple",
        condition: "new",
        freeShipping: true
    }
];

// ===================================
// STATE MANAGEMENT
// ===================================
let state = {
    products: [...productsData],
    filteredProducts: [...productsData],
    cart: [],
    wishlist: [],
    currentPage: 1,
    productsPerPage: 9,
    filters: {
        categories: [],
        brands: [],
        priceMin: null,
        priceMax: null,
        condition: 'all',
        ratings: [],
        verifiedOnly: false,
        freeShipping: false,
        searchQuery: ''
    },
    sortBy: 'default'
};

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Render initial products
    applyFiltersAndSort();
    
    // Attach event listeners
    attachEventListeners();
    
    // Update cart and wishlist counts
    updateCartCount();
    updateWishlistCount();
    
    // Initialize back to top button
    initializeBackToTop();
}

// ===================================
// EVENT LISTENERS
// ===================================
function attachEventListeners() {
    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Category filters
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleCategoryFilter);
    });
    
    // Brand filters
    document.querySelectorAll('.brand-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleBrandFilter);
    });
    
    // Price filter
    document.getElementById('applyPriceFilter').addEventListener('click', handlePriceFilter);
    
    // Condition filter
    document.querySelectorAll('.condition-filter').forEach(radio => {
        radio.addEventListener('change', handleConditionFilter);
    });
    
    // Rating filter
    document.querySelectorAll('.rating-filter').forEach(checkbox => {
        checkbox.addEventListener('change', handleRatingFilter);
    });
    
    // Verified and Free Shipping toggles
    document.getElementById('verifiedOnly').addEventListener('change', function() {
        state.filters.verifiedOnly = this.checked;
        applyFiltersAndSort();
    });
    
    document.getElementById('freeShipping').addEventListener('change', function() {
        state.filters.freeShipping = this.checked;
        applyFiltersAndSort();
    });
    
    // Sort functionality
    document.getElementById('sortSelect').addEventListener('change', handleSort);
    
    // Clear filters
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    // Newsletter subscription
    document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);
    
    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
    document.getElementById('closeSidebar').addEventListener('click', toggleSidebar);
    
    // Pagination
    document.getElementById('prevPage').addEventListener('click', () => changePage(-1));
    document.getElementById('nextPage').addEventListener('click', () => changePage(1));
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function handleSearch() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    state.filters.searchQuery = searchQuery;
    state.currentPage = 1;
    applyFiltersAndSort();
}

// ===================================
// FILTER HANDLERS
// ===================================
function handleCategoryFilter() {
    state.filters.categories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value);
    state.currentPage = 1;
    applyFiltersAndSort();
}

function handleBrandFilter() {
    state.filters.brands = Array.from(document.querySelectorAll('.brand-filter:checked'))
        .map(cb => cb.value);
    state.currentPage = 1;
    applyFiltersAndSort();
}

function handlePriceFilter() {
    const minPrice = parseFloat(document.getElementById('minPrice').value) || null;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || null;
    
    state.filters.priceMin = minPrice;
    state.filters.priceMax = maxPrice;
    state.currentPage = 1;
    applyFiltersAndSort();
}

function handleConditionFilter(e) {
    state.filters.condition = e.target.value;
    state.currentPage = 1;
    applyFiltersAndSort();
}

function handleRatingFilter() {
    state.filters.ratings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(cb => parseInt(cb.value));
    state.currentPage = 1;
    applyFiltersAndSort();
}

// ===================================
// SORT FUNCTIONALITY
// ===================================
function handleSort(e) {
    state.sortBy = e.target.value;
    applyFiltersAndSort();
}

function sortProducts(products) {
    const sorted = [...products];
    
    switch(state.sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'popular':
            return sorted.sort((a, b) => b.orders - a.orders);
        default:
            return sorted;
    }
}

// ===================================
// APPLY FILTERS AND SORT
// ===================================
function applyFiltersAndSort() {
    let filtered = [...state.products];
    
    // Search filter
    if (state.filters.searchQuery) {
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(state.filters.searchQuery) ||
            product.description.toLowerCase().includes(state.filters.searchQuery)
        );
    }
    
    // Category filter
    if (state.filters.categories.length > 0) {
        filtered = filtered.filter(product =>
            state.filters.categories.includes(product.category)
        );
    }
    
    // Brand filter
    if (state.filters.brands.length > 0) {
        filtered = filtered.filter(product =>
            state.filters.brands.includes(product.brand)
        );
    }
    
    // Price filter
    if (state.filters.priceMin !== null) {
        filtered = filtered.filter(product => product.price >= state.filters.priceMin);
    }
    if (state.filters.priceMax !== null) {
        filtered = filtered.filter(product => product.price <= state.filters.priceMax);
    }
    
    // Condition filter
    if (state.filters.condition !== 'all') {
        filtered = filtered.filter(product => product.condition === state.filters.condition);
    }
    
    // Rating filter
    if (state.filters.ratings.length > 0) {
        const minRating = Math.min(...state.filters.ratings);
        filtered = filtered.filter(product => product.rating >= minRating);
    }
    
    // Free shipping filter
    if (state.filters.freeShipping) {
        filtered = filtered.filter(product => product.freeShipping === true);
    }
    
    // Sort products
    filtered = sortProducts(filtered);
    
    // Update state
    state.filteredProducts = filtered;
    
    // Render products
    renderProducts();
    renderPagination();
    updateProductCount();
}

// ===================================
// CLEAR ALL FILTERS
// ===================================
function clearAllFilters() {
    // Reset filter checkboxes
    document.querySelectorAll('.category-filter, .brand-filter, .rating-filter').forEach(cb => {
        cb.checked = false;
    });
    
    // Reset price inputs
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    
    // Reset condition radio
    document.querySelector('.condition-filter[value="all"]').checked = true;
    
    // Reset toggles
    document.getElementById('verifiedOnly').checked = false;
    document.getElementById('freeShipping').checked = false;
    
    // Reset search
    document.getElementById('searchInput').value = '';
    
    // Reset sort
    document.getElementById('sortSelect').value = 'default';
    
    // Reset state
    state.filters = {
        categories: [],
        brands: [],
        priceMin: null,
        priceMax: null,
        condition: 'all',
        ratings: [],
        verifiedOnly: false,
        freeShipping: false,
        searchQuery: ''
    };
    state.sortBy = 'default';
    state.currentPage = 1;
    
    applyFiltersAndSort();
}

// ===================================
// RENDER PRODUCTS
// ===================================
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    const start = (state.currentPage - 1) * state.productsPerPage;
    const end = start + state.productsPerPage;
    const productsToShow = state.filteredProducts.slice(start, end);
    
    if (productsToShow.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-inbox"></i>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }
    
    productGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Attach event listeners to product cards
    attachProductEventListeners();
}

// ===================================
// CREATE PRODUCT CARD
// ===================================
function createProductCard(product) {
    const isInWishlist = state.wishlist.includes(product.id);
    const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" data-product-id="${product.id}">
                <i class="${isInWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                $${product.price.toFixed(2)}
                ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="rating-stars">${stars}</span>
                <span class="rating-count">${formatNumber(product.orders)} orders</span>
            </div>
            ${product.freeShipping ? '<span class="shipping-badge">Free Shipping</span>' : ''}
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="view-details-btn" data-product-id="${product.id}">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// ===================================
// ATTACH PRODUCT EVENT LISTENERS
// ===================================
function attachProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            addToCart(productId);
        });
    });
    
    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            toggleWishlist(productId);
        });
    });
    
    // View details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            viewProductDetails(productId);
        });
    });
}

// ===================================
// CART FUNCTIONALITY
// ===================================
function addToCart(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = state.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showNotification(`${product.name} added to cart!`, 'success');
}

function updateCartCount() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

// ===================================
// WISHLIST FUNCTIONALITY
// ===================================
function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    const product = state.products.find(p => p.id === productId);
    
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist`, 'info');
    } else {
        state.wishlist.push(productId);
        showNotification(`${product.name} added to wishlist!`, 'success');
    }
    
    updateWishlistCount();
    renderProducts(); // Re-render to update wishlist button states
}

function updateWishlistCount() {
    document.getElementById('wishlistCount').textContent = state.wishlist.length;
}

// ===================================
// VIEW PRODUCT DETAILS
// ===================================
function viewProductDetails(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    // In a real application, this would navigate to a product details page
    alert(`Viewing details for: ${product.name}\n\nPrice: ${product.price}\nRating: ${product.rating} stars\n\n${product.description}`);
}

// ===================================
// PAGINATION
// ===================================
function renderPagination() {
    const totalPages = Math.ceil(state.filteredProducts.length / state.productsPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    
    // Update prev/next buttons
    document.getElementById('prevPage').disabled = state.currentPage === 1;
    document.getElementById('nextPage').disabled = state.currentPage === totalPages || totalPages === 0;
    
    // Generate page numbers
    let paginationHTML = '';
    
    // Show max 5 page numbers
    let startPage = Math.max(1, state.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);
    
    // Adjust if we're near the end
    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <button class="page-btn ${i === state.currentPage ? 'active' : ''}" data-page="${i}">
                ${i}
            </button>
        `;
    }
    
    pageNumbers.innerHTML = paginationHTML;
    
    // Attach event listeners to page buttons
    document.querySelectorAll('.page-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            state.currentPage = parseInt(this.dataset.page);
            renderProducts();
            renderPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function changePage(direction) {
    const totalPages = Math.ceil(state.filteredProducts.length / state.productsPerPage);
    
    if (direction === -1 && state.currentPage > 1) {
        state.currentPage--;
    } else if (direction === 1 && state.currentPage < totalPages) {
        state.currentPage++;
    }
    
    renderProducts();
    renderPagination();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// UPDATE PRODUCT COUNT
// ===================================
function updateProductCount() {
    const count = state.filteredProducts.length;
    const productText = count === 1 ? 'Product' : 'Products';
    document.getElementById('productCount').textContent = `${count} ${productText} Found`;
}

// ===================================
// NEWSLETTER SUBSCRIPTION
// ===================================
function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = document.getElementById('newsletterEmail').value;
    const messageElement = document.getElementById('newsletterMessage');
    
    // Simple email validation
    if (!isValidEmail(email)) {
        messageElement.textContent = 'Please enter a valid email address';
        messageElement.style.color = '#dc3545';
        return;
    }
    
    // Simulate subscription
    messageElement.textContent = 'Thank you for subscribing! Check your email for confirmation.';
    messageElement.style.color = '#28a745';
    
    // Reset form
    document.getElementById('newsletterForm').reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
        messageElement.textContent = '';
    }, 5000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===================================
// MOBILE SIDEBAR TOGGLE
// ===================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
    
    // Close sidebar when clicking outside on mobile
    if (sidebar.classList.contains('active')) {
        document.addEventListener('click', closeSidebarOnClickOutside);
    } else {
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
}

function closeSidebarOnClickOutside(e) {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!sidebar.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        document.removeEventListener('click', closeSidebarOnClickOutside);
    }
}

// ===================================
// BACK TO TOP BUTTON
// ===================================
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// NOTIFICATION SYSTEM
// ===================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#0d6efd'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        font-weight: 600;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
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
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

// ===================================
// LOCAL STORAGE FUNCTIONS
// ===================================
// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('techstore_cart', JSON.stringify(state.cart));
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techstore_cart');
    if (savedCart) {
        state.cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Save wishlist to localStorage
function saveWishlistToStorage() {
    localStorage.setItem('techstore_wishlist', JSON.stringify(state.wishlist));
}

// Load wishlist from localStorage
function loadWishlistFromStorage() {
    const savedWishlist = localStorage.getItem('techstore_wishlist');
    if (savedWishlist) {
        state.wishlist = JSON.parse(savedWishlist);
        updateWishlistCount();
    }
}

// Initialize storage
function initializeStorage() {
    loadCartFromStorage();
    loadWishlistFromStorage();
    
    // Save to storage whenever cart or wishlist changes
    window.addEventListener('beforeunload', function() {
        saveCartToStorage();
        saveWishlistToStorage();
    });
}

// Call storage initialization
initializeStorage();

// ===================================
// KEYBOARD ACCESSIBILITY
// ===================================
document.addEventListener('keydown', function(e) {
    // ESC key closes sidebar on mobile
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
    
    // Enter key on search input triggers search
    if (e.key === 'Enter' && e.target.id === 'searchInput') {
        handleSearch();
    }
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// IMAGE LAZY LOADING FALLBACK
// ===================================
function handleImageError(img) {
    img.src = 'https://via.placeholder.com/400x400?text=Product+Image';
}

// Add error handling to images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        handleImageError(e.target);
    }
}, true);

// ===================================
// PERFORMANCE: DEBOUNCE FUNCTION
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to search
const debouncedSearch = debounce(function() {
    handleSearch();
}, 300);

// Update search input to use debounced search
document.getElementById('searchInput').addEventListener('input', debouncedSearch);

// ===================================
// CONSOLE LOG FOR DEBUGGING
// ===================================
console.log('TechStore E-commerce Website Initialized');
console.log('Total Products:', state.products.length);
console.log('Available Categories:', [...new Set(state.products.map(p => p.category))]);
console.log('Available Brands:', [...new Set(state.products.map(p => p.brand))]);

// ===================================
// EXPORT FOR TESTING (if needed)
// ===================================
// Expose functions for testing in console
window.techStore = {
    state,
    addToCart,
    toggleWishlist,
    clearAllFilters,
    applyFiltersAndSort
};