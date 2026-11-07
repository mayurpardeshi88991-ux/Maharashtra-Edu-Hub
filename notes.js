
const notesData = [
    {
        title: "Electrostatics",
        className: "HSC 12th",
        stream: "Science",
        subject: "Physics",
        chapter: "Chapter 1",
        pdf: ""
    },
    {
        title: "Rotational Dynamics",
        className: "HSC 12th",
        stream: "Science",
        subject: "Physics",
        chapter: "Chapter 2",
        pdf: ""
    },
    {
        title: "Solid State",
        className: "HSC 12th",
        stream: "Science",
        subject: "Chemistry",
        chapter: "Chapter 1",
        pdf: ""
    },
    {
        title: "Solutions",
        className: "HSC 12th",
        stream: "Science",
        subject: "Chemistry",
        chapter: "Chapter 2",
        pdf: ""
    },
    {
        title: "Indefinite Integration",
        className: "HSC 12th",
        stream: "Science",
        subject: "Mathematics",
        chapter: "Chapter 3",
        pdf: ""
    },
    {
        title: "Biomolecules",
        className: "HSC 12th",
        stream: "Science",
        subject: "Biology",
        chapter: "Chapter 1",
        pdf: ""
    },
    {
        title: "English Grammar",
        className: "SSC 10th",
        stream: "",
        subject: "English",
        chapter: "Grammar",
        pdf: ""
    },
    {
        title: "History Notes",
        className: "SSC 10th",
        stream: "",
        subject: "History",
        chapter: "Chapter 1",
        pdf: ""
    }
];

function displayNotes() {
    const classValue =
        document.getElementById("noteClass").value;

    const streamValue =
        document.getElementById("noteStream").value;

    const subjectValue =
        document.getElementById("noteSubject").value;

    const searchValue =
        document.getElementById("noteSearch")
        .value.toLowerCase().trim();

    const filtered = notesData.filter(note => {
        return (!classValue || note.className === classValue) &&
        (!streamValue || note.stream === streamValue) &&
        (!subjectValue || note.subject === subjectValue) &&
        (note.title.toLowerCase().includes(searchValue) ||
         note.chapter.toLowerCase().includes(searchValue));
    });

    const list = document.getElementById("notesList");
    const empty = document.getElementById("noNotes");

    list.innerHTML = "";
    empty.style.display = filtered.length ? "none" : "block";

    filtered.forEach(note => {
        const card = document.createElement("div");
        card.className = "note-card";

        const heading = document.createElement("h3");
        heading.textContent = "📘 " + note.title;

        const details = document.createElement("p");
        details.textContent =
            note.className + " | " +
            note.subject + " | " +
            note.chapter;

        const button = document.createElement("button");
        button.className = "btn";

        if (note.pdf) {
            button.textContent = "View Notes PDF";
            button.onclick = () => window.open(note.pdf, "_blank");
        } else {
            button.textContent = "PDF Not Uploaded";
            button.disabled = true;
        }

        card.append(heading, details, button);
        list.appendChild(card);
    });
}

document.getElementById("noteClass")
.addEventListener("change", displayNotes);

document.getElementById("noteStream")
.addEventListener("change", displayNotes);

document.getElementById("noteSubject")
.addEventListener("change", displayNotes);

document.getElementById("noteSearch")
.addEventListener("input", displayNotes);

displayNotes();
