document.getElementById("ptLoginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("ptUsername").value.trim();
  const password = document.getElementById("ptPassword").value.trim();

  if (username === "ptteacher" && password === "ptpass123") {
    localStorage.setItem("ptLoggedIn", "true");
    window.location.href = "./pt-dashboard.html";
  } else {
    alert("Invalid PT credentials");
  }
});
