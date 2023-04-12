const carouselImages = document.querySelectorAll(".carousel-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach((image, i) => {
    if (i === index) {
      image.classList.remove("hidden");
    } else {
      image.classList.add("hidden");
    }
  });
}

function showPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  showImage(currentIndex);
}

function showNext() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
