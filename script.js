function updateClocks() {
  var currentTime = new Date();

  // Local Time
  var localTime = currentTime.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('local-clock').textContent = localTime;

  // Grobbulus Time (PST)
  var pstOffset = -7; // PST is GMT-7
  currentTime.setHours(currentTime.getHours() + pstOffset);
  var pstTime = currentTime.toISOString().substr(11, 8);
  document.getElementById('pst-clock').textContent = pstTime;

  // Update the clocks every second
  setTimeout(updateClocks, 1000);
}

// Start updating the clocks
updateClocks();

// Event listener for horde logo click
document.getElementById('horde-logo').addEventListener('click', function() {
  promptPassword();
});

function promptPassword() {
  var password = prompt("why the fuck are you clicking on shit? weirdo...");

  if (password === "Haadhun") {
    // Password is correct, do nothing
  } else {
    // Display an error message or redirect the user to another page
    alert("Incorrect password. Access denied.");
  }
}
