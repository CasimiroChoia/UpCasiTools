

        var inpEmissor      = document.getElementById("numeroDoEmissor")
        var selQuantidade   = document.getElementById("quantidade")
        var divReceptores   = document.querySelector(".receptores")
        var txtSMS          = document.getElementById("sms")
        var btnSend         = document.querySelector(".btnSend")
        var form            = document.getElementsByTagName("form")[0]
        var listaDeReceptores;
        var personificationLista = [];
        
        async function enviarSMS() { // FUNCAO PRINCIPAL

            if (selQuantidade.value === "nenhum") return alert("Qual é a quantidade de receptores???")
            
            let numeroDoEmissor;
            if (inpEmissor.value.includes("+")) {
                numeroDoEmissor = inpEmissor.value
            } else {
                numeroDoEmissor = "+244" + inpEmissor.value
            }
            receptores()
            personification()
            //#region  COMEÇO DOS PARAMETROS
                URL = "https://api.mailersend.com/v1/sms";
                let header = {
                    // "Content-Type": "text/plain; charset=utf-8",
                    // "X-SMS-Message-Id": "5e42957d51f1d94a1070a733"
                    "Content-Type" : "aplication/json"
                }
                let body = {
                    "from": numeroDoEmissor,
                    "to": listaDeReceptores,
                    "text": txtSMS.value,
                    "personification": personificationLista
                }
            //#endregion FIM DOS PARAMETROS
            try {
                let response = await fetch(URL, {
                    method:     "POST",
                    headers:    header,
                    body:       body
                    // body:       JSON.stringify(body)
                })
                console.log(response.status);
	            window.alert("Enviado Com Sucesso")
                personificationLista = []
            } catch (e) {
                console.log(e.name + " => " + e.message);
	            window.alert("Enviado Sem Sucesso")
                window.alert(/*e.name + */"Aconteceu um erro " + e.message);
            }
            console.log(body);
            // alert(body.toString())

        }

        function receptores() {
            listaDeReceptores = []
            for (const numero of document.querySelectorAll("div.receptores > label > input")) {
                if (!numero.value.includes("+")) {
                    listaDeReceptores.push("+244" + numero.value)
                } else {
                    listaDeReceptores.push(numero.value)
                }
            }
            // console.log(listaDeReceptores)
        }

        function qtddReceivers() {  // ADICIONADO ELEMENTOS NA DIV DE RECEPTORES
            for (let label of document.querySelectorAll(".receptores > *")) {
                label.remove()
            }

            for (let index = 0; index < parseInt(this.value); index++) {
                const label = document.createElement("label");
                label.setAttribute("for",`numero${index}`)
                label.innerText = `receptor ${index+1}: `
                label.classList.add(`labelReceptor`)

                const input = document.createElement("input");
                input.setAttribute("id",`numero${index}`)
                input.setAttribute("type",`tel`)
                input.setAttribute("placeholder",`receptor Nº${index+1}`)
                input.setAttribute("autocomplete",`tel`)
                input.setAttribute("title",`digite um numero`)
                input.setAttribute("required",`true`)
                label.appendChild(input)
                divReceptores.appendChild(label)


            }     
        }

        function personification() {
            for (const input of document.querySelectorAll("div.receptores > label > input")) {
                personificationLista.push({
                    "phone_number":"+244" + input.value,
                    "data": {
                        "name":"UpCasi"
                    }
                })
            }
            console.log(personificationLista);
        }

        selQuantidade.addEventListener("change", qtddReceivers, false)
        // btnSend.addEventListener("click", enviarSMS, false)
        form.addEventListener("submit", enviarSMS, false)