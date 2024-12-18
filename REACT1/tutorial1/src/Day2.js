


import { useState } from "react";





// function Component(props) {
//     return (
//         <>     
//            <h1>Hello {props.full_name.first_name} {props.full_name.last_name} he is {props.full_name.age} yeras old</h1>
//            <button onClick={()=>alert("You jsut Clicked me ")}>Click me!!</button>
//         </>

//     )
// }

// function ComponentX() {
//     return <div style={{ width: "100%", height: "300px", color: "White", backgroundColor: "black" }}>Hello Students</div>
// }

// function ComponentY() {
//     return <div style={{ width: "100%", height: "300px", backgroundColor: "Yellow" }}>Hello Students</div>
// }

// function Component() {

//     const [theme, setTheme] = useState("theme1")

//     if (theme === "theme1") {
//         return (
//             <>
//                 <ComponentX />
//                 <button onClick={() => setTheme("theme2")}>Change Theme!!</button>
//             </>
//         )
//     } else {
//         return <>
//             <ComponentY />
//             <button onClick={() => setTheme("theme1")}>Change Theme!!</button>
//         </>
//     }
// }


// function Component() {
//     let [x, setX] = useState(0)
//     return (
//         <>
//             <h1>the value of x is {x}</h1>
//             <button onClick={() => setX(x + 100)}>Change x</button>
//         </>
//     )
// }


function Component(){
    return <button onClick={()=>alert("You jsut clicked me")}>Click!!</button>
}


export default Component;








