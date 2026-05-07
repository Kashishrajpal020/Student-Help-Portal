let appeals =
JSON.parse(localStorage.getItem("appeals")) || [];

let fines =
JSON.parse(localStorage.getItem("approvedFines")) || [];

function loadAppeals(){

    let container =
    document.getElementById("appealContainer");

    container.innerHTML = "";

    let pending =
    appeals.filter(a =>
        a.appealStatus === "Pending"
    );

    if(pending.length === 0){

        container.innerHTML =
        "<p>No pending appeals</p>";

        return;
    }

    pending.forEach(a => {

        let div =
        document.createElement("div");

        div.className = "appealCard";

        div.innerHTML = `
        
        <h3>${a.student}</h3>

        <p><b>Fine:</b> ${a.title}</p>

        <p><b>Reason:</b> ${a.reason}</p>

        <p><b>Amount:</b> ₹${a.amount}</p>

        <p><b>Student Appeal:</b>
        ${a.appealReason}</p>

        <button class="approve"
onclick="approveAppeal(${a.id})">
            ✅ Approve Appeal
        </button>

  <button class="reject"
onclick="rejectAppeal(${a.id})">
            ❌ Reject Appeal
        </button>

        `;

        container.appendChild(div);

    });

}

function approveAppeal(id){

    // UPDATE APPEAL STATUS
    appeals = appeals.map(a => {

        if(a.id === id){
            a.appealStatus = "Approved";
        }

        return a;
    });

    // REMOVE FINE FROM STUDENT
    fines = fines.filter(f => f.id !== id);

    localStorage.setItem(
        "approvedFines",
        JSON.stringify(fines)
    );

    localStorage.setItem(
        "appeals",
        JSON.stringify(appeals)
    );

    alert("Appeal Approved!");

    loadAppeals();
}

function rejectAppeal(id){

    appeals = appeals.map(a => {

        if(a.id === id){
            a.appealStatus = "Rejected";
        }

        return a;
    });

    localStorage.setItem(
        "appeals",
        JSON.stringify(appeals)
    );

    alert("Appeal Rejected!");

    loadAppeals();
}

loadAppeals();