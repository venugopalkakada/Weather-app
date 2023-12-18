// const searchbox= document.querySelector(".search input");
// const btnclk=document.querySelector(".search button");
// btnclk.addEventListener("click", ()=>{
//     var city = searchbox.value;


// var apiKey = 'e7a66db082a4abad9d2edb8986f6a4b8';
// var url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city +`&appid=${apiKey}`;
// // 'https://api.openweathermap.org/data/2.5/weather?name=' + city + `&appid={apikey}`;


// fetch(url, {
//     method: 'GET',
//     headers: {
//         'X-Api-Key': apiKey,
//         'Content-Type': 'application/json'
//     },
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok: ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(result => {
//         console.log(result);
//         document.querySelector(".temp").innerHTML = result.main.temp + "°C"; 
//         document.querySelector(".humidity").innerHTML = result.main.humidity + "%"; 
//         document.querySelector(".wind").innerHTML = result.wind.speed + "km/h"; 
//         document.querySelector(".city").innerHTML = city; 

//             // Log or use the variables as needed
//             console.log('Temperature:', result.temp);
//             console.log('Humidity:', result.humidity);
//             console.log('Wind:', result.wind_speed);
//         ;
//     })
//     .catch(error => {
//         console.error('Error:', error.message);
//     });
    
// })
const searchbox = document.querySelector(".search input");
const btnclk = document.querySelector(".search button");

btnclk.addEventListener("click", () => {
    var city = searchbox.value;
    var apiKey = 'e7a66db082a4abad9d2edb8986f6a4b8';
    var url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(result => {
            console.log(result);
            document.querySelector(".temp").innerHTML = Math.round(result.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
            document.querySelector(".wind").innerHTML = result.wind.speed + "km/h";
            document.querySelector(".city").innerHTML = city;
            document.querySelector(".min_temp").innerHTML = "Min_temp: " + Math.round(result.main.temp_min) + "°C" ;
            document.querySelector(".max_temp").innerHTML = "Max_temp: " +Math.round(result.main.temp_max)+ "°C";
            document.querySelector(".feels_like").innerHTML = "Feels Like: " + result.main.feels_like + "°C";
            document.querySelector(".date").innerHTML = "Date: " + result.dt;
            document.querySelector(".time").innerHTML = "Time: " + result.timezone;
            document.querySelector(".long").innerHTML = "Longitude: " + result.coord.lon+",";
            document.querySelector(".lati").innerHTML = "Latitude: " + result.coord.lat;
            document.querySelector(".humid1").innerHTML = "Humidity: " + result.main.humidity;
            document.querySelector(".pressure").innerHTML = "Pressure: " + result.main.pressure +"bars";
            document.querySelector(".speed").innerHTML = "Speed: " + result.wind.speed+ "kmph";
            document.querySelector(".deg").innerHTML = "Degree: " + result.wind.deg + "°";
            if (result.weather[0].main === "Clouds"){
                    const cloud= document.querySelector(".weathericon");
                    console.log(cloud);
                    cloud.src= "cloud.png";
                }
                else if (result.weather[0].main === "Mist"||"Haze"){
                    const mist= document.querySelector(".weathericon")
                    mist.src= "mist.png";
                }
                    else if (result.weather[0].main === "Smoke"){
                        const smoke= document.querySelector(".weathericon")
                        smoke.src= "smog.png";
                        }else if (result.weather[0].main === "Clear"|| "Sunny"){
                            const sunny= document.querySelector(".weathericon")
                            sunny.src= "sunny.png";
                            }else if (result.weather[0].main === "moon"){
                                const moon = document.querySelector(".weathericon")
                                moon.src= "moon.png";
                                }
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
       
});
