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
      <div className="title-container">
        <h1 className="title">Calculadora de Interés Compuesto</h1>
      </div>
      <form>
        <input type="text" id="cap_inicial" placeholder="Capital inicial" onChange={(e) => {
          setCapInic(e.target.value);
          let res = parseInt(e.target.value) * Math.pow(1 + parseFloat(interes), años);
          setResultado(Math.floor(res, 2))
        }}></input><br />
        <input type="number" id="interes" placeholder="Tasa de Rendimiento" size="50" min="0.01" max="1.0" step="0.001" onChange={(e) => {
          setInteres(parseFloat(e.target.value));
          let res = parseInt(capInic) * Math.pow(1 + parseFloat(e.target.value), años);
          setResultado(Math.floor(res, 2))
        }}></input><br />
        <label>Años (de 1 a 50): {años}</label><br></br>
        <input type="range" id="vol" name="vol" min="1" max="50" value={años} onChange={(e) => {
          setAños(e.target.valueAsNumber)
          let res = parseInt(capInic) * Math.pow(1 + parseFloat(interes), e.target.valueAsNumber);
          setResultado(Math.floor(res, 2))
        }}></input><br /><br />
        <h1>{formatter.format(resultado)}</h1>
        <p>{formatter.format(resultado)} x {interes * 100}% => {formatter.format(Math.floor(resultado * interes, 2))} al año</p>
        <p>{formatter.format(Math.floor(resultado * interes, 2))}/12 meses => {formatter.format(Math.floor(resultado * interes / 12, 2))} al mes</p>
      </form>
      <Particles id="particle-canvas" params={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }}></Particles>
    </div>
  );
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


export default App;
