var titulo = "Contador Contábil"; // o título que será escrito
  var subtitulo = "O contador contábil é responsável pela organização e análise das finanças de uma empresa, garantindo a legalidade e transparência das contas."; // o subtítulo que será escrito
  var tempo = 50; // o tempo em milissegundos entre cada letra

  escreverTitulo(titulo, 0, tempo);
  escreverSubtitulo(subtitulo, 0, tempo);

  // a função que escreve o título letra por letra com fade-in
  function escreverTitulo(titulo, indice, tempo) {
    if (indice < titulo.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("titulo").innerHTML += "<span class='fade-in'>" + titulo.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverTitulo(titulo, indice + 1, tempo);
      }, tempo);
    }
  }
// a função que escreve o subtítulo letra por letra com fade-in
function escreverSubtitulo(subtitulo, indice, tempo) {
    if (indice < subtitulo.length) {
      // escreve a próxima letra e adiciona a classe de fade-in
      document.getElementById("subtitulo").innerHTML += "<span class='fade-in'>" + subtitulo.charAt(indice) + "</span>";
      // chama a função novamente após o tempo definido
      setTimeout(function() {
        escreverSubtitulo(subtitulo, indice + 1, tempo);
      }, tempo);
    }
  }