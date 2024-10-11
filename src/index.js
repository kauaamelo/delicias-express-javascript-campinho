import chalk from 'chalk';
import readlineSync from 'readline-sync';

console.log(chalk.yellow.bold(`\n----------- Restaurante Delícias Express -----------\n`));

function mostraNomeGarcom(){
    const nome = readlineSync.question(`Ola, qual e o seu nome ? `);
    console.log(`- ${nome}, bem vindo ao sistema de pagamento.`);
    return nome;
}

mostraNomeGarcom();

function coletarMesa() {
    let numeroMesa;
    while (true) {
        numeroMesa = parseInt(readlineSync.question('Digite o numero da mesa: '), 10);
        if (!isNaN(numeroMesa) && numeroMesa < 16 && numeroMesa > 0) {
            break;
        }
        console.log(chalk.red('Por favor, insira um número de mesa válido.'));
    }
        return numeroMesa;
}

const numeroMesa = coletarMesa();

function quantidadePessoas() {
    let numeroPessoas;
    while (true) {
        numeroPessoas = parseInt(readlineSync.question('Digite o numero de pessoas na mesa: '));
        if (!isNaN(numeroPessoas) && numeroPessoas > 0) {
            break;
        }
        console.log(chalk.red('Por favor, insira um número válido de pessoas.'));
    }
        return numeroPessoas;
}

const numeroPessoas = quantidadePessoas();

function valorConta(){
    let totalConta;
    while (true) {
        totalConta = parseFloat(readlineSync.question('Digite o valor total da conta: R$ '));
        if (!isNaN(totalConta) && totalConta >= 0) {
            break;
        }
        console.log(chalk.red('Valor total não pode ser R$ 00,00 \nPor favor, insira um valor válido.'));  
    }
        return totalConta;
}

const totalConta = valorConta();

console.log(chalk.yellow.bold(`----------- ---------------------- -----------`));
console.log(``);
console.log(`Qual é o método de pagamento ?`);
const operacao = readlineSync.question(' 1. PIX.\n 2. Dinheiro\n 3. Cartao\n____ Opcao: ');

// ------------------------- Coletar forma de pagamento.

function valorPix(totalConta, numeroPessoas){
    const valor = totalConta * 0.90;
    console.log(`Pagamento em pix: ${valor.toFixed(2)}`);
    const resultado = (valor / numeroPessoas);
    console.log(`Divisao por pessoa: ${resultado.toFixed(2)}`)
    return resultado;
}

function valorDinheiro(totalConta, numeroPessoas){
    const valor = totalConta * 0.90;
    console.log(`Pagamento em dinheiro: ${valor.toFixed(2)}`);
    const resultado = (valor / numeroPessoas);
    console.log(`Divisao por pessoa: ${resultado.toFixed(2)}`)
    return resultado;
}

function valorCartao(totalConta, numeroPessoas){
    const valor = totalConta;   
    console.log(`Pagamento em cartao: ${valor.toFixed(2)}`);
    const resultado = (valor / numeroPessoas);
    console.log(`Divisao por pessoa: ${resultado.toFixed(2)}`)
    return resultado;
}

    console.log(`\n----------- ---------------------- -----------\n`);
    console.log(`Mesa: ${numeroMesa}`);
    console.log(`Número de Pessoas: ${numeroPessoas}`);
    console.log(`Valor Total da Conta: R$ ${totalConta.toFixed(2)}\n`);

    switch (operacao) {
        case '1':
            valorPix(totalConta, numeroPessoas);
            break;
        case '2':
            valorDinheiro(totalConta, numeroPessoas);
            break;
        case '3':
            valorCartao(totalConta, numeroPessoas);
            break;
        default:
            console.log(`Opcao invalida, tente novamente!`)
    }

    console.log(chalk.green.bold('Obrigado por utilizar o sistema de pagamento!'));