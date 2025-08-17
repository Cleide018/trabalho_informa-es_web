//14) Escreva um programa que determine se uma palavra está presente ou não em uma frase. 
// Antes deve ter um “console.log(‘ops’)

console.log("ops");

let frase = prompt("Digite uma frase:");
let palavra = prompt("Digite a palavra que deseja procurar:");

if (frase.includes(palavra)) {
    alert("A palavra '" + palavra + "' está presente na frase.");
} else {
    alert("A palavra '" + palavra + "' NÃO está presente na frase.");
}
