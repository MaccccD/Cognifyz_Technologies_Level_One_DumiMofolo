const colorChange = document.querySelector(".colorChange"); // refrence to the btn that we will add an event listner to:

function BtnColorChange(){
     console.log("Btn has been clicked");

     colorChange.style.backgroundColor = "green"; // changing the color of the btn upon click
    }

 colorChange.addEventListener("click", BtnColorChange); // action call