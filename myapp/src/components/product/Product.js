import React from 'react'
import './Product.css'
import Wrapper from '../../hoc/Wrapper'

class Product extends React.Component {

    render() {
        return (
            <React.Fragment>
                <p key='1' onClick={this.props.click}>book title : {this.props.title}</p>
                <p key='2'>book price : {this.props.price}</p>
                <p key='3'> {this.props.children} </p>
                <input key='4' type='text' onChange={this.props.change} />
            </React.Fragment>
        )
    }
}


export default Wrapper(Product,'product')