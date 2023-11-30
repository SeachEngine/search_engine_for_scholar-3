function LoginValidation() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const checkValidLogin = checkUserInput(username, password);
    if (checkValidLogin) {
        showMessage(errorMessage, "Login successful!", "#27ae60");
    } else {
        showMessage(errorMessage, "Invalid username or password. Please try again.", "#c0392b"); 
    }
}

function checkUserInput(username, password) {
    return username === "example" && password === "password";
}

function showMessage(element, message, color) {
    element.style.color = color;
    element.textContent = message;
}

function forgottenPswd() {
    const username = prompt("Enter your registered Email with NexScholar:");
    if (checkValidInput(username) && checkValidEmail(username)) {
        alert("A password reset link has been sent to your email.");
    } else {
        alert("Please enter a valid username and email.");
    }
}

function checkValidInput(input) {
    return input !== null && input.trim() !== "";
}

function checkValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function accountCreation() {
    alert("Let's get started. Redirecting to the SignUp page now.");
    window.location.href = "create_account.html";
}
