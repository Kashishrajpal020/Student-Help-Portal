let student = localStorage.getItem("loggedInStudent");

if(!student){
    location.href = "login.html";
}

document.getElementById("studentName").innerText =
"Appeals - " + student;


let appeals = JSON.parse(localStorage.getItem("appeals")) || [];


function loadAppeals(){

    let container = document.getElementById("appealList");

    container.innerHTML = "";

    let studentAppeals = appeals.filter(a =>
        a.student === student
    );

    if(studentAppeals.length === 0){
        container.innerHTML = "<p>No appeals sent yet 📭</p>";
        return;
    }

    studentAppeals.forEach(a => {

        let div = document.createElement("div");

        div.className = "fine";

        div.innerHTML = `
            <h4>${a.title}</h4>
            <p><b>Reason:</b> ${a.reason}</p>
            <p><b>Amount:</b> ₹${a.amount}</p>
            <p class="status">📩 Appeal Sent to VP</p>
        `;

        container.appendChild(div);

    });

}

loadAppeals();