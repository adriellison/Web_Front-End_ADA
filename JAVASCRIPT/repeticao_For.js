console.clear();

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.clear();

let nota;
let soma = 0;

const input = require("readline-sync");

for (let i = 1; i <= 3 ; i++) {
	nota = Number(input.question(`Digite a nota ${i} do aluno: `));
	soma = soma + nota;
}

// media com 2 casas decimais
console.log(`A media do aluno é ${(soma / 3).toFixed(2)}`);