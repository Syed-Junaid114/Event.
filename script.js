function validateForm() {
    const email = document.getElementById("email").value;
    const pnum = document.getElementById("num").value;
    const password = document.getElementById("password").value;
    const cpass = document.getElementById("cpass").value;
    let isValid = true;
    let errorMessage = '';

    if (!validEmail(email)) {
        errorMessage += "Invalid Email.\n";
        isValid = false;
    }
    if (pnum.length !== 10) {
        errorMessage += "Phone number must be 10 digit only.\n";
        isValid = false;
    }
    // (Optional) Check for at least one uppercase letter
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        errorMessage += "Password must contain at least one uppercase letter.\n";
        isValid = false;
    }

    // (Optional) Check for at least one number
    const numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        errorMessage += "Password must contain at least one number.\n";
        isValid = false;
    }

    // (Optional) Check for at least one special character (e.g., !, @, #, $, etc.)
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!specialCharRegex.test(password)) {
        errorMessage += "Password must contain at least one special character.\n";
        isValid = false;
    }
    if (password !== cpass) {
        errorMessage += "Both the passwords must match.\n";
        isValid = false;
    }

    if (!isValid) {
        alert(errorMessage);
    }
    return isValid;
}

function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}