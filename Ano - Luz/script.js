function conversor() {
  var anosLuz = 9460800000000;

  inputValor = document.getElementById("valor");
  var valor = inputValor.value;

  var distanciaEmQuilometros = valor * anosLuz;

  document.getElementById("resultado").innerText =
    "A conversão de km em anoLuz é " + distanciaEmQuilometros;
}