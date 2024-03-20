            //@author Casimiro Choia


            //#region Seccção de declaração de variaveis 
            const vlJogada = document.querySelector("#jogada");                 // 1º tag de select que tem o valor do cocumento que regista a jogada
            const limite = document.querySelector("#limite");                   // 2º tag de select que tem o valor do cocumento que difine o limite de pontos
            const lblLoad  = document.querySelector("#load");                   // zona do documento que monstra quem venceu e perdeu
            const btnRepetir  = document.querySelector("#repetir");             // botão que que reinicia as definições do jogo
            const txtpcPontos = document.querySelector(".pc_pontos");           // tag que montra a tua pontuação
            const txtEuPontos = document.querySelector(".meus_pontos");         // tag que montra a pontuação do PC
            const audioAplausos = document.querySelector("#aplausos")
            const audioPerdeu = document.querySelector("#perdeu")
            audioPerdeu.volume = 0.1
            audioAplausos.volume = 0.1
            var numpcPontos = 0, numEuPontos = 0
            document.querySelectorAll(".pontos")[0].style = "font-size: 35px;"
            document.querySelectorAll(".pontos")[1].style = "font-size: 35px;"
            var pedra       = "img/ped1.png"                                    // ligação para a img da pedra
            var papel       = "img/pap1.png"                                    // ligação para a img da papel
            var tesoura     = "img/tes1.png"                                    // ligação para a img da tesoura
            var imgPadrao   = "../favicon.png"                                  // ligação para a img da inicial       
            var pc_opcoes = ["pedra","papel","tesoura"]                         // variavel que guarda os valores que o pc escolherá no game
            // var data = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()} `
            //#endregion
            
            document.querySelector('body').addEventListener("contextmenu",function(evt) {
                jarvis("Menù Bloqueado.")
                evt.preventDefault()
            })
            
		historico = `=========================\n========HISTORICO==========\n===== ${timer()} =======\n=========================\n`

	    function timer() {
		horas = new Date().getHours(), minutos = new Date().getMinutes(), segundos = new Date().getSeconds()  // obter as  horas, minutos e segundos
                if (horas.toString().length < 2) horas = "0" + horas
                if (minutos.toString().length < 2) minutos = "0" + minutos
                if (segundos.toString().length < 2) segundos = "0" + segundos
                //historico = `=========================\n========HISTORICO==========\n===== ${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}-${horas}:${minutos} =======\n=========================\n`
		return `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}-${horas}:${minutos}`
	    }


            //#region função responsável para alterar imagens
            function alterarImagem() { 
                if (vlJogada.value === "pedra") {           // se a tua jogada for pedra
                    document.querySelector("img#img-jogador").src = pedra   // trocando imagem
                } else if (vlJogada.value === "papel") {    // se a tua jogada for papel
                    document.querySelector("img#img-jogador").src = papel   // trocando imagem
                } else if (vlJogada.value === "tesoura") {  // se a tua jogada for tesoura
                    document.querySelector("img#img-jogador").src = tesoura // trocando imagem
                }
            }
            //#endregion

            function verificarLimite() {
                valor = Number(limite.value)
                
                if (valor === 10) {
                    if ( numEuPontos >= 10 && numpcPontos < numEuPontos ) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 10 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                } else if (valor === 20 ) {
                    if (numEuPontos >= 20 && numpcPontos < numEuPontos) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 20 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                } else if (valor === 30 ) {
                    if (numEuPontos >= 30 && numpcPontos < numEuPontos) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 30 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                
                } else if (valor === 40) {
                    if ( numEuPontos >= 40 && numpcPontos < numEuPontos ) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 40 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                } else if (valor === 50 ) {
                    if (numEuPontos >= 50 && numpcPontos < numEuPontos) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 50 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                } else if (valor === 100 ) {
                    if (numEuPontos >= 100 && numpcPontos < numEuPontos) {
                        audioAplausos.play()
                        falar("Você Ganhou o Jogo com " + numEuPontos + " Pontos. ");
                        alert("Você Ganhou o Jogo com " + numEuPontos + " Pontos 👏🏽👏🏽👏🏽. ");
                        repetir();
                    } else if ( numpcPontos >= 100 && numpcPontos > numEuPontos ) {
                        audioPerdeu.play()
                        falar("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        alert("O seu Dispositivo ganhou o Jogo com " + numpcPontos + " Pontos 💻🎮!!!")
                        repetir()
                    }
                
                }


            }

            function mudarCores() {
    
                if (numEuPontos < numpcPontos) {
                    txtEuPontos.style = "color:red; font-size: 35px;"
                    txtpcPontos.style = "color:green; font-size: 35px;"
                    document.querySelector("#duelo .img:nth-child(1)").style = "border-right: 15px solid red;"
                    document.querySelector("#duelo .img:nth-child(2)").style = "border-left: 15px solid green;"
                } else if (numEuPontos > numpcPontos) {
                    txtEuPontos.style = "color:green; font-size: 35px;"
                    txtpcPontos.style = "color:red; font-size: 35px;"
                    document.querySelector("#duelo .img:nth-child(1)").style = "border-right: 15px solid green;"
                    document.querySelector("#duelo .img:nth-child(2)").style = "border-left: 15px solid red;"
                } else {
                    txtEuPontos.style = "color:blue; font-size: 35px;"
                    txtpcPontos.style = "color:blue; font-size: 35px;"
                    document.querySelector("#duelo .img:nth-child(1)").style = "border-right: 15px solid blue;"
                    document.querySelector("#duelo .img:nth-child(2)").style = "border-left: 15px solid blue;"
                }
            }

            function game() {
                try {

                    jogada = vlJogada.value
                    pc = pc_opcoes[Math.floor(Math.random() * pc_opcoes.length)]
                    if (jogada === "nenhum selecionado" ) {
                        falar("Faça uma jogada antes de clicar no botão de jogar")
                        return alert("Faça uma jogada antes de clicar no botão de jogar.")
                    } 

                    if ( pc === "pedra" ) {
                        document.querySelector("img#img-adversario").src = pedra
                        if (jogada === "pedra") {
                            lblLoad.innerHTML = "empate!😴👀";
                            falar("empate")
                        } else if ( jogada === "papel" ) {
                            lblLoad.innerHTML = "você ganhou🏆🥇💛!!!"
                            falar(lblLoad.innerHTML)
                            // audioAplausos.play()
                            numEuPontos++
                            historico += "\n    Você pontuou " + numEuPontos + " Pontos."
                        } else if ( jogada === "tesoura" ) {
                            lblLoad.innerHTML = "você perdeu😈💩!!!";
                            falar(lblLoad.innerHTML)
                            // audioPredeu.play()
                            numpcPontos++
                            historico += "\n    Seu Dispositivo pontuou " + numpcPontos + " Pontos"
                        }
                    } else if ( pc === "papel" ) {
                        document.querySelector("img#img-adversario").src = papel
                        if (jogada === "pedra") {
                            lblLoad.innerHTML = "você perdeu😈💩!!!";
                            falar(lblLoad.innerHTML)
                            // audioPredeu.play()
                            numpcPontos++
                            historico += "\n    Seu Dispositivo pontuou " + numpcPontos + " Pontos"
                        } else if ( jogada === "papel" ) {
                            lblLoad.innerHTML = "empate😴👀!"
                            falar("empate")
                        } else if ( jogada === "tesoura" ) {
                            lblLoad.innerHTML = "você ganhou🏆🥇💛!!!"
                            falar(lblLoad.innerHTML)
                            // audioAplausos.play()
                            numEuPontos++
                            historico += "\n    Você pontuou " + numEuPontos + " Pontos."
                        }
                        
                    } else if ( pc === "tesoura" ) {
                        document.querySelector("img#img-adversario").src = tesoura
                        if (jogada === "pedra") {
                            lblLoad.innerHTML = "você ganhou🏆🥇💛!!!"
                            falar(lblLoad.innerHTML)
                            // audioAplausos.play()
                            numEuPontos++
                            historico += "\n    Você pontuou " + numEuPontos + " Pontos."
                        } else if ( jogada === "papel" ) {
                            lblLoad.innerHTML = "você perdeu😈💩!!!";
                            falar(lblLoad.innerHTML)
                            // audioPredeu.play()
                            numpcPontos++
                            historico += "\n    Seu Dispositivo pontuou " + numpcPontos + " Pontos"
                        } else if ( jogada === "tesoura" ) {
                            lblLoad.innerHTML = "empate😴👀!"   
                            falar("empate")                     
                        }

                        
                    }
                } catch (erro) {
                    alert("[ERRO] " + erro + ".")
                }
                
                mudarCores()
                verificarLimite(Number(limite.value))
                txtEuPontos.innerHTML = `${numEuPontos}`
                txtpcPontos.innerHTML = `${numpcPontos}`

            }

            function repetir() {
                alert(historico)
                txtEuPontos.style = "color:blue;"
                txtpcPontos.style = "color:blue;"
                document.querySelector("#duelo .img:nth-child(1)").style = "border-right: 5px solid blue;"
                document.querySelector("#duelo .img:nth-child(2)").style = "border-left: 5px solid blue;"
                document.querySelector("img#img-adversario").src    = "favicon.png"
                document.querySelector("img#img-jogador").src       = "favicon.png"
                txtEuPontos.innerHTML = `${0}`
                txtpcPontos.innerHTML = `${0}`
                numEuPontos = 0
                numpcPontos = 0
                lblLoad.innerHTML = "..."
                vlJogada.value = "nenhum selecionado"
                historico = "=================================\n============HISTORICO==============\n=================================\n\n"
                // document.querySelector("#img-jogador").src
            }

            function falar(voz = "não conseguimos identificar o texto") {
                //#region 
                voz = voz.replace("👏🏽"," ");
                voz = voz.replace("💻"," ");
                voz = voz.replace("🎮"," ");
                voz = voz.replace("😈"," ");
                voz = voz.replace("💩"," ");
                voz = voz.replace("🏆"," ");
                voz = voz.replace("🥇"," ");
                voz = voz.replace("💛"," ");
                voz = voz.replace("PC","Seu Computador");
                //#endregion

                window.speechSynthesis.cancel()
                palavras = new SpeechSynthesisUtterance(voz);
                fala = window.speechSynthesis;
                // if (window.speechSynthesis.speaking === True) window.speechSynthesis.cancel(new SpeechSynthesisUtterance(voz))
                fala.speak(palavras);
            }

            btnRepetir.addEventListener("click", repetir);
            vlJogada.addEventListener("change", alterarImagem);
            
            document.querySelector("#play1").addEventListener("click", game);
            document.querySelector("#play2").addEventListener("click", game);

            limite.addEventListener("change",() => {
                if(this.value != "opcinal") {
                    valorDoLimite = parseInt(this.value)
                    for (var meter of document.querySelectorAll("div.progresso label meter")) {
                        meter.setAttribute("high", valorDoLimite.toString())
                    }
                }
            })