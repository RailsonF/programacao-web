const desconto = 0.1; // CRIANDO UMA VARIÁVEL QUE VAI SER CONSTANTE

//VARIÁVEIS
let produto = "Mousepad Star Wars"; //CRIANDO UMA VARIVÁVEL DO TIPO STRING
let valor_produto = 100;
let cod_produto = '8290385';

let produto2 = "Teclado Gamer";
let valor_produto2 = 500;

//CRIAÇÃO DO OBJETO
let produtc = { //a função de um objeto é agrupar valores parecisdos em um bloco de código
    codigo: '829844',
    nome: "Mousepad Star wars",
    valor: 100
}

let teclado = {
    codigo: '300339',
    nome: "Teclado mechanike pro",
    valor: 500
}

// PARA UTILIZAR O OBJETO DEVE-SE: NOME DO OBJETO.VALOR
produtc.valor // A SAÍDA DISSO SERÁ 100
produtc.nome
//CRIANDO A FUNÇÃO -- DECLARAÇÃO DA FUNÇÃO
function efetuar_Desconto(produtoParaDarDesconto) {
    let valor = produtoParaDarDesconto.valor; //CRIANDO UMA VARIÁVEL QUE VAI RECEBER APENAS O VALOR DO PRODUTO
    let valorDescontado = valor * desconto;  // CRIANDO UMA VARIÁVEL QUE VAI RECEBER O VALOR DO PRODUTO VEZES O VALOR DA CONST DESCONTO QUE DEFINIMOS NO INÍCIO DO CÓDIGO
    console.log(valor - valorDescontado) // VAI EXIBIR NA TELA O VALOR DO PRODUTO COM O DESCONTO APLICADO
}

//CRIAR UMA FUNÇÃO PARA ADICIONAR JUROS NOS VALORES DOS PRODUTOS QUE SERÃO COMPRADAS PARCELADOS.
//DE 1 A 10 PARCELAS NÃO TERÁ JUROS
// DE 11 A 12 PARCELAS TERÃO JUROS DE 0,002

function compraParcelada(produto, numPacelas) {
    const juros = 0.002;
    if (numPacelas <=12) {
        if (numPacelas <=10) {
            let valorParcelado = produto.valor / numPacelas
            console.log(valorParcelado)
        } else {
            let valorDoJuros = produto.valor * juros
            let valorProdutoComJuros = produto.valor + valorDoJuros
            let valorParcelado = valorProdutoComJuros / numPacelas
            console.log(valorParcelado)
        }
    } else {
        console.log("O número máximo de parcelas é 12")
    }
}
compraParcelada(teclado, 11)

efetuar_Desconto(produtc);
efetuar_Desconto(teclado);