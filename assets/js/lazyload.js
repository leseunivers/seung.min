document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".lazyload").forEach(img => {
    img.onload = () => img.classList.add("loaded");
  });
});
