// Reservation Form
document.getElementById("reservationForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your table has been reserved. See you soon!");
});

// Login Form
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        alert("Login successful! Welcome to Delish Bites.");
        window.location.href = "index.html";
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password!";
    }
});
