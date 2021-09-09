import React from 'react'
import Product from './components/product/Product'
import './App.css'

class App extends React.Component {
    state = {
        products: [
            { id: 1, title: 'book1', price: '90' },
            { id: 2, title: 'book2', price: '80' },
            { id: 3, title: 'book3', price: '70' }],
        showProducts: false
    }

    toggleHandler = () => {
        const show = this.state.showProducts
        this.setState({ showProducts: !show })
    }

    deleteProductHandler = (index) => {
        const tempProducts = this.state.products
        tempProducts.splice(index, 1);
        this.setState({ priducts: tempProducts })
    }
    render() {
        let products = null;
        if (this.state.showProducts) {
            products = <div>
                {
                    this.state.products.map((item, index) => {
                        return <Product
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            click={() => this.deleteProductHandler(index)}
                        />
                    })
                }
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