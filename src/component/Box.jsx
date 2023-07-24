import React, {useState} from 'react'

export const Box = (props) => {
    console.log('Box')
    console.log(props)

    const [on, setOn] = useState(props.on)

    const toggle = () => {
    setOn( prevState => !prevState)
    }

    const Styles = {
        width: '100px',
        height: '100px',
        border: '1px solid red',
        display: 'inline-block',
        margin: '10px',
        backgroundColor: on ? '#000000' : '#ffffff',
    
    };

  return (
    <div style={Styles} onClick={toggle}>

    </div>
  )
}
