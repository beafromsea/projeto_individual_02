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
        <option value="quilograma">Quilogramas </option>
        <option value="grama">Gramas</option>
        <option value="libra">Libras</option>`
        saida.innerHTML = `
        <option value="quilograma">Quilogramas </option>
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

function converteComprimento() {
    if (entrada.value == 'metro' && saida.value === 'centimetro') {
        return (valor.value * 100);
    } else if (entrada.value == 'centimetro' && saida.value === 'metro') {
        return (valor.value / 100);
    } else if (entrada.value == 'centimetro' && saida.value === 'polegada') {
        return (valor.value / 2, 54);
    } else if (entrada.value == 'polegada' && saida.value === 'centimetro') {
        return (valor.value * 2, 54);
    } else if (entrada.value == 'polegada' && saida.value === 'metro') {
        return (valor.value / 39, 37);
    } else if (entrada.value == 'metro' && saida.value === 'polegada') {
        return (valor.value * 39, 37);
    }
}

function convertePeso() {
    if (entrada.value == 'quilograma' && saida.value === 'grama') {
        return (valor.value * 1000);
    } else if (entrada.value == 'grama' && saida.value === 'quilograma') {
        return (valor.value / 1000);
    } else if (entrada.value == 'grama' && saida.value === 'libra') {
        return (valor.value / 453, 6);
    } else if (entrada.value == 'libra' && saida.value === 'grama') {
        return (valor.value * 453, 6);
    } else if (entrada.value == 'libra' && saida.value === 'quilogramas') {
        return (valor.value / 2, 205);
    } else if (entrada.value == 'quilograma' && saida.value === 'ligra') {
        return (valor.value * 2, 205);
    }
}

function converteTemperatura() {
    if (entrada.value == 'celsius' && saida.value === 'fahrenheit') {
        return (valor.value * 9 / 5) + 32;
    } else if (entrada.value == 'fahrenheit' && saida.value === 'celsius') {
        return (valor.value - 32) * 5 / 9;
    } else if (entrada.value == 'fahrenheit' && saida.value === 'kelvin') {
        return (valor.value - 32) + 5 / 9 + 273, 15;
    } else if (entrada.value == 'kelvin' && saida.value === 'fahrenheit') {
        return (valor.value - 273, 15) * 9 / 5 + 32;
    } else if (entrada.value == 'kelvin' && saida.value === 'celsius') {
        return (valor.value - 273, 15);
    } else if (entrada.value == 'celsius' && saida.value === 'kelvin') {
        return (valor.value + 273, 15);
    }
}
