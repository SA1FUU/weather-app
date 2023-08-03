const apiKey = "9252c4e3a127b1c704f9f2422a5a0063"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const rainyIcon = document.querySelector(".rainy")
const sunnyIcon = document.querySelector(".sunny")
const cloudyIcon = document.querySelector(".cloudy")
const mistyIcon = document.querySelector(".misty")


const searchInput = document.querySelector("input")
const searchButton = document.querySelector(".search img")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main === "Haze"){
        sunnyIcon.style.display = "block"
        rainyIcon.style.display = "none"
        cloudyIcon.style.display = "none"
    }
    else if(data.weather[0].main === "Clouds"){
        cloudyIcon.style.display = "block"
        rainyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
        mistyIcon.style.display = "none"
    }
    else if(data.weather[0].main === "Mist"){
        mistyIcon.style.display = 'block'
        cloudyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
        rainyIcon.style.display = "none"
    }
    else{
        rainyIcon.style.display = "block"
        mistyIcon.style.display = 'none'
        cloudyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
    }
    document.querySelector(".weather").style.display = "block"
}

searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value)
    searchInput.value = ""
})

