import React from 'react';
import Product from "./lib/Product";
import products from "./lib/products";

export default class App extends React.Component {
    render(){
        return (
            <div>
                {products.map(p => <Product key={p.id} prod={p} />)}
            </div>
        );
    }
}