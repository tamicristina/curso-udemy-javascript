function meuEscopo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')
  const pessoas = []
  let objeto = {}


  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    const resultado = document.querySelector('.resultado')

    

    pessoas.push({
      nome:nome.value,
      sobrenome:sobrenome.value,
      peso:peso.value,
      altura:altura.value,
    })



    //Adicionar o retorno do array dentro da div de resultado
      
    console.log(objeto)
    console.log(pessoas)

    resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`

  }
  
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
