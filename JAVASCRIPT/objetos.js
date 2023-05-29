// OBJETOS

// Como criar um objeto no JavaScript?
// Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no navegador, você pode definir seus próprios objetos. Este capítulo descreve como usar objetos, propriedades, funções e métodos, e como criar seus próprios objetos.

// Criando um objeto
// Um objeto é criado com chaves { }.

var pessoa = {};

// Este código cria um objeto vazio chamado pessoa. Você pode adicionar propriedades ao objeto usando ponto (.) ou colchetes ([]).

pessoa.nome = "João";
pessoa.idade = 20;

// Você também pode criar um objeto usando a função construtora Object() e inicializando propriedades usando a função Object.create().

var pessoa = new Object();
pessoa.nome = "João";
pessoa.idade = 20;

var pessoa = Object.create(Object.prototype, {
	nome: {
		value: "João",
		enumerable: true,
		writable: true,
		configurable: true
	},
	idade: {
		value: 20,
		enumerable: true,
		writable: true,
		configurable: true
	}
});

// Como adicionar um par chave-valor a um objeto?
// Um par chave-valor é adicionado a um objeto usando ponto (.) ou colchetes ([]).

pessoa.nome = "João";
pessoa["idade"] = 20;

// Como remover uma propriedade de um objeto?
// Uma propriedade é removida de um objeto usando a palavra-chave delete.

delete pessoa.idade;

// Como acessar uma propriedade de um objeto?
// Uma propriedade é acessada usando ponto (.) ou colchetes ([]).

console.log(pessoa.nome); // João
console.log(pessoa["nome"]); // João

// Como percorrer as propriedades de um objeto?
// As propriedades de um objeto podem ser percorridas usando a instrução for...in.

for (var propriedade in pessoa) {
	console.log(propriedade + ": " + pessoa[propriedade]);
}