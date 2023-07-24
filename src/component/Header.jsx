import React, {useState} from 'react'
import JokesData from './JokesData'
import { Joke } from './Joke'

export const Header = (props) => {

    const [showPunch, setShowPunch ] = useState(JokesData);
    const JokeElements = JokesData.map( joke => {
        return (
            <Joke key={joke.key} set={joke.setup} punch={joke.punchline} show={joke.show} />
        )
    });

  return (
    <>
    <div>Header {props.user}</div>
    { JokeElements }
    </>

  )
}
