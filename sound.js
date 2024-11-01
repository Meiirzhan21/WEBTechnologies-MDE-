function playSound() {
    return new Promise((resolve) => {
        const audio = new Audio('clicking.mp3');
        audio.play();
        audio.onended = () => {
            resolve();
        };
    });
}
