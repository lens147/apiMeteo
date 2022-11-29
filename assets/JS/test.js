let city = "lyon";

let apiKey = "ac4a1a419b9842d43d9c98a1eb1a67ac";

fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
    .then((response) =>
    response.json().then ((data)=> {

    data.forEach(datas => {
        let lat = datas.lat;
        let lon = datas.lon;
        console.log(lat, lon);
    });

    })
    ).catch(err => console.log('Erreur : ' + err))