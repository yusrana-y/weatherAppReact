import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet,faTemperatureLow,faWind } from '@fortawesome/free-solid-svg-icons';
import { faWpressr } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [city, setCity] = useState('kakkanad')
  const [weather, setWeather] = useState({})
  const [temp, setTemp] = useState('')
  const [feelslike, setFeelsLike] = useState('')
  const [wind, setWind] = useState('')
  const [pressure, setPressure] = useState('')
  const [humidity, setHumidity] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [wMain,setWMain] = useState('')
  const [wDescription,setWDescription]= useState('')
  


  // useEffect(()=>{
  //   weatherAPI()
  // },[])


    const weatherData = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`)
    console.log(weatherData);


  const handleSearch = () => {
    setCity(search.value)
    setIsSearch(true)
    setWeather(weatherData)
    setTemp(weatherData.main.temp)
    setFeelsLike(weatherData.main.feels_like)
    setWind(weatherData.wind.speed)
    setPressure(weatherData.main.pressure)
    setHumidity(weatherData.main.humidity)
    setWMain(weatherData.weather[0].main)
    setWDescription(weatherData.weather[0].description)
  }

  console.log(city);
  console.log(weather);
  console.log(temp);
  console.log(feelslike);
  console.log(wind);
  console.log(pressure);
  console.log(humidity);
console.log(wMain);
console.log(wDescription);



  return (
    <>
      <h1 className='text-center mt-5'>Weather App</h1>
      <div className=" d-flex justify-content-center align-items-center gap-2 mt-5" width="100px" height="400px">
        <input type="search" name="search" id="search" placeholder='Enter the city' className='form-control fs-5 w-50' />
        <button type="button" className='btn btn-info rounded fs-5' onClick={handleSearch}>Search</button>
      </div>
      {isSearch &&
        // <div className="row container m-5 border border-dark p-5 rounded">
        //   <div>
        //     <h1 id="city1" className=''>{city}</h1>
        //     <p id="temp" className="pt-2 fs-3 "> {temp}&#8451;  <span id="feel1" className='fs-5 '>  Feels like   {feelslike}&#8451;</span></p>

        //     <table className="mt-4" style={{ width: '100%' }}>
        //       <tr>
        //         <th >Wind</th>
        //         <th>Humidity</th>
        //         <th>Pressure</th>
        //       </tr>
        //       <tr>
        //         <td>{wind} km/h</td>
        //         <td>{humidity}%</td>
        //         <td>{pressure} kpa</td>
        //       </tr>
        //     </table>

        //   </div>
        // </div>

        <div className="row mt-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-4  text-center mt-5  ">
            <h1>{city}  </h1>
            <h1>{temp}° C</h1>
            <h2>{wMain}</h2>
            <h3>{wDescription}</h3>
          </div>
          
          <div className="col-lg-4 ">
            <h3 className='text-center'>Weather Details</h3>

            <div className='d-flex justify-content-center align-items-center text-center m-3 gap-2'>
              <div className='rounded-circle border border-dark rounded p-5 d-flex justify-content-center align-items-center' style={{width:'200px',heigh:'200px'}}>
                <p><FontAwesomeIcon icon={faTemperatureLow} size="xl" className='me-2'/></p>
                <div >
                <h5>Feelslike</h5>
                <h6>{feelslike}° C</h6>
                </div>
              </div>

              <div className='rounded-circle border border-dark rounded  p-5 d-flex justify-content-center align-items-center' style={{width:'200px',heigh:'200px'}}>
                <p><FontAwesomeIcon icon={faWpressr} size="xl" className='me-2'/></p>
                <div >
                <h5>Pressure</h5>
                <h6>{pressure}hPa</h6>
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-center align-items-center text-center gap-2'>
              <div className='rounded-circle border border-dark rounded  p-5 d-flex justify-content-center align-items-center ' style={{width:'200px',heigh:'200px'}}>
                <p><FontAwesomeIcon icon={faWind} size="xl" className='me-2'/></p>
                <div >
                <h5>Wind</h5>
                <h6>{wind}m/s</h6>
                </div>
              </div>

              <div className='rounded-circle border border-dark rounded  p-5 d-flex justify-content-center align-items-center ' style={{width:'200px',heigh:'200px'}}>
                <p><FontAwesomeIcon icon={faDroplet} size="xl" className='me-2'/></p>
                <div >
                <h5>Humidity</h5>
                <h6>{humidity}%</h6>
                </div>
              </div>
            </div>
              
          </div>

          <div className="col-lg-2"></div>
        </div>
      }
    </>
  )
}

export default App
