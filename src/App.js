

import Navbar from "./component/Navbar";

// import './App.css';
// import  img1  from './images/Fitness.png'
import Login from "./component/Login";


// import BasicM from "./component/BasicM";


import Offer from "./component/Offer";
// import PBranch from "./component/PBranch";

import Star from "./component/Star";
import Branch from "./component/Branch";
import Footer from "./component/Footer"
const App = () => {


  
  return(
    <div>
      <Navbar/>
   {/* <BasicM/> */}

     <Login/>
     <Offer/>
     <Star/>
     <Branch/>
    {/* <PBranch/> */}
    <Footer/>
   </div>
    
  )
}
export default App;