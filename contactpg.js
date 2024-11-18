document.getElementById("openFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "block"; 
});

document.getElementById("closeFormBtn").addEventListener("click", function() {
    document.getElementById("popupForm").style.display = "none"; 
});

window.onclick = function(event) {
    const form = document.getElementById("popupForm");
    if (event.target === form) { 
        form.style.display = "none"; 
    }
};
