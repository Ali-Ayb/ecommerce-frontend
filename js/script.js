const left = document.getElementById("left")
const right = document.getElementById("right")
let icon = document.getElementById('active2')
let login_register = document.getElementsByClassName('active1')

let slideIndex = 1
let  userid= true

showSlides(slideIndex);

left.addEventListener('click', () => showSlides(slideIndex -= 1))
right.addEventListener('click', () => showSlides(slideIndex += 1))

function showSlides(n) {

    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}

let j;
const slides = document.getElementsByClassName("mySlides");

for (j = 0 ; j < slides.length ; j++){
    slides[j].addEventListener("click",() => {
        window.location.href = "./pages/product-details.html"
    })
}


if (!userid) {
    icon.hidden = true;
}else {
    login_register[0].hidden = true;
    login_register[1].hidden = true;
}






