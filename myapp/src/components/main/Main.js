import React from "react";
import './Main.css'

class Main extends React.Component{
render(){
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