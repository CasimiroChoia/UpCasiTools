
            window.onload = function() {
                
                
                if (navigator.vendor !== "Google Inc.") {
                    alert("Este site não suporta o navegador actual.  Iremos direcioná-lo para a pagina de download do Google Chrome")
                    
                    window.location.href = "https://google-chrome.br.uptodown.com/windows/download"
                }
                
                open_music = document.createElement("audio")
                open_music.setAttribute("src","entrada.mp3")
                open_music.setAttribute("type","mpeg")
                // open_music.play()

                r = Math.floor(Math.random()*255)
                g = Math.floor(Math.random()*255)
                b = Math.floor(Math.random()*255)
                a = (Math.random()*1).toFixed(2)
                document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`

                for (let cadaElemento of document.querySelectorAll("body *")) {
                    cadaElemento.setAttribute("draggable","false")
                }

            }


            function tocar() {
                open_music.play()
            }

            function pausar() {
                open_music.pause()
            }
