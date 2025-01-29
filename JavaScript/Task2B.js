//grabbing references
const alertBtn = document.getElementById("custom-button");
const alertBox = document.getElementById("alertBox");
const alertMessage = document.getElementById("alertMessage");

// adding the event listner to the alet btn to show the alert box with the greeting msg
alertBtn.addEventListener("click", function(){

    const currentTime = new Date().toLocaleTimeString(); // Get the current time. I googled this part
    alertBox.style.display = "block";
    alertMessage.innerHTML = `Hello there ! Coming to you live at: ${currentTime}` // backticks + string interpolation
});