
const paragraphs = document.querySelectorAll(".descrip");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph => {
        if(isInView(paragraph)) {
            paragraph.classList.add("descrip--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}






const images = document.querySelectorAll(".img");

document.addEventListener("scroll", function(){
    images.forEach(images => {
        if(isInView(images)) {
            images.classList.add("img--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}



const hayao = document.querySelectorAll(".hayaowrapper");

document.addEventListener("scroll", function(){
    hayao.forEach(hayao => {
        if(isInView(hayao)) {
            hayao.classList.add("hayaowrapper--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}





const isao = document.querySelectorAll(".isaowrapper");

document.addEventListener("scroll", function(){
    isao.forEach(isao => {
        if(isInView(isao)) {
            isao.classList.add("isaowrapper--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}



const toshio = document.querySelectorAll(".toshiowrapper");

document.addEventListener("scroll", function(){
    toshio.forEach(toshio => {
        if(isInView(toshio)) {
            toshio.classList.add("toshiowrapper--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}





const table = document.querySelectorAll(".tablewrapper");

document.addEventListener("scroll", function(){
    table.forEach(table => {
        if(isInView(table)) {
            table.classList.add("tablewrapper--visible")
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.
            clientHeight - 150)
    );
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}