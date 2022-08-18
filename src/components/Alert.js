import React from "react";

export default function Alert(props) {
    const capitalize= (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
  return (
    <div style={{height: '50px'}}>

    {props.alert && 
      <div
        className={`position-absolute w-100 text-center alert alert-${props.alert.type}`}
        role="alert"
        >
        <strong>
          {capitalize(props.alert.type)} : {props.alert.msg}
        </strong>
      </div>}
        </div>
    )

}
