const form = document.querySelector("#form");

console.log(resultado);



form.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  console.log(peso, altura)
});

function criarParagrafo(className) {
  const p = document.createElement("p");
  return p;
}
function setResultado(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = ''
  const p = criarParagrafo()


}

