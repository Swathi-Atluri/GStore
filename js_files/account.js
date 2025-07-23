window.onload = function() {
    displayUserDetails();
};

function displayUserDetails() {
    // Retrieve user details from localStorage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));

    if (user) {
        // Update the page with user details
        document.getElementById('userName').textContent = user.fullName.split(' ')[0]; // First name for greeting
        document.getElementById('fullName').textContent = user.fullName;
        document.getElementById('email').textContent = user.email;
        document.getElementById('contact').textContent = user.contact;
    } else {
        // If no user is logged in, redirect to login page
        alert('Please log in to view your account details.');
        window.location.href = 'login.html';
    }
}

function logout() {
    // Clear user session
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'login.html';
}

function continueShopping() {
    // Redirect to shop.html
    window.location.href = 'shop.html';
}