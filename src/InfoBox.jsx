import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function({info})
{
    const INIT_URL=
    "https://images.unsplash.com/photo-1716272718288-e5166bde5c72?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return(
        <div className='WeatherInfo'>
            <h3>Weather Info</h3>
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <div>Temperature={info.temp}&deg;C</div>
          <div>Humidity={info.humidity}</div>
          <div>Maximum Temperature={info.tempMax}&deg;C</div>
          <div>Minimum Temperature={info.tempMin}&deg;C</div>
          <div>FeelsLike={info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      
     
    </Card>
    </div>

        </div>
    )
}