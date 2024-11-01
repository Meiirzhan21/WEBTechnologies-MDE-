
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.navbar-nav .nav-item');

    let currentIndex = 0;

   
    const setFocus = (index) => {
        navItems.forEach((item, i) => {
            if (i === index) {
                item.querySelector('a').focus();
            } else {
                item.querySelector('a').blur();
            }
        });
    };


    setFocus(currentIndex);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % navItems.length; 
            setFocus(currentIndex);
            event.preventDefault(); 
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + navItems.length) % navItems.length; 
            setFocus(currentIndex);
            event.preventDefault();
        } else if (event.key === 'Enter') {
            navItems[currentIndex].querySelector('a').click(); 
        }
    });
});
