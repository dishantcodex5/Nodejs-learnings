// weather.cjs
const https = require('https');
const readline = require('readline');

// Get a VALID free API key from https://openweathermap.org/
const API_KEY = '88f45dabd3d87f0a086c350ff752ffb0'; // Replace this with your actual key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getWeather(city) {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    
    console.log('\nFetching weather data for', city + '...');
    
    https.get(url, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            try {
                const weatherData = JSON.parse(data);
                
                if (weatherData.cod === 200) {
                    console.log('\n=== Weather Information ===');
                    console.log(`📍 City: ${weatherData.name}, ${weatherData.sys.country}`);
                    console.log(`🌡️ Temperature: ${weatherData.main.temp}°C (Feels like ${weatherData.main.feels_like}°C)`);
                    console.log(`☁️ Weather: ${weatherData.weather[0].main} (${weatherData.weather[0].description})`);
                    console.log(`💧 Humidity: ${weatherData.main.humidity}%`);
                    console.log(`🌬️ Wind: ${weatherData.wind.speed} m/s`);
                    console.log('===========================');
                } else {
                    console.log('\n❌ Error:', weatherData.message);
                    if (weatherData.cod === 401) {
                        console.log('🔑 Please check your API key at https://openweathermap.org/');
                    }
                }
            } catch (error) {
                console.log('\n⚠️ Error parsing weather data:', error.message);
            }
            rl.close();
        });
    }).on('error', (error) => {
        console.log('\n⚠️ Network Error:', error.message);
        rl.close();
    });
}

console.log('=== 🌦️ Weather App ===');
rl.question('Enter city name: ', (city) => {
    if (!city.trim()) {
        console.log('Please enter a valid city name');
        rl.close();
        return;
    }
    getWeather(city.trim());
});