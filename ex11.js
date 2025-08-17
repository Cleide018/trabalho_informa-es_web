//11) Escreva um programa que receba uma lista de números e retorne os últimos n elementos da lista.
// ◦ Exemplo:
// ▪ numeros = [10, 58, 68, 88, 25, 45]
// ▪ n = 3
// ▪ Resultado: [88, 25, 45]

let numeros = [10, 58, 68, 88, 25, 45];
let n = 3;

let ultimos = numeros.slice(-n);

console.log(ultimos);

