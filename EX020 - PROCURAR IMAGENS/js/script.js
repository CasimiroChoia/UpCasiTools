const btnPesquisar = document.querySelector("#btnPesquisar");
const inputPesquisar = document.querySelector("#inputPesquisar");
const btnMore = document.querySelector("#more");
const resultadosImg = document.querySelector(".resultados");

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
var accesKey = "UD09GERKYlePE1G_WcPg9ok3IFS0Gfj8iU-Ejhav1Bc";

async function Pesquisar() {
    if (navigator.onLine) {
        console.log("Navegador Online")
        palavraChave = inputPesquisar.value;
        let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${palavraChave}$client_id=${accesKey}`;

        try {
            
            let response = await fetch(URL);
            let dados = await response.json();
            console.log(dados);
            let resultados = dados.results;
    
            resultados.map((resultado) => {
                const img = document.createElement("img");
                img.src = resultado.urls.small;
                img.setAttribute("title",`${resultado.user.name}`)
                const imageLink = document.createElement("a")
                imageLink.setAttribute("href", `${resultado.links.download}`) 
                imageLink.setAttribute("target","_blank") 
    
                imageLink.appendChild(img)
                resultadosImg.appendChild(imageLink)
            })
        
        } catch (error) {
            console.log( error.name + " => " + error.message );
        }
    } else {
        console.log("Você está offline.");
    }
}