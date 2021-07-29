const API_KEY = "84568337e093cfffb91cd24d242ec6ef";
const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?";

const weather = $(".js-weather .weather__text");

function getWeather(coords) {
  fetch(
    `${WEATHER_API}lat=${coords.lat}&lon=${
      coords.lng
    }&appid=${API_KEY}&units=metric`
  )
    .then(response => response.json())
    .then(json => {
      const name = json.name;
      const temperature = json.main.temp;
      const totaltemp = Math.floor(temperature) +'° @'+ name;
      weather.text(totaltemp);
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("no location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.watchPosition(//getCurrent 위치고정?
      handleGeoSuccess,                 //watchPosition 위치가 바뀔때마다.
      handleGeoFailure,
    );
  }
}

function init() {
  loadWeather();
}

init();
