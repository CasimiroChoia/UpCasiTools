


            let celcios = document.getElementById("celcios")
            let farinheit = document.getElementById("farinheit")
            let kelvin = document.getElementById("kelvin")

            celcios.addEventListener("click", zerar)
            celcios.addEventListener("input",function() {
                farinheit.value = ((Number(celcios.value) * 1.8) + 32).toFixed(2);
                kelvin.value = Number(Number(celcios.value) + 273.15).toFixed(2);
            })

            farinheit.addEventListener("click", zerar)
            farinheit.addEventListener("input",function() {
                celcios.value = ((Number(farinheit.value) - 32) / 1.8).toFixed(2) + "";
                kelvin.value = (255.3722 + (parseInt(farinheit.value) * 0.5556)).toFixed(2)
            })

            kelvin.addEventListener("click", zerar)
            kelvin.addEventListener("input",function() {
                celcios.value = Number((kelvin.value) - 273.15).toFixed(2);
                farinheit.value = -459.67 + Number(kelvin.value)*1.8;
            })

            document.querySelector('body').addEventListener("contextmenu",function(evt) {
                jarvis("Menù Bloqueado.")
                evt.preventDefault()
            })
            
            function jarvis(voz) {
                window.speechSynthesis.cancel();
                objInteracao = new SpeechSynthesisUtterance(voz);
                window.speechSynthesis.speak(objInteracao);
            }

            function zerar() {
                this.focus()

                celcios.value = ""
                farinheit.value = ""
                kelvin.value = ""
            }