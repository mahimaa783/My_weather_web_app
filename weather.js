const apiKey="ca4eb61cf30dd18ea8e3693409f2594d";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".searchBtn");
const weather_icon=document.querySelector(".weather_icon");


async function checkWeather(city){
    const response=await fetch(apiURL + city +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".windSpeed").innerHTML=data.wind.speed+" km/hr";

    if(data.weather[0].main=="Clouds"){
        weather_icon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="clear"){
        weather_icon.src="images/clear.png";
    }
    else if(data.weather[0].main=="drizzle"){
        weather_icon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="mist"){
        weather_icon.src="images/mist.png";
    }
    else if(data.weather[0].main=="snow"){
        weather_icon.src="images/snow.png";
    }
    else if(data.weather[0].main=="rain"){
        weather_icon.src="images/rain.png";
    }

    document.querySelector(".weather").style.display="block";
    }
    

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})