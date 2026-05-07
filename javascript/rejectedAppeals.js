let appeals =
JSON.parse(localStorage.getItem("appeals")) || [];

let rejected =
appeals.filter(a =>
    a.appealStatus === "Rejected"
);

let container =
document.getElementById("rejectedContainer");

if(rejected.length === 0){

    container.innerHTML =
    "<p>No rejected appeals yet</p>";
}

rejected.forEach(a => {

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
            ❌ Appeal Rejected
        </p>

    </div>

    `;
});