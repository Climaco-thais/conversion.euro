alert("Olá, tudo bem?")

var valorEmEuroTexto = prompt("Qual valor em Euro você quer converter? Escreva em R$") 

var valorEmEuroNumero = parseFloat(valorEmEuroTexto)

var valorEmReal = valorEmEuroNumero * 6.71
var valorEmRealFixado = valorEmReal.toFixed(2)

var Resultado = "Aqui está seu valor convertido em Euro:"
var ResultadoOperacao = valorEmRealFixado
alert(Resultado)
alert(ResultadoOperacao)

// revisão 
// variáveis var int - float - string