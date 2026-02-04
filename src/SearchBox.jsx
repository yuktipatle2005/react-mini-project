/*import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1fe1bc8dff7469dd200628b7fa5d6efd"; 

  const getWeatherInfo = async (cityName) => {
    let response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    let data = await response.json();

    if (data.cod !== 200) {
      throw new Error("City not found");
    }

    return {
      city: data.name,
      temp: Number(data.main.temp),
      tempMin: Number(data.main.temp_min),
      tempMax: Number(data.main.temp_max),
      humidity: Number(data.main.humidity),
      feelslike: Number(data.main.feels_like),
      weather: data.weather[0].description,
    };
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setError(false);
      const newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity("");
    } catch {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>

        {error && (
          <p style={{ color: "red" }}>No such place exists!</p>
        )}
      </form>
    </div>
  );
}
*/
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1fe1bc8dff7469dd200628b7fa5d6efd";

  const getWeatherInfo = async (cityName) => {
    let response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );
    let data = await response.json();

    if (data.cod !== 200) {
      throw new Error("City not found");
    }

    return {
      city: data.name,
      temp: Number(data.main.temp),
      tempMin: Number(data.main.temp_min),
      tempMax: Number(data.main.temp_max),
      humidity: Number(data.main.humidity),
      feelslike: Number(data.main.feels_like),
      weather: data.weather[0].description,
    };
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      setError(false);
      const newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity("");
    } catch {
      setError(true);
    }
  };

  return (
    <div className="search-container">
      <h2 className="title">🌤️ Weather Finder</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <TextField
          label="Enter City Name"
          variant="outlined"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />

        <Button
          variant="contained"
          type="submit"
          startIcon={<SearchIcon />}
          className="search-btn"
        >
          Search
        </Button>
      </form>

      {error && <p className="error-msg">No such place exists!</p>}
    </div>
  );
}
