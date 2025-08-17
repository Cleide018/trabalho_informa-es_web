//13) Escreva um programa que leia uma lista de números. Eleve cada um dos números a 3 e
// depois some o total de valores obtidos.

let entrada = prompt("Digite os números separados por espaço:");

let numeros = entrada.split(" ").map(Number);

let soma = numeros.reduce((acumulador, n) => acumulador + Math.pow(n, 3), 0);

alert("A soma dos cubos é: " + soma);