import React from "react";

export default class TodoItem extends React.Component {
    render(){
        return(
            <li className="todo-item">
                <input type="checkbox" /> drink coffee
            </li>
        );
    }
}