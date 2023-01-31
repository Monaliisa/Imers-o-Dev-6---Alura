function conversor() {
  var cotacaoDoDolar = 5.09;
  var cotacaoDoEuro = 5.54;
  var cotacaoDoWon = 0.0042;

  var valorEmReal = 0;

  selectMoeda = document.getElementById("select-moeda");
  inputValor = document.getElementById("valor");

  moeda = selectMoeda.value;
  valor = inputValor.value;

  if (moeda == "dolar") {
    valorEmReal = (cotacaoDoDolar * valor).toFixed(2);
  }

  if (moeda == "euro") {
    valorEmReal = (cotacaoDoEuro * valor).toFixed(2);
  }

  if (moeda == "won") {
    valorEmReal = (cotacaoDoWon * valor).toFixed(2);
  }

  document.getElementById("resultado").innerText =
    "A conversão de " + moeda + " para real é: R$" + valorEmReal;
}
