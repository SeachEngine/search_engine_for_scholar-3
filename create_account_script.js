function respectiveElementValue(id) {
    return document.getElementById(id).value;
}

function MessageToUser(message, color = "gray") {
    var accountStatus = document.getElementById("account-status");
    accountStatus.style.color = color;
    accountStatus.textContent = message;
}

function createAccount() {
    var fullName = respectiveElementValue("fullName");
    var dob = respectiveElementValue("dob");
    var address = respectiveElementValue("address");
    var qualification = respectiveElementValue("qualification");
    var email = respectiveElementValue("email");
    var password = respectiveElementValue("password");

    if (!fullName || !dob || !address || !qualification || !email || !password) {
        MessageToUser("Please fill in all the fields", "orange");
    } else {
        MessageToUser("Congratulations! Your account has been created successfully!", "green");
    }
}

