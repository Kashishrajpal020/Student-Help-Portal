/* GET CONTAINER */
const requestsContainer =
document.getElementById("requestsContainer");

/* GET DATA FROM LOCAL STORAGE */
let pendingFines =
JSON.parse(localStorage.getItem("pendingFines")) || [];

/* DISPLAY ALL PENDING REQUESTS */
function displayPendingRequests(){

    /* CLEAR PREVIOUS CONTENT */
    requestsContainer.innerHTML = "";

    /* IF THERE ARE NO REQUESTS */
    if(pendingFines.length === 0){

        requestsContainer.innerHTML = `

        <div class="empty-box">
            No Pending Fine Requests Found
        </div>

        `;

        return;
    }

    /* LOOP THROUGH ALL REQUESTS */
    pendingFines.forEach((fine, index) => {

        requestsContainer.innerHTML += `

        <div class="request-card">

            <div class="student-name">
                ${fine.student}
            </div>

            <div class="detail">
                <span>Fine Title:</span>
                ${fine.title}
            </div>

            <div class="detail">
                <span>Fine Amount:</span>
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

            <div class="status">
                Waiting For Approval
            </div>

        </div>

        `;
    });
}

/* CALL FUNCTION */
displayPendingRequests();