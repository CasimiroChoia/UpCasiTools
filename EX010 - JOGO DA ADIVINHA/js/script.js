
            let adicionar =         document.querySelector("#adicionar")
            let baralhar =          document.querySelector("#baralhar")
            let saida =             document.querySelector("#saida")
            let entrada =           document.querySelector("#entrada")
            let sticker =           document.getElementById("sticker")
            // Math.floor(Math.random()) 

            document.querySelector('body').addEventListener("contextmenu",function(evt) {
                // jarvis("ação bloqueada pelo site.")
                jarvis("o site cancelou a execução do click direito para te empedir de ver o código.")
                evt.preventDefault()
            })
            
            function jarvis(voz) {
                window.speechSynthesis.cancel();
                objInteracao = new SpeechSynthesisUtterance(voz);
                window.speechSynthesis.speak(objInteracao);
            }

            let lista_feliz = ["img/stickers/h1.webp","img/stickers/h2.webp","img/stickers/h3.webp","img/stickers/h4.webp"]
            let lista_triste = ["img/stickers/s1.webp","img/stickers/s2.webp","img/stickers/s3.jpg","img/stickers/s4.webp"]

            window.onload = function() {
                // alert("aleatorizar número.")
                aleatorio = Math.floor(Math.random() * 100) + 1
            }

            function verificar() {

                if ( Number(entrada.value) > 100 || Number(entrada.value) < 0) {
                    return alert("Entrada inválida.")
                }

                valor_obtido = Number(entrada.value)

                sad = (lista_triste[Math.floor(Math.random() * lista_triste.length)])
                happy = (lista_feliz[Math.floor(Math.random() *lista_feliz.length)])
                
                if ( valor_obtido === aleatorio ) {         // CLAUSULA SE ACERTOU
                    
                    saida.innerHTML = ` parabéns você acertou, ele estava pensando no nº ${aleatorio}. `
                    sticker.src = happy
                    document.querySelector("#ti-kapecula").style = "animation: none;"
                    
                } else if ( valor_obtido < aleatorio ) {    // CLAUSULA SE FOR MENOR
                    
                    saida.innerHTML = ` infelizmente você ERROU o nº que o BBCT está á pensar é maior. `
                    sticker.src = sad
                    document.querySelector("#ti-kapecula").style = "animation: agita-agita-abana-abana .2s ease-in-out 1s alternate infinite;"
                    
                } else {                                    // CLAUSULA SE FOR MAIOR
                    
                    saida.innerHTML = ` infelizmente você ERROU o nº que o BBCT está á pensar é menor. `
                    sticker.src = sad
                    document.querySelector("#ti-kapecula").style = "animation: agita-agita-abana-abana .2s ease-in-out 1s alternate infinite;"
                    
                }
                
                if (window.innerWidth>450) {
                    entrada.focus()
                }
            }

            adicionar.addEventListener("click", verificar)
            entrada.addEventListener("keydown", function() {
                if (event.key === "Enter") {
                    verificar()
                }
            })

            baralhar.addEventListener("click", function() {
                aleatorio = Math.floor(Math.random() * 100) + 1
                saida.innerHTML = "adivine..."
                sticker.src = ""
                document.querySelector("#ti-kapecula").style = "animation: none;"
            })



            function showDados() {
                alert(`largura:${window.outerWidth}\nAltura: ${window.outerHeight}`)   
            }