const API_KEY = ""

function onGeoOk(position) {
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
}

function onGeoError() {
    alert("Cannot find you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)