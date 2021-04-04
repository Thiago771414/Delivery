//import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Navbar from './Navbar';
//import Home from './Home';
//import Counter from './Counter';
//import Hello from './Hello';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes/>
      <ToastContainer/>
    </> 
  );
}
    /* <h1>Hello world!</h1> 
       substituo o html pelo componente Hello.tsx     
    */
   //Atributos JSX :  
    /*<div >          
      <Hello message="Washington"/>
      <Hello message="Nélio"/>
      <Hello message="SDS2"/>
      <Hello message="DevSup"/>
    </div>
    */
   /*
   <div>
     <Counter />
   </div>
   */
  /*
    <div>
      <Navbar/>
      <Home/>
    </div>
    */


/*function sum(num1: any, num2: any){
  return num1 + num2
}

sum(2,3)*/

export default App; /*sum;*/

