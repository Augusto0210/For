/*3- Faça um programa que dê entrada com 10 números
armazene em um vetor, e verifique qual é o maior
número e mostre no console.
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();
const teclado = require (`prompt-sync`)();
let maior = 0
let vetorMaior: number [] = new Array (10);

for (let x = 1; x <= 10; x++){
    vetorMaior[x] = parseInt(teclado(`Digite os números: `));
    if (vetorMaior[x] > maior){
        maior = vetorMaior[x];
    }   
}
console.log(maior);