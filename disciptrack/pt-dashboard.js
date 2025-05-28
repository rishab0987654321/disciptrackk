// pt-dashboard.js

let redMarkData = JSON.parse(localStorage.getItem('redMarkData')) || [];

function updateTable() {
    const tbody = document.getElementById("recordTableBody");
    tbody.innerHTML = "";

    redMarkData.forEach(entry => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.rollNumber}</td>
            <td>${entry.name}</td>
            <td>${entry.class}</td>
            <td>${entry.section}</td>
            <td>${entry.issue}</td>
            <td><span style="color: red; font-size: 20px;">🔴</span></td>
            <td>${entry.count}</td>
        `;
        tbody.appendChild(row);
    });
}

function addRecord() {
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();
    const section = document.getElementById("section").value.trim();
    const issue = document.getElementById("issue").value.trim();

    if (!rollNumber || !name || !studentClass || !section || !issue) {
        alert("Please fill in all fields.");
        return;
    }

    // Try to find if same rollNumber, class, and section already exists
    const match = redMarkData.find(entry =>
        entry.rollNumber === rollNumber &&
        entry.class.toLowerCase() === studentClass.toLowerCase() &&
        entry.section.toLowerCase() === section.toLowerCase()
    );

    if (match) {
        match.count += 1;
    } else {
        redMarkData.push({
            rollNumber,
            name,
            class: studentClass,
            section,
            issue,
            count: 1
        });
    }

    localStorage.setItem('redMarkData', JSON.stringify(redMarkData));
    updateTable();

    // Clear form fields
    document.getElementById("rollNumber").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("studentClass").value = "";
    document.getElementById("section").value = "";
    document.getElementById("issue").value = "";
}

document.getElementById("addRecord").addEventListener("click", addRecord);

// Load table on page load
window.onload = updateTable;
