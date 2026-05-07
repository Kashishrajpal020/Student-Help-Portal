/* STORAGE HELPER */
function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

/* LOAD ALL DATA */
function loadAnalytics() {

    const pending = getData("pendingFines");
    const approved = getData("approvedFines");
    const rejected = getData("rejectedFines");

    const total = pending.length + approved.length + rejected.length;

    /* UPDATE UI */
    document.getElementById("total").innerText = total;
    document.getElementById("pending").innerText = pending.length;
    document.getElementById("approved").innerText = approved.length;
    document.getElementById("rejected").innerText = rejected.length;
}

/* AUTO RUN */
document.addEventListener("DOMContentLoaded", loadAnalytics);