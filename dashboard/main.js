const backgroundImageUrl = `https://api.unsplash.com/photos/random?orientation=landscape&query=stars&client_id=8w1xcVN4DJCbDeGnaYyd5G7Pm5SUo0Z6Iin6whsbGMg`

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=brooklyn&units=imperial&appid=ee6ef1d0cc5e33ea06a356b2822a10c7'

fetch(backgroundImageUrl)
    .then(res => {
        if (!res.ok) {
            throw Error('something went wrong')
        } return res.json() 
    })
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById('author').innerHTML = `📷: ${data.user.name}`
    })
    .catch(err => {
        console.error(err)
        document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMTgwODd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDk1MzE0ODc&ixlib=rb-1.2.1&q=80&w=1080")'
    })



const weatherDataHtml = weatherInput => {
    let {main, name, weather} = weatherInput
 
    document.getElementById('weather').innerHTML = `
        <div class='weather-icon-container'>
            <img src='http://openweathermap.org/img/wn/${weather.icon}@2x.png' >
        </div>
        <p class='temp'>${Math.round(main.feels_like)}°</p>
        <p class='city'>${name}</p>
    `
}

const fetchWeather = async (weatherLink) => {
    const res = await fetch(weatherLink)
    const data = await res.json()

    let weatherData = {
        main: data.main,
        name: data.name,
        weather: data.weather[0]
    }
    return weatherDataHtml(weatherData)
}

fetchWeather(weatherUrl)

const cryptoDataHtml = cryptoInput => {
    let { image, name, price } = cryptoInput

    document.getElementById('crypto-top').innerHTML = `
        <div class="coin-img">
            <img src="${image}">
        </div>
        <h3 class="crypto-title" id="title">
            ${name}
        </h3>
    `

    document.getElementById('crypto').innerHTML += `
        <p>Current price: ${price}</p>
    `
}

fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => res.json())
    .then(data => {

        let cryptoData = {
            image: data.image.small,
            name: data.name,
            price: data.market_data.current_price.usd
        }
        cryptoDataHtml(cryptoData) 
    })

// get time && display 

const getTime = () => {
    const time = new Date()

    document.getElementById('time').textContent = time.toLocaleTimeString('en-US', {
            hour12: true, hour: 'numeric', minute: 'numeric'
        })
}

setInterval(getTime, 1000);