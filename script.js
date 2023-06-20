var categoria = document.getElementById('categoria')
var entrada = document.getElementById('unidade-entrada')
var saida = document.getElementById('unidade-saida')
var valor = document.getElementById('valor')

categoria.addEventListener('change', function () {
    if (categoria.value == 'comprimento') {
        entrada.innerHTML = `                        
        <option value="metro">Metros </option>
        <option value="centimetro">Centímetros</option>
        <option value="polegada">Polegadas</option>`
        saida.innerHTML = `
        <option value="metro">Metros </option>
        <option value="centimetro">Centímetros</option>
        <option value="polegada">Polegadas</option>`
    }
    else if (categoria.value == 'peso') {
        entrada.innerHTML = `
        <option value="kg">Quilogramas </option>
        <option value="grama">Gramas</option>
        <option value="libra">Libras</option>`
        saida.innerHTML = `
        <option value="kg">Quilogramas </option>
        <option value="grama">Gramas</option>
        <option value="libra">Libras</option>`
    }
    else if (categoria.value == 'temperatura') {
        entrada.innerHTML = `
        <option value="celsius">Celsius </option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>`
        saida.innerHTML = `
        <option value="celsius">Celsius </option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>`
    }
})

// evento para não reiniciar a página quando clicar no botão de converter.

botaoConverter.addEventListener('click', (event) => event.preventDefault());

// bloco para executar as funções ao clicar no botão 

botaoConverter.addEventListener('click', function () {
    var valorSelecionado = +valor.value
    if (entrada.value == 'metro' && saida.value == 'centimetro') {
        resultado.innerText = metroParaCentimetro(valorSelecionado)
    } else if (entrada.value == 'centimetro' && saida.value == 'metro') {
        resultado.innerText = centimentroParaMetro(valorSelecionado)
    } else if (entrada.value == 'centimetro' && saida.value == 'polegada') {
        resultado.innerText = centimentroParaPolegada(valorSelecionado)
    } else if (entrada.value == 'polegada' && saida.value == 'centimetro') {
        resultado.innerText = polegadaParaCentimetro(valorSelecionado)
    } else if (entrada.value == 'polegada' && saida.value == 'metro') {
        resultado.innerText = polegadaParaMetro(valorSelecionado)
    } else if (entrada.value == 'metro' && saida.value == 'polegada') {
        resultado.innerText = metroParaPolegada(valorSelecionado)
    } else if (entrada.value == 'kg' && saida.value == 'grama') {
        resultado.innerText = kgParaGrama(valorSelecionado)
    } else if (entrada.value == 'grama' && saida.value == 'kg') {
        resultado.innerText = gramaParaKg(valorSelecionado)
    } else if (entrada.value == 'grama' && saida.value == 'libra') {
        resultado.innerText = gramaParaLibra(valorSelecionado)
    } else if (entrada.value == 'libra' && saida.value == 'grama') {
        resultado.innerText = libraParaGrama(valorSelecionado)
    } else if (entrada.value == 'libra' && saida.value == 'kg') {
        resultado.innerText = libraParaKg(valorSelecionado)
    } else if (entrada.value == 'kg' && saida.value == 'libra') {
        resultado.innerText = kgParaLibra(valorSelecionado)
    } else if (entrada.value == 'libra' && saida.value == 'grama') {
        resultado.innerText = libraParaGrama(valorSelecionado)
    } else if (entrada.value == 'libra' && saida.value == 'kg') {
        resultado.innerText = libraParaKg(valorSelecionado)
    } else if (entrada.value == 'kg' && saida.value == 'libra') {
        resultado.innerText = kgParaLibra(valorSelecionado)
    } else if (entrada.value == 'celsius' && saida.value == 'fr') {
        resultado.innerText = celsiusParaFr(valorSelecionado)
    } else if (entrada.value == 'fr' && saida.value == 'celsius') {
        resultado.innerText = frParaCelsius(valorSelecionado)
    } else if (entrada.value == 'fr' && saida.value == 'kelvin') {
        resultado.innerText = frParaKelvin(valorSelecionado)
    } else if (entrada.value == 'kelvin' && saida.value == 'fr') {
        resultado.innerText = kelvinParafr(valorSelecionado)
    } else if (entrada.value == 'kelvin' && saida.value == 'celsius') {
        resultado.innerText = kelvinParaCelsius(valorSelecionado)
    } else if (entrada.value == 'celsius' && saida.value == 'kelvin') {
        resultado.innerText = celsiusParaKelvin(valorSelecionado)
    }
})

//unidade de comprimento, funções com a operação de conversão

function metroParaCentimetro(metro) {
    var centimetro = metro * 100
    return centimetro
}

function centimentroParaMetro(centimetro) {
    var metro = centimetro / 100
    return metro
}

function centimentroParaPolegada(centimetro) {
    var polegada = centimetro / 2.54
    return polegada
}

function polegadaParaCentimetro(polegada) {
    var centimetro = polegada * 2.54
    return centimetro
}

function polegadaParaMetro(polegada) {
    var metro = polegada / 39.37
    return metro
}

function metroParaPolegada(metro)
var polegada = metro * 39.37
return polegada

// unidade de peso, funções com a operação de conversão

function kgParaGrama(kg) {
    var grama = kg * 1000
    return grama
}


function gramaParaKg(grama) {
    var kg = grama / 1000
    return kg
}


function gramaParaLibra(grama) {
    var libra = grama / 453.6
    return libra
}


function libraParaGrama(libra) {
    var grama = libra * 453.6
    return grama
}


function libraParaKg(libra) {
    var kg = libra / 2.205
    return kg
}

function kgParaLibra(kg) {
    var libra = kg * 2.205
    return libra
}

// unidade de temperatura, funções com a operação de conversão

function celsiusParaFr(celsius) {
    var fr = (celsius * 9 / 5) + 32
    return fr
}

function frParaCelsius(fr) {
    var celsius = (fr - 32) * 5 / 9
    return celsius
}

function frParaKelvin(fr) {
    var kelvin = (fr - 32) + 5 / 9 + 273.15
    return kelvin
}
function kelvinParafr(kelvin) {
    var fr = (kelvin - 273.15) * 9 / 5 + 32
    return fr
}
function kelvinParaCelsius(kelvin) {
    var celsius = kelvin - 273.15
    return celsius
}
function celsiusParaKelvin(celsius) {
    var kelvin = celsius + 273.15
    return kelvin
}
