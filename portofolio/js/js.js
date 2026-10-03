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


let backtotopButton = document.getElementById("scroll");
window.addEventListener("scroll", function () {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
        
        backtotopButton.classList.remove("opacity-0");
        backtotopButton.classList.add("opacity-100");
        
    }
    else {
        backtotopButton.classList.remove("opacity-100");
        backtotopButton.classList.add("opacity-0");
    }});

backtotopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    
});

