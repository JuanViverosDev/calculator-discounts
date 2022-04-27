import React from 'react'
import "../Styles/index.css"

const Button = (props) => {
    const{
        label,
        onClick
    } = props;

  return (
    <>
        <button {...props} onClick={onClick}>{label}</button>
    </>
  )
}

export default Button