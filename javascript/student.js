// GET CURRENT STUDENT FROM LOGIN
let student = localStorage.getItem("loggedInStudent");

if(!student){
    location.href = "login.html";
}

document.getElementById("studentName").innerText =
"Welcome " + student;


// GET APPROVED FINE DATA
let fines = JSON.parse(localStorage.getItem("approvedFines")) || [];


// LOAD FUNCTION
function loadFines(){

    let container = document.getElementById("fineList");
    container.innerHTML = "";

    // FILTER ONLY THIS STUDENT + ONLY APPROVED
    let studentFines = fines.filter(f =>
        f.student === student && f.status === "Approved" ||
        f.status === "Rejected"
        
    );

    if(studentFines.length === 0){
        container.innerHTML = "<p>No approved fines </p>";
        return;
    }

    studentFines.forEach(f => {

        let div = document.createElement("div");
        div.className = "fine";

       div.innerHTML = `
    <h4>${f.title}</h4>

    <p><b>Reason:</b> ${f.reason}</p>

    <p><b>Amount:</b> ₹${f.amount}</p>

    <p class="status">
        Approved by Chief Warden
    </p>

    <button class="pay"
        onclick="payFine(${f.id})">

        Pay Fine

    </button>

    ${
        f.status !== "Rejected"

        ?

        `<button class="appeal"
            onclick="appeal(${f.id})">

            Appeal to VP

        </button>`

        :

        `<p class="finalDecision">
            ❌ Final Decision By VP
        </p>`
    }
`;
        container.appendChild(div);
    });
}


// PAY FINE
function payFine(id){

    fines = fines.map(f => {
        if(f.id === id){
           f.status = "paid";
        f.paidDate = new Date().toLocaleDateString();
        }
        return f;
    });

    localStorage.setItem("approvedFines", JSON.stringify(fines));

    alert("Fine Paid Successfully!");
    loadFines();
}

//APPEAL FUNCTION
function appeal(id){

    let appeals =
    JSON.parse(localStorage.getItem("appeals")) || [];

    let fine =
    fines.find(f => f.id === id);

    // STUDENT WRITES APPEAL REASON
    let studentReason =
    prompt("Enter reason for appeal:");

    // IF EMPTY
    if(studentReason === null ||
       studentReason.trim() === ""){

        alert("Appeal cancelled!");
        return;
    }

    // PUSH APPEAL
    appeals.push({

        ...fine,

        appealReason: studentReason,

        appealStatus: "Pending",

        appealDate:
        new Date().toLocaleDateString()

    });

    // SAVE
    localStorage.setItem(
        "appeals",
        JSON.stringify(appeals)
    );

    alert("Appeal Sent To VP!");
}


// INIT
loadFines();