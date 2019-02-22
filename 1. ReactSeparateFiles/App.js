import React from "react";
import MainContent from "./components/MyFunctionalComponent";
import Footer from "./components/Footer";

export default class App extends React.Component {
    render() {
        return (
            <div className="group">
                <MainContent />
                <Footer />
            </div>
        );  
    }
}