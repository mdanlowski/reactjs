import React from "react";

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="main-navbar">
                <button>NavLink 1</button>
                <button>NavLink 2</button>
                <button>NavLink 3</button>
            </nav>
        );
    }
}