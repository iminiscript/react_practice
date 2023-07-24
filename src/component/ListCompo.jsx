import React, { useState } from 'react'
import { Header } from './Header';
import { Body } from './Body';
// import BoxData from './BoxData';
import { Box } from './Box';



export const ListCompo = () => {

    const [thingsArray, setThingsArray] = useState(['Item1', 'Item2', 'Item3']);
    const [yesVal, setYesVal] = useState('Yes');
    const [isGoing, setIsGoing] = useState(true)

    const [users, SetUser] = useState('Mini');
    const BoxData = [
        {
            id: 1, 
            on: true
        },
        {
            id: 2, 
            on: false
        },
        {
            id: 3, 
            on: true
        },
        {
            id: 4, 
            on: false
        }
    ]

    const [square, setSquare] = useState(BoxData);

    console.log(BoxData);

    const toggleClick = () => {
        console.log('toggle clic')
    }

    const squareElements = square.map(item => (
        <Box key={item.id} on={item.on} />
    ))

    // const BoxFun = square.map( (item) => {
    //         return (
    //             <Box key={item.key} on={item.on} />
    //         )
            
    //     })
   
   

    const addItem = () => {
        const newItem = `Item  ${thingsArray.length + 1}`;
        //thingsArray.push(newItem);
        //console.log("🚀 ~ file: ListCompo.jsx:10 ~ addItem ~ thingsArray:", thingsArray)
        setThingsArray([...thingsArray, newItem]);
        setYesVal('State is changed');
        //console.log("🚀 ~ file: ListCompo.jsx:11 ~ addItem ~ setThingsArray:", setThingsArray)
    }
    const mapThingsArray = thingsArray.map( (item) => <p> {item}</p>)


  return (
    <div>
        <Header user={users} />
        <Body user={users} />
        <button onClick={addItem}>Add Item</button>
        {mapThingsArray}
        <h1>{yesVal}</h1>
        <h1 onClick={()=> setIsGoing(prevState => !prevState )}> 
            { isGoing ? 'Yes' : 'No' }
        </h1>
        { squareElements}
        {/* <BoxFun /> */}
    </div>
  )
}
