function validation() {
    var phone = document.getElementById("phone").nodeValue;
    var password1 = document.getElementById("password1").nodeValue
    var password2 = document.getElementById("password2").nodeValue;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "15px";

    if (phone.length < 10) {
        text = "Please enter a valid phone number"
        error_message.innerHTML = text;
        return false;
    }

    if (password1.length < 5) {
        text = "Please enter a password greater than 5 characters"
        error_message.innerHTML = text;
        return false;
    }

    if (password1 !== password2) {
        text = "Passwords do not match"
        error_message.innerHTML = text;
        return false;
    }
    return true;
}

function submitform() {
    if (document.form1.onsubmit() && !document.form1.onsubmit()) {
        return;
    }
    document.form1.submit();
}