// Select elements
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const welcomeMessage = document.getElementById('welcomeMessage');

const registerUsername = document.getElementById('registerUsername');
const registerPassword = document.getElementById('registerPassword');
const registerButton = document.getElementById('registerButton');

const loginUsername = document.getElementById('loginUsername');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');

const usernameDisplay = document.getElementById('usernameDisplay');
const logoutButton = document.getElementById('logoutButton');

// Register user
registerButton.addEventListener('click', () => {
    const username = registerUsername.value.trim();
    const password = registerPassword.value.trim();

    if (username && password) {
        localStorage.setItem('user', JSON.stringify({ username, password }));
        alert('Registration successful!');
        registerUsername.value = '';
        registerPassword.value = '';
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    } else {
        alert('Please enter a valid username and password.');
    }
});

// Login user
loginButton.addEventListener('click', () => {
    const username = loginUsername.value.trim();
    const password = loginPassword.value.trim();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
        usernameDisplay.textContent = username;
        loginForm.classList.add('hidden');
        welcomeMessage.classList.remove('hidden');
    } else {
        alert('Invalid username or password.');
    }
});

// Logout user
logoutButton.addEventListener('click', () => {
    welcomeMessage.classList.add('hidden');
    loginForm.classList.remove('hidden');
});