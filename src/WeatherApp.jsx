import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Hyderabad",
        feelsLike: 22.48,
        humidity: 83,
        temp: 22.05,
        tempMax: 22.05,
        tempMin: 22.05,
        weather: "mist"
    }
    )
    let updateInfo=(result)=>{
            setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App by Rishi</h3>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}