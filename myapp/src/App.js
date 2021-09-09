import React from 'react'
import ProductList from './components/productList/ProductList'
import './App.css'
import Main from './components/main/Main'

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

    changeTitelHandler=(event,index)=>{
        const tempProducts = this.state.products
        tempProducts[index].title=event.target.value
        this.setState({ priducts: tempProducts })
    }
    render() {
        let products = null;
        if (this.state.showProducts) {
            products=(
                <ProductList 
           stateProducts={this.state.products}
           click={this.deleteProductHandler}
           change={this.changeTitelHandler}
           />
            )  
        }
        return (
            <div className='center'>
               <Main click={this.toggleHandler}/>
                {products}
            </div>
        )
    }
}
export default App