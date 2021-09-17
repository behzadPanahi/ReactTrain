import React from "react";
import Product from "../product/Product";

class ProductList extends React.Component {

    render() {
        return this.props.stateProducts.map((item, index) => {
            return <Product
                key={item.id}
                title={item.title}
                price={item.price}
                click={() => this.props.click(index)}
                change={(event) => this.props.change(event, index)}
            />
        })

    }
}

export default ProductList