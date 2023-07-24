import React, {useState} from 'react'
import { Count } from './Count'

export const Counter = () => {
    let [ newCount, setNewCount ] = useState(0)

    const handleClickMinus = () => {
        console.log('Clicked Minus')
        // setNewCount(newCount - 1);
            setNewCount(oldVal => oldVal - 1)
 
        //setOn( prevState => !prevState)
    }
    const handleClickPlys = () => {
        console.log('CLicked Plus')
        // setNewCount(newCount + 1);
        setNewCount(oldVal => oldVal + 1);
      
    }
  return (
    <div>
        <Count onMinus={handleClickMinus}  onPlus={handleClickPlys} newCountNumber={newCount}/>
        {/* <h2 onClick={handleClickMinus}>--</h2>
        <h1>{ newCount }</h1>
        <h2 onClick={handleClickPlys}>++</h2> */}
    </div>
  )
}
