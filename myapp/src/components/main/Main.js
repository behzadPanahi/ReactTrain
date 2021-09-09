import React from "react";
import './Main.css'

class Main extends React.Component{
    constructor(props){
        super(props)
        console.log('Main.js constractor');
    }
    componentDidMount(){
        console.log('Main.js componentDidMount');
    }
render(){
    console.log('Main.js rendered');
    return(<div>
    <h1>
    Book store
</h1>
<button
    onClick={this.props.click}
    className='btn' >
    show/hidden
</button>
    </div>)
}
}
export default Main