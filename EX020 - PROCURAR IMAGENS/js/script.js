const btnPesquisar = document.querySelector("#btnPesquisar");
const inputPesquisar = document.querySelector("#inputPesquisar");
const btnMore = document.querySelector("#more");
const resultados = document.querySelector(".resultados");

inputPesquisar.focus();

inputPesquisar.addEventListener("input", () => {
    if (inputPesquisar.value === "") {
        btnPesquisar.disabled =  true;
        btnPesquisar.style.setProperty("cursor","not-allowed");
    } else {
        btnPesquisar.style.setProperty("cursor","pointer");
        btnPesquisar.disabled = false;
    }
})

btnPesquisar.addEventListener("click", () => {
    Pesquisar()
    btnMore.style.setProperty("display","inline");
})

btnMore.addEventListener("click", () => {
    ++page;
    Pesquisar();
})

var palavraChave = "";
var page = 1;
var accesKey = "";

async function Pesquisar() {
    if (navigator.onLine) {
        palavraChave = inputPesquisar.value;
        let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${palavraChave}$client_id${accesKey}`;
    
        let response = await fetch(URL);
        let dados = await response.json();
        console.log(dados);
    } else {
        console.log("Você está offline.");
    }
}