        var tabuada = document.getElementById("tabuada")
        var limite = document.getElementById("limite")
        var resultado = document.querySelector("p.resu")
        var button1 = document.querySelectorAll("button")[0]

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