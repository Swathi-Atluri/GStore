let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.onload = function() {
    updateCartCount();
    updateProductButtons();
};

function toggleCart() {
    const dropdown = document.getElementById('cartDropdown');
    dropdown.classList.toggle('active');
    if (dropdown.classList.contains('active')) {
        updateCart();
    }
}

function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateProductButtons();
    const cartDropdown = document.getElementById('cartDropdown');
    if (cartDropdown.classList.contains('active')) {
        updateCart();
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (x${item.quantity})</span>
                <span>₹${itemTotal} <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button></span>
            </div>
        `;
    });
    
    cartTotal.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    updateCartCount();
    updateProductButtons();
}

function updateProductButtons() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const productName = card.getAttribute('data-product-name');
        const buttonContainer = card.querySelector('.button-container');
        const cartItem = cart.find(item => item.name === productName);

        if (cartItem) {
            buttonContainer.innerHTML = `
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${productName}')">-</button>
                    <span class="quantity">${cartItem.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${productName}')">+</button>
                </div>
            `;
        } else {
            const price = parseFloat(card.querySelector('.price').textContent.replace('₹', ''));
            buttonContainer.innerHTML = `
                <button class="add-to-cart-btn" onclick="addToCart('${productName}', ${price})">Add to Cart</button>
            `;
        }
    });
}

function increaseQuantity(itemName) {
    const cartItem = cart.find(item => item.name === itemName);
    if (cartItem) {
        cartItem.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCart();
        updateProductButtons();
    }
}

function decreaseQuantity(itemName) {
    const cartItem = cart.find(item => item.name === itemName);
    if (cartItem) {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== itemName);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        updateCart();
        updateProductButtons();
    }
}

function checkout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty!');
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('.product-title').textContent.toLowerCase();
        product.style.display = productName.includes(searchTerm) ? '' : 'none';
    });
}