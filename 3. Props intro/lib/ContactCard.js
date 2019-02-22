import React from "react";

export default class ContactCard extends React.Component {
    render(){
    // console.log(this.props);
        return(
            <li className="contact-item">
                <img src={this.props.contact.imgUrl} />
                <h3>{this.props.contact.name}</h3> 
                <p>Phone: <span>{this.props.contact.phone}</span></p>
                <p>Email: <span>{this.props.contact.email}</span></p>
            </li>
        );
    }
}