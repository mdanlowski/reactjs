import React from 'react';

// export default class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             answer: "Yup" // data that component will have upon initialization
//             // STATE CAN BE PASSED TO A CHILD COMPONENT THRU PROPS
//             // <ChildComponent answer={this.state.answer} />
//             /* ======== exercise 1 : ======== */,
//             name: "Janusz",
//             age: 69
//         };
//     }
//     render() {
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         );    
//     }
// }

///* ======== exercise 2 : ======== */,
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    handleLogIO(){
        //setState method
        console.log('logic here');
    }
    render(){
        return(
            <div>
                <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
                <button onClick={this.handleLogIO}>Toggle login</button>
            </div>
        );
    }
}

