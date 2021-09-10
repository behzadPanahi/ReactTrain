import React from "react";
import Product from "../product/Product";

class ProductList extends React.Component{
    constructor(props){
        super(props)
        console.log('ProductList.js constractor');
    }
    componentDidMount(){
        console.log('ProductList.js componentDidMount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('ProductList.js shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('ProductList.js getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(){
        console.log('ProductList.js componentDidUpdate');
    } 

render(){  
    console.log('ProductList.js rendered');
       return this.props.stateProducts.map((item, index) => {
            return <Product
                key={item.id}
                title={item.title}
                price={item.price}
                click={() => this.props.click(index)}
                change={(event)=>this.props.change(event,index)}
            />
        })
    
}
}

export default ProductList