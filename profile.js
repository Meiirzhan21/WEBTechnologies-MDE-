
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        document.getElementById("userName").textContent = currentUser.name;
        document.getElementById("userEmail").textContent = currentUser.email;

       
        const profilePicture = localStorage.getItem("profilePicture");
        if (profilePicture) {
            document.getElementById("profile-picture").src = profilePicture;
        }
    } else {
        alert("Вы не авторизованы! Возвращаем на главную.");
        window.location.href = "index.html";
    }
});


function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent = now.toLocaleString("ru-RU");
}
setInterval(updateDateTime, 1000);


function uploadProfilePicture(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const profilePicture = e.target.result;
        document.getElementById("profile-picture").src = profilePicture;
        localStorage.setItem("profilePicture", profilePicture);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}


function logout() {
    localStorage.removeItem("currentUser");
    alert("Вы вышли из системы.");
    window.location.href = "index.html";
}
