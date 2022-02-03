function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  const array = []
  let objeto = {}


  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    objeto.nome = nome.value
    objeto.sobrenome = sobrenome.value
    objeto.peso = peso.value
    objeto.altura= altura.value

    array.push(objeto)


      
    console.log(objeto)
    console.log(array)
  }
  
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
