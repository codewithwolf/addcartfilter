import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App = () => {

  const [count, setCount]= useState([]);

  const increment =(item)=>{
    console.log(item);
    console.log("yes");
    setCount([...count, item])
    

  }
  

 
  

  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={Home} />
      </Routes>
    </Router>
       <Navbar  size={count.length} />
       <Home   increment={increment}  />
    </>







 // const [count, setCount] = useState(0)

  // const plus =()=>{
  //   setCount(count+1);
  // }
  // const minus =()=>{
  //   setCount(count -1);
  // }


//     <div className=' p-12'>
//     <button onClick={plus} className=' m-6'>+</button>
//  <span  className=' p-9'>{count}</span>
//     <button onClick={minus} className=' text-lg'>-</button>
      
//     </div>
  )
}

export default App























// import Board from "./Board";
// import user from "./Data";
// import { useState } from 'react';

// function App() {

//   return(

  
// //   const [count, setCount] = useState(0);

// //   function handle() {
// //     setCount(count + 1);
// //   }
  
// //   const handleClick=()=> {
// //     alert('You clicked me!');
// //   }
// //   const products = [
// //     { title: 'Cabbage', id: 1 },
// //     { title: 'Garlic', id: 2 },
// //     { title: 'Apple', id: 3 },
// //   ];
// //   const produc = [
// //     { title: 'Cabbage', isFruit: false, id: 1 },
// //     { title: 'Garlic', isFruit: false, id: 2 },
// //     { title: 'Apple', isFruit: true, id: 3 },
// //   ];
  
// //   return (
// //     <>
// //      <h1 className="text-3xl font-bold underline">
// //       Hello world!
// //     </h1>
// //     <div className=" h-96  bg-slate-500">

// // <div className="board-row p-2 ">
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">1</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">2</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">3</button>
// //       </div>
// //       <div className="board-row p-2">
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">4</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">5</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">6</button>
// //       </div>
// //       <div className="board-row p-2 gap">
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">7</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">8</button>
// //         <button className="square bg-slate-600 border-red-400 w-24 h-20">9</button>
// //       </div>
// //       </div>
// //     </>








//     //  {/* <button onClick={handle}>
//     //   Clicked {count} times
//     // </button> */}






//   //   {/* <button onClick={handleClick}> click me</button> */}
//   //   {/* <div className="App">
//   //     <h1>{user.name}</h1>
//   //  <img src ={user.imageUrl} />
//   //  <h2>{user.imageSize}</h2>


//   //  <h1>{user.name}</h1>
//   //     <img
//   //       className="avatar"
//   //       src={user.imageUrl}start
//   //       alt={'Photo of ' + user.name}
//   //       style={{
//   //         width: user.imageSize,
//   //         height: user.imageSize
//   //       }}
//   //     />
//   //   </div>
      
//   //     <div>
//   //       {
//   //         products.map((product)=>(
//   //           <h3 key={product.id}> {product.title} </h3>
//   //         ))
//   //       }
//   //     </div>

//   //     <div>
//   //       {
//   //         produc.map((myproduct)=>(
//   //           <li
//   //     key={myproduct.id}
//   //     style={{
//   //       color: myproduct.isFruit ? 'red' : 'green'
//   //     }}
//   //   >
//   //     {myproduct.title}
//   //   </li>
//   //         ))
//   //       }
//   //     </div> */}
    

//   );
// }

// export default App;
