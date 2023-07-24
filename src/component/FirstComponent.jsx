import React from 'react';
import { SecondComponent } from './SecondComponent';


function FirstComponent(props) {
    console.log(props)
    return (
        <div style={Styles}>
            <h1>{title}</h1>
            <h2>My Age is {props.ages} {props.nam} {props.test}</h2>
            <Greet /> 
            { Greet()}
        
            { 
                props.data.map((item ) => {
                    return(
                        <SecondComponent data={item} />
                    )
                })
            }
        
           
        </div>
    );
}

const Greet = () => {
    return (
        <h1>This is another function</h1>
    )
}


const Styles = {
    backgroundColor: 'Blue',
    color: 'white',
    fontSize: '16px',

};




const title = 'This is Title variable';

export default FirstComponent;