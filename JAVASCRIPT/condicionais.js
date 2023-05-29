const idade = 18;

let condicao = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(condicao); // "Maior de idade"

console.clear();

// se media >= 7, aprovado
// se media < 7 e media >= 5, recuperação
// se media < 7, reprovado

const media = 6;

if (media >= 7)
	console.log("Aprovado");
else if (media >= 5)
	console.log("Recuperação");
else
	console.log("Reprovado");