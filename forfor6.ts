/*6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();

for(let x = 1000; x <= 2001; x++){
    if(x % 11  == 2){
        console.log(`Os numeros divididos por 11 com resto 2: ${x}`);
    }
}