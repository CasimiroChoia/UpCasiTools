        var inicio = document.getElementById("inicio");
        var fim = document.getElementById("fim");
        var passo = document.getElementById("passo");
        var resultado = document.querySelector(".cont");
        var button1 = document.querySelectorAll("button")[0];

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

        document.querySelectorAll("main")[0].addEventListener("input",function(){
            if (inicio.value != 0 || fim.value != 0) {
                button1.disabled = false;
            }
        })
        
        button1.addEventListener("mousedown",function(){
           if (inicio.value == 0 && fim.value == 0) {
                alert("[ERRO] Apenas um campo pode ter 0 como valor.👊🏾👊🏾");
                button1.disabled = true;
            }
        })

        button1.addEventListener("click", function(){
            var i = Number(inicio.value);
            var f = Number(fim.value);
            var p = Number(passo.value);

            // alert("Você clicou");

            resultado.innerText = "";
            
            if (i<f) {
                // DE BAIXO PARA CIMA
                while (i<f){
                    i+=p;
                    resultado.innerText += `${i-1}🏍 `;
                }
            	if(i==f) {
                    resultado.innerText += `${i} 🏁 `;
	            }
            } else {
                // DE CIMA PARA BAIXO
	resultado.innerText += `🏍${i} `;
                while (i>f){
                    i-=p;
	resultado.innerText += `🏍${i} `;    
                }
                resultado.innerText += `🏁`;
            }

            if (document.querySelector("div") == null && window.innerWidth >= 900) {
                reboot = document.createElement("div");
                document.querySelector("main").appendChild(reboot);
                reboot.innerHTML = "<a href=# target=_blank><button>criar outra janela</button></a>";
                reboot.style = "background:rgba(0,0,0,0); display:block; margin:auto; position:absolute; top:0px; left:0px; text-decoration: none;";
            }
            
        })

        var allIn = document.querySelectorAll("input");
        
        //  INPUT 0

        if (window.innerWidth>850) {
            allIn[0].addEventListener("mouseover", function(){
                document.querySelectorAll(".before-input")[0].style = "color: rgba(0, 0, 0, 0.5);   transition:1s;";
            })
            allIn[0].addEventListener("mouseout", function(){
                document.querySelectorAll(".before-input")[0].style = "color: rgba(0, 0, 0, 0);   transition:1s;";
            })
            
            //  INPUT 1
            allIn[1].addEventListener("mouseover", function(){
                document.querySelectorAll(".before-input")[1].style = "color: rgba(0, 0, 0, 0.5);   transition:1s;";
            })
            allIn[1].addEventListener("mouseout", function(){
                document.querySelectorAll(".before-input")[1].style = "color: rgba(0, 0, 0, 0);   transition:1s;";
            })
        
            //  INPUT 2
            allIn[2].addEventListener("mouseover", function(){
                document.querySelectorAll(".before-input")[2].style = "color: rgba(0, 0, 0, 0.5);   transition:1s;";
            })
            allIn[2].addEventListener("mouseout", function(){
                document.querySelectorAll(".before-input")[2].style = "color: rgba(0, 0, 0, 0);   transition:1s;";
            })
        } else {
            document.querySelectorAll(".before-input")[0].remove()
            document.querySelectorAll(".before-input")[1].remove()
            document.querySelectorAll(".before-input")[0].remove()
        }