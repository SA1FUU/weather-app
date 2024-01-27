const apiKey = "9252c4e3a127b1c704f9f2422a5a0063"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchInput = document.querySelector("input")
const form = document.querySelector("form")

const loader = document.querySelector(".load-cont")

const error = document.getElementById('error')

const showLoader = () => {
    loader.style.display = "block"
}

const hideLoader = () => {
    loader.style.display = "none"
}

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    showLoader()
    // HTML Contents
    document.querySelector('.temp').textContent = `${Math.floor(data.main.temp)}°C`
    document.querySelector('.city').textContent = data.name
    document.querySelector('.feels-like').textContent = `Feels Like ${Math.floor(data.main.feels_like)}°C`
    document.querySelector('.mausam').textContent = (data.weather[0].main)
    document.querySelector('.humidity').textContent = `${data.main.humidity} %`
    document.querySelector('.wind').textContent = `${data.wind.speed} Km/h`
    document.querySelector(".weather").style.display = "block"
    searchInput.value = ""
    hideLoader()
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (searchInput.value == "") {
        error.textContent = "*Enter City Name"
    }
    else {
        checkWeather(searchInput.value)
        error.textContent = ""
    }
})

window.addEventListener("load", () => {
    checkWeather('delhi')
})
