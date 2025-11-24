// Exemplo 2: Verificar se existe alguma palavra com menos de 5 caracteres
const palavras = ["elefante", "gato", "cachorro", "maçã"];

// some() retorna true se pelo menos uma palavra tiver comprimento < 5
const existePalavraCurta = palavras.some(function(palavraAtual){
    return palavraAtual.length < 5;
});

console.log('Palavras:', palavras);
console.log('Existe palavra com menos de 5 caracteres?', existePalavraCurta); // Saída: true ("gato", "maçã")