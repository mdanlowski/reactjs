import React, { Component } from "react";

export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked : props.done,
            itemStyle : {
                textDecoration : (props.done ? "line-through" : "")
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        this.setState(
            {
                isChecked : !this.state.isChecked,
                itemStyle : {textDecoration : (!this.state.isChecked ? "line-through" : "")}
            })
    }
    handleMOver(event){
        event.target.style.color = "red";
    }
    render(){
        return (
            <li onMouseOver={this.handleMOver}>
                <input type="checkbox" onChange={this.handleChange} checked={this.state.isChecked}/>
                <span style={this.state.itemStyle}>{this.props.task}</span>
            </li>
        );
    }
}
