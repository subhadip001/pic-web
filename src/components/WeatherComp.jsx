import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherComp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data based on user's location
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=a35d4300d8490d8af0872e49d8798180`
        );
        setWeatherData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Error fetching weather data. Please try again later.");
      }
    };
    fetchWeatherData(29.8543, 77.8880)
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return (
      <div style={{ height: "100vh", textAlign: "center" }}>Loading...</div>
    );
  }

  const { main, weather, wind , name } = weatherData;
  const { temp, humidity, pressure } = main;
  const { speed, deg } = wind;
  const { description, icon } = weather[0];

  return (
    <div className="weather-comp">
    <span className="weather-comp__city text-[12px] 3xl:text-[16px]">Today</span>
    <div className="flex items-baseline gap-3 mt-[-5px]">
    <div className="flex text-[#d72e00]">
    <span className="text-[29px] 3xl:text-[36px] font-semibold leading-9">{(temp - 273).toFixed(0)}</span>
    <div className=" flex items-start">
    <span className=" ">°C</span>
    </div></div>
    <span className="text-[16px] 3xl:text-[20px] min-w-[40px] leading-5 font-semibold text-PIC-Blue capitalize">{weather[0].main}</span>
    </div>
    </div>
  );
};

export default WeatherComp;