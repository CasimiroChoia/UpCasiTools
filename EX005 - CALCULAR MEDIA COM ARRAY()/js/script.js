function validacao() {
	if (navigator.vendor !== "Google Inc.") {
        alert('Para melhor Visual Baixe o Navegador Google Chrome')
        alert('Estamos direcionando você para o Site do Google Chrome')
        
        document.location.protocol = "https";
        document.location.href = "https://google.com";

	 }
}

function jarvis(voz) {
	window.speechSynthesis.cancel();
	objInteracao = new SpeechSynthesisUtterance(voz);
	window.speechSynthesis.speak(objInteracao);
}

        let listaDeOpcoes = Array()
        let input = document.querySelector("input#numero")
        let select = document.querySelector("select#caixa-numerica")
        let idMaxNum = 0, idMinNum = 0,sum = 0,media, minNum = 20, maxNum = 0, selectSize = 0

        // AO CLICAR NO BOTÃO DE ADICIONAR
        document.querySelectorAll("button[type=button]")[0].addEventListener("click",function() {
            let valueInput = Number(input.value)
            if ((valueInput >= 0) && (valueInput <= 20)) {
                listaDeOpcoes.push(valueInput)
                selectSize++

                // ESSA CONDIÇÃO É DA MAIOR NOTA E QUAL ID TEM A MAIOR NOTA
                if (valueInput > maxNum) {
                    maxNum = valueInput
                    idMaxNum = selectSize
                }

                // ESSA CONDIÇÃO É DA MENOR NOTA E QUAL ID TEM A MENOR NOTA
                if (valueInput < minNum) {
                    minNum = valueInput
                    idMinNum = selectSize
                }

                select.setAttribute("size",selectSize)

                let id = listaDeOpcoes[selectSize-1]

                select.insertAdjacentHTML("beforeend", `<option>Nº${selectSize} teve <strong>${id}</strong> valores</option>`)
            }   else    {
                alert("Nota do Aluno Inválida, por favor Digite outro número.")
            }
            input.value = ""
            input.focus()
            document.querySelector("p.resu").innerHTML = ``

        })



        // AO CLICAR NO BOTÃO DE GERAR RESULTADOS
        document.querySelectorAll("button[type=button]")[1].addEventListener("click",function() {
            
            document.querySelector("p.resu").innerHTML = ``
            document.querySelector("p.resu").innerHTML += `<p>no total tem ${listaDeOpcoes.length} Notas</p>`
            document.querySelector("p.resu").innerHTML += `<p>onde:</p>`
            if (idMaxNum !== 0) {
                document.querySelector("p.resu").innerHTML += `<p>o nº ${idMaxNum} teve a máxima nota que é ${maxNum}.</p>`
            } else {
                document.querySelector("p.resu").innerHTML += `<p tittle=Todos Tiveram 0 Valores >ninguém teve a máxima nota.</p>`
            }
            document.querySelector("p.resu").innerHTML += `<p>o nº ${idMinNum} teve a minima nota que é ${minNum}.</p>`

            // TRABALHANDO COM A SOMA
                for (let index = 0; index < listaDeOpcoes.length; index++) {
                    sum += listaDeOpcoes[index] 
                }

                media = sum/selectSize

            document.querySelector("p.resu").innerHTML += `<p>a soma é de ${sum}.</p>`

            document.querySelector("p.resu").innerHTML += `<p>a média é de ${media.toFixed(2)} .</p>`
            
            if (listaDeOpcoes == []) minNum = 0
            if (selectSize === 0) document.querySelector("p.resu").innerHTML = `<p>Nenhum Valor informado pelo Usuario.</p>`
            
        })
        
        // AO CLICAR NO BOTÃO DE ORDENAR LISTAS
        document.querySelectorAll("button[type=button]")[2].addEventListener("click",function() {
            document.querySelector("p.resu").innerHTML = `<p></p>`
            listaDeOpcoes.sort()
            
            for(let i = 0; i<listaDeOpcoes.length; i++) {
                document.querySelector("p.resu").innerHTML += `<p>${listaDeOpcoes[i]}</p>`
            }

        })