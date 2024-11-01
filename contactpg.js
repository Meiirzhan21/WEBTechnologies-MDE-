document.getElementById("openFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block"; // Показываем форму
});

document.getElementById("closeFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none"; // Скрываем форму
});

window.onclick = function(event) {
    const form = document.getElementById("popupForm");
    if (event.target === form) { // Если кликнули вне формы
        form.style.display = "none"; // Скрываем форму
    }
};
