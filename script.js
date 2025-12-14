document.querySelectorAll('.product-heart').forEach(heart => {
  heart.addEventListener('click', function () {
    this.classList.toggle('liked');

    // Пульсація при кліку
    this.style.transform = 'scale(1.6)';
    setTimeout(() => {
      this.style.transform = this.classList.contains('liked') ? 'scale(1.1)' : 'scale(1)';
    }, 200);
  });
});

// Велике сердечко у шапці
document.querySelector('header .heart').addEventListener('click', function () {
  this.style.transform = 'scale(1.4)';
  setTimeout(() => this.style.transform = 'scale(1)', 300);
});
