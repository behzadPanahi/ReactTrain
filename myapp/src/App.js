import React from 'react'
import Product from './components/product/Product'

class App extends React.Component {
    state={
        products:[{title:'book1' , price:'90'},{title:'book2' , price:'80'},{title:'book3' , price:'70'}]
    }
    render() {
        return (
            <div id='main' className='container'>
                Hello World !!!!!
                <Product title={this.state.products[0].title} price={this.state.products[0].price} />
                <Product title={this.state.products[1].title} price={this.state.products[1].price} />
                <Product title={this.state.products[2].title} price={this.state.products[2].price} />
            </div>)
    }
}
export default App