function loadApprovedFines() {

    let container =
    document.getElementById("recordsContainer");

    // GET DATA
    let approved =
    JSON.parse(localStorage.getItem("approvedFines"))
    || [];
    
    let pending =
    JSON.parse(localStorage.getItem("pendingFines"))
    || [];

    let rejected =
    JSON.parse(localStorage.getItem("rejectedFines"))
    || [];

    // CLEAR CONTAINER
    container.innerHTML = "";

    // STUDENT LIST
    let students = [
        "Rahul",
        "Aman",
        "Priya",
        "Simran",
        "Karan"
    ];

    students.forEach(student => {

        // COUNTS
        let approvedCount =
        approved.filter(f =>
            f.student === student
        ).length;

        let pendingCount =
        pending.filter(f =>
            f.student === student
        ).length;

        let rejectedCount =
        rejected.filter(f =>
            f.student === student
        ).length;

        let total =
        approvedCount +
        pendingCount +
        rejectedCount;

        // CARD
        container.innerHTML += `

        <div class="record">

            <h3>${student}</h3>

            <p>
                <b>Total Fines:</b>
                ${total}
            </p>

            <p>
                <b>Approved:</b>
                ${approvedCount}
            </p>

            <p>
                <b>Pending:</b>
                ${pendingCount}
            </p>

            <p>
                <b>Rejected:</b>
                ${rejectedCount}
            </p>

        </div>
        `;
    });
}

// AUTO LOAD
loadApprovedFines();