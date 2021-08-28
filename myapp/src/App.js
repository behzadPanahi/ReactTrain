import React from 'react'
import Product from './components/product/Product'

class App extends React.Component{
    render(){
        return(
        <div id='main' className='container'>
            Hello World !!!!!
                <Product title='book1' price='90'/> 
                <Product title='book2' price='70'/> 
                <Product title='book1' price='80'/> 
        </div>)
    }
}
export default App