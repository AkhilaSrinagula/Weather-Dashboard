const app = {
    init: () => {
        document.getElementById('searchButton');
        document.addEventListener('click', app.fetchWeather);

},
fetchWeather: () => {
    let city = document.getElementById('addCity').value;
    let key = 'b0c8bb28d93f9d08fb9250393ad62966';
    let lang = 'en';
    let units = 'metric';
    let url = `http://api.openweathermap.org/data/2.5/onecall?city=${city}&appid=${key}&units=${units}&lang=${lang}`;
    fetch(url)
    .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
    //   .then((data) => {
    //     app.showWeather(data);
    //   })
      .catch(console.err);
},

}

app.init();