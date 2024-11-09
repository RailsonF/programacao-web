const desconto = 0.01;
const juros = 0.002;

let product1 = {
    dsc_nome: "Teclado gamer Mechanike Pro",
    cod_produto: '123456',
    product_valor: 500
}

let product2 = {
    dsc_nome: "Mouse Atack Shark 11",
    cod_produto: '456789',
    product_valor: 300
}

function CalcularCompra(produto, numParcelas) {
    if (numParcelas <= 12) {
        if (numParcelas <= 10) {
            if (numParcelas = 0) {
                let valor = produto; //CRIANDO UMA VARIÁVEL QUE VAI RECEBER APENAS O VALOR DO PRODUTO
                let valorDescontado = valor * desconto;  // CRIANDO UMA VARIÁVEL QUE VAI RECEBER O VALOR DO PRODUTO VEZES O VALOR DA CONST DESCONTO QUE DEFINIMOS NO INÍCIO DO CÓDIGO
                console.log(valor - valorDescontado) // VAI EXIBIR NA TELA O VALOR DO PRODUTO COM O DESCONTO APLICADO
            } else {
                let valorParcelado = produto.valor / numPacelas
                console.log(valorParcelado)
            }

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
CalcularCompra(produc)