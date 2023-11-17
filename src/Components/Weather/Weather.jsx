import React, { Component } from "react";
import "./Weather.css";
import clear from "../../Assets/clear.png";
import cloud from "../../Assets/cloud.png";
import drizzle from "../../Assets/drizzle.png";
import rain from "../../Assets/rain.png";
import snow from "../../Assets/snow.png";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInput: "",
      temp: "",
      maxTemp: "",
      minTemp: "",
      visibility: "",
      weatherStatus: "",
      wind: "",
      humidity: "",
      Wicon: "",
      Wimg: clear,
    };
  }

  fetchData = async () => {
    if (this.state.weatherInput === "") {
      this.setState({ weatherStatus: "Please Enter The City" });
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.weatherInput}&units=metric&appid=9afe96695235740c09e1a3ad665a7c8a`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      this.setState({
        temp: result.main.temp,
        maxTemp: result.main.temp_max,
        minTemp: result.main.temp_min,
        visibility: result.visibility,
        weatherStatus: result.weather[0].main,
        wind: result.wind.speed,
        humidity: result.main.humidity,
        Wicon: result.weather[0].icon,
      });
      if (
        result.weather[0].icon === "01d" ||
        result.weather[0].icon === "01n"
      ) {
        this.setState({ Wimg: clear });
      } else if (
        result.weather[0].icon === "02d" ||
        result.weather[0].icon === "02n"
      ) {
        this.setState({ Wimg: cloud });
      } else if (
        result.weather[0].icon === "03d" ||
        result.weather[0].icon === "03n"
      ) {
        this.setState({ Wimg: drizzle });
      } else if (
        result.weather[0].icon === "04d" ||
        result.weather[0].icon === "04n"
      ) {
        this.setState({ Wimg: drizzle });
      } else if (
        result.weather[0].icon === "09d" ||
        result.weather[0].icon === "09n"
      ) {
        this.setState({ Wimg: rain });
      } else if (
        result.weather[0].icon === "10d" ||
        result.weather[0].icon === "10n"
      ) {
        this.setState({ Wimg: rain });
      } else if (
        result.weather[0].icon === "14d" ||
        result.weather[0].icon === "14n"
      ) {
        this.setState({ Wimg: snow });
      } else {
        this.setState({ Wimg: clear });
      }
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {}

  handelChangesInput = event => {
    this.setState({ weatherInput: event.target.value });
  };

  render() {
    let {
      weatherInput,
      temp,
      maxTemp,
      minTemp,
      visibility,
      humidity,
      wind,
      weatherStatus,
      Wimg,
    } = this.state;

    return (
      <>
      <div id="bg">
        <img src="https://images.unsplash.com/photo-1530878902700-5ad4f9e4c318?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="village" />
    </div>
        <div id="BgColor">
          <div id="Weather-tagline">
            <h1>weather</h1>
          </div>
          <div id="weather-main">
            <div id="weatherApp">
              <div id="search">
                <input
                  placeholder="Enter City Or State Name"
                  type="search"
                  name="Weather"
                  id="weather"
                  onChange={this.handelChangesInput}
                  value={weatherInput}
                />

                <button onClick={this.fetchData}>Search</button>
              </div>

              <h1>{weatherInput}</h1>
              <img src={!Wimg ? clear : Wimg} alt="..." />
              <h1>Weather Status:- {weatherStatus}</h1>
              <div id="temp">
                <h2>Temp:- {Math.floor(temp)} °C</h2>
                <h2>Max Temp:- {Math.floor(maxTemp)} °C</h2>
                <h2>Min Temp:- {Math.floor(minTemp)} °C</h2>
              </div>
              <div id="flow">
                <h2>Wind:- {Math.floor(wind)} Km/h</h2>
                <h2>visibility:- {Math.floor(visibility)}</h2>
              </div>
              <h1>Humidity:- {Math.floor(humidity)}%</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Weather;
