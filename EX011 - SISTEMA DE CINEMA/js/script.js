

            while (true) {
                estilo_desejado = prompt("Por favor insira um dos preços abaixo estimulado caro cliente.\n     1. Animação => 1.500kz \n     2.Romance => 3.000kz \n     3.Comédia => 5.000kz \n     4.Acção => 10.000kz");

                if (estilo_desejado === "1500" || estilo_desejado === "3000" || estilo_desejado === "5000" || estilo_desejado === "10000" || estilo_desejado === "casimiro") break;
                alert("Houve um erro ao identificar o seu valor a pagar. Por favor tente novamente.")
            }

            let animacao = document.querySelector(".animacao");
            let romance = document.querySelector(".romance");
            let comedia = document.querySelector(".comedia");
            let accao = document.querySelector(".accao");

            function display(valor) {       //  COLOCANDO UM DISPLAY NONE EM TODOS OS ESTILOS
                animacao.style = "display: "+ valor +";";
                romance.style = "display: "+ valor +";";
                comedia.style = "display: "+ valor +";";
                accao.style = "display: "+ valor +";";
            }

            if (estilo_desejado == "1500") {
                display("none")
                animacao.style.display = "block"
            } else if (estilo_desejado == "3000") {
                display("none")
                romance.style.display = "block"
            } else if (estilo_desejado == "5000") {
                display("none")
                comedia.style.display = "block"
            } else if( estilo_desejado == "casimiro" ) {
                alert("Seja bemvindo Sr. Casimiro.✔🤜🏼🤛🏼")
                document.querySelectorAll(".seccoes")[0].style = "display:flex;"
                document.querySelectorAll(".seccoes")[1].style = "display:flex;"
            } else {
                display("none")
                accao.style.display = "block"
            }

            let estilo = (estilo_desejado==="1500")?"as crianças":((estilo_desejado==="3000")?"os românticos":(estilo_desejado==="5000")?"comediantes":"amantes de acção")

            document.querySelector(".container-dos-filmes").insertAdjacentHTML("beforebegin","<p style='text-align:center;font-size:1.5em;'>você escolheu o pacote de "+ estilo_desejado +"kz, para "+ estilo +".</p>")