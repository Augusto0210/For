/*1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();
let array1 : string[] = [`segunda-feira`, `terça-feira`, `quarta-feira`, `quinta feira`, `sexta-feira`, `sábado`, `domingo`];
let array2 : string[] = [`jogar`, `estudar`, `ouvir música`, `brincar`, `assistir filme`, `tocar guitarra`, `desenhar`];

console.log (`
    Na ${array1[0]}, eu gosto de ${array2[0]}.
    Na ${array1[1]}, eu tenho que ${array2[0]}.
    Na ${array1[2]}, eu gosto de ${array2[0]}. 
    Na ${array1[3]}, eu gosto de ${array2[0]}. 
    Na ${array1[4]},eu gosto de ${array2[0]}.
    No ${array1[5]}, eu gosto de ${array2[0]}. 
    No ${array1[6]}, eu gosto de ${array2[0]}. `)