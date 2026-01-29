const frutas =["Banana", "Maça", "Uva"]
const vegetais =["Alface", "Couve", "Brocolis"]

const All = [...vegetais, ...frutas]
console.log(`Frutas:${frutas}`)
console.log(`Vegetais:${vegetais}`)
console.log("====================")
console.log(`Usando spread -> ${All}`)