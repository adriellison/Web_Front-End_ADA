// ARRAYS - PARTE 2

// Fatiamento de arrays: slice()
// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O array original não é modificado.

var array = [1, 2, 3, 4, 5];

console.log(array.slice(0, 2)); // [1, 2]

// Adicionando elementos: push() e unshift()
// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. O método unshift() adiciona um ou mais elementos ao início de um array e retorna o novo comprimento desse array.

var array = [1, 2, 3, 4, 5];

array.push(6);
console.log(array); // [1, 2, 3, 4, 5, 6]

array.unshift(0);
console.log(array); // [0, 1, 2, 3, 4, 5, 6]

// Removendo elementos: pop(), shift() e splice()
// O método pop() remove o último elemento de um array e retorna aquele elemento. O método shift() remove o primeiro elemento de um array e retorna aquele elemento. O método splice() remove elementos de um array e, opcionalmente, insere novos elementos no lugar. O array original é modificado.

var array = [1, 2, 3, 4, 5];

array.pop();
console.log(array); // [1, 2, 3, 4]

array.shift();
console.log(array); // [2, 3, 4]

array.splice(2, 1);
console.log(array); // [2, 3]

// Concatenação de arrays: concat()
// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro. O array original não é modificado.

var array = [1, 2, 3, 4, 5];
var array2 = [6, 7, 8, 9, 10];

array = array.concat(array2);
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Buscando elementos: indexOf() e lastIndexOf()
// O método indexOf() retorna o primeiro índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. O método lastIndexOf() retorna o último índice em que um elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

var array = [1, 2, 3, 4, 5];

console.log(array.indexOf(6)); // -1
console.log(array.lastIndexOf(6)); // -1

// Descobrindo a existência de um elemento: includes()
// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

var array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // true
console.log(array.includes(6)); // false

// Invertendo a ordem de um array: reverse()
// O método reverse() inverte a ordem dos elementos de um array. O primeiro elemento passa a ser o último e o último passa a ser o primeiro.

var array = [1, 2, 3, 4, 5];

array.reverse();
console.log(array); // [5, 4, 3, 2, 1]

// Ordenando um array: sort()
// O método sort() ordena os elementos de um array de acordo com a ordem de classificação Unicode e retorna o array. O array original é modificado.

var array = [5, 4, 3, 2, 1];

array.sort();
console.log(array); // [1, 2, 3, 4, 5]

// Filtrando elementos: filter()
// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

var array = [1, 2, 3, 4, 5];

array = array.filter(function (elem) {
	return elem > 3;
}
);