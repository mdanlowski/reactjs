import React from 'react';
import Joke from './Joke';
import jokesData from "./jokesData"; // simulate HTTP request

function prepareComponents(data){
    let jokeComponents = data.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />);
    return jokeComponents;
}

export default class App extends React.Component {

    render(){
        // return (
        return prepareComponents(jokesData);
        //     // <div>
        //     //     <Joke content={} />
        //     //     <Joke content={} />
        //     //     <Joke content={} />
        //     //     <Joke content={} />
        //     //     <Joke content={} />
        //     // </div>
        // );
    }
}
