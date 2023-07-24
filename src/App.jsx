import { useState } from 'react'
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './component/FirstComponent'
import { ListCompo } from './component/ListCompo'
import { Counter } from './component/Counter'
import { Form } from './component/Form';



const dummyData = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    email: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 40,
    email: 'bob@example.com',
  },
];

const handleClick = (e) => {
  e.preventDefault();
  console.log('I am clicked');
}



function App() {
  const [count, setCount] = useState(0)
  const ages = '32';
  return (
    <>
    <Form />
    <FirstComponent ages={ages} nam="Maninder" test="test" data={dummyData} />
      <div>
        <a href="https://vitejs.dev" onClick={handleClick} target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ListCompo/>
      <Counter />
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import FirstComponent from './component/FirstComponent';

// function MyTitle() {
//   const [numb, setNumb] = useState(10)

//   function handleClick() {
//     alert('I am clicked');
//     setNumb(numb + 10);
//   }
//   return (
//     <h1 onClick={handleClick}>
//       {numb}
//     </h1>
//   )
// }

// function MyTitleProps(props) {
//   return (
//     <h1>
//       {props.text}
//     </h1>
//   )
// }
// const user = {
//   name: 'Maninder Maan',
//   dov: '121'
// }

// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];

// function App() {
//   const [count, setCount] = useState(0)

//   const userInside = {
//     name: 'Maninder Maan',
//     dov: '121'
//   }

//   const listItem = products.map( item => {
//     return (
//       <li key={item.id}>
//         {item.title}
//       </li>
//     )
//   })
  

//   return (
//     <>
//     <ul >{listItem}</ul>
//       <MyTitle/> 
//       {user.name}
//       {user.dov}
//       {userInside.name}
//       {userInside.dov}
//       <MyTitle/>

//       {/* <MyTitleProps> This is Props</MyTitleProps> */}
//       <div >
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
