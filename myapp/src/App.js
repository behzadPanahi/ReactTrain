import React from 'react'
import Product from './components/product/Product'
import './App.css'

class App extends React.Component {
    state = {
        products: [{ title: 'book1', price: '90' }, { title: 'book2', price: '80' }, { title: 'book3', price: '70' }]
    }

    changePriceHandler = (newTitle) => {
        let newState = {
            products: [
                { title: newTitle, price: '10' }, 
                { title: 'book2', price: '10' },
                 { title: 'book3', price: '10' }]
        }
        this.setState(newState)
    }
    render() {
        return (
            <div className='center'>
                Book store
                <Product title={this.state.products[0].title}
                    price={this.state.products[0].price} />
                <Product title={this.state.products[1].title}
                    price={this.state.products[1].price} />
                <Product title={this.state.products[2].title}
                    price={this.state.products[2].price}
                    click={this.changePriceHandler.bind(this,'new title')} />
                <button onClick={()=>this.changePriceHandler('title bbb')}>change price</button>
            </div>)
    }
}
export default App