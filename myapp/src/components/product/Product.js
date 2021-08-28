import React from 'react'

const Product=(props)=>{
    return(
        <div>
            <p>book title : {props.title}</p>
            <p>book price : {props.price}</p>
            <p> {props.children} </p>
        </div>
    )
}

export default Product