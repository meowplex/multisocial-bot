import fetch from "node-fetch";

export default async function get_weather(query) {
    let city = query.text.split(" ")[1]
    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let params = new URLSearchParams({
        q: city,
        appid: process.env.WEATHER_TOKEN,
        lang: "en",
        units: "metric",
    });

    let res = await fetch(url + params);

    if (res.ok) {
        let weather = await res.json();
        return {
            text: `Weather in ${weather.name}
Temperature: ${weather.main.temp} ℃
Feels like: ${weather.main.feels_like} ℃
Wind speed: ${weather.wind.speed} m/s`,
        };
    } else {
        let error = await res.json();
        return { text: error.message };
    }
}