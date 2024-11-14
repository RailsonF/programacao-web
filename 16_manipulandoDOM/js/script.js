//SEMPRE QUE FOR UTILIZAR AS FUNÇÕES DE SELECIONAR ELEMENTOS NO DOM, PRECISA UTILIZAR O DOCUMENT.
let hello = document.getElementById("hello")
hello.innerText = "Oi Michely"
//RETORNA UM HTMLCollection, SIMILAR A UM ARRAY, PRECISO PASSAR UMA POSIÇÃO PARA CAPTURAR O VALOR
let num = document.getElementsByClassName("num")
console.log(num[1].innerText)
//let valorUm = num[0].innerText
//let valorDoois = num[1].innerText

let heading = document.getElementById("H4")
//Sempre retorna um único valor (o primeiro que ele encontrar   )
let headingComplex = document.querySelector(".header div h1")
//SEMPRE VAI RETORNAR O HTMLCollection/NodeList (Como array)
let headingComplexDois = document.querySelectorAll("h1")

numDois.innerText = "44"
numDois