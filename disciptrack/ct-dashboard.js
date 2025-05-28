// ct-dashboard.js

let redMarkData = JSON.parse(localStorage.getItem('redMarkData')) || [];

function updateClassTeacherTable(filteredData) {
    const tbody = document.getElementById("ctTableBody");
    tbody.innerHTML = "";

    filteredData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.rollNumber}</td>
            <td>${entry.name}</td>
            <td>${entry.class}</td>
            <td>${entry.section}</td>
            <td>${entry.issue}</td>
            <td>${entry.count}</td>
            <td>
                <textarea placeholder="Write note or punishment"></textarea><br>
                <button onclick="saveNote(${index})">Save</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function applyFilter() {
    const filterClass = document.getElementById("filterClass").value.trim().toLowerCase();
    const filterSection = document.getElementById("filterSection").value.trim().toLowerCase();

    const filtered = redMarkData.filter(entry =>
        entry.class.toLowerCase() === filterClass &&
        entry.section.toLowerCase() === filterSection
    );

    updateClassTeacherTable(filtered);
}

function saveNote(index) {
    const textarea = document.querySelectorAll("textarea")[index];
    const note = textarea.value.trim();
    if (note) {
        alert(`Note saved for ${redMarkData[index].name}: ${note}`);
        // Optional: Save notes in localStorage or backend
    } else {
        alert("Please write a note or punishment before saving.");
    }
}

window.onload = () => {
    updateClassTeacherTable([]); // Show nothing until filter is applied
};
