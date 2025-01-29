const alertBtn = document.getElementById("custom-button");
const alertBox = document.getElementById("alertBox");
const alertMessage = document.getElementById("alertMessage");


alertBtn.addEventListener("click", function(){
    
    const currentTime = new Date().toLocaleTimeString(); // Get the current time. I googled this part
    alertBox.style.display = "block";
    alertMessage.innerHTML = `Hello there ! Coming to you live at: ${currentTime}`
});