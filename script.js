function substituiTexto() {
    let texto = document.getElementById("texto").value;
    let buscaTexto = document.getElementById("busca").value;
    let substituiTexto = document.getElementById("substitui").value;
    let busca = texto.includes(buscaTexto);
    let divResultado = document.querySelector(".resultado");

    if (busca == false) {
        divResultado.innerHTML = `<p>Palavra ${buscaTexto} não encontrada!</p>`;
    } else {
        divResultado.innerHTML = texto.replace(buscaTexto, substituiTexto);
    }
}