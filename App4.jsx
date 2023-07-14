import  { useState } from 'react';

function App() {

const [range1, setRange1] = useState(3);
const [range2, setRange2] = useState(3);

const handleRange1Change = (event) => {
    setRange1(event.target.value);
    if(range1 > range2){

    }
  };

  const handleRange2Change = (event) => {
    setRange2(event.target.value);
  };

  let HigherOrLower;
  if(range1 > range2){
    HigherOrLower = "Mario Rossi è in vantaggio"
  }
  else if(range1 < range2){
    HigherOrLower = "Luigi Verdi è in vantaggio"
  }
  else{
    HigherOrLower = "i voti sono uguali"
  }

  return(
    <div className="flex flex-col">
        <div>
            <label htmlFor="range1">Voto Mario Rossi :{range1}</label>
            <input type="range" name='range1' min="1" max="10" value={range1} onChange={handleRange1Change} />
        </div>
        <div>
            <label htmlFor="range2">Voto Luigi Verdi :{range2}</label>
            <input type="range" name='range2' min="1" max="10" value={range2} onChange={handleRange2Change} />
        </div>
        <div>{HigherOrLower}</div>
    </div>
  )
}

export default App
