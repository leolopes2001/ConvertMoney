const dolar = 5.54
const euro = 6.28
const bitcoin = 0.0000036
const conversion_type = document.getElementById('converting')
const button = document.getElementById('button')
const paragraph = document.getElementById('converted_value')

const convertValues = (type) => {
    const real_value = document.getElementById('real_value').value
    const paragraph = document.getElementById('converted_value')
    const real = document.getElementById('real')

    if (type === "€ Euro" || conversion_type.value === "€ Euro") {
        const converted_euro = real_value / euro

        real.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(real_value);

          paragraph.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          }).format(converted_euro);
        }

    if(type === "US$ Dólar americano" || conversion_type.value === "US$ Dólar americano"){
        const converted_dolar = real_value / dolar

        real.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(real_value);

        paragraph.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(converted_dolar);
    }

    if(type === "Bitcoin" || conversion_type.value === "Bitcoin"){
        const converted_bitcoin = real_value * bitcoin

        real.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(real_value);

          paragraph.innerHTML = `${converted_bitcoin}`
    }

}

button.addEventListener('click', convertValues)

conversion_type.addEventListener('change', () => {
    const currency_name = document.getElementById("currency_name")
    const img_currency = document.getElementById("img_currency")

    if(conversion_type.value === "€ Euro"){
        currency_name.innerHTML = `€ Euro`

        img_currency.setAttribute('src', 'euro.png')

    }else if(conversion_type.value === "US$ Dólar americano"){
        currency_name.innerHTML = `US$ Dólar americano`

        img_currency.setAttribute('src', 'usa.png')

    }else if(conversion_type.value === "Bitcoin"){
        currency_name.innerHTML = 'Bitcoin'

        img_currency.setAttribute('src', 'bitcoin.png')
    }
    convertValues(conversion_type.value)
})

