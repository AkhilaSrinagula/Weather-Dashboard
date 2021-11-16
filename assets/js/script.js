$(document).ready(function () {
  var searchedCities = [];
  var searchButton = $("#searchButton");
  var inputCity = $("#addCity");
  var temperature = $("#temp");
  var wind = $("#wind");
  var humidity = $("#humidity");
  var fiveDayTemp = $("#tempOne");
  var fiveDayHumid = $("#humidOne");
  var fiveDayWind = $("#windOne");
  var fiveDayTemp2 = $("#tempTwo");
  var fiveDayHumid2 = $("#humidTwo");
  var fiveDayWind2 = $("#windTwo");
  var fiveDayTemp3 = $("#tempThree");
  var fiveDayHumid3 = $("#humidThree");
  var fiveDayWind3 = $("#windThree");
  var fiveDayTemp4 = $("#tempFour");
  var fiveDayHumid4 = $("#humidFour");
  var fiveDayWind4 = $("#windFour");
  var fiveDayTemp5 = $("#tempFive");
  var fiveDayHumid5 = $("#humidFive");
  var fiveDayWind5 = $("#windFive");
  var currentUV = $("#uvIndex");
  var icon = $("#weatherIcon")

  loadcityName();

  searchButton.click(function () {
    console.log(inputCity.val());
    var city = inputCity.val();
    var getWeatherApi =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=b0c8bb28d93f9d08fb9250393ad62966&units=imperial";
    fetch(getWeatherApi)
      .then((response) => response.json())
      .then(function (data) {
        console.log("This is Data", data);
        icon.text(data.weather[0].icon);
        console.log(data.weather[0].icon);
        temperature.text("Temp: " + data.main.temp);
        console.log(data.main.temp);
        wind.text("Wind: " + data.wind.speed);
        console.log(data.wind.speed);
        humidity.text("Humidity: " + data.main.humidity);
        console.log(data.main.humidity);
        currentCity.text(data.name + currentDay);
        console.log(data.name + currentDay);
      });
  });

  var currentCity = $("#currentDay");

  searchButton.click(function () {
    console.log(inputCity.val());
    var fiveDayForecastApi =
      "https://api.openweathermap.org/data/2.5/onecall?lat=30.2672&lon=-97.7431&appid=b0c8bb28d93f9d08fb9250393ad62966&units=imperial";
    fetch(fiveDayForecastApi)
      .then((response) => response.json())
      .then(function (data) {
        console.log(data);
        data = {
          daily: [
            fiveDayTemp.text("Temp: " + data.daily[0].temp.max),
            console.log(data.daily[0].temp.max),
            fiveDayHumid.text("Humidity: " + data.daily[0].humidity),
            console.log(data.daily[0].humidity),
            fiveDayWind.text("Wind: " + data.daily[0].wind_speed),
            console.log(data.daily[0].wind_speed),

            fiveDayTemp2.text("Temp: " + data.daily[1].temp.max),
            console.log(data.daily[1].temp.max),
            fiveDayHumid2.text("Humidity: " + data.daily[1].humidity),
            console.log(data.daily[1].humidity),
            fiveDayWind2.text("Wind: " + data.daily[1].wind_speed),
            console.log(data.daily[1].wind_speed),

            fiveDayTemp3.text("Temp: " + data.daily[2].temp.max),
            console.log(data.daily[2].temp.max),
            fiveDayHumid3.text("Humidity: " + data.daily[2].humidity),
            console.log(data.daily[2].humidity),
            fiveDayWind3.text("Wind: " + data.daily[2].wind_speed),
            console.log(data.daily[2].wind_speed),

            fiveDayTemp4.text("Temp: " + data.daily[3].temp.max),
            console.log(data.daily[3].temp.max),
            fiveDayHumid4.text("Humidity: " + data.daily[3].humidity),
            console.log(data.daily[3].humidity),
            fiveDayWind4.text("Wind: " + data.daily[3].wind_speed),
            console.log(data.daily[3].wind_speed),

            fiveDayTemp5.text("Temp: " + data.daily[4].temp.max),
            console.log(data.daily[4].temp.max),
            fiveDayHumid5.text("Humidity: " + data.daily[4].humidity),
            console.log(data.daily[4].humidity),
            fiveDayWind5.text("Wind: " + data.daily[4].wind_speed),
            console.log(data.daily[4].wind_speed),

            currentUV.text("UV Index: " + data.current.uvi),
            console.log(data.current.uvi),
          ],
        };
      });
  });

  //
  function loadcityName() {
    searchedCities = JSON.parse(localStorage.getItem("lscityName"));
    if (searchedCities) {
      weatherData(searchedCities[searchedCities.length - 1]);
    } else {
      searchedCities = [];
    }
  }
  //Dynamically building City List under search box
  function citySearchList() {
    $("#cityList").empty();
    var count = 0;
    for (var i = searchedCities.length - 1; i >= 0; i--) {
      if (count++ < 9) {
        var newBtn = $("<button>")
          .attr("class", "listBtn btn")
          .attr("city-name", searchedCities[i])
          .text(searchedCities[i]);
        $("#cityList").append(newBtn);
      }
    }
    $(".listBtn").on("click", function (event) {
      var city = $(this).text();
      weatherData(city);
    });
  }
  function saveCity() {
    localStorage.setItem("lscity", JSON.stringify(searchedCities));
  }

  // Loads city on refresh only add cities if not in the list
  function weatherData(cityName) {
    $("#addcityName").val("");
    if (searchedCities.includes(cityName) === false) {
      searchedCities.push(cityName);
      saveCity();
    }
    citySearchList();
    weatherToday(cityName);
    forecastDeck(cityName);
  }

  var currentDay = moment().format("l");
  $("#currentDay").text(currentDay);

  var dayOne = moment().add(1, "days").format("l");
  $("#dayOne").text(dayOne.slice(0, 10));

  var dayTwo = moment().add(2, "days").format("l");
  $("#dayTwo").text(dayTwo.slice(0, 10));

  var dayThree = moment().add(3, "days").format("l");
  $("#dayThree").text(dayThree.slice(0, 10));

  var dayFour = moment().add(4, "days").format("l");
  $("#dayFour").text(dayFour.slice(0, 10));

  var dayFive = moment().add(5, "days").format("l");
  $("#dayFive").text(dayFive.slice(0, 10));
});
