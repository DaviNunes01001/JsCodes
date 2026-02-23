export const executarApos = (segundos, callback) => {
  setTimeout(callback, segundos * 1000);
  console.log("Função agendada para executar após " + segundos + " segundos");
};
