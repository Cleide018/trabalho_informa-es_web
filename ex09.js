//9) Escreva um programa que calcule a soma dos tamanhos de todas as palavras em uma frase.

let frase = ("O dinheiro não traz felicidade, mas pelo menos ajuda a pagar as contas da terapia");

let palavras = frase.split(" ");

let somaTamanhos = 0;

for (let palavra of palavras) {
    somaTamanhos += palavra.length;
}

console.log(`A soma dos tamanhos das palavras é: ${somaTamanhos}`);