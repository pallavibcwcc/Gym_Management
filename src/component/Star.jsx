import { useMemo, useState } from "react";
import '../Styles/Star.css'
const Star = () => {
   
        const[height,setHeight]=useState(180);
        const[weight,setWeight]=useState(70);
      
      
        function onWeightchange (e){
          setWeight(e.target.value);
      
        }
      
      
        function onHeightchange(e){
          setHeight(e.target.value);
        }
      
      const output = useMemo(()=>{
        const calculateHeight = height/100;
        return(weight/(calculateHeight*calculateHeight)).toFixed(2);
      
      },[weight,height]);
      
        return (
          // <img src="download.jpg" width="500" height="600"/>
          <div>
            <div className="Bg-bmi"></div>

         
      <main className="main" id='main'>
      <div className="bmi-heading">   <h1>BMI CALCULATOR</h1></div>
     
        <div className="input-section">
          <p className="input-section">Weight {weight} kg</p>
          <input className="input-slider" 
          id="acent"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightchange}
          />
          <p className="input-section">Height {height} cm </p>
           <input className="input-slider" 
           id="acent"
          type="range"
          min="140"
          max="220"
           onChange={onHeightchange}/>
      
        </div>
        <div className="output-section">
          <p>Your BMI is:</p>
          <p className="output">{output}</p>
      
        </div>
      </main>
      </div>
        )
    
}
export default Star;