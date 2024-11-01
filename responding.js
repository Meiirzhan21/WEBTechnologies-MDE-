document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm); 

        fetch("https://example.com/submit", { 
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Сетевая ошибка: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            
            document.getElementById("responseMessage").innerText = "Ваше сообщение успешно отправлено!";
            contactForm.reset(); 
        })
        .catch(error => {
            document.getElementById("responseMessage").innerText = "Ошибка: " + error.message;
        });
    });
});
