import React from 'react';

export default class Joke extends React.Component {
    render(){
        // let questionTextIfPresent;
        // if(this.props.hasOwnProperty("question")) {
        //     questionTextIfPresent = <p className="joke-question">{this.props.question}</p>;
        // }
        return (
            // jokes with no question are in bold - ternary practice
            <div className="joke-item">
                {/*questionTextIfPresent*/}  
                <p 
                    style={{
                        display: this.props.question ? "block" : "none" }} 
                    className="joke-question">{this.props.question}</p>
                <p 
                    style={{
                        fontWeight: !this.props.question && "bold", 
                        backgroundColor: !this.props.question && "#533" }} 
                    className="joke-line">{this.props.punchline}</p>
            </div>
        );
    }
}
