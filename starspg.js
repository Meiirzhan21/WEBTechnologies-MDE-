document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".rating-stars .star");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = parseInt(star.getAttribute("data-rating"));
            setRating(rating);
        });
    });

    function setRating(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute("data-rating")) <= rating) {
                star.classList.add("selected");
            } else {
                star.classList.remove("selected");
            }
        });
    }
});
