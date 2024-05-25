
const apikey = "0b6f17360337e4bda1432c523550c65f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";

}

function setWeatherImg(weather){
    switch(weather){
        case "Clear":
            weatherIcon.setAttribute("src","./assert/sunny.png");
            break;
        case "Cloud" :
            weatherIcon.setAttribute("src","./assert/clouds-icon.jpg");
            break; 
        case "rain" :
            weatherIcon.setAttribute("src","./assert/rain-cloud.jpg");
            break;
        case "sun cloud" :
            weatherIcon.setAttribute("src","./assert/sun-with-cloud.jpeg");
            break; 

    }

}


searchbtn.addEventListener("click", () => {
    if(searchbox.value == ""){
        alert("Please enter city name");
    }
    else if(searchbox.value == ("A" <= searchbox <= "Z" && 0 <= searchbox <= 9 )){
        alert("Alphanumeric is not allowed");
    }
    checkweather(searchbox.value);

})

searchbtn.addEventListener("mouseover" , () => {
    searchbtn.setAttribute("class" , "btn");
})
searchbtn.addEventListener("mouseout" , () => {
    searchbtn.setAttribute("class" , " ");
})
