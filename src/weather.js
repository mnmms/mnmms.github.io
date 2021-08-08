import "./styles.css";

const API_KEY = "bc218d4dbadb5ccc45105b24de39d80d";

const onGerOk = (position) => {
  const { latitude, longitude } = position.coords;
  // console.log("You live in", latitude, longitude);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("div#weather span:first-child");
      const city = document.querySelector("div#weather span:last-child");
      weather.innerText = `${data.weather[0].main}`;
      city.innerText = data.name;
    });
};

const onGeoError = () => {
  console.error("Error");
};

navigator.geolocation.getCurrentPosition(onGerOk, onGeoError);
