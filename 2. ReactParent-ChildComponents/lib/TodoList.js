import React from "react";

export default class TodoList extends React.Component {
    render() {
        return(
            <ul className="todo-list">
                <li>
                    <input type="checkbox" /> pet the alien </li>
                <li>
                    <input type="checkbox" /> feed the cats </li>
                <li>
                    <input type="checkbox" /> buy jet fuel </li>
                <li>
                    <input type="checkbox" /> buy more jet fuel </li>
                <li>
                    <input type="checkbox" /> buy even more jet fuel </li>
            </ul>
        );
    }
}