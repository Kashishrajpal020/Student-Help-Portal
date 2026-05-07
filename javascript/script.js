function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let student = "";
    let page = "";

    // STUDENT 1
    if(username === "rahul" && password === "1234"){
        student = "Rahul";
        page = "student1.html";
    }

    // STUDENT 2
    else if(username === "aman" && password === "1111"){
        student = "Aman";
        page = "student2.html";
    }

    // STUDENT 3
    else if(username === "priya" && password === "2222"){
        student = "Priya";
        page = "student3.html";
    }

    // STUDENT 4
    else if(username === "simran" && password === "3333"){
        student = "Simran";
        page = "student4.html";
    }

    // STUDENT 5
    else if(username === "karan" && password === "4444"){
        student = "Karan";
        page = "student5.html";
    }

    else{
        document.getElementById("msg").innerHTML =
        "Invalid Username or Password";
        return;
    }

    // SAVE FIRST
    localStorage.setItem("loggedInStudent", student);

    // THEN REDIRECT
    window.location.href = page;
}