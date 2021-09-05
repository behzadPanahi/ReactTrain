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

    toggleHandler = () => {
        const show = this.state.showProducts
        this.setState({ showProducts: !show })
    }


    render() {
        let products=null;
        if(this.state.showProducts){
            products= <div>
                {
                    this.state.products.map((item)=>{
                        return <Product title={item.title} price={item.price}/>
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