// Get the modal
var popup = document.getElementById("popup");

// Get the <span> element that closes the modal
var span = document.getElementById("closePopup");

// Get the cancel button
var cancelButton = document.getElementById("cancelPopup");

// Check if the popup has been shown before
if (!sessionStorage.getItem('popupShown')) {
    // Set a delay (e.g., 3000 milliseconds = 3 seconds)
    setTimeout(function () {
        // Show the popup automatically after the delay
        popup.style.display = "block";
        // Set a flag in sessionStorage to indicate the popup has been shown
        sessionStorage.setItem('popupShown', 'true');
    }, 10000); // Change 3000 to your desired delay in milliseconds
}

// When the user clicks on <span> (x) or the cancel button, close the modal
span.onclick = function () {
    popup.style.display = "none";
}

cancelButton.onclick = function () {
    popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}