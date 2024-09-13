const apiKey = '708dfc9e950728dbfb260d117efb162c'; // Replace with your actual API key

function getWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter a location!');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById('errorMessage').classList.remove('hidden');
                document.getElementById('weatherResult').classList.add('hidden');
            } else {
                document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = data.main.temp;
                document.getElementById('wind').textContent = data.wind.speed;
                document.getElementById('humidity').textContent = data.main.humidity;

                document.getElementById('weatherResult').classList.remove('hidden');
                document.getElementById('errorMessage').classList.add('hidden');
            }
        })
        .catch(() => {
            document.getElementById('errorMessage').classList.remove('hidden');
            document.getElementById('weatherResult').classList.add('hidden');
        });
}
