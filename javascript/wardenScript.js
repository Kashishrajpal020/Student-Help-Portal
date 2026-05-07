function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    // WARDEN 1
    if(username === "warden1" && password === "1111"){
        location.href = "warden1.html";
    }

    else{

        document.getElementById("msg").innerHTML =
        "Invalid Warden ID or Password";
    }
}

/* FORGOT PASSWORD */

function forgotPassword(){

    alert(
    "Please contact hostel administration to reset your password."
    );
}