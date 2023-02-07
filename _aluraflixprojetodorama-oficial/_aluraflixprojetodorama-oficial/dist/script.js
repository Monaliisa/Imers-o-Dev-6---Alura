var listaNomeFilmes = [
  "Vicenzo",
  "Pousando no Amor",
  "Tudo bem Não ser Normal",
  "Trinta e nove"
];

var listaUrlImagens = [
  "https://upload.wikimedia.org/wikipedia/en/5/5b/Vincenzo_TV_series.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/f/fe/Crash_Landing_on_You_poster.jpg",
  "https://image.tmdb.org/t/p/w500/8yLqWlFSLMucnotlXFC8SHkfNTj.jpg",
  "https://br.web.img3.acsta.net/pictures/22/03/24/20/58/1034447.jpg"
];

function atualizarTela() {
  document.body.innerHTML +=
    "<div class='filmes'><img src=" +
    listaUrlImagens.at(-1) +
    ">" +
    "<p style='color: #ffffff;'>" +
    listaNomeFilmes.at(-1) +
    "</p></div>";
}

function mostraImagens() {
  var i = 0;
  while (i < listaUrlImagens.length) {
    if (
      listaUrlImagens[i].endsWith(".jpg") ||
      listaUrlImagens[i].endsWith("jpeg") ||
      listaUrlImagens[i].endsWith("png")
    ) {
      document.body.innerHTML +=
        "<div class='filmes' id='" +
        [i] +
        "'>" +
        "<img src=" +
        listaUrlImagens[i] +
        ">" +
        "<p style='color: #ffffff;'>" +
        listaNomeFilmes[i] +
        "</p></div>";
    } else {
      document.write("O poster não pode ser inserido");
    }
    i++;
  }
}

function adicionarFilme() {
  inputName = document.getElementById("name");
  inputUrl = document.getElementById("urlImage");

  name = inputName.value;
  url = inputUrl.value;

  if (listaNomeFilmes.includes(name)) {
    alert("Opa, esse filme já está na lista!");
  } else {
    listaNomeFilmes.push(name);
    listaUrlImagens.push(url);

    console.log(listaNomeFilmes);
    console.log(listaUrlImagens);

    atualizarTela();
  }
}

function removerDorama() {
  var nomeRemover = document.getElementById("remover").value;

  if (listaNomeFilmes.includes(nomeRemover)) {
    var index = listaNomeFilmes.indexOf(nomeRemover);
    listaNomeFilmes.splice(index, 1);
    listaUrlImagens.splice(index, 1);
    console.log(listaNomeFilmes);
    console.log(listaUrlImagens);
    var imagemADeletar = document.getElementById(index);
    imagemADeletar.remove();
  } else {
    alert("Dorama não encontrado!");
  }
}

mostraImagens();