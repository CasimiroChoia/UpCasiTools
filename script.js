
            window.onload = () => {
                
                
                if (navigator.vendor !== "Google Inc.") { //VERIFICANDO SE ESTÁ A USAR GOOGLE CHROME
                    alert("Este site não suporta o navegador actual.  Iremos direcioná-lo para a pagina de download do Google Chrome")
                    
                    window.location.href = "https://google-chrome.br.uptodown.com/windows/download"
                }
                
                open_music = document.createElement("audio")
                open_music.setAttribute("src","entrada.mp3")
                open_music.setAttribute("type","mpeg")
                // open_music.play()

                function setBackground_Color() {
                    //      ALEATORIZANDO BACKGROUND-COLOR
                    r = Math.floor(Math.random()*255)
                    g = Math.floor(Math.random()*255)
                    b = Math.floor(Math.random()*255)
                    a = (Math.random()*1).toFixed(2)
                    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`
                }

                function setDraggaable_False() {
                    for (let cadaElemento of document.querySelectorAll("body *")) {
                        cadaElemento.setAttribute("draggable","false")
                    }
                }
                
                setBackground_Color()
                setDraggaable_False()
            }

            document.body.addEventListener("contextmenu", cancelarClickDireito)

            function cancelarClickDireito(evt) {        // BLOQUEANDO CLICK DIREITO
                jarvis("o site cancelou a execução do click direito para te empedir de ver o código.")
                evt.preventDefault()
            }

            function jarvis(voz) { // FUNÇÃO DE FALA
                window.speechSynthesis.cancel();
                objInteracao = new SpeechSynthesisUtterance(voz);
                window.speechSynthesis.speak(objInteracao);
            }

            function tocar() {
                open_music.play()
            }

            function pausar() {
                open_music.pause()
            }
