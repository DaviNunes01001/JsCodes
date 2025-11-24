// Exemplo 1: Dobrar números
// O map() cria um novo array aplicando uma função em cada elemento
const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map(numero => numero * 2);
console.log('Números originais:', numeros);
console.log('Números dobrados:', numerosDobrados); // Saída: [2, 4, 6, 8, 10]

// Exemplo 2: Converter temperaturas de Celsius para Fahrenheit
// Usando map() para transformar cada temperatura
const temperaturasC = [0, 10, 20, 30, 40];
const temperaturasF = temperaturasC.map(celsius => (celsius * 9/5) + 32);
console.log('Temperaturas em Celsius:', temperaturasC);
console.log('Temperaturas em Fahrenheit:', temperaturasF); // Saída: [32, 50, 68, 86, 104]

// Exemplo 3: Extrair propriedade de objetos
// Map pode ser usado para extrair valores específicos de um array de objetos
const pessoas = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Bruno', idade: 30 },
    { nome: 'Carlos', idade: 35 }
];
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log('Lista de nomes:', nomes); // Saída: ['Ana', 'Bruno', 'Carlos']