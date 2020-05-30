import React, { useState } from 'react';
import Particles from 'react-particles-js';
import "./styles.css";
function App() {
  const [capInic, setCapInic] = useState(0);
  const [interes, setInteres] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [años, setAños] = useState(1);


  return (
    <div className="container">
      <form>
        <input type="text" id="cap_inicial" placeholder="Capital inicial" onChange={(e) => {
          setCapInic(e.target.value);
          let res = parseInt(e.target.value) * Math.pow(1 + parseFloat(interes), años);
          setResultado(Math.floor(res, 2))
        }}></input><br />
        <input type="number" id="interes" placeholder="Interés" min="0.01" max="1.0" step="0.001" onChange={(e) => {
          setInteres(parseFloat(e.target.value));
          let res = parseInt(capInic) * Math.pow(1 + parseFloat(e.target.value), años);
          setResultado(Math.floor(res, 2))
        }}></input><br />
        <label>Años (de 1 a 50): {años}</label><br></br>
        <input type="range" id="vol" name="vol" min="1" max="50" onChange={(e) => {
          setAños(e.target.valueAsNumber)
          let res = parseInt(capInic) * Math.pow(1 + parseFloat(interes), e.target.valueAsNumber);
          setResultado(Math.floor(res, 2))
        }}></input><br /><br />
        <h1>{formatter.format(resultado)}</h1>
        {formatter.format(Math.floor(resultado * interes, 2))} al año <br></br>
        {formatter.format(Math.floor(resultado * interes / 12, 2))} al mes
      </form>
      <Particles id="particle-canvas"></Particles>
    </div>
  );
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


export default App;
