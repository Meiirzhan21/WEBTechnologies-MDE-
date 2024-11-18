
const users = JSON.parse(localStorage.getItem("users")) || [];


document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    const userExists = users.some((user) => user.email === email);
    if (userExists) {
        alert("Пользователь с такой почтой уже зарегистрирован!");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Регистрация успешна! Теперь вы можете войти.");
    document.getElementById("registrationForm").reset();
});

const loginModal = document.getElementById("loginModal");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

loginButton.addEventListener("click", () => {
    loginModal.style.display = "block";
});


document.querySelector(".close").addEventListener("click", () => {
    loginModal.style.display = "none";
});


document.getElementById("submitLogin").addEventListener("click", () => {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const user = users.find((user) => user.email === loginEmail && user.password === loginPassword);

    if (user) {
        alert(`Добро пожаловать, ${user.name}!`);
        localStorage.setItem("currentUser", JSON.stringify(user));
        loginModal.style.display = "none";
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    } else {
        alert("Неправильная почта или пароль.");
    }
});


logoutButton.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    alert("Вы вышли из системы.");
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
});

window.addEventListener("load", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
    }
});
