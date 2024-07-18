
function myFunction() {
  document.getElementById("demo").style.color = "red";
}

var petImg = document.querySelector("#pet-img");
    
/*function switchImg() {
    petImg.src = "dog.jpg";
    petImg.alt = "dog image";
}*/

function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}

