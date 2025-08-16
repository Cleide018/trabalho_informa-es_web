//7) Escreva um programa que receba uma frase, realize modificações em cada palavra e exiba a nova frase modificada
// seguindo os critérios:
//Se a palavra tiver um tamanho menor que 5 caracteres, transforme tudo em maiúsculo.
//Se a palavra tiver o tamanho maior que 5 caracteres, transforme tudo em minusculo.

let frase = ("O dinheiro não traz felicidade, mas pelo menos ajuda a pagar as contas da terapia");

let palavras = frase.split(" ");

let palavrasModificadas = palavras.map(palavra => {
    if (palavra.length < 5) {
        return palavra.toUpperCase();
    } else if (palavra.length > 5) {
        return palavra.toLowerCase();
    } else {
        return palavra;
    }
});

let novaFrase = palavrasModificadas.join(" ");

console.log(novaFrase);
