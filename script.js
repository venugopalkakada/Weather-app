const searchbox= document.querySelector(".search input");
const btnclk=document.querySelector(".search button");
btnclk.addEventListener("click", ()=>{
    var city = searchbox.value;


var apiKey = '0s/41jBqvuSLULglL7Higw==JaX6rWGPMoiNs6MF';
var url = 'https://api.api-ninjas.com/v1/weather?city=' + city;

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    },
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(result => {
        console.log(result);
        document.querySelector(".temp").innerHTML = result.temp + "°C"; 
        document.querySelector(".humidity").innerHTML = result.humidity + "%"; 
        document.querySelector(".wind").innerHTML = result.wind_speed + "km/h"; 
        document.querySelector(".city").innerHTML = city; 

            // Log or use the variables as needed
            console.log('Temperature:', result.temp);
            console.log('Humidity:', result.humidity);
            console.log('Wind:', result.wind_speed);
        ;
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
    
})