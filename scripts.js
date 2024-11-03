//exchange rates of currencies.
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

//manipulating the input amount to receive only numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})


//capturing the submit event of the form.
form.onsubmit = (event) => {
    event.preventDefault()
    switch(currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

//function to convert currency.
function convertCurrency(amount, price, symbol) {
    try {
        //displaying the exchange rate of the selected currency.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calculate the total.
        let total = amount*price
        total = formatCurrencyBRL(total).replace("R$", "")
        
        //display the total result.
        result.textContent = `${total} Reais`

        //applies the class that displays the footer to show the result.
        footer.classList.add("show-result")
    } catch (error) {
        //removes the footer class by hiding it.
        footer.classList.remove("show-result")
        console.log(error)
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

//Format the currency in BRL.
function formatCurrencyBRL(value){
    /*convert the value called by the function to a number to use toLocaleString to format it in the BRL pattern
    (R$ 00,00).*/
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}







