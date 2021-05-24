
import React, {useEffect, useState} from 'react';
import CityDisplay from './CityDisplay';

const url = "https://developerfunnel.herokuapp.com/location";


// use of useState in react Hooks and passing props
/**
 * function App() {
  const [city] = useState('Minneapolis...');
  return (
    <div>
      <h2>React Hooks</h2>
  <h2>I love {city}</h2>
  <CityDisplay  cityName={city}/>
    </div>
  );
}

 */
// In react hooks api call

function App() {
  const [city, setMyCity] = useState();

  useEffect(()=>{
    fetch(url,{method:'GET'})
    .then((res) => res.json())
    .then((data) => { 
      setMyCity(data)
    })
  })

  return (
    <div>
      <h2>React Hooks API Call</h2>
  
  <CityDisplay  cityName={city}/>
    </div>
  );
}

export default App;
