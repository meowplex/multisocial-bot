import fetch from "node-fetch";

export default async function get_weather(req, res) {
    let city = req.query.text.split(" ").splice(1).join(" ");

    let url = "http://api.openweathermap.org/data/2.5/weather?";
    let params = new URLSearchParams({
        q: city,
        appid: process.env.WEATHER_TOKEN,
        lang: "en",
        units: "metric",
    });

    let weather_res = await fetch(url + params);

    if (weather_res.ok) {
        let weather = await weather_res.json();
        res.json({
            text: `Weather in ${weather.name}
Temperature: ${weather.main.temp} ℃
Feels like: ${weather.main.feels_like} ℃
Wind speed: ${weather.wind.speed} m/s`,
        });
        return;
    } else {
        let error = await weather_res.json();
        res.json({ text: `Error: ${error.message}` });
        return;
    }
}
