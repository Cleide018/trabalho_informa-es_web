//5) Escreva um programa para checar três números inteiros. Se os números estiverem 
// entre 50 e 99 então imprima uma mensagem de sucesso. Caso contrário, se um dos números 
// não estiver dentro do intervalo, imprima uma mensagem de erro.

let num1 = 12;
let num2 = 57;
let num3 = 100;

if ((num1>= 50 && num1 <= 99) &&
   (num2 >= 50 && num2 <= 99) &&
   (num3 >= 50 && num3 <= 99)) {
   console.log("Sucesso! Todos os números estão no intervalo de 50 a 99.");
 } else {
    console.log("Erro! Pelo menos um número não está no intervalo de 50 a 99.");
 }