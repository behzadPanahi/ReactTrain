import React from "react";
const Wrapper=(props)=>{
    return(<div className={props.cls}>
        {props.children}
    </div>)

}

export default Wrapper