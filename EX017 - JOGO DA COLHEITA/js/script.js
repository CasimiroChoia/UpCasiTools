


        telaInicial = document.getElementById("telaInicial")
        containerGame = document.querySelector(".containerGame")
        root = document.querySelector(":root")
        btnJogar = document.getElementById("jogar")
        btnSair = document.getElementById("sair")
        caidaDuracao = 10

        valorInicial = 0
        pontos = document.querySelector(".pontos")

        window.onload = (e) => {

            telaInicial.showModal()

        }

        btnJogar.addEventListener("click", () => {
            telaInicial.close()
        })
        
        
        velocidade = 1 
        btnJogar.addEventListener("click", () => {
            backgroundBody = setInterval(() => {
                aleatorio = Math.floor((Math.random() * 24 )) + 1
                document.body.style.setProperty("background",`url(img/${aleatorio}.png)`)
                document.body.style.setProperty("background-size",`100px`)
            }, 1000);
    
            aparecendo = setInterval(() => {
                criandoAlimentos(caidaDuracao)
            }, velocidade * 1400)
    
            aparecendoLixo = setInterval(() => {
                criandoLixo(caidaDuracao)
            }, velocidade * 800)

            if (window.innerWidth <= 550) {
                clearInterval(backgroundBody)
            }
        })

        function criandoLixo(caidaDuracao) {
            var posicaoHorizontal = Math.floor(Math.random() * containerGame.clientWidth) - 10;
            if (posicaoHorizontal >= 450 && posicaoHorizontal <= 500) posicaoHorizontal -= 37
            var posicaoVertical = containerGame.clientHeight + 200;
            var limite = -150;

            aleatorio = Math.floor((Math.random() * 3 )) + 1
            cumida = document.createElement("img")
            cumida.classList.add("cumida")
            cumida.classList.add("img")
            containerGame.insertAdjacentElement("afterbegin",cumida)
            cumida.setAttribute("src",`img/e${aleatorio}.png`)
            cumida.setAttribute("ontransitionend",`alert("")`)
            cumida.setAttribute("draggable","false")
            cumida.style.setProperty("--posicaoHorizontal",`${posicaoHorizontal}px`)            
            cumida.style.setProperty("--posicaoVertical",`${posicaoVertical}px`)            
            cumida.style.setProperty("--limite",`${limite}px`)    
            cumida.style.setProperty("--caidaDuracao",`${caidaDuracao}s`)      
            cumida.setAttribute("onclick","perdeu(this)")  
        }

        function criandoAlimentos(caidaDuracao) {
            var posicaoHorizontal = Math.floor(Math.random() * containerGame.clientWidth) - 10;
            if (posicaoHorizontal >= 450 && posicaoHorizontal <= 500) posicaoHorizontal -= 37
            var posicaoVertical = containerGame.clientHeight + 200;
            var limite = -150;

            aleatorio = Math.floor((Math.random() * 24 )) + 1
            cumida = document.createElement("img")
            cumida.classList.add("cumida")
            cumida.classList.add("img")
            containerGame.insertAdjacentElement("afterbegin",cumida)
            cumida.setAttribute("src",`img/${aleatorio}.png`)
            cumida.setAttribute("ontransitionend",`alert("")`)
            cumida.setAttribute("draggable","false")
            cumida.style.setProperty("--posicaoHorizontal",`${posicaoHorizontal}px`)            
            cumida.style.setProperty("--posicaoVertical",`${posicaoVertical}px`)            
            cumida.style.setProperty("--limite",`${limite}px`)    
            cumida.style.setProperty("--caidaDuracao",`${caidaDuracao}s`)      
            cumida.setAttribute("onclick","removerEPontuar(this)")  
        }

        function perdeu(objecto) {
            objecto.remove()
            telaInicial.showModal();
            telaInicial.style.background = "rgb(253, 155, 155)"
            document.querySelector("#telaInicial h1").innerHTML = "você perdeu.";
            document.querySelector("#telaInicial p").innerHTML = "você clicou em algo que não se come.";
            clearInterval(aparecendoLixo)
            clearInterval(aparecendo)
            document.querySelector(".containerGame *").remove()
            valorInicial = 0
            pontos.innerHTML = `${valorInicial}`;
        }

        function removerEPontuar(own) {
            own.remove();
            ++valorInicial;
            
            if (valorInicial >= 50 && valorInicial <= 99) {
                pontos.style = "color:blue;";
            } else if (valorInicial >= 100 && valorInicial <= 149) {
                pontos.style = "color:green;";
            } else if (valorInicial >= 150 && valorInicial <= 199) {
                pontos.style = "color:darkred;";
            } else if (valorInicial >= 200) {
                pontos.style = "color:red;";
            }

            if (caidaDuracao > 2.5 ) caidaDuracao -= 0.06;
            pontos.innerHTML = `${valorInicial}`;
        }

        document.querySelector('body').addEventListener("contextmenu",function(evt) {
            jarvis("Menù Bloqueado.")
            evt.preventDefault()
        })