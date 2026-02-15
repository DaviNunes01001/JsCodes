let maior = 0;
let idades = [12, 12, 54, 64, 17];
for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    maior++;
  }
}

console.log(`Idades maiores que 18 = ${maior}`);
