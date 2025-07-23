window.onload = function() {
    displayTransactionDetails();
};

function displayTransactionDetails() {
    // Retrieve transaction details from localStorage
    const transaction = JSON.parse(localStorage.getItem('transactionDetails'));

    if (transaction) {
        // Update shipping information
        document.getElementById('fullName').textContent = transaction.fullName || 'N/A';
        document.getElementById('address').textContent = transaction.address || 'N/A';
        document.getElementById('city').textContent = transaction.city || 'N/A';
        document.getElementById('zipCode').textContent = transaction.zipCode || 'N/A';

        // Update cart items
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = ''; // Clear existing content
        let total = 0;

        if (transaction.cartItems && transaction.cartItems.length > 0) {
            transaction.cartItems.forEach(item => {
                const price = parseFloat(item.price); // Ensure price is a number
                total += price;
                cartItems.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name}</span>
                        <span>₹${price}</span>
                    </div>
                `;
            });
        } else {
            cartItems.innerHTML = '<p>No items in the order.</p>';
        }

        // Update total price
        const cartTotal = document.getElementById('cartTotal');
        cartTotal.textContent = transaction.total || total || '0'; // Use stored total, fallback to calculated total
    } else {
        // If no transaction details are found, display a message
        const successMessage = document.querySelector('.success-message');
        successMessage.innerHTML = '<p>No transaction details found. Please make a purchase first.</p>';
        // Optionally redirect to shop.html
        setTimeout(() => window.location.href = 'shop.html', 3000);
    }
}

function returnToHome() {
    window.location.href = 'index.html';
}

