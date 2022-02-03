
function meuEscopo() {
  const form = document.querySelector(".form");

  function recebeEventoForm(evento) {
    evento.preventDefault();  
  }
  
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
