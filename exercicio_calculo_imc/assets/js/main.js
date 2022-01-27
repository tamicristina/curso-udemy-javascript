var form = document.querySelector('#form')
var resultado = document.querySelector('#resultado')
console.log(resultado)

addEventListener('submit', function(e){
    e.preventDefault()
    console.log('evento cancelado')

    setResultado('olá')
})

function setResultado (msg){
resultado.innerHTML = ''
}

function criarParagrafo(){
    const p = document.createElement('p')
    p.classList = ('paragrafo-resultado')
    resultado.appendChild(p)
}