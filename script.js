async function getWeather(){
    let city = document.getElementById("city").value;
    let apiKey = "2500295b1bd7abc0e280101266e3fe97";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{
        let response = await fetch(url);
        if(!response.ok)throw  new Error("City not found");
        let data = await response.json();

        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temp").textContent = Math.round(data.main.temp) +  "°C";
        document.getElementById("humidity").textContent = data.main.humidity + "%";
        document.getElementById("wind").textContent = data.wind.speed + "km/h";
    }catch (error) {
        document.getElementById("cityName").textContent = "Not Found";
        document.getElementById("temp").textContent = "--°C";
        document.getElementById("humidity").textContent = "--%";
        document.getElementById("wind").textContent = "-- km/h";
    }    
}