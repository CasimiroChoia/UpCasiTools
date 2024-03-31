

    // var btnCriar = document.getElementById("btnCriar")
    var historico = "";
    function gerarLista() {
        if (selectLimite.value == 0) return alert("Define um limite.")
        header.style.display = "none"
        limite.style.display = "none"
        document.body.style.backgroundColor = "#000"
        let limiteLocal = Number(selectLimite.value)
        for (let index = 1; index <= limiteLocal; index++) {
            const span = document.createElement("span");
            span.innerHTML = `${Math.floor(Math.random() * limiteLocal)}`
            span.addEventListener("click", itemClicado, false)
            span.classList.add("spanvNumero")
            lista.appendChild(span)
        }
    }

    function itemClicado(e) {
        ownElement = e.target;
        ownElement.style = "background:#000;color:#fff;";

        historico += ownElement.innerHTML + `\n`;
    }

    btnCriar.addEventListener("click", gerarLista, false)