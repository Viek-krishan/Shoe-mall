
const slides = document.querySelectorAll(".slide");

export const goRight = (counter) => {
  slideImg(counter);
};
export const goLeft = (counter) => {
  slideImg(counter);
};

const slideImg = (counter) => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
