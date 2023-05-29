// FUNÇÕES

// Definição de função
// Uma função é um bloco de código que pode ser definido uma vez e executado repetidamente, sem a necessidade de reescrever todo o código.

function saudacao() {
	console.log("Olá, mundo!");
}

saudacao(); // Olá, mundo!

// Parâmetros e argumentos
// Parâmetros são variáveis listadas como parte da definição de uma função. Argumentos são valores passados para a função quando a mesma é chamada.

function saudacao(nome) {
	console.log("Olá, " + nome + "!");
}

saudacao("João"); // Olá, João!

// Retorno de valores
// Quando uma função é chamada, a mesma retorna um valor. Se não houver retorno explícito, a função retorna undefined.

function soma(a, b) {
	return a + b;
}

console.log(soma(1, 2)); // 3

// Escopo de variáveis
// Variáveis declaradas dentro de uma função não podem ser acessadas fora da mesma. Variáveis declaradas fora de uma função podem ser acessadas dentro da mesma.

function saudacao() {
	var nome = "João";
	console.log("Olá, " + nome + "!");
}

saudacao(); // Olá, João!

function saudacao2(nome, curso="JavaScript") {
	console.log("Olá, " + nome + "! Seja bem-vindo ao curso de " + curso + "!");
}

saudacao2("João"); // Olá, João! Seja bem-vindo ao curso de JavaScript!

saudacao2(); // Olá, undefined! Seja bem-vindo ao curso de JavaScript!

// Funções anônimas
// Funções anônimas são funções sem nome. São geralmente utilizadas como argumentos de outras funções.

var saudacao = function (nome) {
	console.log("Olá, " + nome + "!");
}

saudacao("João"); // Olá, João!

// Funções autoexecutáveis
// Funções autoexecutáveis são funções que são executadas automaticamente quando o script é carregado.

(function () {
	console.log("Olá, mundo!");
}
)(); // Olá, mundo!

// Funções construtoras
// Funções construtoras são funções que retornam objetos.

function Pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
}

var pessoa = new Pessoa("João", 20);

console.log(pessoa); // Pessoa { nome: 'João', idade: 20 }

// Funções recursivas
// Funções recursivas são funções que chamam a si mesmas.

function fatorial(n) {
	if (n <= 1) {
		return 1;
	}
	
	return n * fatorial(n - 1);
}

console.log(fatorial(5)); // 120

// Funções de primeira classe
// Funções de primeira classe são funções que podem ser atribuídas a variáveis, passadas como argumentos e retornadas por outras funções.

function saudacao(nome) {
	console.log("Olá, " + nome + "!");
}

var saudacao2 = saudacao;

saudacao2("João"); // Olá, João!

function saudacao3(nome) {
	return function () {
		console.log("Olá, " + nome + "!");
	}
}

var saudacao4 = saudacao3("João");

saudacao4(); // Olá, João!

// Funções de ordem superior
// Funções de ordem superior são funções que recebem outras funções como argumentos ou retornam outras funções como resultado.

function saudacao(nome) {	
	return function () {
		console.log("Olá, " + nome + "!");
	}
}

function saudacao2(nome, callback) {
	callback(nome);
}

var saudacao3 = saudacao("João");

saudacao2("João", saudacao3); // Olá, João!


function maiorDoQue50(numero) {
	if (numero > 50) {
		return true;
	}

	return false;
}

// Essa função é equivalente a:
function maiorDoQue50(numero) {
	return numero > 50;
}