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
