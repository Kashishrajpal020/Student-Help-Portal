// ISSUE FINE FROM WARDEN PAGE
function issueFine(){

    let studentName =
    document.getElementById("studentName").value;

    let fineTitle =
    document.getElementById("fineTitle").value;

    let fineAmount =
    document.getElementById("fineAmount").value;

    let fineReason =
    document.getElementById("fineReason").value;

    // VALIDATION
    if(
        fineTitle === "" ||
        fineAmount === "" ||
        fineReason === ""
    ){

        document.getElementById("msg").innerHTML =
        "Please fill all fields.";

        document.getElementById("msg").style.color =
        "red";

        return;
    }

    // FINE OBJECT
  let fine = {

    id : Date.now(),

    student : studentName,

    title : fineTitle,

    amount : fineAmount,

    reason : fineReason,

    status : "Pending Approval",

    warden : "Hostel Warden",

    approvedBy : "",

    date : new Date().toLocaleDateString(),

    time : new Date().toLocaleTimeString()
};
    // GET OLD FINES
    let fines =
    JSON.parse(localStorage.getItem("pendingFines"))
    || [];

    // ADD NEW FINE
    fines.push(fine);

    // SAVE
    localStorage.setItem(
        "pendingFines",
        JSON.stringify(fines)
    );

    // SUCCESS MESSAGE
    document.getElementById("msg").innerHTML =
    "Fine request sent to Chief Warden successfully.";

    document.getElementById("msg").style.color =
    "green";

    // CLEAR INPUTS
    document.getElementById("fineTitle").value = "";
    document.getElementById("fineAmount").value = "";
    document.getElementById("fineReason").value = "";
}


// LOAD FINES ON CHIEF PAGE
function loadFines(){

    let container =
    document.getElementById("fineContainer");

    // IF NOT CHIEF PAGE
    if(!container){
        return;
    }

    // GET FINES
    let fines =
    JSON.parse(localStorage.getItem("pendingFines"))
    || [];

    // EMPTY CASE
    if(fines.length === 0){

        container.innerHTML = `

        <div class="empty">
            No Pending Fine Requests
        </div>

        `;

        return;
    }

    // CLEAR CONTAINER
    container.innerHTML = "";

    // LOOP THROUGH FINES
    fines.forEach(function(fine, index){

        let card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `

            <h2>${fine.title}</h2>

            <p>
                <b>Student:</b>
                ${fine.student}
            </p>

            <p>
                <b>Reason:</b>
                ${fine.reason}
            </p>

            <div class="amount">
                ₹${fine.amount}
            </div>

            <div class="actions">

                <button class="approve-btn">
                    Approve
                </button>

                <button class="reject-btn">
                    Reject
                </button>

            </div>
        `;

        // BUTTONS
        let approveBtn =
        card.querySelector(".approve-btn");

        let rejectBtn =
        card.querySelector(".reject-btn");

        approveBtn.onclick = function(){
            approveFine(index);
        };

        rejectBtn.onclick = function(){
            rejectFine(index);
        };

        container.appendChild(card);
    });
}


// AUTO LOAD
loadFines();

function getAllFines() {

    let pending = JSON.parse(localStorage.getItem("pendingFines")) || [];
    let approved = JSON.parse(localStorage.getItem("approvedFines")) || [];
    let rejected = JSON.parse(localStorage.getItem("rejectedFines")) || [];

    return {
        pending,
        approved,
        rejected
    };
}

function getStudentStats(studentName) {

    let data = getAllFines();

    let all = [...data.pending, ...data.approved, ...data.rejected];

    let studentFines = all.filter(f => f.student === studentName);

    return {
        total: studentFines.length,
        pending: studentFines.filter(f => f.status.includes("Pending")).length,
        approved: studentFines.filter(f => f.status.includes("Approve")).length,
        rejected: studentFines.filter(f => f.status.includes("Reject")).length
    };
}

// APPROVE FINE
function approveFine(index){

    let pendingFines =
    JSON.parse(localStorage.getItem("pendingFines"))
    || [];

    let approvedFines =
    JSON.parse(localStorage.getItem("approvedFines"))
    || [];

    // CHANGE STATUS
    pendingFines[index].status = "Approved";

    // APPROVED BY
    pendingFines[index].approvedBy =
    "Chief Warden";

    // MOVE TO APPROVED
    approvedFines.push(
        pendingFines[index]
    );

    // SAVE
    localStorage.setItem(
        "approvedFines",
        JSON.stringify(approvedFines)
    );

    // REMOVE FROM PENDING
    pendingFines.splice(index,1);

    localStorage.setItem(
        "pendingFines",
        JSON.stringify(pendingFines)
    );

    alert("Fine Approved!");

    loadFines();
}


// REJECT FINE
function rejectFine(index){

    let pendingFines =
    JSON.parse(localStorage.getItem("pendingFines"))
    || [];

    let rejectedFines =
    JSON.parse(localStorage.getItem("rejectedFines"))
    || [];

    // CHANGE STATUS
    pendingFines[index].status = "Rejected";

    // REJECTED BY
    pendingFines[index].approvedBy =
    "Chief Warden";

    // MOVE TO REJECTED
    rejectedFines.push(
        pendingFines[index]
    );

    // SAVE
    localStorage.setItem(
        "rejectedFines",
        JSON.stringify(rejectedFines)
    );

    // REMOVE
    pendingFines.splice(index,1);

    localStorage.setItem(
        "pendingFines",
        JSON.stringify(pendingFines)
    );

    alert("Fine Rejected!");

    loadFines();
}