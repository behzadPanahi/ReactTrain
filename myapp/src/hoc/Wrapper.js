import React from "react";

const Wrapper = (WrapperComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrapperComponent />
        </div>
        )
}

export default Wrapper