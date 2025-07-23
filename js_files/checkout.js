let cart = JSON.parse(localStorage.getItem('cart')) || [];

window.onload = function() {
    updateCartSummary();
};

function updateCartSummary() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        const price = parseFloat(item.price); 
        total += price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${price}</span>
            </div>
        `;
    });
    
    cartTotal.textContent = total;
}

function confirmPurchase(event) {
    event.preventDefault(); 

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Regex patterns
    const nameRegex = /^[A-Za-z\s]{3,}$/; // Letters and spaces, at least 2 characters
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Email format
    const contactRegex = /^\d{10,12}$/; // Exactly 10 digits
    const zipCodeRegex = /^\d{5,6}$/; // 5 or 6 digits
    const cardNumberRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/; // 16 digits, spaces optional
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/; // MM/YY format
    const cvvRegex = /^\d{3}$/; // 3 digits

    // Error elements
    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const contactError = document.getElementById('contactError');
    const addressError = document.getElementById('addressError');
    const cityError = document.getElementById('cityError');
    const zipCodeError = document.getElementById('zipCodeError');
    const cardNumberError = document.getElementById('cardNumberError');
    const expiryDateError = document.getElementById('expiryDateError');
    const cvvError = document.getElementById('cvvError');

    // Reset error messages
    fullNameError.style.display = 'none';
    emailError.style.display = 'none';
    contactError.style.display = 'none';
    addressError.style.display = 'none';
    cityError.style.display = 'none';
    zipCodeError.style.display = 'none';
    cardNumberError.style.display = 'none';
    expiryDateError.style.display = 'none';
    cvvError.style.display = 'none';

    // Validate all fields
    let isValid = true;

    // Full Name
    if (!nameRegex.test(fullName)) {
        fullNameError.style.display = 'block';
        isValid = false;
    }

    // Email
    if (!emailRegex.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    // Contact
    if (!contactRegex.test(contact)) {
        contactError.style.display = 'block';
        isValid = false;
    }

    // Address (just ensure it's not empty)
    if (!address.trim()) {
        addressError.style.display = 'block';
        isValid = false;
    }

    // City
    if (!nameRegex.test(city)) {
        cityError.style.display = 'block';
        isValid = false;
    }

    // Zip Code
    if (!zipCodeRegex.test(zipCode)) {
        zipCodeError.style.display = 'block';
        isValid = false;
    }

    // Card Number
    if (!cardNumberRegex.test(cardNumber)) {
        cardNumberError.style.display = 'block';
        isValid = false;
    }

    // Expiry Date
    if (!expiryDateRegex.test(expiryDate)) {
        expiryDateError.style.display = 'block';
        isValid = false;
    } else {
        // Check if the date is in the future
        const [month, year] = expiryDate.split('/').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Last two digits
        const currentMonth = currentDate.getMonth() + 1; // 1-12

        if (year < currentYear || (year === currentYear && month < currentMonth)) {
            expiryDateError.textContent = 'Expiry Date must be a future date.';
            expiryDateError.style.display = 'block';
            isValid = false;
        }
    }

    // CVV
    if (!cvvRegex.test(cvv)) {
        cvvError.style.display = 'block';
        isValid = false;
    }

    // Proceed if all validations pass
    if (isValid && cart.length > 0) {
        // Collect form data
        const formData = {
            fullName,
            email,
            contact,
            address,
            city,
            zipCode,
            cardNumber,
            expiryDate,
            cvv,
            cartItems: cart,
            total: document.getElementById('cartTotal').textContent
        };

        // Store form data in localStorage
        localStorage.setItem('transactionDetails', JSON.stringify(formData));

        // Clear the cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirect to success page
        window.location.href = 'success.html';
    } else if (cart.length === 0) {
        alert('Your cart is empty!');
    }
}

// Proceed if all validations pass
if (isValid && cart.length > 0) {
    // Collect form data
    const formData = {
        fullName,
        email,
        contact,
        address,
        city,
        zipCode,
        cardNumber,
        expiryDate,
        cvv,
        cartItems: cart,
        total: document.getElementById('cartTotal').textContent
    };

    // Store form data in localStorage
    localStorage.setItem('transactionDetails', JSON.stringify(formData));

    // Clear the cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to success page
    window.location.href = 'success.html';
}

function goBack() {
    window.history.back();
}