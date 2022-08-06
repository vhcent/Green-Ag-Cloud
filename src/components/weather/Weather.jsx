import "./Weather.css";
import { useEffect, useState } from "react";

export default function Weather() {
    const [data, setData] = useState(null);
    const [cityName, setCityName] = useState("San Jose");
    const [isLoading, setIsLoading] = useState(true);

    //Fetch weather Data
    const fetchWeatherData = () => {
        let lat = 37.3352;
        let lon = -121.8811;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e10d184c8db721edaa25dead64d7b0a5&units=imperial`
        )
            .then((res) => res.json())
            .then((json) => {
                setIsLoading(false);
                console.log(json);
                return setData(json);
            })
            .catch((err) => {
                console.log(err);
                return setData(err);
            });
    };

    // cityName.toUpperCase()
    // {`${data.main.temp.toFixed(2)}°F`}
    // {data.weather[0].description}


    useEffect(() => {
        fetchWeatherData();
    }, [cityName]);

    return (isLoading ? <div>Loading...</div> :
        <div className="weather-card">
            <div className="weather-header">
                {data.name}
                {`${data.main.temp.toFixed(2)}°F`}
            </div>
            <div className="weather-description">
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
                {data.weather[0].description}
            </div>
        </div>)
        ;
}
