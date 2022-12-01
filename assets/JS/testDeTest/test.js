/* for (const tec in data.hourly) {	
    hour = data.hourly[tec].temp;
    templat = `
    <strong class="d-block mb-2" id="wrapper-time1"></strong>
    <img id="wrapper-icon-hour1" src="" class="" alt="" />
    <strong class="d-block" id="wrapper-hour1"></strong>
    `;

    let iconHour = data.hourly[1].weather[0].icon;
    let iconFullyUrlHourTemplat = iconBaseUrl + iconHour + iconFormat;
    document.getElementById("wrapper-icon-hour-templat").src = iconFullyUrlHourTemplat;
    console.log(hour);
} */

// API call
let city = "Istanbul";
let apiKeys = "ac4a1a419b9842d43d9c98a1eb1a67ac";
let nameCity = "";

let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?"; // https://api.openweathermap.org/data/2.5/onecall?
let lat = "";
let lon = "";
let apiOptions = "lang=fr&units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e"; // ac4a1a419b9842d43d9c98a1eb1a67ac




/* TESTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT */

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKeys}`)
    .then((response) =>
    response.json().then ((data1)=> {
    
    console.log(data1);

    data1.forEach(datas => {
        lat = "lat=" + datas.lat + "&";
        lon = "lon=" + datas.lon + "&";
        nameCity = datas.name;
    });
    console.log(lon);
    let file = queryUrl + lat + lon + apiOptions + apiKey;
        /* EnnnnnnndddTESTTTTTTTTTTTTTTTTTTTTTT */
    console.log(file);
fetch(file)
    .then((response) =>
    response.json()).then((data) => {
    // Weather main data
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;


    console.log(data);

    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
    document.getElementById("wrapper-name").innerHTML = nameCity;

    // Weather hourly data
    let hour;

    for (const tec in data.hourly) {	
        hour = data.hourly[tec].temp;
        templat = `
        <strong class="d-block mb-2" id="wrapper-time1"></strong>
        <img id="wrapper-icon-hour1" src="" class="" alt="" />
        <strong class="d-block" id="wrapper-hour1"></strong>
        `;

        let iconHour = data.hourly[1].weather[0].icon;
        let iconFullyUrlHourTemplat = iconBaseUrl + iconHour + iconFormat;
        document.getElementById("wrapper-icon-hour-templat").src = iconFullyUrlHourTemplat;
        document.getElementById("wrapper-hour1").innerHTML = hour + "°C";
        document.getElementById("wrapper-time1").innerHTML = time1;
        console.log(hour);
    }
    let hourNow = data.hourly[0].temp;

    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°C";
    

    // Time
    let timeNow = new Date().getHours();
    let time1 = timeNow + 1;
    let time2 = time1 + 1;
    let time3 = time2 + 1;
    let time4 = time3 + 1;
    let time5 = time4 + 1;




    // Weather daily data
    let tomorrowTemp = Math.round(data.daily[0].temp.day);
    let dATTemp = Math.round(data.daily[1].temp.day);
    let tomorrowMain = data.daily[0].weather[0].main;
    let dATTempMain = data.daily[1].weather[0].main;

    document.getElementById("wrapper-forecast-temp-today").innerHTML =
    temp + "°C";
    document.getElementById("wrapper-forecast-temp-tomorrow").innerHTML =
    tomorrowTemp + "°C";
    document.getElementById("wrapper-forecast-temp-dAT").innerHTML =
    dATTemp + "°C";

    // Icons
    let iconBaseUrl = "../../img/";
    let iconFormat = ".svg";

    // Today
    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

    // Tomorrow
    let iconCodeTomorrow = data.daily[0].weather[0].icon;
    let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
    document.getElementById(
    "wrapper-icon-tomorrow"
    ).src = iconFullyUrlTomorrow;

    // Day after tomorrow
    let iconCodeDAT = data.daily[1].weather[0].icon;
    let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
    document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

    // Icons hourly

    // Hour now
    let iconHourNow = data.hourly[0].weather[0].icon;
    let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
    document.getElementById(
    "wrapper-icon-hour-now"
    ).src = iconFullyUrlHourNow;

    // Hour1
    let iconHour1 = data.hourly[1].weather[0].icon;
    let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
    document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

    // Backgrounds
    switch (main) {
    case "Snow":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
    break;
    case "Clouds":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://www.adventurebikerider.com/wp-content/uploads/2017/10/tumblr_o27c7fByaO1tchrkco1_500.gif')";
    break;
    case "Fog":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
    break;
    case "Rain":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
    break;
    case "Clear":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
    break;
    case "Thunderstorm":
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://i.gifer.com/Rnim.gif')";
    break;
    default:
    document.getElementById("wrapper-bg").style.backgroundImage =
    "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
    break;
    }
});
})
).catch(err => console.log('Erreur : ' + err));