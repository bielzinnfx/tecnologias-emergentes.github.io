let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-images img");
  const indicators = document.querySelectorAll(".indicators div");

  function showImage(index) {
    images[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");

    currentIndex = index;

    images[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");
  }

  window.changeImage = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    showImage(newIndex);
  };

  window.goToImage = (index) => {
    showImage(index);
  };
});
