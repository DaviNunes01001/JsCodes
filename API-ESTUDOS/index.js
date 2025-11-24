fetch("https://ghibliapi.vercel.app/films")
  .then(response => response.json()) // 1. transforma a resposta
  .then(data => {
    console.log("Filmes do Studio Ghibli:");
    console.log(data); // 2. mostra os filmes no console
  })
  .catch(erro => {
    console.log("Deu erro na requisição:", erro);
  });