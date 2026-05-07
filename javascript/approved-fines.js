/* CONTAINER */
const approvedContainer =
document.getElementById("approvedContainer");

/* GET APPROVED FINES */
let approvedFines =
JSON.parse(localStorage.getItem("approvedFines")) || [];

/* DISPLAY APPROVED FINES */
function displayApprovedFines(){

    /* CLEAR OLD CONTENT */
    approvedContainer.innerHTML = "";

    /* IF NO APPROVED FINES */
    if(approvedFines.length === 0){

        approvedContainer.innerHTML = `

        <div class="empty">
            No Approved Fines Yet
        </div>

        `;

        return;
    }

    /* LOOP THROUGH APPROVED FINES */
    approvedFines.forEach((fine) => {

        approvedContainer.innerHTML += `

        <div class="card">

            <div class="student-name">
                ${fine.student}
            </div>

            <div class="detail">
                <span>Fine Title:</span>
                ${fine.title}
            </div>

            <div class="detail">
                <span>Amount:</span>
                ₹${fine.amount}
            </div>

            <div class="detail">
                <span>Reason:</span>
                ${fine.reason}
            </div>

            <div class="detail">
                <span>Issued By:</span>
                ${fine.warden}
            </div>

            <div class="detail">
                <span>Approved By:</span>
                ${fine.approvedBy}
            </div>

            <div class="detail">
                <span>Date:</span>
                ${fine.date}
            </div>

            <div class="detail">
                <span>Time:</span>
                ${fine.time}
            </div>

            <div class="status">
                Approved Successfully
            </div>

        </div>

        `;
    });
}

/* RUN FUNCTION */
displayApprovedFines();