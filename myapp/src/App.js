import React from 'react'
import ProductList from './components/productList/ProductList'
import './App.css'
import Main from './components/main/Main'
import Wrapper from './hoc/Wrapper'
import Container from './hoc/Container'

class App extends React.Component {
    state = {
        products: [
            { id: 1, title: 'book1', price: '90' },
            { id: 2, title: 'book2', price: '80' },
            { id: 3, title: 'book3', price: '70' }],
        showProducts: false,
        showMain: true,
        auth: false,
    }

    toggleHandler = (a) => {
        const show = this.state.showProducts
        this.setState({ showProducts: !show })
    }

    deleteProductHandler = (index) => {
        const tempProducts = this.state.products
        tempProducts.splice(index, 1);
        this.setState({ priducts: tempProducts })
    }

    changeTitelHandler = (event, index) => {
        const tempProducts = this.state.products
        tempProducts[index].title = event.target.value
        this.setState({ priducts: tempProducts })
    }

    loginHandler = () => {
        this.setState({ auth: true })
    }
    render() {
        let products = null;
        if (this.state.showProducts) {
            products = (
                <ProductList
                    stateProducts={this.state.products}
                    click={this.deleteProductHandler}
                    change={this.changeTitelHandler}
                    isAuth={this.state.auth}
                />
            )
        }
        return (
            <Container>
                <button className='btn'
                    onClick={() => { this.setState({ showMain: false }) }}>
                    remove main</button>
                {this.state.showMain ?
                    <div>
                        <Main
                            click={this.toggleHandler}
                            login={this.loginHandler} />
                        {products}
                    </div> : null}
            </Container>
        )
    }
}
export default Wrapper(App, 'center')