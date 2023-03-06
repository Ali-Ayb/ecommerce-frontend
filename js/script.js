// const mySlides = document.querySelectorAll('.mySlides');
const left = document.getElementById("left")
const right = document.getElementById("right")

// console.log(mySlides[0])
let slideIndex = 1

showSlides(slideIndex);

function showSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}
