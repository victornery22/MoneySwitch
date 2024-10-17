const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

let convertedValue = 0;
async function convertValues() {
    const inputTypingValue = document.querySelector(".input-typing").value;
    const currencyValueConvert = document.querySelector(".currency-value-convert");
    const currencyValue = document.querySelector(".currency-value");

   const data = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
   const dolarToday =  data.USDBRL.high;
   const euroToday =  data.EURBRL.high;
   const bitcoinToday = data.BTCBRL.high;
   
    // Conversão para Dólar
    if (currencySelect.value === "dolar") {
        convertedValue = inputTypingValue / dolarToday;
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }
    // Conversão para Euro
    else if (currencySelect.value === "euro") {
        convertedValue = inputTypingValue / euroToday;
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }
    // Conversão para Bitcoin
    else if (currencySelect.value === "bitcoin") {
        convertedValue = inputTypingValue / bitcoinToday;
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC", 
            minimumFractionDigits: 8 // Para formatar até 8 casas decimais
        }).format(convertedValue);
    }

    // Exibição do valor digitado em Real (BRL)
    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputTypingValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    // Mudança para Dólar
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/Dolar.png";
    }
    // Mudança para Euro
    else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/Euro.png";
    }
    // Mudança para Bitcoin
    else if (currencySelect.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin 1.png";
    }

    convertValues(); // Atualiza os valores ao mudar a moeda
}

// Event listeners para mudanças e cliques
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
