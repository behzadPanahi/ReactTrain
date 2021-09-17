import React from 'react'
import './Product.css'
import Wrapper from '../../hoc/Wrapper'
import AuthContext from '../../context/auth-context'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.refElement = React.createRef()
    }

    static contextType=AuthContext

    componentDidMount() {
        this.refElement.current.focus()
    }
    render() {
        return (

            <React.Fragment>
              {this.context.auth ? <p>loged in</p> : <p>please log in</p>}
                <p key='1' onClick={this.props.click}>book title : {this.props.title}</p>
                <p key='2'>book price : {this.props.price}</p>
                <p key='3'> {this.props.children} </p>
                <input
                    ref={this.refElement}
                    key='4' type='text' onChange={this.props.change} />
            </React.Fragment>

        )
    }
}


export default Wrapper(Product, 'product')