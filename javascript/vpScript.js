function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    // VP LOGIN
    if(username === "vp" && password === "vp123"){

        location.href = "vpDashboard.html";
    }

    else{

        document.getElementById("msg").innerHTML =
        "Invalid Vice President ID or Password";
    }
}

function forgotPassword(){

    alert(
    "Please contact administration to reset your password."
    );
}