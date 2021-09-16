import React from 'react'
import './Product.css'

class Product extends React.Component{
   
    render(){
        return(
            <div className='product'>
                <p onClick={this.props.click}>book title : {this.props.title}</p>
                <p>book price : {this.props.price}</p>
                <p> {this.props.children} </p>
                <input type='text' onChange={this.props.change}/>
            </div>
        )
    }
}


export default Product