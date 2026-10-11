// CHECKPOINT 1 - WEB DEVELOPMENT

// Função que imprime o cabeçalho de cada exercício no console
function titulo(numero) {
    console.log("***************************************************");
    console.log("Exercício " + numero);
    console.log("***************************************************");
}

// EXERCÍCIO 1 - Operadores de comparação (!=, ===, >=)
titulo(1);

let a = 10;
let b = "10";

console.log("a != b  ->", a != b);   // false (compara só o valor)
console.log("a === b ->", a === b);  // false (compara valor e tipo)
console.log("a >= 5  ->", a >= 5);   // true

// EXERCÍCIO 2 - IMC com if / else if / else encadeado
titulo(2);

let peso = 70;      // kg
let altura = 1.75;  // metros
let imc = peso / (altura * altura);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso ideal");
} else {
    console.log("Acima do peso");
}

// EXERCÍCIO 3 - Repetição com for até 10
titulo(3);

for (let contagem = 1; contagem <= 10; contagem++) {
    console.log("o valor da contagem é: " + contagem + "!");
}

// EXERCÍCIO 4 - Listar o Array no console
titulo(4);

const vingadores = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];

console.log(vingadores);

// Mostrando um por linha
for (let i = 0; i < vingadores.length; i++) {
    console.log(i + " - " + vingadores[i]);
}

// EXERCÍCIO 5 - Permissão com condicional ternária
titulo(5);

// condição ? se verdadeiro : se falso
let temPermissao = true;
console.log(temPermissao ? "Usuário TEM permissão" : "Usuário NÃO tem permissão");

temPermissao = false;
console.log(temPermissao ? "Usuário TEM permissão" : "Usuário NÃO tem permissão");

// EXERCÍCIO 6 - Login com usuário e senha
titulo(6);

const usuarioCadastrado = "admin";
const senhaCadastrada = "1234";

let usuarioDigitado = prompt("Exercício 6 - Digite o usuário (dica: admin)");
let senhaDigitada = prompt("Exercício 6 - Digite a senha (dica: 1234)");

if (usuarioDigitado === usuarioCadastrado && senhaDigitada === senhaCadastrada) {
    console.log("Login realizado com sucesso!");
} else {
    console.log("Falha de autenticação: usuário ou senha incorretos.");
}

// EXERCÍCIO 7 - Média de 7 notas
titulo(7);

const notas = [7, 5.5, 8, 6, 4.5, 9, 7.5];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
}

let media = soma / notas.length;
console.log("Notas:", notas);
console.log("Média:", media.toFixed(2));

if (media >= 6) {
    console.log("Aluno APROVADO");
} else {
    console.log("Aluno REPROVADO");
}
