(function () {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prev = carousel.querySelector('.carousel-prev');
  const next = carousel.querySelector('.carousel-next');
  const dots = carousel.querySelectorAll('.carousel-dot');
  let index = 0;
  let startX = 0;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';

    dots.forEach(function (dot, j) {
      const active = j === index;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  prev.addEventListener('click', function () {
    goTo(index - 1);
  });

  next.addEventListener('click', function () {
    goTo(index + 1);
  });

  dots.forEach(function (dot, j) {
    dot.addEventListener('click', function () {
      goTo(j);
    });
  });

  carousel.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  }, { passive: true });

  carousel.addEventListener('touchend', function (e) {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 50) {
      goTo(index + (diff < 0 ? 1 : -1));
    }
  }, { passive: true });
})();
