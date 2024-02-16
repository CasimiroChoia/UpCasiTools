        var tabuada = document.getElementById("tabuada")
        var limite = document.getElementById("limite")
        var resultado = document.querySelector("p.resu")
        var button1 = document.querySelectorAll("button")[0]
        
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

        button1.addEventListener("click", function(){
            var numero_fixo = Number(tabuada.value)
            var numero_limite = Number(limite.value)
            resultado.innerHTML = ""
            
            for (var index = 0; index <= numero_limite; ++index) {
                var aaa = index
                resultado.innerHTML += `${numero_fixo} * ${index} = ${numero_fixo*index} <br>`
                
            }
            resultado.innerHTML += `🏁`

        })