        var lista = new Array()
        var input = document.querySelector("input#inNome")
        var addList = document.querySelectorAll("button")[0]
        var cleanList = document.querySelectorAll("button")[1]
        var desordernarList = document.querySelectorAll("button")[2]
        var showList = document.querySelector("#showList")
        var outName = document.getElementById("outName")
        var aleatorio = 0
        var listaDeListas = [], index = 0

        function adicionar() {
            // if (showList.innerText === "Nomes Aqui") showList.innerText =""

            if (input.value === "" && event.key === "Enter") {
                alert("Digite um nome.")
                input.value = "" && input.focus()
            } else if(event.key === "Enter") {
                lista.push(input.value)
                // listaDeListas.push(lista)
                showList.innerText = `${lista.toString()} `
                input.value = "" && input.focus()
            }
        }
        
        function addClick() {
            // if (showList.innerText === "Nomes Aqui") showList.innerText =""
            
            if (input.value === "") {
                alert("Digite um nome.")
            } else {
                lista.push(input.value)
                showList.innerText = `${lista.toString()} `
            }
            input.value = "" && input.focus()
        }
        
        function cleanClick() {
            
            lista = []
            showList.innerHTML = ""
            input.value = ""
            outName.innerText = ""
            
        }
        
        // DESORDENAR A LISTA
        function desordenar() {
            // listaDeListas.push(lista)
            outName.innerText = ""
            
            StringLista = lista.join("-")
            if (lista.every(function(cada_valor) {cada_valor===undefined})){
                listaDeListas.push(listaDeListas[index])
            } else {
                listaDeListas.push(StringLista.split("-"))
            }
            
            if (lista.some(function(cada_membro) { return cada_membro !== undefined })) {
                aaa = index-1
                listaDeListas[index++] = listaDeListas[aaa]
                // alert("é diferente")
                while (true) {
                    // alert("loop")
                    aleatorio = Math.floor(Math.random()*(lista.length))
                    if (lista[aleatorio] === undefined ) continue
                    outName.innerHTML += `${lista[aleatorio]}<br>`
                    delete lista[aleatorio]
                    
                    if (lista.every(function(cada_membro) { return cada_membro === undefined })) break
                    
                }
            } else {
                alert("Esta lista já foi feita.")
                if (showList.innerText == "Nomes Aqui") {
                    showList.innerHTML = ""
                }
                while (true) {
                    alert("loop causado por this === undefined")
                    aleatorio = Math.floor(Math.random()*(listaDeListas[index].length))
                    if (listaDeListas[index][aleatorio] === undefined ) continue
                    outName.innerHTML += `${listaDeListas[index][aleatorio]}<br>`
                    delete listaDeListas[aleatorio]
                    
                    if (listaDeListas[index].every(function(cada_membro) { return cada_membro === undefined })) {
                        break
                    } 
                    
                }
                
                ++index;
            }
            
            
        }

        input.addEventListener("keydown", adicionar)
        addList.addEventListener("click", addClick)
        cleanList.addEventListener("click", cleanClick)
        desordernarList.addEventListener("click", desordenar)