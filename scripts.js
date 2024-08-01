const convertButton = document.querySelector(".convert-button")
// função
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value 
    const currencyValueToConvert = document.querySelector(".currency-value-convert") // valor real
    const currencyValueToConverted = document.querySelector(".currency-value") // outras moedas

    const dolartoday = 5.2

    const convertValues = inputCurrencyValue / dolartoday

    // formando numeros.
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

    // formando numeros
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertValues)

    console.log(convertValues)
}


convertButton.addEventListener("click", convertValues)