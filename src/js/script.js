let index = 0;
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const total = images.length;

document.querySelector('.next').onclick = () => slide(1);
document.querySelector('.prev').onclick = () => slide(-1);

function slide(direction) {
  index = (index + direction + total) % total;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => slide(1), 3000);

