document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".img");

  images.forEach(img => {
    img.onload = function() {
      img.classList.add('loaded');
    };
    img.src = img.dataset.src; // 원본 이미지 로드
  });
});
