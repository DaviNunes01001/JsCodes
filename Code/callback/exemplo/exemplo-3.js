function aplicarOPera(array, callback) {
    for (let i = 0; i < array.length; i++)
        callback(array[i])
}

aplicarOPera([1,2,3], function(elemento) {
    console.log("elemento: " + elemento)
})