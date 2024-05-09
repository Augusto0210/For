/*2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).
AUGUSTO LOPES COSTA DA SILVA*/

console.clear();
const teclado = require(`prompt-sync`)();
let array1: number [] = new Array (10);

for(let x = 0; x <= 9; x++){
    array1[x] = parseInt(teclado(`Digite um número: `));
    let resultado: number = array1[x] / x;
    console.log(`O resultado da operação é: ${resultado}`);
}