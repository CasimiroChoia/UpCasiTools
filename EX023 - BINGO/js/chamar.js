

        const selectLimite = document.getElementById("selectLimite");
        var numLimite;
        var historico = "";
        const btnChamar = document.getElementById("btnChamar");
        const divNumero = document.querySelector(".numero");
        const spanVoz = document.querySelector("#voz");

        titulo.style.fontWeight = "bolder";
        titulo.style.fontFamily = "fangsong, cursive, emoji";

        function alterarNumero() {
            divNumero.innerHTML = "";
            numLimite = parseInt(this.value)
            historico += "o limite agora é " + numLimite + "\n";
            console.log(numLimite);
            console.clear();
            main.style.display = "block";
        }

        function chamarNumero() {
            if (selectLimite.value == 0) return alert("Define um limite.");
            let localNum = Math.floor(Math.random() * numLimite) + 1;
            historico += localNum + '\n';
            divNumero.innerText = `${localNum}`;
            verificarCheckbox();
        }

        function verificarCheckbox() {
            if (spanVoz.checked) {
                jarvis(divNumero.innerText)
            }
        }

        function jarvis(comando = "aaa") {
            window.speechSynthesis.cancel()
            let palavras = new window.SpeechSynthesisUtterance(comando)
            window.speechSynthesis.speak(palavras)
        }


        selectLimite.addEventListener("change", alterarNumero, false)
        btnChamar.addEventListener("click", () => {
            setTimeout(() => {
                chamarNumero()
            }, 0);
        }, false)