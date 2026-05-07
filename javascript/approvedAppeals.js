let appeals =
JSON.parse(localStorage.getItem("appeals")) || [];

let approved =
appeals.filter(a =>
    a.appealStatus === "Approved"
);

let container =
document.getElementById("approvedContainer");

if(approved.length === 0){

    container.innerHTML =
    "<p>No approved appeals yet</p>";
}

approved.forEach(a => {

    container.innerHTML += `

    <div class="appealCard">

        <h3>${a.student}</h3>

        <p><b>Fine:</b> ${a.title}</p>

        <p><b>Reason:</b> ${a.reason}</p>

        <p><b>Amount:</b> ₹${a.amount}</p>

        <p><b>Student Appeal:</b>
        ${a.appealReason}</p>

        <p>
            <b>Status:</b>
            ✅ Appeal Approved
        </p>

    </div>

    `;
});