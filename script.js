
            window.onload = () => {
                if (navigator.vendor !== "Google Inc." && window.innerWidth >= 400) { //VERIFICANDO SE ESTÁ A USAR GOOGLE CHROME
                    alert("Este site não suporta o navegador actual.  Iremos direcioná-lo para a pagina de download do Google Chrome");
                    window.location.href = "https://google-chrome.br.uptodown.com/windows/download";
                }
                
                open_music = document.createElement("audio");
                open_music.volume = 0.5;
                open_music.setAttribute("src","entrada.mp3");
                open_music.setAttribute("type","mpeg");
                // open_music.play()
                
                // setBackground_Color()
                setDraggaable_False();

                // put icon
                if (!document.body.getAttribute("class").includes("darkMode")) {
                    btnFundoModo.children[0].setAttribute("src","img/lightModes/night.ico");
                } else {
                    btnFundoModo.children[0].setAttribute("src","img/lightModes/light.ico");
                }

            }
            
            function tocar() {
                open_music.play();
            }
            
            function pausar() {
                open_music.pause();
            }
            function setBackground_Color() {
                //      ALEATORIZANDO BACKGROUND-COLOR
                r = Math.floor(Math.random()*255);
                g = Math.floor(Math.random()*255);
                b = Math.floor(Math.random()*255);
                a = (Math.random()*1).toFixed(2);
                document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
                document.body.style.backgroundColor = `rgb(146, 138, 124)`;
                document.body.style.backgroundColor = `rgb(211, 188, 118)`;
            }

            function setDraggaable_False() {
                for (let cadaElemento of document.querySelectorAll("body *")) {
                    cadaElemento.setAttribute("draggable","false");
                }
            }


            //  fundo ligth mode toggle
            var btnFundoModo = document.querySelector("#fundoModo");

            btnFundoModo.addEventListener("click", mudarCorDeFundo, false);

            if (localStorage.fundoModoKey == undefined){
                localStorage.fundoModoKey = document.getElementsByTagName("body")[0].getAttribute("class")
            } else {
                document.querySelector("body").setAttribute("class", localStorage.fundoModoKey)
            }
            function mudarCorDeFundo() {
                document.getElementsByTagName("body")[0].classList.toggle("darkMode")
                localStorage.fundoModoKey = document.getElementsByTagName("body")[0].getAttribute("class")
                
                if (!document.body.getAttribute("class").includes("darkMode")) {
                    btnFundoModo.children[0].style = "rotate: -360deg;transintion:0.5;";
                    btnFundoModo.children[0].setAttribute("src","img/lightModes/night.ico");
                } else {
                    btnFundoModo.children[0].style = "rotate: 0deg;transintion:0.5;";
                    btnFundoModo.children[0].setAttribute("src","img/lightModes/light.ico");
                }
            }