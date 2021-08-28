import React, { useState } from 'react'
import Product from './components/product/Product'

// class App extends React.Component {
//     state = {
//         products: [{ title: 'book1', price: '90' }, { title: 'book2', price: '80' }, { title: 'book3', price: '70' }]
//     }

//     changePriceHandler = () => {
//         let newState = {
//             products: [{ title: 'book1', price: '10' }, { title: 'book2', price: '10' }, { title: 'book3', price: '10' }]
//         }
//         this.setState(newState)
//     }
//     render() {
//         return (
//             <div id='main' className='container'>
//                 Hello World !!!!!
//                 <Product title={this.state.products[0].title} price={this.state.products[0].price} />
//                 <Product title={this.state.products[1].title} price={this.state.products[1].price} />
//                 <Product title={this.state.products[2].title} price={this.state.products[2].price} />
//                 <button onClick={this.changePriceHandler}>change price</button>
//             </div>)
//     }
// }

const App = () => {
    let [Pstate, setPState] = useState({
        products: [{ title: 'book1', price: '90' },
        { title: 'book2', price: '80' },
        { title: 'book3', price: '70' }]
    });

    let changePriceHandler = () => {
        let newState = {
            products: [{ title: 'book1', price: '10' },
            { title: 'book2', price: '10' },
            { title: 'book3', price: '10' }]
        }
        setPState(newState)

    }
    return (
        <div id='main' className='container'>
            Hello World !!!!!
            <Product title={Pstate.products[0].title} price={Pstate.products[0].price} />
            <Product title={Pstate.products[1].title} price={Pstate.products[1].price} />
            <Product title={Pstate.products[2].title} price={Pstate.products[2].price} />
            <button onClick={changePriceHandler}>change price</button>
        </div>)
}
export default App