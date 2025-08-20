const listaEstudantes = [
        {matricula: 20250083, nome: 'João', nota: 9},
        {matricula: 20250094, nome: 'Maria', nota: 9},
        {matricula: 20250280, nome: 'Pedro', nota: 7},
        {matricula: 20258283, nome: 'Ana', nota: 6},
        {matricula: 20258329, nome: 'Lucas', nota: 8}
]

let somaNotas  = 0
let i = 0;

//soma notas
while (i < listaEstudantes.length) {
    somaNotas = somaNotas + listaEstudantes[i].nota;
    i++;
}

// média da turma
const mediaTurma = somaNotas / listaEstudantes.length;

i = 0;
let aprovados  = [];

while (i < listaEstudantes.length) {
  const estudante = listaEstudantes[i];
  if (estudante.nota >= mediaTurma) {
    aprovados.push(estudante);
  }
  i++;
}

console.log('---------------- Média da turma:' + mediaTurma.toFixed(2) + '----------------');
console.log('---------------- Alunos Aprovados ----------------');


for (let j = 0; j < aprovados.length; j++) {
  console.log(`Aprovado: ${aprovados[j].nome}`);
}