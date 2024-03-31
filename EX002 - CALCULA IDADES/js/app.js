function jarvis(voz) {
	window.speechSynthesis.cancel();
	objInteracao = new SpeechSynthesisUtterance(voz);
	window.speechSynthesis.speak(objInteracao);
}

function verif() {
    var AnoNasc = Number(document.getElementById("AnoNasc").value)
    var masc = document.getElementById("masc").checked
    var femi = document.getElementById("femi").checked
    var sms = document.querySelector(".sms-idades p")
    var img = document.querySelector(".sms-idades img")
    var AnoAct = new Date().getFullYear()
    var idade = AnoAct-AnoNasc;

    if (idade<0){
         return alert("[ERRO] Não existe pessoa que nasceu no futuro.")
    }

    if (AnoNasc<1900){
         return alert("Uma pessoa que nasceu nesse ano a esta hora já estaria morta.")
    }

    // mais de 53 
        // O
    if ((AnoNasc<1970)&&(masc==true&&femi==false)) {
        sms.innerHTML = `O avô. tem ${idade} de idade.`
        img.src = "img/avo.jpg" 
        // A
    } else if ((AnoNasc<1970)&&(masc==false&&femi==true)) {
        sms.innerHTML = `A avó. tem ${idade} de idade.`
        img.src = "img/ava.jpg" 
    }

    // mais de 33 
        // O
    if ((AnoNasc<1993&&AnoNasc>=1970)&&(masc==true&&femi==false)) {
        sms.innerHTML = `O Sr. tem ${idade} de idade.`
        img.src = "img/adulto.jpg" 
        // A
    } else if ((AnoNasc<1993&&AnoNasc>=1970)&&(masc==false&&femi==true)) {
        sms.innerHTML = `A Sr. tem ${idade} de idade.`
        img.src = "img/adulta.jpg" 
    }

    // mais de 18 
        // O
    if ((AnoNasc<=2005&&AnoNasc>=1990)&&(masc==true&&femi==false)) {
        sms.innerHTML = `Mô chefe você tem ${idade} de idade.`
        img.src = "img/jovem.jpg" 
        // A
    } else if ((AnoNasc<=2005&&AnoNasc>=1990)&&(masc==false&&femi==true)) {
        sms.innerHTML = `Miha chefe você tem ${idade} de idade.`
        img.src = "img/jovema.jpg" 
    }

    // mais de 0 
        // O
    if ((AnoNasc>2005)&&(masc==true&&femi==false)) {
        sms.innerHTML = `Olá Miúdo você tem ${idade} de idade.`
        img.src = "img/kid.jpg" 
        // A
    } else if ((AnoNasc>2005)&&(masc==false&&femi==true)) {
        sms.innerHTML = `Olá Miúda você tem ${idade} de idade.`
        img.src = "img/kid.jpg" 
    }
}
