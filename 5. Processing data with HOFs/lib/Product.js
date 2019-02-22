import React from 'react';

export default class Product extends React.Component {
    render(){
        let productStyle = {
           borderBottom: "2px solid dodgerblue",
           padding: "0 0 10% 5%",
           
        }
        return(
            <div style={productStyle}>
                <h2>{this.props.prod.name}</h2>
                <p>
                    {this.props.prod.description}
                </p>
                <strong>Price: {
                    this.props.prod.price.toLocaleString(
                        "pl-PL", { style: "currency", currency: "PLN"}
                        )}
                </strong>
            </div>
        )
    }
}