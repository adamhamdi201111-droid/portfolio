let modes = document.getElementById("modes");
modes.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        modes.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else{
        modes.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

let loadingScreen = document.getElementsByClassName("loading-screen");
if(loadingScreen){
    window.addEventListener("load", function(){
        setTimeout(function(){
        loadingScreen[0].classList.add("loaded");
    }, 1000);
})
}

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", function () {
    if (name.value.length < 3) {
        document.getElementById("nameError").classList.remove("d-none");
    } else {
        document.getElementById("nameError").classList.add("d-none");
    }

    if (email.value.length < 5 || !email.value.includes("@")) {
        document.getElementById("emailError").classList.remove("d-none");
    } else {
        document.getElementById("emailError").classList.add("d-none");
    }

    if (subject.value.length < 3) {
        document.getElementById("subjectError").classList.remove("d-none");
    } else {
        document.getElementById("subjectError").classList.add("d-none");
    }

    if (message.value.length < 10) {
        document.getElementById("messageError").classList.remove("d-none");
    } 
    else if (message.value.length > 100) {
        alert("Message is too long. Please keep it under 100 characters.");
    }
    else {
        document.getElementById("messageError").classList.add("d-none");
    }

});