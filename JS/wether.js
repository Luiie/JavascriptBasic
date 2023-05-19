const API_KEY = "ccb89a268b47af9b3eec831c112120dc"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}º,`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Cannot find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)