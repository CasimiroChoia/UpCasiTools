

        myKey = "39552826-52f3dd4ea678b7fb380ddf3d4";
        q = document.querySelector("#inputPesquisar");
        idioma = "pt";
        orientacao = "";
        tipoImagem = "photo";
        pagina = 1;
        if (window.innerWidth < 481) orientacao = "vertical";
        else orientacao = "horizontal";

        q.focus();      //AO INICIALIZAR O DOCUMENTO O INPUT GANHA FOCO
        btnMonstrarMais = document.querySelector("#more");
        btnPesquisar = document.querySelector("#btnPesquisar");
        sectionResultados = document.querySelector("section.resultados");

        async function getImages() {        //ESTA FUNÇÃO É RESPONSALVEL DA COLOCAR AS IMAGENS NA TELA
            if (!navigator.onLine) return alert("Você se encontra offline.");       //VERIFICA SE OS TEUS DADOS ESTÃO LIGADOS
            // alert("já")
            let q2 = q.value.split(" ").join("+");
            let url = `https://pixabay.com/api/?key=${myKey}&q=${q2}&image_type=${tipoImagem}&page=${pagina}&orientation=${orientacao}`;
            try {
                response = await fetch(url);  //VAI EXERCER UMA REQUISIÇÃO DO TIPO GET
                // console.log(response);
                if(response.status !== 200) {       //CASO ACONTECER ALGO COM O SERVIDOR
                    alert("aconteceu um erro inesperado");
                    encontrados.innerText = `ACONTECEU UM ERRO COM O SERVIDOR.`;    //SE FOR VERDADE VAI ESCREVER ESTA MENSAGEM NA TELA
                } else {
                    data = await response.json();   //CONVERTENDO A RESPOSTA PARA JSON
                    console.log(data);  //VAI MONSTRAR NO CONSOLE
                    if (data.totalHits === 0) { //VAI VERIFICAR SE O NÚMERO DE IMAGENS É IGUAL A ZERO
                        encontrados.innerText = `não hà resultados para essa pesquisa.`;    //SE FOR VERDADE VAI ESCREVER ESTA MENSAGEM NA TELA
                        return alert("sem resultado para essa pesquisa.")                   // E VAI RETORNAR UMA MENSAGEM NA TELA
                    }
                    encontrados.innerText = `foram encontradas ${data.totalHits} imagens.`                        
                    let lista = data.hits;
                    lista.forEach((valor,index,array) => {      //PARA CADA ITEM DA LISTA
                        let item = array[index];
                        let img = document.createElement("img");
                        img.setAttribute("src",item["previewURL"]);
                        img.setAttribute("title", `${q.value}[${index}]` );
                        
                        let a = document.createElement("a");
                        a.setAttribute("src",item["pageURL"]);
                        a.appendChild(img)
                        
                        div = document.createElement("div");
                        div.appendChild(a)
                        
                        sectionResultados.appendChild(div)
                    });
                    setInterval(() => {     //DAQUI A UM MINUTO VAI MONSTRAR O BOTÃO DE MAIS IMAGENS
                        btnMonstrarMais.style.setProperty("display","inline")
                    }, 1 * 1000)
                }
            } catch (e) {
                console.log(e.name + " => " + e.message);
            }
        }

        // q.addEventListener("input", () => {
        //     // alert("aaa")
        // })
        btnMonstrarMais.addEventListener("click",() => {
            ++pagina;
            getImages()
        })
        btnPesquisar.addEventListener("click",() => {
	    pagina = 1;
            document.querySelectorAll("section.resultados > *").forEach((valor,index,array) => { //VAI APAGAR TODOS OS ITENS JÁ PESQUISADOS
                array[index].remove()       //REMOVENDO
            });
            getImages() //EXECUTA ESTA FUNÇÃO
        }, false)

        q.addEventListener("keypress",() => {
            if (event.key == "Enter") { //SE O USUARIO CLICAR NO BOTÃO DE ENTER DENTRO DO INPUT EXECUTA ESTA AÇÃO
                document.querySelectorAll("section.resultados > *").forEach((valor,index,array) => {
                    array[index].remove()
                });
                getImages()
            }
            if(q.value == "") {
                btnPesquisar.style.setProperty("cursor","not-allowed")
                btnPesquisar.disabled = "true"
            } else {
                btnPesquisar.style.setProperty("cursor","pointer")
                btnPesquisar.disabled = "false"
            }
        })