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
