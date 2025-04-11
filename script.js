document.getElementById('newsletter-sign').addEventListener('submit', (e) => {
  e.preventDefault();

  let emailValid = true;
  let emailInput = document.getElementById('email');
  let email = emailInput.value.trim();
  const thankYou = document.getElementById('success');
  const userEmailSpan = document.getElementById('userEmail');
  const form = document.getElementById('newsletter-sign');
  let emailError = document.getElementById('emailError');

  // Clear previous error
  emailError.textContent = "";
  emailInput.style.border = "";
  emailInput.style.backgroundColor = "";

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Valid email required";
    emailError.style.color = "red";
    emailInput.style.border = "2px solid red";
    emailInput.style.backgroundColor = "#ffe6e6";
    emailValid = false;

  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Valid email required.";
    emailError.style.color = "red";
    emailInput.style.border = "1px solid red";
    emailInput.style.backgroundColor = "#ffe6e6";
    emailValid = false;
  }

  if (emailValid) {
    form.style.display = "none";  // Hide form
    userEmailSpan.textContent = email;  
  
    thankYou.style.display = "flex"; 
  }
});


document.getElementById('dismiss').addEventListener('click', () => {
  const thankYou = document.getElementById('success');
  const form = document.getElementById('newsletter-sign');
  
  thankYou.style.display = "none";  
  form.style.display = "flex"; 
  
  document.getElementById('email').value = "";  // Reset the email input

});


