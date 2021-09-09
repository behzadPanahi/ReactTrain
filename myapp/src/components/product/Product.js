import React from 'react'
import './Product.css'

const Product=(props)=>{
    return(
        <div className='product'>
            <p onClick={props.click}>book title : {props.title}</p>
            <p>book price : {props.price}</p>
            <p> {props.children} </p>
            <input type='text' onChange={props.change}/>
        </div>
    )
}

export default Product