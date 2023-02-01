var numeroPensado = parseInt(Math.random() * 101);
var tentativas = 1;


function sorteador() {


    if (tentativas <= 5) {
        inputValor = document.getElementById("valor");
        var numeroChutado = parseInt(inputValor.value);
        var resultado = document.getElementById("result");


        if (numeroChutado == numeroPensado) {
            document.getElementById("resultado").innerText = "Parabéns Você acertou o número pensado!"
            tentativas = 6;
        }
        else if (numeroChutado > numeroPensado) {
            document.getElementById("resultado").innerText = "Eu tinha pensado num numero menor.\n Tentativas restantes: " + (6 - tentativas);
        } else {
            document.getElementById("resultado").innerText = "Eu tinha pensado num numero maior.\n Tentativas restantes: " + (6 - tentativas);
        }

        tentativas++;
        console.log(tentativas)

    }
    else {
        document.getElementById("resultado").innerText = "Você perdeu!"
    }

}