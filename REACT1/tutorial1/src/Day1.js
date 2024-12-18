
// let something=React.createElement("h1",{},"This is without JSX!!!")


// let something = <h1>Hello Students!!!</h1>

// let count = 100;
// something = <h1 className='bg-succsses' style={{backgroundColor:"yellow"}}>You have visited my website {count} times!!</h1>

// something = (
//   <> 
//     <h1>This is first h1 tag</h1>
//     <h2>this is h2 tag</h2>
//   </>

// )

// let course="frontEnd"

// if (course==="backEnd") {
//   something = <h1 className='bg-succsses' style={{backgroundColor:"yellow"}}>This is front end React.js!!!</h1>

// } else {
//   something = <h1 className='bg-succsses' style={{backgroundColor:"yellow"}}>this is back end node.js</h1>

// }

// class Component extends React.Component{
//   render(){
//     return <h1>Hello Students!!!</h1>
//   }
// }


// function RedComponent(props) {
//   return <div style={{ width: "30%", height: "200px", backgroundColor: "red", float: "left" }}>Hello {props.student}</div>
// }


// function GreenComponent() {
//   return <div style={{ width: "30%", height: "200px", backgroundColor: "green", float: "left" }}>Hello Student</div>
// }


// function Component1() {
//   return (
//     <>
//       <RedComponent  student="Vijay"/>
//       <GreenComponent />
//       <RedComponent student="Vijay"/>
//     </>
//   )
// }

// function Component2(props) {
//   return (
//     <>
//       <GreenComponent  />
//       <RedComponent student={props.student}/>
//       <GreenComponent  />
//     </>
//   )
// }

// function Component(props) {
//   return (
//     <>
//       <Component1 />
//       <Component2 student="Ramesh"/>
//     </>
//   )
// }



function ComponentX() {
  return <div style={{ width: "100%", height: "300px", color: "White", backgroundColor: "black" }}>Hello Students</div>
}

function ComponentY() {
  return <div style={{ width: "100%", height: "300px", backgroundColor: "Yellow" }}>Hello Students</div>
}

function Day1Component() {
  if (true) {
   return <ComponentX />
  } else {
   return <ComponentY />
  }
}


export default Day1Component
