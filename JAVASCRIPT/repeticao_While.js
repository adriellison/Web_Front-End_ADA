// sortear um numero de 1 a 10

// const numero = Math.floor(Math.random() * 10) + 1;

// console.log(numero);

const numero_sorteado = 5;

const input = require("readline-sync");

// let chute = Number(input.question("Chute um numero de 1 a 10: "));

while (chute !== numero_sorteado) {
  console.log("Errou");
  chute = Number(input.question("Chute um numero de 1 a 10: "));
}

console.clear();

let acumulador = 0;

acumulador = acumulador + 1; // 1

acumulador++; // 2

console.log(acumulador); // 2

