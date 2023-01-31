function conversor() {
  var kelvin = 273.15;
  var temperatura = 0;
  var fahrenheit = 32;

  selectTemperatura = document.getElementById("select-temperatura");
  selectTemperatura2 = document.getElementById("select-temperatura2");

  inputValor = document.getElementById("valor");

  temperatura1 = selectTemperatura.value;
  temperatura2 = selectTemperatura2.value;
  var valor = inputValor.value;

  if (temperatura1 == "celsius" && temperatura2 == "kelvin") {
    temperatura = (kelvin + Number(valor)).toFixed(2);
  }

  if (temperatura1 == "celsius" && temperatura2 == "fahrenheit") {
    temperatura = (1.8 * Number(valor) + fahrenheit).toFixed(2);
  }

  if (temperatura1 == "kelvin" && temperatura2 == "fahrenheit") {
    temperatura = (Number(valor) - 273 * 1.8 + 32).toFixed(2);
  }

  if (temperatura1 == "kelvin" && temperatura2 == "celsius") {
    temperatura = (Number(valor) - 273).toFixed(2);
  }

  if (temperatura1 == "fahrenheit" && temperatura2 == "celsius") {
    temperatura = ((Number(valor) - 32) / 1.8).toFixed(2);
  }

  if (temperatura1 == "fahrenheit" && temperatura2 == "kelvin") {
    temperatura = ((Number(valor) - 32) * (5 / 9) + 273).toFixed(2);
  }

  document.getElementById("resultado").innerText =
    "A conversão de " +
    temperatura1 +
    " para " +
    temperatura2 +
    " é " +
    temperatura;
}