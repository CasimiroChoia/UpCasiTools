
let decimal = document.getElementById("decimal")
let binario = document.getElementById("binario")
let octal = document.getElementById("octal")
let hexadecimal = document.getElementById("hexadecimal")

        // REDUZINDO UM CARACTER
        function reduzir(aaa) {
           aaa = aaa.split("")
           aaa.pop()
           return aaa.join("")
        }

decimal.addEventListener("input",function(){    //  CONVERTENDO UM NÚMERO decimal
    
    let valor = Number(decimal.value)
    binario.value = parseInt(valor, 10).toString(2)
    octal.value = parseInt(valor, 10).toString(8)
    hexadecimal.value = parseInt(valor, 10).toString(16)

})

binario.addEventListener("input",function(){    //  CONVERTENDO UM NÚMERO BINÁRIO
    
    let valor = Number(binario.value)
    valor_string = valor.toString()
    valor_do_if = valor_string.split("")

    // SE HOVER ALGUM VALOR ACIMA DE 1
    if (valor_do_if.some(function(algum_valor) { return ((algum_valor === "2") || (algum_valor === "3") || (algum_valor === "4") || (algum_valor === "5") || (algum_valor === "6") || (algum_valor === "7") || (algum_valor === "8") || (algum_valor === "9") || (algum_valor === "7") )})) {

        binario.value = reduzir(this.value)
        valor = Number(binario.value)

    }
    
    decimal.value = parseInt(valor,2)
    octal.value = parseInt(valor, 2).toString(8)
    hexadecimal.value = parseInt(valor, 2).toString(16)
    
})

octal.addEventListener("input",function(){    // CONVERTENDO UM NÚMERO OCTAL
    
    let valor = Number(octal.value)
    valor_string = valor.toString()
    valor_do_if = valor_string.split("")

    // SE HOVER ALGUM VALOR ACIMA DE 7
    if (valor_do_if.some(function(algum_valor) { return ((algum_valor === "8") || (algum_valor === "9"))})) {

        octal.value = reduzir(this.value)
        valor = Number(octal.value)

    }

    decimal.value = parseInt(valor, 8)
    binario.value = parseInt(valor, 8).toString(2)
    hexadecimal.value = parseInt(valor, 8).toString(16)
    
})

hexadecimal.addEventListener("input",function(){    // CONVERTENDO UM NÚMERO HEXADECIMAL
    
    let valor = hexadecimal.value
    decimal.value = parseInt(valor,16)
    binario.value = parseInt(valor, 16).toString(2)
    octal.value = parseInt(valor, 16).toString(8)

})
