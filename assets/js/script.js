const app = {
    init: () => {
        
        document.addEventListener('click', app.fetchWeather);

},
fetchWeather: () => {
    let city = document.getElementById('addCity').value;
let search = $('#searchButton');
    let key = 'b0c8bb28d93f9d08fb9250393ad62966';
    let lang = 'en';
    let units = 'imperial';

    // fetch(url)
    // .then((resp) => {
    //     if (!resp.ok) throw new Error(resp.statusText);
    //     return resp.json();
    //   })
    //   .then((data) => {
    //     app.showWeather(data);
    //   })
    //   .catch(console.err);
      search.click(function () {
          var searchForm = $('.form-control').val();
          var forecastUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + searchForm + "&appid=" + key + "&units=units";
          if (searchForm == "") {
            console.log(searchForm);
        } $.ajax({
            url: forecastUrl,
            method: "GET"
        }).then(function (response) {
            var cityName = $(".list-group").addClass("list-group-item").removeClass("d-none");
            cityName.append("<li>" + response.name + "</li>");
        
            // var local = localStorage.setItem(cityCountTotal, response.name);
            cityCountTotal += 1;
      },
},

},
}
app.init();