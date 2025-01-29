document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".gallery img").forEach((img) => {
      if (img.naturalHeight > img.naturalWidth) {
        img.classList.add("vertical"); // Додаємо клас для вертикальних
      } else {
        img.classList.add("horizontal"); // Додаємо клас для горизонтальних
      }
    });
  });
  