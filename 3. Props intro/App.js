import React from "react";
// import TodoItem from "./lib/TodoItem";
// import ContactList from "./lib/ContactList";

import ContactCard from "./lib/ContactCard"

export default class App extends React.Component {
    render(){
        // it looks cluttered and unwieldy when hardcoded, but the data usually comes in JSON from API or a file
        return(
            <ul>
                <ContactCard contact={{
                    name: "Mr. Lucc",
                    imgUrl: "https://placekitten.com/200/200",
                    phone: "123123123",
                    email: "meow@cat.nip"
                    }}
                />
                <ContactCard contact={{
                    name: "Zgnił",
                    imgUrl: "https://placekitten.com/250/150",
                    phone: "321321321",
                    email: "meow@cat.łee"
                }}
                 />
                <ContactCard contact={{
                    name: "Szpiegk",
                    imgUrl: "https://placekitten.com/300/200",
                    phone: "123123123",
                    email: "meow@cat.nip"
                }}
                />
                <ContactCard contact={{
                    name: "Borys" ,
                    imgUrl: "https://placekitten.com/300/300" ,
                    phone: "123456789" ,
                    email: "zaje@bie.cie"
                }}
                />
            </ul>
        );
    }
}

// export default class App extends React.Component {
//     render(){
//         return(
//             // <ul className="todo-list">
//             //     <TodoItem />
//             //     <TodoItem />
//             //     <TodoItem />
//             //     <TodoItem />
//             //     <TodoItem />
//             // </ul>
//             <ContactList />
//         );
//     }
// }

