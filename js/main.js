
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
