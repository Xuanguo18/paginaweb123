fetch('data/noticias.json')
  .then(response => response.json())
  .then(noticias => {
    const noticiasDiv = document.getElementById('noticias');
    noticias.forEach(noticia => {
      noticiasDiv.innerHTML += `
        <article>
          <h3>${noticia.titulo}</h3>
          <p>${noticia.fecha}</p>
          <p>${noticia.descripcion}</p>
        </article>`;
    });
  })
  .catch(err => console.error('Error al cargar las noticias:', err));
  function validateEmail() {
    const emailInput = document.getElementById("email").value;
    const message = document.getElementById("message");

    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        message.textContent = "¡El correo electrónico es válido!";
        message.className = "message valid";
    } else {
        message.textContent = "El correo electrónico no es válido. Intenta de nuevo.";
        message.className = "message invalid";
    }
}