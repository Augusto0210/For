/*5- Faça um programa que dê entrada manual de 10 números
armazene em um vetor e ordene esses 10 números crescente,
fazer uso do laço de repetição for.
AUGUSTO LOPES COSTA DA SILVA*/
const teclado = require(`prompt-sync`)();
console.clear();

let vetor: number [] = new Array (10);
let z = 0

for (let x = 0; x <= 10; x++){
    vetor[x] = parseInt(teclado(`Digite os números: `));
        for (let y = 0; y <= 10; y++){
            if (vetor[x] < vetor[y]){
            z = vetor[x];
            vetor[x] = vetor[y];
            vetor[y] = z;
        }
    }
}

for (let x = 0; x <= 10; x++){
    console.log(`|Em ordem crescente |${vetor[x]}|`);
}