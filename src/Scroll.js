import React from "react";

const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll', border:'5px solid white', height:'520px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;