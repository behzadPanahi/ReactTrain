import React from 'react'
import './Product.css'

const Product=(props)=>{
    return(
        <div className='product'>
            <p>book title : {props.title}</p>
            <p>book price : {props.price}</p>
            <p> {props.children} </p>
        </div>
    )
}

export default Product