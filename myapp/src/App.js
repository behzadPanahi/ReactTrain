import React from 'react'
import Product from './components/product/Product'
import './App.css'

class App extends React.Component {
    state = {
        products: [{ title: 'book1', price: '90' },
        { title: 'book2', price: '80' },
        { title: 'book3', price: '70' }],
        showProducts: false
    }

    changeInputHandler = (event) => {
        let newState = {
            products: [
                { title: 'book1', price: '10' },
                { title: event.target.value, price: '10' },
                { title: 'book3', price: '10' }]
        }
        this.setState(newState)
    }

    toggleHandler = () => {
        const show = this.state.showProducts
        this.setState({ showProducts: !show })
    }


    render() {
        let products=null;
        if(this.state.showProducts){
            products= <div>
            <Product title={this.state.products[0].title}
                price={this.state.products[0].price} />
            <Product title={this.state.products[1].title}
                price={this.state.products[1].price} 
                change={this.changeInputHandler}/>
            <Product title={this.state.products[2].title}
                price={this.state.products[2].price} />
        </div>
        }
        return (
            <div className='center'>
                <h1>
                    Book store
                </h1>
                <button
                    onClick={this.toggleHandler}
                    className='btn' >
                    show/hidden
                </button>
                {products}
            </div>
            )
    }
}
export default App