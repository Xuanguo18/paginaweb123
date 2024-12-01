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
