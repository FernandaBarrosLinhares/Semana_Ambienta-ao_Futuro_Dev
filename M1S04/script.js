//Exercicio 2

// function parOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return "O número " + numero + " é par.";
//     } else {
//         return "O número " + numero + " é ímpar.";
//     }
// }

// // Exemplo de uso da função
// console.log(parOuImpar(7)); // Saída: O número 7 é ímpar.
// console.log(parOuImpar(10)); // Saída: O número 10 é par.
// console.log(parOuImpar(13)); // Saída: O número 13


//Exercicio 3

const exercicio = (array)=> {
    let soma = 0;
    for(let numero of array){
        soma += numero;
    }
    let media = soma/array.length;
    return media;
}
let arrayNumeros = [10,20,30];
console.log (exercicio(arrayNumeros));
