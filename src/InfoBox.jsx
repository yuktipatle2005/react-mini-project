
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1501973801540-537f08ccae7b";

  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae";

  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1603262439120-3e17d13bab3f";

  const imageUrl =
    info.humidity > 80
      ? RAIN_URL
      : info.temp > 15
      ? HOT_URL
      : COLD_URL;

  const WeatherIcon =
    info.humidity > 80 ? (
      <ThunderstormIcon fontSize="large" />
    ) : info.temp > 15 ? (
      <WbSunnyIcon fontSize="large" />
    ) : (
      <AcUnitIcon fontSize="large" />
    );

  return (
    <div className="info-container">
      <Card className="weather-card">
        <CardMedia
          className="card-media"
          image={imageUrl || INIT_URL}
        />

        <CardContent>
          <Typography variant="h4" className="city-name">
            {info.city}
          </Typography>

          <div className="icon">{WeatherIcon}</div>

          <Typography variant="body1" className="weather-details">
            🌡️ Temperature: {info.temp}°C <br />
            💧 Humidity: {info.humidity}% <br />
            🔻 Min Temp: {info.tempMin}°C <br />
            🔺 Max Temp: {info.tempMax}°C <br />
            🌥️ <i>{info.weather}</i> <br />
            Feels like {info.feelslike}°C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
