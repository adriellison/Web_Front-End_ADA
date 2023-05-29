const numero = 10;
console.log(numero.toString()); // 10

const numeroEmFormatoString = String(numero);
console.log(numeroEmFormatoString); // 10

console.log(Number("123")) // 123

console.log(parseFloat("123.45")) // 123.45

console.log(parseInt("123.45")) // 123

Boolean(1) // true
console.log(Boolean(1)) // true

console.clear();

// 2. Coersão Implícita (automatica)
console.log(10 + "1") // 101

console.log("10" - 1) // 9

console.log("10" * 2) // 20

console.log(10 * "2") // 20

console.log(10 * "oi") // NaN

// Qual será a saída desse código?
let n = 1 + "1"; // "11"

n = n - 1; // 10

console.log(n); // 10

// // Qual será a saída desse código?
console.log(2 + 3 + "5"); // "55"

// // Qual será a saída desse código?
console.log("5" + 2 + 3 + 4); // "5234"

// // Qual será a saída desse código?
console.log("10" - "4" - "3" - 2 + "5"); // "15"