document.getElementById('login-btn').addEventListener('click', function() {
    let emailField = document.getElementById('input-email');
    // console.log(emailField.value);
    let passwprdField = document.getElementById('input-password');
    // console.log(passwprdField.value);
    if (emailField.value == 'life@gmail.com' && passwprdField.value == '1234') {

        window.location.href = "after-login.html";

    }

})