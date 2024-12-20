import React, { useEffect, useState ,createContext,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
// import Day1Component from './Day1';
import Day2Component from './Day2';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home from './pages/Home';




// let person = {
//   first_name: 'Jayanth',
//   last_name: 'CS',
//   age:25
// }

// import { useState, useEffect } from "react";
// // import ReactDOM from "react-dom/client";

// function Counter() {
//   const [count, setCount] = useState(0);
//   // const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     // setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       {/* <p>Calculation: {calculation}</p> */}
//     </>
//   );
// }


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='/blogs' element={<Blogs />} />
//           <Route path='/contact' element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> 
//   )
// }


// function FavoriteColor(){
//   let [color,setColor]=useState("red")

//   return (
//     <>
//     <h1>my fav color is {color}!!</h1>
//     <button type='button' onClick={()=>{setColor("blue")}}>Change color</button>
//     </>
//   )
// }

// function Car() {
//   let [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   })

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     })
//   }

//   return (
//     <>
//       <h1>my {car.brand}</h1>
//       <p>It is a {car.color} {car.model} {car.year}</p>
//       <button type='button' onClick={updateColor}>Blue</button>
//     </>
//   )
// }


function Counter() {
  let [count, setCount] = useState(0)
//   let [calculation, setCalculation] = useState(0)

  useEffect(() => {
    // setCalculation(() => count * 2)
    //  setCount((c) => c + 1)
  }, [count])



  return (
    <>
      <h1>count:{count}</h1>
      <button type='button' onClick={() => setCount((c) => c + 1)}>click</button>
    </>
  )
}








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Day2Component  />);


