import React, { useState } from 'react'
import Button from '../components/Button'
import Campos from '../components/Campos'
import "../Styles/index.css"

const Index = () => {
    const [total, setTotal] = useState("$0.00")
  return (
    <>
        <p className='title'>SPLI<br/>TTER</p>
        <section className='container'>
            <article className='subcontainer1'>
                <div>
                    <h2 className='subtitles'>
                        Bill
                    </h2>
                    <Campos/>
                </div>
                <div>
                    <h2 className='subtitles'>
                        Select Tip %
                    </h2>
                    <div className='valores'>
                        <Button className="boton" label={"5%"}/> 
                        <Button className="boton" label={"10%"}/> 
                        <Button className="boton" label={"15%"}/> 
                        <Button className="boton" label={"25%%"}/> 
                        <Button className="boton" label={"50%"}/> 
                    <Campos/>
                    </div>
                </div>
                <div>          
                    <h2 className='subtitles'>
                        Number of People
                    </h2>
                    <Campos/>
                </div>
            </article>
            <article className='subcontainer2'>
                <h2 className='subtitles1'>
                    Tip Amount <br/><span>/person</span>
                </h2>
                <p className='textarea'>{total}</p>
                <h2 className='subtitles1'>
                    Total <br/><span>/person</span>
                </h2>
                <p className='textarea'>{total}</p>
                <Button className="boton1" label="Reset"/>
            </article>
        </section>
    </>
  )
}

export default Index