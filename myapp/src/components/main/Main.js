import React, { useEffect, useRef } from "react";
import './Main.css'

const Main = (props) => {
    const btnRef = useRef(null)
    useEffect(() => {
        btnRef.current.click()
        return () => {
            console.log('Main.js is cleanUp ');
        }
    }, [])
    return (<div>
        <h1>
            Book store
        </h1>
        <button
            ref={btnRef}
            onClick={props.click}
            className='btn' >
            show/hidden
        </button>
        <button onClick={props.login}>log in</button>
    </div>)


}
// class Main extends React.Component{
//     constructor(props){
//         super(props)
//         console.log('Main.js constractor');
//     }
//     componentDidMount(){
//         console.log('Main.js componentDidMount');
//     }

//     shouldComponentUpdate(nextProps,nextState){
//         console.log('Main.js shouldComponentUpdate');
//         return true
//     }

//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log('Main.js getSnapshotBeforeUpdate');
//         return null
//     }

//     componentDidUpdate(){
//         console.log('Main.js componentDidUpdate');
//     }
// render(){
//     console.log('Main.js rendered');
//     return(<div>
//     <h1>
//     Book store
// </h1>
// <button
//     onClick={this.props.click}
//     className='btn' >
//     show/hidden
// </button>
//     </div>)
// }
// }
export default Main