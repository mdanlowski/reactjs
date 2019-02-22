import React from "react";
import ContactCard from "./ContactCard"

export default class ContactList extends React.Component {
    render(){
        return(
            <ul>
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
                <ContactCard />
            </ul>
        );
    }
}