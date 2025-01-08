import React, { useEffect, useState, createContext, useContext, useRef, useReducer, useCallback, useMemo, Suspense } from 'react';
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


// function Counter() {
//   let [count, setCount] = useState(0)
// //   let [calculation, setCalculation] = useState(0)

//   useEffect(() => {
//     // setCalculation(() => count * 2)
//     //  setCount((c) => c + 1)
//   }, [count])



//   return (
//     <>
//       <h1>count:{count}</h1>
//       <button type='button' onClick={() => setCount((c) => c + 1)}>click</button>
//     </>
//   )
// }



// useRef Hook
// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);
//   useEffect(() => {
//     count.current = count.current + 1
//   })

//   return(
//     <>
//      <input type='text' value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
//      <h1>Render count:{count.current}</h1>
//     </>
//   )
// }


//useRef to focus the input
// function App() {
//   const inpuElement = useRef();
//   const focusInput = () => {
//     inpuElement.current.focus();
//   }

//   return (
//     <>
//       <input type='text' ref={inpuElement} />
//       <button onClick={focusInput}>focusInput</button>
//     </>
//   )
// }


//tracking of previous state value using useRef

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const previousInput = useRef("")

//   useEffect(() => {
//     previousInput.current = inputValue
//   }, [inputValue])

// return (
//   <>
//     <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//     <h1>current value:{inputValue}</h1>
//     <h1>previousInput:{previousInput.current}</h1>
//   </>
// )
// }


//useState Hook

// function Car() {
//     const [car, setCar] = useState({
//         brand: "Ford",
//         model: "Mustang",
//         year: "1995", 
//         color: "red"
//     });

//     const updateColor=()=>{
//         setCar(previousState=>{
//             return{...previousState,color:"green"}
//         })
//     }

//     return(
//         <>
//         <h1>{car.brand} {car.color} {car.model} {car.year}</h1>
//         <button type='button' onClick={updateColor}>Change color</button>
//         </>
//     )
// }

//UseEffect

// function Timer() {
//     const [count, setCount] = useState(0)

//     useEffect(() => {

//     }, [count])

//     return (
//         <>
//             <h1>{count}</h1>
//             <button type='button' onClick={() => setCount((c) => c + 1)}>Change count</button>
//         </>
//     )
// }

//useContext Hook

// const userContext = createContext()
// function Component1() {
//     const [user, setUser] = useState("Jay")
//     return (
//         <userContext.Provider value={user}>
//             <h1>hello {user}</h1>
//             <Component2/>
//         </userContext.Provider>
//     )
// }
// function Component2() {
//     return (
//         <>
//             <h1>Component2</h1>
//             <Component3 />
//         </>
//     )

//     function Component3() {
//         const user = useContext(userContext)
//         return(
//             <>
//             <h1>Component3</h1>
//             <h2>hello {user} again</h2>
//             </>
//         )
//     }
// }


//useRef Hook

// function App() {
//     const [inputValue, setInputValue] = useState("")
//     const count = useRef(0)
//     useEffect(() => {
//         count.current = count.current + 1;
//     })
//     return (
//         <>
//             <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
//             <h1>render count:{count.current}</h1>
//         </>
//     )
// }


//use useRef to focus input
// function App(){
//     const inpuElement=useRef()
//     const focusInput=()=>{
//         inpuElement.current.focus()
//     }

//     return (
//         <>
//         <input type='text' ref={inpuElement}/>
//         <button onClick={focusInput}>focus</button>
//         </>
//     )
// }

// function App() {
//     const [inputValue, setInputValue] = useState("")
//     const previousInputValue = useRef("")

//     useEffect(() => {
//         previousInputValue.current = inputValue
//     },[inputValue])
//     return (
//         <>
//         <input type='text' value={inputValue}
//         onChange={(e)=>setInputValue(e.target.value)}/>
//         <h2>current value:{inputValue}</h2>
//         <h2>previous value:{previousInputValue.current}</h2>
//         </>
//     )
// }

//useReduce Hook

// const initialState = { count: 0 }

// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 }
//             break;
//         case 'decrement':
//             return { count: state.count - 1 }
//             break;
//         default:
//             throw new Error()
//             break;
//     }
// }

// function App() {

//     const [state, dispach] = useReducer(reducer, initialState)
//     return (
//         <>
//         count:{state.count}
//         <button onClick={()=>dispach({type:'increment'})}>Increment</button>
//         <button onClick={()=>dispach({type:'decrement'})}>Decrement</button>
//         </>
//     )

// }


//useCallback Hook

// const functionCounter=new Set();

// function App(){
//     const[count,setCount]=useState(0);
//     const [otherCounter,setOtherCounter]=useState(0)

//   const increment=useCallback(()=>{
//     setCount(count+1)
//   },[count])


//   const decrement=useCallback(()=>{
//     setCount(count-1)
//   },[count])


//   const incrementOtherCounter=useCallback(()=>{
//     setOtherCounter(otherCounter+1)
//   },[otherCounter])

//   functionCounter.add(increment)
//   functionCounter.add(decrement)
//   functionCounter.add(incrementOtherCounter)

//   console.log(functionCounter)

//   return(
//     <div>
//     count:{count}
//     <div>
//         otherCount:{otherCounter}
//     </div>

//     <button onClick={increment}>+</button>

//     <button onClick={decrement}>-</button>

//     <button onClick={incrementOtherCounter}>Other counter increment</button>
//     </div>
//   )

// }


//useMemo Hook

// function App() {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   // Expensive calculation
//   const expensiveCalculation = (num) => {
//     console.log('Performing expensive calculation...');
//     let total = 0;
//     for (let i = 0; i < 1000000000; i++) {
//       total += num;
//     }
//     return total;
//   };

//   const increment = () => { setCount((c) => c + 1) }
//   const addTodo = () => { setTodos((t) => [...t, "New Todo"]) }

//   // Memoize the result of the expensive calculation
//   const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>
//         })}
//         <button onClick={addTodo} >addTodo</button>

//       </div>
//       <hr />
//       <div>
//         count:{count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {memoizedValue}
//       </div>
//     </div>
//   );
// }


// import { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("red")

//   const changeColor = () => {
//     // setColor(previousColor => (previousColor === "red" ? "blue" : "red"))
//     if(color==="red"){
//       return setColor("blue")
//     }
//     else{
//       return setColor("red")
//     }
//   }

//   return (
//     <>
//       <h1>color:{color}</h1>
//       <button type='button' onClick={changeColor}>click</button>
//     </>
//   ) 

// }


// function App(props) {
//     const { onClick, children } = props

//     return (
//         <button onClick={onClick}>{children}</button>
//     )
// }








// function App() {

//     let [count, setCount] = useState(0)

//     useEffect((previous) => {
//         setState(...previous,)
//     })

//     return <h1>Hello</h1>
// }



// import React, { Suspense } from "react"

// const About = React.lazy(() => import("./About"))
// function App() {
//     return (
//         <>
//             <h1>Welcome to my React App</h1>

//             <Suspense fallback={<div>Loading About Component...</div>}>
//                 {/* Lazy-Loaded about component */}
//                 <About />
//             </Suspense>
//         </>
//     )
// }

function MyComponent() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Component mounted!!")

        return () => {
            console.log("Component will unmount!!")
        }
    }, [])

    useEffect(() => {
        console.log("Component updated!! count is :", count)
    }, [count])

    return (
        <>
            <h1>Current count:{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}


// function MyComponent() {
//     //  const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log("Component mounted!!")

//         return () => {
//             console.log("Component will unmount!!")
//         }
//     }, [])

//     // useEffect(() => {
//     //     console.log("Component updated!! count is :", count)
//     // }, [count])

//     return (
//         <>
//             <h2>My Component</h2>
//             {/* <h1>Current count:{count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button> */}
//         </>
//     )
// }


function App() {
    const [showComponent, setShowComponent] = useState(true)

    return (
        <>
            <h1>Conditional Rendering Example</h1>
            {/* Button to toggle visibility of MyComponent */}
            <button onClick={() => setShowComponent(!showComponent)}>
                {showComponent ? "Hide" : "Show"}My Component
                {/* Conditionally render MyComponent */}

                {showComponent && <MyComponent />}
            </button>
            <MyComponent />
        </>
    )
}












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Day2Component  />);


