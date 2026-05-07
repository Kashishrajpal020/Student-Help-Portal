function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    // CHIEF WARDEN LOGIN
    if(username === "chiefwarden" && password === "admin123"){

        location.href = "chief1.html";
    }

    else{

        document.getElementById("msg").innerHTML =
        "Invalid Chief Warden ID or Password";
    }
}

function forgotPassword(){

    alert(
    "Please contact system administration to reset your password."
    );
}