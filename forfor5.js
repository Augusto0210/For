var teclado = require("prompt-sync")();
console.clear();
var vetor = new Array(10);
var z = 0;
for (var x = 0; x <= 10; x++) {
    vetor[x] = parseInt(teclado("Digite os n\u00FAmeros: "));
    for (var y = 0; y <= 10; y++) {
        if (vetor[x] < vetor[y]) {
            z = vetor[x];
            vetor[x] = vetor[y];
            vetor[y] = z;
        }
    }
}
for (var x = 0; x <= 10; x++) {
    console.log("|Em ordem crescente |".concat(vetor[x], "|"));
}
