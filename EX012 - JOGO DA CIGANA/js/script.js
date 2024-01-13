
    

            // var nome = prompt("Como Te Chamas???");
            var nome = "Meu Amigo";
            alert(`Olá ${nome}.  \n\nSeja bemvindo ao Jogo Da Cigana ou seja aqui é onde você terá frases acerca do seu passado, presente e futuro.`);
            alert("Clica no icone para reproduzir uma música.")

            var audio = document.createElement("audio");
            audio.setAttribute("src","audio/1.mp3");
            audio.setAttribute("type","mpeg");
            audio.setAttribute("preload","none");

            document.getElementById("logo").onclick = () => audio.play();

            var sms1 = "Nunca vi um pombo morrer por comer comida do chão, então qual é o problema do ser humano?";
            var sms2 = "A cada dia que você espera, é um outro dia que você nunca vai poder recuperar.";
            var sms3 = "Tenha uma política: não aceito conselhos a menos que os peça.";
            var sms4 = "Você tem que aprender a não confiar em uma raposa. Porque elas são traiçoeiras. Vão enganar você. Vão enganar a todos.";
            var sms5 = "Eu sei o que é dor, você acha que pode suportá-la, mas um dia percebe que não pode.";
            var sms6 = "Segredos matam as pessoas, pega visão.";
            var sms7 = "As pessoas que te amam são as mais proximas de tí.";
            var sms8 = "Quando o relógio bater duas da manhã, vá dormir... pois as decisões que você toma depois das duas da manhã são decisões erradas.";
            var sms9 = "As horas mais tristes da vida são aquelas em que duvidamos de nós próprios.";
            var sms10 = "A árvore quando está sendo cortada, observa com tristeza que o cabo do machado é de madeira.";
            var sms11 = "Para iludir sua desgraça, estude.  Intimamente sei que não te iludes.";
            var sms12 = "Sombria não é aquela noite escura e aterradora, mas aquela pessoa que carrega o ódio no coração.";
            var sms13 = "Melancolia: Maneira romântica de ficar triste.";
            var sms14 = "Se um sacrifício é uma tristeza para ti, e não uma alegria, então não o faças, não és digno dele.";
            var sms15 = "A vida é da cor que pintamos ela triste, feliz, alegre ou sombria.";
            var sms16 = "Não há nada tão equitativamente distribuído no mundo como a inteligência: todos estão convencidos de que têm o suficiente.";
            var sms17 = "Nunca nos devemos deixar persuadir senão por evidência da razão.";
            var sms18 = "Quem ri por último é quem tem o raciocínio mais devagar. ";
            var sms19 = "Pessoas certas moram em lugares errados. ";
            var sms20 = "Quando penso que te esqueci, passa um cachorro e lembro de você.";
            var sms21 = "As aparências enganam ... e em alguns casos assustam. ";
            var sms22 = "Sua foto de perfil está durando mais que muitos namoros por aí. ";
            var sms23 = "Quando a mulher diz: Faz o que você quiser, ela quis dizer: Experimenta fazer pra ver o que te acontece. ";
            var sms24 = "Para realizar coisas grandes, comece pelo pequeno. ";
            var sms25 = "Pés firmes no chão e cabeça erguida e segue em frente! ";
            var sms26 = "Namore uma calculadora, pelo menos ela sabe dar valor. ";
            var sms27 = "Viva os melhores momentos da sua vida por que os piores virão ✌❤";
            var sms28 = "Seja seu foco. Faça as coisas por você. ";
            var sms29 = "A sua vida só vai pra frente depois que você se desapega das pessoas que te levam pra trás! ";
            var sms30 = "Esqueça os piores momentos da sua vida e faça os melhores se tornarem inesquecíveis. ";
            var sms31 = "Colecione momentos, não coisas. ";
            var sms32 = "Não seja tão mente-aberta, o seu cérebro pode cair! ";
            var sms33 = "Independente de quem você realmente é, as pessoas vão te enxergar como elas quiserem. ";
            var sms34 = "Sem pressa. Sem vírgula. Sem ponto final. Sem briga. Sem mágoa. Sem dor. Só amor, por favor. ";
            var sms35 = "E não podemos evitar que a vida.  \nTrabalhe com o seu relógio invisível.  \nTirando o tempo de tudo que é perecível.";
            var sms36 = "A medida de amar é amar sem medidas.";
            var sms37 = "As vezes você se pergunta, porque é que ele é tão calado, nem fala de amor quase nada, e nem fica sorrindo ao seu lado.";
            var sms38 = "Tempos são difíceis quando as coisas não têm significado algum.";
            var sms39 = "Todos nós nascemos em um mundo de dúvidas. Disso tens que ter a certeza.";
            var sms40 = "Don't believe me, just watch";
            var sms41 = "Mais vale andar sozinho, que mal acompanhado.";
            var sms42 = "Seu coração nunca mais sera o mesmo novamente. ";
            var sms43 = "Toda vida é preciosa.";
            var sms44 = "Quais são as três coisas que não podem ser escondidas por muito tempo? O sol, A lua e a verdade.";
            var sms45 = "O tempo está correndo! Pense no que ainda pode acontecer.";
            var sms46 = "A verdade é que ninguém se encaixa em lugar algum.";
            var sms47 = "É inútil esperar por uma coisa que não vai acontecer. ";
            var sms48 = "Seja mesmo agarra, afinal de contas trabalhas sen ajuda😶. ";
            var sms49 = "O segredo da riqueza é ser agarrdo✅💰💳💸. ";
            var sms50 = "Namore o teu best friend💑👩🏼‍🤝‍🧑🏻. ";

            var frases = [
                sms1,
                sms2,
                sms3,
                sms4,
                sms5,
                sms6,
                sms7,
                sms8,
                sms9,
                sms10,
                sms11,
                sms12,
                sms13,
                sms14,
                sms15,
                sms16,
                sms17,
                sms18,
                sms19,
                sms20,
                sms21,
                sms22,
                sms23,
                sms24,
                sms25,
                sms26,
                sms27,
                sms28,
                sms29,
                sms30,
                sms31,
                sms32,
                sms33,
                sms34,
                sms35,
                sms36,
                sms37,
                sms38,
                sms39,
                sms40,
                sms41,
                sms42,
                sms43,
                sms44,
                sms45,
                sms46,
                sms47,
                sms48,
                sms49,
                sms50
            ]

            var limite = frases.length
            
            function clicandoNasCartas(objecto) {
                tentativas -= 1
                if (tentativas <= -1) return alert("O seu número de tentativas acabou.")
                objecto.style = "animation: rodar-carta 1s cubic-bezier(0.6, -0.28, 0.735, 0.045) 0s 1 both;"
                frase = Math.floor(Math.random()*limite)
                document.getElementById("texto").innerHTML = `a cigana diz que:<br>\"${frases[frase]}\"`
                copiar.style.display = "block"
        }
        
        window.onload = () => {
            tentativas = 3
            cartas = document.querySelectorAll("a img")

            for (let carta of cartas) {
                carta.setAttribute("onclick","clicandoNasCartas(this)")
                carta.setAttribute("draggable","false")
            }
        }

       // var texto = document.querySelector("#texto")

		
	    //document.querySelector("#copiar").addEventListener("click", copiarTexto())

/*function copiarTexto() {
	texto = document.querySelector("p#texto")

	 texto.select();
         texto.setSelectionRange(0, 99999);
       	 document.execCommand("copy");
	 alert("Texto Copiado");
}*/