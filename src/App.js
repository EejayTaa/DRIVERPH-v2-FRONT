import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {

  useEffect(() => {
    
  })
  const sendRequest = () => {

    const body = {
      firstName: 'Eejay',
      lastName: 'Taa'
    }

    axios.post("/asd", body)
    .then((response) => {
      console.log(response.body);
    })
  }

  return (
    <div className="App">
    <h1>HELLO WORLD</h1>
    <button onClick={sendRequest}>Request</button>
    </div>
  );
}

export default App;
