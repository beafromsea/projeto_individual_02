// Variáveis declaradas para identificar o elemento pelo ID.

var categoria = document.getElementById('categoria')
var entrada = document.getElementById('unidade-entrada')
var saida = document.getElementById('unidade-saida')
var valor = document.getElementById('valor')

categoria.addEventListener('change', function () {
    escolherCategoria()
})

entrada.addEventListener('change', function () {
    escolherCategoriaSaida()
})

// Evento para não reiniciar a página quando clicar no botão de converter.

botaoConverter.addEventListener('click', (event) => event.preventDefault());

// Bloco para executar as funções ao clicar no botão.

botaoConverter.addEventListener('click', function () {
    var valorSelecionado = +valor.value
    if (entrada.value == 'Metro' && saida.value == 'Centimetro') {
        resultado.innerText = metroParaCentimetro(valorSelecionado)
    } else if (entrada.value == 'Centimetro' && saida.value == 'Metro') {
        resultado.innerText = centimentroParaMetro(valorSelecionado)
    } else if (entrada.value == 'Centimetro' && saida.value == 'Polegada') {
        resultado.innerText = centimentroParaPolegada(valorSelecionado)
    } else if (entrada.value == 'Polegada' && saida.value == 'Centimetro') {
        resultado.innerText = polegadaParaCentimetro(valorSelecionado)
    } else if (entrada.value == 'Polegada' && saida.value == 'Metro') {
        resultado.innerText = polegadaParaMetro(valorSelecionado)
    } else if (entrada.value == 'Metro' && saida.value == 'Polegada') {
        resultado.innerText = metroParaPolegada(valorSelecionado)
    } else if (entrada.value == 'Kg' && saida.value == 'Grama') {
        resultado.innerText = kgParaGrama(valorSelecionado)
    } else if (entrada.value == 'Grama' && saida.value == 'Kg') {
        resultado.innerText = gramaParaKg(valorSelecionado)
    } else if (entrada.value == 'Grama' && saida.value == 'Libra') {
        resultado.innerText = gramaParaLibra(valorSelecionado)
    } else if (entrada.value == 'Libra' && saida.value == 'Grama') {
        resultado.innerText = libraParaGrama(valorSelecionado)
    } else if (entrada.value == 'Libra' && saida.value == 'Kg') {
        resultado.innerText = libraParaKg(valorSelecionado)
    } else if (entrada.value == 'Kg' && saida.value == 'Libra') {
        resultado.innerText = kgParaLibra(valorSelecionado)
    } else if (entrada.value == 'Libra' && saida.value == 'Grama') {
        resultado.innerText = libraParaGrama(valorSelecionado)
    } else if (entrada.value == 'Libra' && saida.value == 'Kg') {
        resultado.innerText = libraParaKg(valorSelecionado)
    } else if (entrada.value == 'Kg' && saida.value == 'Libra') {
        resultado.innerText = kgParaLibra(valorSelecionado)
    } else if (entrada.value == 'Celsius' && saida.value == 'Fahrenheit') {
        resultado.innerText = celsiusParaFr(valorSelecionado)
    } else if (entrada.value == 'Fahrenheit' && saida.value == 'Celsius') {
        resultado.innerText = frParaCelsius(valorSelecionado)
    } else if (entrada.value == 'Fahrenheit' && saida.value == 'Kelvin') {
        resultado.innerText = frParaKelvin(valorSelecionado)
    } else if (entrada.value == 'Kelvin' && saida.value == 'Fahrenheit') {
        resultado.innerText = kelvinParafr(valorSelecionado)
    } else if (entrada.value == 'Kelvin' && saida.value == 'Celsius') {
        resultado.innerText = kelvinParaCelsius(valorSelecionado)
    } else if (entrada.value == 'Celsius' && saida.value == 'Kelvin') {
        resultado.innerText = celsiusParaKelvin(valorSelecionado)
    }
})

//Unidade de comprimento, funções com a operação de conversão.

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

function metroParaPolegada(metro) {
    var polegada = metro * 39.37
    return polegada
}
// Unidade de peso, funções com a operação de conversão.

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

// Unidade de temperatura, funções com a operação de conversão.

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

function escolherCategoria() {
    if (categoria.value == 'comprimento') {
        escolherUnidades('Metro', 'Centimetro', 'Polegada')
    }
    if (categoria.value == 'peso') {
        escolherUnidades('Kg', 'Grama', 'Libra')
    }
    if (categoria.value == 'temperatura') {
        escolherUnidades('Celsius', 'Fahrenheit', 'Kelvin')
    }
}

function escolherUnidades(medida1, medida2, medida3) {
    entrada.innerHTML = `
    <option value="">Escolha uma opção</option>
    <option value="${medida1}">${medida1}</option>
    <option value="${medida2}">${medida2}</option>
    <option value="${medida3}">${medida3}</option>
    `

}

function escolherUndiadesdeSaida(medida1, medida2, medida3) {
    if (entrada.value == medida1) {
        saida.innerHTML = `
    <option value="">Escolha uma opção</option>
    <option value="${medida2}">${medida2}</option>
    <option value="${medida3}">${medida3}</option>
    `
    }

    if (entrada.value == medida2) {
        saida.innerHTML = `
    <option value="">Escolha uma opção</option>
    <option value="${medida1}">${medida1}</option>
    <option value="${medida3}">${medida3}</option>
    `
    }

    if (entrada.value == medida3) {
        saida.innerHTML = `
    <option value="">Escolha uma opção</option>
    <option value="${medida2}">${medida2}</option>
    <option value="${medida1}">${medida1}</option>
    `
    }
}

function escolherCategoriaSaida() {
    if (categoria.value == 'comprimento') {
        escolherUndiadesdeSaida('Metro', 'Centimetro', 'Polegada')
    }
    if (categoria.value == 'peso') {
        escolherUndiadesdeSaida('Kg', 'Grama', 'Libra')
    }
    if (categoria.value == 'temperatura') {
        escolherUndiadesdeSaida('Celsius', 'Fahrenheit', 'Kelvin')
    }
}