var jogadores = [];
var conteudoTabela = document.getElementById("tabelaJogadores");

function exibirTabela() {
  conteudoTabela.innerHTML = "";
  for (var i = 0; i < jogadores.length; i++) {
    var jogador = jogadores[i];
    conteudoTabela.innerHTML += `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="empate()">Empate</button></td>
            <td><button onClick="derrota()">Derrota</button></td>
            <td><button onClick="apagarJogador()(${i})">Apagar Jogador</button></td>
          </tr>
    `;
  }
}

function adicionarJogador(jogador) {
  nomeJogador = document.getElementById("input-jogador").value;
  jogadores.push({
    nome: nomeJogador,
    empate: 0,
    derrota: 0,
    pontos: 0,
    vitoria: 0
  });
  exibirTabela();
}

function adicionarVitoria(index) {
  // Adiciona pontos em quem venceu
  jogador = jogadores[index];
  jogador.vitoria++;

  //Adicionando pontuação
  jogador.pontos = jogador.pontos + 3;

  //Adiciona derrotas nos outros!
  var i = 0;
  while (i < jogadores.length) {
    if (i != index) {
      jogadores[i].derrota++;
    }
    i++;
  }

  exibirTabela();
}

function derrota() {
  alert("As derrotas são calculadas automaticamente!");
}

function empate() {
  jogadores.forEach(function (jogador) {
    jogador.empate++;
    jogador.pontos++;
  });
  exibirTabela();
}

function apagarJogador(index) {
  jogadores.splice(index, 1);
  exibirTabela();
}
/*class Jogador {
  constructor(nome, vitoria, empate, derrota, pontos) {
    this.nome = nome;
    this.vitoria = vitoria;
    this.empate = empate;
    this.derrota = derrota;
    this.pontos = pontos;
  }
}
*/
