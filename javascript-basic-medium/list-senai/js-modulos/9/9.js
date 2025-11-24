function exibir(){
	let lista = ["banana","maça","uva"];
	console.log(lista);
	lista.push("item");
	console.log(lista);
	lista.pop();
	console.log(lista);
}

module.exports = exibir;
