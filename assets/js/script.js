$(document).ready(function () {
  var cityName = "";
  var searchHistoryList = document.querySelector("#searchHistoryList");
  var searchedCities = [];
  var searchButton = $("searchButton");

loadcityName();
function loadcityName() {
  searchedCities = JSON.parse(localStorage.getItem("lscityName"));
  if (searchedCities) {
    weatherData(searchedCities[searchedCities.length - 1])
  } else {
    searchedCities = [];
  }
}
//Dynamically building City List under search box
function citySearchList() {
  $("#cityList").empty();
  var count = 0;
  for (var i = searchedCities.length-1; i >= 0; i--) {
    if (count++ < 9) {
      var newBtn = $("<button>").attr("class", "listBtn btn").attr("city-name", searchedCities[i]).text(searchedCities[i]);
    $("#cityList").append(newBtn);
    }
  }
  $(".listBtn").on("click", function (event) {
    var cityName = $(this).text();
    weatherData(cityName);
  })
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

  var currentDay = moment().format("MMMM Do, YYYY");
  $("#currentDay").text(currentDay);

  var dayOne = moment().add(1, "days").format("l");
  $("#dayOne").text(dayOne.slice(0, 9));

  var dayTwo = moment().add(2, "days").format("l");
  $("#dayTwo").text(dayTwo.slice(0, 9));

  var dayThree = moment().add(3, "days").format("l");
  $("#dayThree").text(dayThree.slice(0, 9));

  var dayFour = moment().add(4, "days").format("l");
  $("#dayFour").text(dayFour.slice(0, 9));

  var dayFive = moment().add(5, "days").format("l");
  $("#dayFive").text(dayFive.slice(0, 9));


  document.getElementById("searchButton").addEventListener("click", function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=b0c8bb28d93f9d08fb9250393ad62966')
    .then(response => response.json())
    .then(function(data){
  
  
      console.log(data)
  
  
  
      
    });
  
  });

  });



