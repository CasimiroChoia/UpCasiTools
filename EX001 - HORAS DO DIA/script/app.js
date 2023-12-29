// alert("Seja Bemvindo à minha Pagina Web")

var nome_do_cliente = prompt("Como te Chamas?")
		
	//	alert("clica 1 vez para tocar a Musica e 2 para pausar")
		var automatic = setInterval(function aaa() {
			var smsHora = window.document.querySelector("p.smsHora")
			var hora = new Date().getUTCHours()
			/*    	hora = 15*/
			var minutos = new Date().getMinutes()
			var segundos = new Date().getSeconds()

			if (nome_do_cliente==null || nome_do_cliente=="") {
			nome_do_cliente = ""
    	}
    	
		nome_do_cliente.style = "text-tranform: capitalize;"

		if (hora < 10) hora = "0" + hora
		if (minutos < 10) minutos = "0" + minutos
		if (segundos < 10) segundos = "0" + segundos
    	if (hora>=0 && hora<12) {
    		smsHora.innerHTML = `Bom Dia <strong>Senhor ${nome_do_cliente}</strong>, são <strong>${hora}:${minutos}:${segundos} horas</strong> da manhã.`
    		document.querySelector("img#img").src = "img/manha.png"
    		document.body.style = ""
		document.querySelector(".HoraDoDia").innerHTML = "Hora da Manhã"
    	} else if(hora>=12 && hora<18){
    		smsHora.innerHTML = `Boa Tarde <strong>Senhor ${nome_do_cliente}</strong>, são <strong>${hora}:${minutos}:${segundos} horas</strong> da Tarde.`
    		document.querySelector("img#img").src = "img/sun.png" 
    		document.querySelector("img#img").style = "border:none;animation:rotate 60s linear infinite;"
    		document.querySelector(".HoraDoDia").innerHTML = "Hora da Tarde"
		document.body.style = "background:rgba(255, 255, 0, 0.5);"
    	} else {
   		 	smsHora.innerHTML = `Boa Noite <strong>Senhor ${nome_do_cliente}</strong>, são <strong>${hora}:${minutos}:${segundos} horas</strong> da Noite.`
    		document.querySelector("img#img").src = "img/noite.png"
   		 	document.querySelector("img#img").style = "animation:rotate 60s linear infinite;"
   		 	document.body.style = "background:darkblue;"
    		document.body.style = "background:#515154;"
    		document.querySelector(".HoraDoDia").style = "color:#fff;"
    		document.querySelector(".HoraDoDia").innerHTML = "Hora da Noite"
    	}


    },1000)	

	var cc = 0
	var audio = document.createElement("audio")
	audio.src = "audio/2.mp3"

	function contar(tag){
		if (tag=="img") {
			document.querySelector("div.cliques").innerHTML = `Você clicou na img <b>${++cc}</b> vezes.`
			audio.play()
		}
		if (tag=="h1") {
			audio.pause()
		}
	}

	