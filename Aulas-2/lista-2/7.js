function adicionarAoCarrinho() {
  const produtos = [
    "Oléo de peroba",
    "Lubrificante automotivo",
    "Ração de cachorro",
  ];
  const novoProd = ["Agua mineral"];
  const newCarrinho = [...produtos, ...novoProd];
  console.log(newCarrinho);
}
adicionarAoCarrinho();
