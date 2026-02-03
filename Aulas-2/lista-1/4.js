const alunos = ["João", "Maria", "Pedro"]; 
alunos.map(aluno => console.log(`{nome:"${aluno}",ativo: ${aluno ? true : false} }`))