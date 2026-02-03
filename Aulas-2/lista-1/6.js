const tarefas = [ 
{ id: 1, titulo: "Estudar JS", concluida: true }, 
{ id: 2, titulo: "Praticar React", concluida: false }, 
{ id: 3, titulo: "Fazer exercícios", concluida: true } 
];

tarefas.filter(feita => console.log(feita.concluida == true ? feita.titulo : "") )



