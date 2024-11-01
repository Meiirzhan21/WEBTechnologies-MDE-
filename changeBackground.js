
const colors = ['#f8f9fa', '#1abc9c', '#3498db', '#e74c3c', '#f39c12', '#9b59b6'];


document.getElementById('colorChangeBtn').addEventListener('click', function() {
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
        
    document.body.style.backgroundColor = randomColor;
});
