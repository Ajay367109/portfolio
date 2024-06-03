const slides = document.querySelectorAll(".slider div");
let slideIndex = 0;
let intervalId = null;

//initializeSlide();
document.addEventListener("DOMContentLoaded", initializeSlide);
function initializeSlide(){
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);

}
function showSlide(index){
    if(index >= slides.length){
        slideIndex =0;
    }
    else if(index<0){
        slideIndex = slides.length-1;
    }
    slides.forEach(slide=>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);

}
