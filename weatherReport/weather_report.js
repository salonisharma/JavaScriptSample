function showweatherDetails(event) {
      //event.preventDefault();
      debugger;
       const city = document.getElementById('city').value;
       console.log(city);
      const apiKey = 'bcf1e9b22656d5ca94dc0900bcbe8307'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })

         //document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );