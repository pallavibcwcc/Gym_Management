

import Navbar from "./component/Navbar";

// import './App.css';
// import  img1  from './images/Fitness.png'
import Login from "./component/Login";


// import BasicM from "./component/BasicM";


import Offer from "./component/Offer";
// import PBranch from "./component/PBranch";



const App = () => {


  
  return(
    <div>
      <Navbar/>
   {/* <BasicM/> */}

     <Login/>
     <Offer/>
    {/* <PBranch/> */}
   </div>
    
  )
}
export default App;