document.getElementById('resetButton').addEventListener('click', function() {
    document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea, select').forEach(input => input.value = '');
    document.getElementById('experience').selectedIndex = 0;
});
