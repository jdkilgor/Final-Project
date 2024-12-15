// Save name to cookies
function saveName() {
  const name = document.getElementById("username").value;
  if (name) {
    document.cookie = `username=${name}; path=/; max-age=31536000`;
    displayGreeting(name);
  }
}

// Load name from cookies
function loadName() {
  const cookies = document.cookie.split("; ");
  const userCookie = cookies.find((cookie) => cookie.startsWith("username="));
  if (userCookie) {
    const username = userCookie.split("=")[1];
    displayGreeting(username);
  }
}

// Display greeting
function displayGreeting(name) {
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Welcome back, ${name}!`;
}

// Load name on page load
window.onload = loadName;
