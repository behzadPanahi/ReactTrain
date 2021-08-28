import React from 'react'
import Product from './components/product/Product'

class App extends React.Component{
    render(){
        return(
        <div id='main' className='container'>
            Hello World !!!!!
                <Product/> 
        </div>)
    }
}
export default App