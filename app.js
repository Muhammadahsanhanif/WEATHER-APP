const apikey ="c153479685c47f1b34a83591f3b1acbe";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox =document.querySelector('.seacrh input')
const searchbtn =document.querySelector('.seacrh button')
const weathericon =document.querySelector('.weather-icon')



async function cheakweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
  

    var data =  await response.json();
    console.log(data)
    document.querySelector('.city') .innerHTML = data.name
    document.querySelector('.temp') .innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector('.humidity') .innerHTML = data.main.humidity + "%"
    document.querySelector('.wind') .innerHTML = data.wind.speed + "km/h"

    if(data.weather[0].main==clouds){
        weathericon.src="image/clouds.png"
    }else if(data.weather[0].main==clear){
        weathericon.src="image/clear.png"


    }else if(data.weather[0].main==rain){
        weathericon.src="image/rain.png"

    }else if(data.weather[0].main==drizzle){
        weathericon.src="image/drizzle.png"


    }else if(data.weather[0].main==mist){
        weathericon.src="image/mist.png"


    }
    // document.querySelector(".weather").style.display = "block";

    


}
searchbtn.addEventListener("click",()=>{
    cheakweather(searchbox.value)
})
