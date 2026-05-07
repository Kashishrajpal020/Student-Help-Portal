/* CONTAINER */
const rejectedContainer =
document.getElementById("rejectedContainer");

/* GET REJECTED FINES */
let rejectedFines =
JSON.parse(localStorage.getItem("rejectedFines")) || [];

/* DISPLAY REJECTED FINES */
function displayRejectedFines(){

    /* CLEAR OLD CONTENT */
    rejectedContainer.innerHTML = "";

    /* IF EMPTY */
    if(rejectedFines.length === 0){

        rejectedContainer.innerHTML = `

        <div class="empty">
            No Rejected Fine Requests
        </div>

        `;

        return;
    }

    /* LOOP THROUGH FINES */
    rejectedFines.forEach((fine) => {

        rejectedContainer.innerHTML += `

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
                <span>Rejected By:</span>
                ${fine.rejectedBy}
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
                Request Rejected
            </div>

        </div>

        `;
    });
}

/* RUN FUNCTION */
displayRejectedFines();