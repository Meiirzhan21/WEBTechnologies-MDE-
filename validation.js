document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      
      clearErrors();
  
      
      let hasError = false;
      
      
      const name = document.getElementById('name').value;
      if (!name) {
        displayError('name', 'Full name is required.');
        hasError = true;
      }
  
      
      const email = document.getElementById('email').value;
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
      if (!email) {
        displayError('email', 'Email is required.');
        hasError = true;
      } else if (!emailPattern.test(email)) {
        displayError('email', 'Invalid email format.');
        hasError = true;
      }
  
      
      const experience = document.getElementById('experience').value;
      if (!experience) {
        displayError('experience', 'Please select your experience level.');
        hasError = true;
      }
  
     
      const comment = document.getElementById('comment').value;
      if (!comment) {
        displayError('comment', 'Please tell us why you want to learn.');
        hasError = true;
      }
  
      
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      if (!password) {
        displayError('password', 'Password is required.');
        hasError = true;
      } else if (password.length < 6) {
        displayError('password', 'Password must be at least 6 characters.');
        hasError = true;
      }
  
      
      if (password !== confirmPassword) {
        displayError('confirmPassword', 'Passwords do not match.');
        hasError = true;
      }
  
      
      if (!hasError) {
        form.submit();
      }
    });
  
   
    function displayError(elementId, message) {
      const element = document.getElementById(elementId);
      const error = document.createElement('div');
      error.className = 'error';
      error.textContent = message;
      element.parentNode.insertBefore(error, element.nextSibling);
    }
  
    
    function clearErrors() {
      const errors = document.querySelectorAll('.error');
      errors.forEach(function (error) {
        error.remove();
      });
    }
  });
  