var btnAdicionar = document.querySelectorAll("button[type=button]")[0];
var btnSortear = document.querySelectorAll("button[type=button]")[1];
var ListaParaOSorteio = new Array()
var nome = document.getElementById("inNome")

btnAdicionar.addEventListener("click",function(){
    if (document.getElementById("outName").innerText !== "Esperando Pelo Teu Sinal") document.getElementById("outName").innerText = ""
    if (nome.value === "") {
        alert("[ERRO] Entrada Inválida")
        nome.focus()
    } else {        
        ListaParaOSorteio.push(nome.value)
        document.getElementById("showList").innerHTML = `${ListaParaOSorteio.join(", ")}`
        nome.value = ""
        nome.focus()
    }
});

btnSortear.addEventListener("click", function(){
    // alert(ListaParaOSorteio.toString())
    limite = ListaParaOSorteio.length
    document.getElementById("outName").innerHTML = `de ${limite} nomes o sorteado foi: <br>\" ${ListaParaOSorteio[Math.floor(Math.random()*limite)]} \"`

    if (ListaParaOSorteio.toString() === "") document.getElementById("outName").innerHTML = "nenhum nome na lista."
})
