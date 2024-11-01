document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const logoutButton = document.getElementById('logoutButton');
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');

    function checkLoginStatus() {
        const user = localStorage.getItem('user');
        if (user) {
            registrationForm.style.display = 'none';
            logoutButton.style.display = 'block';
            loginButton.style.display = 'none';
        } else {
            registrationForm.style.display = 'block';
            logoutButton.style.display = 'none';
            loginButton.style.display = 'block';
        }
    }

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }

        const user = { name, email, password };
        localStorage.setItem('user', JSON.stringify(user));

        alert('Регистрация успешна!');
        checkLoginStatus();
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('user');
        alert('Вы вышли из системы.');
        checkLoginStatus();
    });

    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    document.getElementById('submitLogin').addEventListener('click', function () {
        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email === loginEmail && user.password === loginPassword) {
            alert('Вход выполнен успешно!');
            loginModal.style.display = 'none';
            checkLoginStatus();
        } else {
            alert('Неверный адрес электронной почты или пароль!');
        }
    });

    checkLoginStatus();
});
