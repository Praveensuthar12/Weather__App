import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "738f2313cef7d24e179807fc1e136826";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRespose = await response.json();
            console.log(jsonRespose);
            let result = {
                city: city,
                temp: jsonRespose.main.temp,
                tempMin: jsonRespose.main.temp_min,
                tempMax: jsonRespose.main.temp_max,
                humidity: jsonRespose.main.humidity,
                feelsLike: jsonRespose.main.feels_like,
                weather: jsonRespose.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
        }

    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newinfo = await getWeatherInfo(city);
            updateInfo(newinfo);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
