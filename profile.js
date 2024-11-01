// profile.js
const loadFile = (event) => {
    const output = document.getElementById("profile-picture");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () => {
        URL.revokeObjectURL(output.src); // Освобождаем память
    };
};
