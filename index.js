var largeDisplay = document.querySelector('.large-text-display');
var smallDisplay = document.querySelector('.small-text-display');

function numberToDisplay(number) {
    var limitOfText = 5;

    var onScreen = largeDisplay.innerText;

    var result = onScreen + number
    var displayLimited = result.substring(0, limitOfText)
    largeDisplay.innerText = displayLimited
}

// innerText/innerHTML = limpa o conteúdo que está no elemento e insere o que você
// passa como valor

// substring corta desde o primeiro indice até o último
// uma string, por exemplo, possui alguns parâmetros, como ".length" que retorna o tamanho da string

// abcd = abc - d = abc

function clearNumber() {
    var len = largeDisplay.innerText.length - 1
    var displaySubstring = largeDisplay.innerText.substring(0, len)
    largeDisplay.innerText = displaySubstring
}

function clearNumberAll() {
    largeDisplay.innerText = null
    smallDisplay.innerText = null
}

// Vai ter que pegar os valores que você inseriu antes de clicar +
// Pegar os valores após o +
// Somar os dois e escrever na tela

function newOperation(symbol) {
    var onScreen = largeDisplay.innerText;
    
    var len = smallDisplay.innerText.length - 1
    var number = smallDisplay.innerText.substring(0, len)

    var result = onScreen
    if (number.length > 0) {
        result = number
    } else {
        largeDisplay.innerHTML = null
    }

    smallDisplay.innerHTML = result + symbol
}

function calculate() {
    var len = smallDisplay.innerText.length - 1
    var numberSmall = Number(smallDisplay.innerText.substring(0, len))
    var numberLarge = Number(largeDisplay.innerText)
    var symbol = smallDisplay.innerText.split('').pop()
    var result;
    switch (symbol) {
        case '+':
            result = numberSmall + numberLarge
            break;
        case '-':
            result = numberSmall - numberLarge
            break
        case 'x':
            result = numberSmall * numberLarge
            break
        case '/':
            result = numberSmall / numberLarge
            break
        default:
            throw new Error('Não possui operador matemático')
    }
    largeDisplay.innerText = result.toFixed(2)
    smallDisplay.innerText = null
}
