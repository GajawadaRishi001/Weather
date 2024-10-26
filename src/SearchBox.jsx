import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo})
{
    const API_URL="https://api.openweathermap.org/data/2.5/weather?"
    // const API_KEY = process.env.REACT_APP_API_KEY;
    const API_KEY = "cf2acbf6ed2bc3734e5cdf6598995ef1";

    let [city,setCity]=useState("");
    // let [error,setError]=useState("")
    let getWeatherInfo=async ()=>{
        let response=await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        //console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }
    let chageCity=(event)=>{
        
        setCity(event.target.value);
    }
    let handleSubmit=async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    }
    return(
        <div className='box'>
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Place" variant="outlined" value={city} onChange={chageCity}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Submit</Button>

        </form>
        </div>
    )
}