let perfilInstagram = {
  username: "@maria_dev",
  seguidores: 1250,
  seguindo: 380,
  posts: 45,
  biografia: "Desenvolvedora apaixonada por JavaScript! 💻",
  verificado: false,
  privado: false,
};

// Acessando as informações
console.log(`${perfilInstagram.username} tem ${perfilInstagram.seguidores} seguidores`);
// @maria_dev tem 1250 seguidores
// Alterando informações
perfilInstagram.posts = 46; // Novo post!
perfilInstagram.seguidores = 1251; // Ganhou mais um seguidor!

console.log(`Agora tem ${perfilInstagram.posts} posts e ${perfilInstagram.seguidores} seguidores`)