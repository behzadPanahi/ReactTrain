import React from 'react'
import './Product.css'

class Product extends React.Component{
    constructor(props){
        super(props)
        console.log('Product.js constractor');
    }
    componentDidMount(){
        console.log('Product.js componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('Product.js shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Product.js getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('Product.js componentDidUpdate');
    }
    
    render(){
        console.log('Product.js rendered');
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