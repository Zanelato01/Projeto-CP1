// CHECKPOINT 1 - WEB DEV

function titulo(numero) {
    console.log("***************************************************");
    console.log("Exercício " + numero);
    console.log("***************************************************");
}


titulo(1);

let a = 10;
let b = "10";

console.log("a != b  ->", a != b);   // false (compara só o valor)
console.log("a === b ->", a === b);  // false (compara valor e tipo)
console.log("a >= 5  ->", a >= 5);   // true

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

titulo(3);

for (let contagem = 1; contagem <= 10; contagem++) {
    console.log("o valor da contagem é: " + contagem);
}


titulo(4);

const vingadores = ["Thor", "Hulk", "Capitão América", "Arqueiro", "Viúva Negra"];

console.log(vingadores);


for (let i = 0; i < vingadores.length; i++) {
    console.log(i + " - " + vingadores[i]);
}


titulo(5);

// condição ? se verdadeiro : se falso
let temPermissao = true;
console.log(temPermissao ? "Usuário TEM permissão" : "Usuário NÃO tem permissão");

temPermissao = false;
console.log(temPermissao ? "Usuário TEM permissão" : "Usuário NÃO tem permissão");


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


titulo(8);

let nome = prompt("Exercício 8 - Digite seu nome");


console.log(`Olá dev ${nome}`);


titulo(9);

let senhaAtual = "1234";

let senhaInformada = prompt("Exercício 9 - Digite a senha ATUAL (dica: 1234)");

if (senhaInformada !== senhaAtual) {
    console.log("Senha atual incorreta. Não é possível trocar a senha.");
} else {
    let novaSenha = prompt("Digite a NOVA senha");

    if (novaSenha !== senhaAtual) {
        senhaAtual = novaSenha;
        console.log("Senha alterada com sucesso!");
    } else {
        console.log("Erro: a nova senha deve ser diferente da senha atual.");
    }
}


titulo(10);

let valorProduto = 200;
let valorDesconto = 30;

let valorFinal = valorProduto - valorDesconto;

console.log("Valor do produto: R$", valorProduto);
console.log("Desconto: R$", valorDesconto);
console.log("Valor final: R$", valorFinal);
