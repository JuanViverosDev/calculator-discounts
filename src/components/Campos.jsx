import React from 'react'
import "../Styles/index.css"

const Campos = (props) => {
  const{
    valor,
    onChange,
    placeholder,
    className
} = props;
  
  return (
    <>
        <input type={"number"} placeholder={placeholder} onChange={onChange} className={className} value={valor}></input>
    </>
  )
}

export default Campos