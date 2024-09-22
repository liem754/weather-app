const apiKey = "d2375e24153c67f07f0747e6e45cd1d6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector("#city");
const search = document.querySelector("#btn");

async function weather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".app__temp").innerHTML = data.main.temp + "&#186;C";
  document.querySelector(".app__city").innerHTML = data.name;
  document.querySelector(".humidity__number").innerHTML =
    data.main.humidity + " %";
  document.querySelector(".wind__number").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main === "Clear") {
    document.querySelector(".icon").src = "./images/clear.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".icon").src = "./images/rain.png";
  } else if (data.weather[0].main === "Clouds") {
    document.querySelector(".icon").src = "./images/clouds.png";
  } else if (data.weather[0].main === "Mist") {
    document.querySelector(".icon").src = "./images/mist.png";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".icon").src = "./images/snow.png";
  } else {
    document.querySelector(".icon").src = "./images/drizzle.png";
  }
}

search.addEventListener("click", () => {
  weather(city.value);
});
