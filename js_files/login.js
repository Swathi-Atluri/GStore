// Define user accounts
const users = [
    {
        email: "satluri5@gitam.in",
        password: "Satluri5@",
        fullName: "Swathi Atluri",
        contact: "6301842998"
    },
    {
        email: "apenmets2@gitam.in",
        password: "Apenmets2@",
        fullName: "Abhi Ram",
        contact: "8985599946"
    },
    {
        email: "ngundaba@gitam.in",
        password: "Ngundaba1@",
        fullName: "Nikhitha",
        contact: "9059044572"
    },
    {
        email: "jthota@gitam.edu",
        password: "Jthota123@",
        fullName: "Jyotsna Rani",
        contact: "8142056667"
    }
];

function handleLogin(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check credentials directly against the users array
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        // Store user details in localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = 'shop.html';
    } else {
        alert('Invalid email or password.');
    }
}