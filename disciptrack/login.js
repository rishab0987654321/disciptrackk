document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // PT Teacher Login
  if (username === "ptteacher" && password === "pt123") {
    localStorage.setItem("ptLoggedIn", "true");
    window.location.href = "pt-dashboard.html";

  // Class Teacher Login
  } else if (username === "classteacher" && password === "classteacher123") {
    localStorage.setItem("ctLoggedIn", "true");
    window.location.href = "ct-dashboard.html";

  } else {
    alert("Invalid credentials");
  }
});
