// ARRAYS - PARTE 1

// Como criar um array?
// var array = new Array();
// var array = [];

var array = new Array(1, 2, 3, 4, 5);
console.log(array);

// Como acessar um elemento do array?
console.log(array[0]);
console.log(array[1]);

// Como obter o tamanho do array?
console.log(array.length);

// Como percorrer um array?
for (let i = 0; i < array.length; i++) {
	  console.log(array[i]);
}

// Como adicionar elementos no final do array?
array.push(6);

// Como adicionar elementos no início do array?
array.unshift(0);

// Como remover elementos no final do array?
array.pop();

// Como remover elementos no início do array?
array.shift();

// Como remover elementos em uma posição específica do array?
array.splice(2, 1);

// Como limpar o array?
array = [];

// Como ordenar um array?
array.sort();

// Como inverter a ordem de um array?
array.reverse();

// Como remover elementos duplicados de um array?
array = array.filter(function (elem, index, self) {	
	return index === self.indexOf(elem);
}
);

// Como verificar se determinado elemento existe no array?
console.log(array.indexOf(3) > -1);

// Como concatenar dois arrays?
var array2 = [6, 7, 8, 9, 10];

array = array.concat(array2);

// Como transformar um array em uma string?
console.log(array.join());

// Como transformar uma string em um array?
var string = "1,2,3,4,5";

array = string.split(",");
console.log(array);

// Como fatiar um array?
console.log(array.slice(0, 2));

// Como remover elementos em branco de um array?
array = array.filter(function (elem) {
	return elem.trim();
}
);

// Como remover elementos em branco de uma string?
string = string.replace(/\s/g, "");

// Como remover caracteres especiais de uma string?
string = string.replace(/[^\w\s]/gi, "");