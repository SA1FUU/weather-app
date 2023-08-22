const apiKey = "9252c4e3a127b1c704f9f2422a5a0063"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const rainyIcon = document.querySelector(".rainy")
const sunnyIcon = document.querySelector(".sunny")
const cloudyIcon = document.querySelector(".cloudy")
const mistyIcon = document.querySelector(".misty")
const thunderIcon = document.querySelector(".thunder")


const searchInput = document.querySelector("input")
const searchButton = document.querySelector(".search img")



searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.querySelector(".search img").click();
    }
});


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json()
    // console.log(data.main.feels_like);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".feels-like").innerHTML ="Feels Like " + Math.round(data.main.feels_like) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".mausam").innerHTML = data.weather[0].main

    if (data.weather[0].main === "Haze") {
        sunnyIcon.style.display = "block"
        rainyIcon.style.display = "none"
        cloudyIcon.style.display = "none"
        mistyIcon.style.display = "none"
        thunderIcon.style.display = "none"
    }
    else if (data.weather[0].main === "Clouds") {
        cloudyIcon.style.display = "block"
        rainyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
        mistyIcon.style.display = "none"
        thunderIcon.style.display = "none"
    }
    else if (data.weather[0].main === "Mist") {
        mistyIcon.style.display = 'block'
        cloudyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
        rainyIcon.style.display = "none"
        thunderIcon.style.display = "none"
    }
    else if (data.weather[0].main === "Rain") {
        rainyIcon.style.display = "block"
        mistyIcon.style.display = 'none'
        cloudyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
        thunderIcon.style.display = "none"
    }
    else if (data.weather[0].main === "Thunderstorm") {
        thunderIcon.style.display = "block"
        rainyIcon.style.display = "none"
        mistyIcon.style.display = 'none'
        cloudyIcon.style.display = "none"
        sunnyIcon.style.display = "none"
    }
    else {
        rainyIcon.style.display = "none"
        mistyIcon.style.display = 'none'
        cloudyIcon.style.display = "block"
        sunnyIcon.style.display = "none"
        thunderIcon.style.display = "none"
    }
    document.querySelector(".weather").style.display = "block"

}

searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value)
    searchInput.value = ""
})

const reload = document.querySelector(".reload")

reload.addEventListener("click", () => {
    location.reload()
})
