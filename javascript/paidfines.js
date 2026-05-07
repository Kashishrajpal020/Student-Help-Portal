let student = localStorage.getItem("loggedInStudent");

if(!student){
    location.href = "login.html";
}

document.getElementById("studentName").innerText =
"Paid Fines - " + student;


let fines = JSON.parse(localStorage.getItem("approvedFines")) || [];


function loadPaidFines(){

    let container = document.getElementById("paidList");

    container.innerHTML = "";

    let paidFines = fines.filter(f =>
        f.student === student && f.status === "paid"
    );

    if(paidFines.length === 0){
        container.innerHTML = "<p>No paid fines yet 🎉</p>";
        return;
    }

    paidFines.forEach(f => {

        let div = document.createElement("div");

        div.className = "fine";

        div.innerHTML = `
            <h4>${f.title}</h4>
            <p><b>Reason:</b> ${f.reason}</p>
            <p><b>Amount:</b> ₹${f.amount}</p>
            <p class="status">✅ Paid Successfully</p>
        `;

        container.appendChild(div);

    });

}

loadPaidFines();