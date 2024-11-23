

import Navbar from "./component/Navbar";

// import './App.css';
// import  img1  from './images/Fitness.png'
import Login from "./component/Login";

import BasicM from "./component/BasicM";



const App = () => {
  return(
    <div>
      <Navbar/>
   <BasicM/>
     <Login/>
  
   
     {/* <img src={img1} alt=''/> */}
    
   </div>
    
  )
}
export default App;