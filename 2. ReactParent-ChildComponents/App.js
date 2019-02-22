import React from "react";

import Navbar from "./lib/Navbar"
import MainContent from "./lib/MainContent"
import Footer from "./lib/Footer"
import TodoList from "./lib/TodoList"

export default class App extends React.Component {
    render() {
        return (
            <div className="component-group">
                <Navbar />
                <MainContent />
                <Footer />
                <TodoList />
            </div>
        );
    }
}