// LOAD APPROVED FINES
let approved = JSON.parse(
    localStorage.getItem("approvedFines")
) || [];

let container =
document.getElementById("tableContainer");

if (approved.length === 0) {

    container.innerHTML = `
        <div class="empty">
            No approved fines yet.
        </div>
    `;

} else {

    let table = `
    <table>

        <tr>
            <th>Student</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Reason</th>
            <th>Status</th>
        </tr>
    `;

    approved.forEach(f => {

        table += `
        <tr>

            <td>${f.student}</td>

            <td>${f.title}</td>

            <td>₹${f.amount}</td>

            <td>${f.reason}</td>

            <td>
                <span class="status">
                    Approved
                </span>
            </td>

        </tr>
        `;
    });

    table += `</table>`;

    container.innerHTML = table;
}