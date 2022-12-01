let city = "Istanbul";

console.log(city);

let apiKey = "ac4a1a419b9842d43d9c98a1eb1a67ac";

let parent = document.querySelector("#templateTemp");

let lat = "";
let lon = "";
let tec;
let now = new Date();
let nameCity = "";

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
    .then((response) =>
    response.json().then ((data1)=> {
    
    console.log(data1);

    data1.forEach(datas => {
        lat = datas.lat;
        lon = datas.lon;
        nameCity = datas.name;

    });
    console.log(lat, lon);
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`) // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr
        .then((response) =>
        response.json().then ((data)=> {

	    let templatActual = `

        <div class="container py-5 h-100">

            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-8 col-lg-6 col-xl-4">

                <div class="card" style="color: #4B515D; border-radius: 35px;">
                <div class="card-body p-4">

                    <div class="d-flex">
                    <h6 class="flex-grow-1">${nameCity}</h6>
                    <h6>${now.getHours()}:${now.getMinutes()}</h6>
                    </div>

                    <div class="d-flex flex-column text-center mt-5 mb-4">
                    <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.list[0].main.temp}°C </h6>
                    <span class="small" style="color: #868B94">${data.list[0].weather[0].description}</span>
                    </div>

                    <div class="d-flex align-items-center">
                    <div class="flex-grow-1" style="font-size: 1rem;">
                        <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.list[0].wind.speed} km/h
                        </span></div>
                        <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> ${data.list[0].main.humidity}% </span>
                        </div>
                        <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> 0.2h </span>
                        </div>
                    </div>
                    <div>
                        <img src="../img/${data.list[0].weather[0].icon}.svg"
                        width="100px">
                    </div>
                    </div>

                </div>
                </div>

            </div>
            </div>

        </div>
 
            
        `;

        
/*         <div class="card-body">
        <div class="d-flex">
            <p>
                <img src="../img/${data.list[0].weather[0].icon}.svg" alt="" width="50px" />
            </p>
            <p class="card-text">${data.list[0].weather[0].description}</p>
        </div>

        <p><img src="../img/arrowUp.svg" alt="" width="16" />${data.list[0].main.temp_max} °C <img src="../img/arrowDown.svg" alt="" width="16" />${data.list[0].main.temp_min} °C</p>
        <div class="">
            <p class="display-1 card-title">${data.list[0].main.temp} °C</p>
            <p>T.ressentie ${data.list[0].main.feels_like} °C</p>
        </div>
    </div>
    
    
    
    
    <div>
        <p>${data.list[0].wind.speed}km/h</p>
    </div> */
        

	    parent.innerHTML = templatActual;

/*         parent.appendChild(element);
 */
        console.log(data.list[0].dt_txt);

    })
    ).catch(err => console.log('Erreur : ' + err))

    })
    ).catch(err => console.log('Erreur : ' + err));

