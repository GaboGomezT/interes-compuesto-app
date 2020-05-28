import React, { useState } from 'react';
function App() {
  const [capInic, setCapInic] = useState(0);
  const [interes, setInteres] = useState(0);
  const [resultado, setResultado] = useState(0);


  return (
    <div>
      <form>
        <label >Capital inicial: </label><br />
        <input type="text" id="cap_inicial" name="cap_inicial" onChange={(e) => {
          setCapInic(e.target.value);
        }}></input><br />
        <label>Interés: </label><br />
        <input type="number" id="interes" name="interes" min="0.01" max="1.0" step="0.001" onChange={(e) => {
          setInteres(e.target.value);
        }}></input><br />
        <label>Años (de 1 a 50):</label>
        <input type="range" id="vol" name="vol" min="1" max="50" onChange={(e)=>{
          let res = parseInt(capInic) *  Math.pow(1+parseFloat(interes), e.target.valueAsNumber);
          setResultado(Math.floor(res, 2))
        }}></input><br/><br/>
        <p>{resultado}</p>
      </form>
    </div>
  );
}

export default App;
