import React from 'react'
import "../Styles/index.css"

const Campos = (props) => {
  const{
    valor,
    onChange,
} = props;
  return (
    <>
        <input type={"number"} placeholder='0' onChange={onChange} className='campos' value={valor}></input>
    </>
  )
}

export default Campos