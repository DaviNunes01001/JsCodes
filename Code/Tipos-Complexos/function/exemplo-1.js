function fazerVitamina(fruta, quantidade) { 
return `Vitamina de ${fruta} com ${quantidade} unidades pronta!`; 
} 
// Usando a função com diferentes "ingredientes": 
let vitamina1 = fazerVitamina("banana", 2); 
let vitamina2 = fazerVitamina("morango", 5); 
console.log(vitamina1); // "Vitamina de banana com 2 unidades pronta!" 
console.log(vitamina2); // "Vitamina de morango com 5 unidades pronta!" 