const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let propriedades = [];

console.log("Digite as propriedades do CSS (escreva 'SAIR' para encerrar):");

rl.on('line', (input) => {
    if (input === 'SAIR' || input === 'sair') {
        console.log(`Lista de propriedades CSS em ordem alfabética: ${propriedades.sort().join(', ')}`);
        rl.close();
    } else {
        propriedades.push(input);
    }
});
