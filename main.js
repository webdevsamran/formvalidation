const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// Show input success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check email is valid
function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(String(input.value.trim()).toLowerCase())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}
// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() == '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}
// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min}`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at most ${max}`);
    } else {
        showSuccess(input);
    }
}
// check password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}
// Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequired([username, email, password, cpassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password, cpassword);
    /* if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid');
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'Password is required');
    } else {
        showSuccess(password);
    }
    if (cpassword.value === '') {
        showError(cpassword, 'Confirm password is required');
    } else {
        showSuccess(cpassword);
    } */
});