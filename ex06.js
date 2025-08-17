// 6) Escreva um programa que encontre o número com maior quantidade de ocorrência em 
//  um array de números.

let numeros = [3, 5, 3, 2, 5, 3, 7, 5, 5];

let contador = {};

for (let num of numeros) {
    if (contador[num]) {
        contador[num] += 1;
    } else {
        contador[num] = 1;
    }
}

let maisFrequente = numeros[0];
let maxOcorrencias = contador[maisFrequente];

for (let num in contador) {
    if (contador[num] > maxOcorrencias) {
        maxOcorrencias = contador[num];
        maisFrequente = num;
    }
}

console.log(`O número que mais se repete é ${maisFrequente}, com ${maxOcorrencias} ocorrências.`);

