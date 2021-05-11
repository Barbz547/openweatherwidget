//document.body.style.backgroundImage = "url(background.png)";
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var high = document.querySelector('.high');
var low = document.querySelector('.low');
var feels_like = document.querySelector('.feels_like');
var humidity = document.querySelector('.humidity');

button.addEventListener ('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=9046771f3ddc07e3401ccb526c3873be')
    .then(response =>response.json())
    .then(data => {
        console.log(data);
        var tempData = ((data["main"]["temp"]-273.15)*1.8)+32;
        var highData = ((data["main"]["temp_max"]-273.15)*1.8)+32;
        var lowData = ((data["main"]["temp_min"] - 273.15) * 1.8) + 32;
        var feels_likeData = ((data["main"]["feels_like"] - 273.15) * 1.8) + 32;
        var humidityData = data["main"]["humidity"];


        temp.innerHTML = "Current temp:" + tempData;
        high.innerHTML = "High:" + highData;
        low.innerHTML = "Low:" + lowData;
        feels_like.innerHTML = "Feels like:" + feels_likeData;
        humidity.innerHTML = "Humidity:" + humidityData;
        
    })

//.catch err =>alert("Wrong city name!");
})