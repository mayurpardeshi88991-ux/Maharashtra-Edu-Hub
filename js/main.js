
function toggleMenu() {
    document.getElementById("navbar")
    .classList.toggle("active");
}

function searchSite() {
    const query = document
    .getElementById("searchBox")
    .value.trim().toLowerCase();

    if (!query) {
        alert("Please enter something to search!");
        return;
    }

    if (query.includes("news") ||
        query.includes("timetable") ||
        query.includes("result")) {
        window.location.href = "pages/news.html";
    }
    else if (query.includes("note")) {
        window.location.href = "pages/notes.html";
    }
    else if (query.includes("pyq") ||
             query.includes("paper")) {
        window.location.href = "pages/pyq.html";
    }
    else {
        alert("No matching section found!");
    }
}

// DIWALI POPUP - 48 HOURS EXPIRY

const diwaliPopup = document.getElementById("diwaliPopup");
const closeDiwali = document.getElementById("closeDiwali");

// Fixed expiry: 48 hours after first launch
const expiryKey = "maharashtraEduHubDiwaliExpiry";

let expiryTime = localStorage.getItem(expiryKey);

if (!expiryTime) {
  expiryTime = Date.now() + (48 * 60 * 60 * 1000);
  localStorage.setItem(expiryKey, expiryTime);
}

if (Date.now() >= Number(expiryTime)) {
  diwaliPopup.style.display = "none";
}

closeDiwali.addEventListener("click", function () {
  diwaliPopup.style.display = "none";
});

