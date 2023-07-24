import React, {useState } from 'react'

export const Joke = (props) => {
    //console.log(props);
    const Styles = {
        fontSize: '20px',
        color: 'red',
        border: '1px solid blue',
        borderRadius: '2px',
    }
    const [showPunch, setShowPunch] = useState(props.show);

    const toggleJoke = () => {
        
        setShowPunch( prevStat => !prevStat )
    }

    function test(value) {
        console.log(value);
    };

  return (
    <div>
         <h1>{props.set}</h1>
        {
            showPunch &&
            <h2 style={Styles}>{props.punch}</h2>
        }
        <button onClick={toggleJoke}>
            { showPunch ? 'Hide' : 'Show'}
    
        </button>
    </div>
  )
}
