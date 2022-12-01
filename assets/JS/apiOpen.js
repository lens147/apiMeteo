import { LatLon } from './Class.apiKey.js'

let apiKey = "c78ded9528d1fa11fe3c314dd38df969"; //ac4a1a419b9842d43d9c98a1eb1a67ac


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${apiKey}`)
    .then((response) =>
    response.json().then ((data)=> {

    data.forEach(datas => {
        let lats = datas;
        console.log(lats);
    });

    })
    ).catch(err => console.log('Erreur : ' + err))