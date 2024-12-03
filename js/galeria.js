let currentIndex = 0;

  function moveSlide(direction) {
    const gallery = document.querySelector('.gallery-images');
    const images = document.querySelectorAll('.gallery-images img');
    const totalImages = images.length;

    // Calcula el nuevo índice
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Mueve el contenedor a la nueva posición
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
