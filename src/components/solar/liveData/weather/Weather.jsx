import "./Weather.css";
import { useEffect, useState } from "react";
import "./Weather.css";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { AiOutlineArrowUp } from "react-icons/ai";

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

    return (isLoading ? <></> :
        <div className="weather-container">
            <div className="weather-header">
                <div id="weatherTitle">{data.name}</div>
                <div id="weatherTemp">{`${data.main.temp.toFixed(2)}°F`}</div>
            </div>
            <div className="weather-content">
                <img id="weatherIcon" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather-icon" />
                {data.weather[0].description}
            </div>
            <div className="humidity-wind">
                <div id="weatherHumidity">
                    <WiHumidity size={50} color={"blue"} />
                    {`${data.main.humidity}%`}
                </div>
                <div id="weatherWind">
                    <FiWind size={40} color={"gray"} />
                    <div className="wind-description">
                        {`${data.wind.speed} mph `}
                        <AiOutlineArrowUp style={{ transform: `rotate(${data.wind.deg}deg)` }} size={25} />
                    </div>
                </div>
            </div>
        </div>)
        ;
}
