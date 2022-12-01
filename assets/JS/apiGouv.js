let city = "istanbul";

console.log(city);

let apiKey = "ac4a1a419b9842d43d9c98a1eb1a67ac";

let parent = document.querySelector("#templateTemp");

let lat = "";
let lon = "";
let tec;

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
    .then((response) =>
    response.json().then ((data1)=> {
    
    console.log(data1);

    data1.forEach(datas => {
        lat = datas.lat;
        lon = datas.lon;

    });

    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`) // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr
        .then((response) =>
        response.json().then ((data)=> {

	    let templatActual = `
            <img src="../img/${data.list[0].weather[0].icon}.svg" alt="" width="50" />
            <p class="card-text">${data.list[0].weather[0].description}</p>

            <p><img src="../img/arrowUp.svg" alt="" width="16" />${data.list[0].main.temp_max} °C <img src="../img/arrowDown.svg" alt="" width="16" />${data.list[0].main.temp_min} °C</p>
            <div class="card-body"><p class="h1 card-title">${data.list[0].main.temp} °C</p>
                <p>T.ressentie ${data.list[0].main.feels_like} °C</p>
            </div>
            
            
            
            
            <div>
                <p>${data.list[0].wind.speed}km/h</p>
            </div>
            
        `;

        

        

	    parent.innerHTML = templatActual;

/*         parent.appendChild(element);
 */
        console.log(data.list[0].dt_txt);

    })
    ).catch(err => console.log('Erreur : ' + err))

    })
    ).catch(err => console.log('Erreur : ' + err));

