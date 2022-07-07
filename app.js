let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlide = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePositon() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }
  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlide - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePositon();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlide - 1;
  } else {
    slidePosition--;
  }
  updateSlidePositon();
}
