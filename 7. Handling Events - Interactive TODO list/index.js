import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from "./lib/TodoItem";
import todos from "./lib/todosData";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todosData : todos
    }
  }
  render() {
    return (
      <div>
        <h1>Your tasks:</h1>
        <ul>
          {this.state.todosData.map(td => <TodoItem key={td.id} task={td.task} done={td.done}/>)}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// class CheckBox extends React.Component{
//   constructor() {
//     super();
//     this.state = {isChecked: false};
//     this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
//   }

//   handleChecked () {
//     this.setState({isChecked: !this.state.isChecked});
//   }

//   render(){
//     var txt;
//     if (this.state.isChecked) {
//       txt = 'checked'
//     } else {
//       txt = 'unchecked'
//     }

//     // remove () after handleChecked because you need pass 
//     // reference to function
//     // also add return before <div>
//     return <div>
//        <input type="checkbox" onChange={ this.handleChecked }/>
//        <p>This box is {txt}</p>
//     </div>
//   }
// }

// ReactDOM.render(
//   <CheckBox/>,
//   document.getElementById('root')
// );
