
const papers = [
    {
        title: "Physics Question Paper",
        className: "HSC 12th",
        stream: "Science",
        subject: "Physics",
        year: "2025",
        pdf: "../1754559134phptfTVlP.pdf"
    },
    {
        title: "Chemistry Question Paper",
        className: "HSC 12th",
        stream: "Science",
        subject: "Chemistry",
        year: "2025",
        pdf: ""
    },
    {
        title: "Mathematics Question Paper",
        className: "HSC 12th",
        stream: "Science",
        subject: "Mathematics",
        year: "2024",
        pdf: ""
    },
    {
        title: "English Question Paper",
        className: "SSC 10th",
        stream: "",
        subject: "English",
        year: "2025",
        pdf: ""
    }
];

function displayPapers() {
    const classValue = document.getElementById("classFilter").value;
    const streamValue = document.getElementById("streamFilter").value;
    const subjectValue = document.getElementById("subjectFilter").value;
    const yearValue = document.getElementById("yearFilter").value;

    const filtered = papers.filter(p => {
        return (!classValue || p.className === classValue) &&
        (!streamValue || p.stream === streamValue) &&
        (!subjectValue || p.subject === subjectValue) &&
        (!yearValue || p.year === yearValue);
    });

    const list = document.getElementById("paperList");
    const empty = document.getElementById("emptyMessage");

    list.innerHTML = "";

    empty.style.display = filtered.length ? "none" : "block";

    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "paper-card";

        const heading = document.createElement("h3");
        heading.textContent = "📄 " + p.title;

        const details = document.createElement("p");
        details.textContent =
            p.className + " | " + p.subject + " | " + p.year;

        const button = document.createElement("button");
        button.className = "btn";

        if (p.pdf) {
            button.textContent = "View PDF";
            button.onclick = () => window.open(p.pdf, "_blank");
        } else {
            button.textContent = "PDF Not Uploaded";
            button.disabled = true;
        }

        card.append(heading, details, button);
        list.appendChild(card);
    });
}

["classFilter", "streamFilter", "subjectFilter", "yearFilter"]
.forEach(id => {
    document.getElementById(id).addEventListener("change", displayPapers);
});

displayPapers();
