    function jarvis(voz) { // FUNÇÃO DE FALA
        window.speechSynthesis.cancel();
        objInteracao = new SpeechSynthesisUtterance(voz);
        window.speechSynthesis.speak(objInteracao);
    }

    // DECLARANDO VARIAVEIS USADOS NESTE PROGRAMA
    var img = document.createElement("img");
    var resp = document.getElementById("resp");
    var index = 0;
    var numeroPincipal = "948409127";


    resp.innerHTML = "lâmpada apagada.";

    img.setAttribute("src","img/lmpd-apagada.png");
    
    document.querySelector("main").insertAdjacentElement("afterbegin", img );

    img.addEventListener("mouseover",() => { // ACENDER LAMPADA
        if (index != 1) {
            enviarMensagem(numeroPincipal, "Sua lâmpada foi acendida.");       // enviando mensagem para o @numeroPincipal
            img.setAttribute("src","img/lmpd-acesa.png");
            resp.innerHTML = "lâmpada acesa.";
        }
    })

    img.addEventListener("click",() => { // ACENDER LAMPADA
        if (index != 1) {
            enviarMensagem(numeroPincipal, "Sua lâmpada foi acendida.");       // enviando mensagem para o @numeroPincipal
            img.setAttribute("src","img/lmpd-acesa.png");
            resp.innerHTML = "lâmpada acesa.";
        }
    })
    
    img.addEventListener("mouseout",() => { //  APAGAR LAMPADA
        if (index != 1) {
            enviarMensagem(numeroPincipal, "Sua lâmpada foi apagada.");       // enviando mensagem para o @numeroPincipal
            img.setAttribute("src","img/lmpd-apagada.png");
            resp.innerHTML = "lâmpada apagada.";
        }
    })
    
    img.addEventListener("dblclick",() => { //  FUNDIR LAMPADA
        enviarMensagem(numeroPincipal, "Sua lâmpada fundio compre outra.");       // enviando mensagem para o @numeroPincipal
        img.setAttribute("src","img/lmpd-fundio.png");
        resp.innerHTML = "lampada fundida, <a href='#comprar'>compre</a> outra.";
        index = 1;
    })

    function reiniciar() {
        enviarMensagem(numeroPincipal, "Uma nova lâmpada foi comprada.");       // enviando mensagem para o @numeroPincipal
        img.setAttribute("src","img/lmpd-apagada.png");
        resp.innerHTML = "comprou-se outra.";
        index = 0;
    }
    
    function enviarMensagem(numero, mensagem) {     // LÂMPADA SMS
        // alert(numero + "" + mensagem)

        // debugger;
        APIKEY = "244948409127";
        BASEURL = "https://api.nvoip.com.br/v2/sms";

        URL_Path = BASEURL + "?napikey=" + APIKEY;

        headers = new Headers();
        headers.append("content-type","aplication/json");

        bodyParameters = {
            number    : numero,
            message   : mensagem,
            flashSms  : false
        };

        parametros = { method : "POST", headers: headers , body: JSON.stringify(bodyParameters)};

	if (navigator.onLine === true ) {

        try {
            fetch(URL_Path, parametros)
            .then (function(response) {
                console.log(response)
            })
            .catch(function(erro) {
                console.error("aconteceu o seguinte erro: " + erro);
            })
        } catch (erro) {
            console.error("aconteceu o seginte: ", erro);
            //alert("aaa")
        }
	
	}
    }