document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onload = () => {
      const ratio = img.naturalWidth / img.naturalHeight;
      img.parentElement.classList.add(ratio > 1 ? 'horizontal' : 'vertical');
    };
  });
});