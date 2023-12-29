var lista = new Array()
var input = document.querySelector("input#inNome")
        var addList = document.querySelectorAll("button")[0]
        var cleanList = document.querySelectorAll("button")[1]
        var desordernarList = document.querySelectorAll("button")[2]
        var showList = document.querySelector("#showList")
        var outName = document.getElementById("outName")
        var aleatorio = 0

        function adicionar() {
            outName.innerText = ""
            if (showList.innerText === "Nomes Aqui") {showList.innerText =""; cleanClick()}
            
            if (input.value === "" && event.key === "Enter") {
                alert("Digite um nome.")
                input.value = "" && input.focus()
            } else if(event.key === "Enter") {
                lista.push(input.value)
                backupLista = lista
                showList.innerText = `${lista.toString()} `
                input.value = "" && input.focus()
            }
        }
        
        function addClick() {
            if (showList.innerText === "Nomes Aqui") {showList.innerText =""; cleanClick()}
            
            if (input.value === "") {
                alert("Digite um nome.")
            } else {
                lista.push(input.value)
                backupLista = lista
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
        
        function desordenar() {
            if (lista.some(function(cada_membro) { return cada_membro !== undefined })) {
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
                alert("Esta lista já foi feita insere novamente os valores.")
                // showList.innerHTML = ""
                // while (true) {
                //     alert("loop")
                //     aleatorio = Math.floor(Math.random()*(backupLista.length))
                //     if (backupLista[aleatorio] === undefined ) continue
                //     outName.innerHTML += `${backupLista[aleatorio]}<br>`
                //     delete lista[aleatorio]
                    
                //     if (backupLista.every(function(cada_membro) { return cada_membro === undefined })) break
                    
            }
        }
            
            
        

        input.addEventListener("keydown", adicionar)
        addList.addEventListener("click", addClick)
        cleanList.addEventListener("click", cleanClick)
        desordernarList.addEventListener("click", desordenar)