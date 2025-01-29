const colorChange = document.querySelector(".colorChange"); // refrence to the btn that we weill add an event listner to:

function BtnColorChange(){
     console.log("Btn has been clicked");

     colorChange.style.backgroundColor = "green";
    }

 colorChange.addEventListener("click", BtnColorChange);