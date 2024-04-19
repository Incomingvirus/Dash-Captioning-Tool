document.addEventListener("DOMContentLoaded", function() {
    // Select the proceed button
    const proceedButton = document.getElementById("proceed-button");

    // Add click event listener to the proceed button
    proceedButton.addEventListener("click", function() {
        // Redirect the user to editing.html
        window.location.href = "editing.html";
    });
});

// In script.js
document.getElementById('proceed-button').addEventListener('click', function() {
    window.location.href = 'editing.html';
});
