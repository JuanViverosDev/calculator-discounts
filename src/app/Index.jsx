import React, { useState } from 'react'
import Button from '../components/Button'
import Campos from '../components/Campos'
import "../Styles/index.css"

const Index = () => {
    //Monto total de la factura
    const [bill, setBill] = useState(0)
    //Propina
    const [tip, setTip] = useState(0)
    //Numero de personas
    const [people, setPeople] = useState(0)
    //Calcular cuanta propina deja cada persona
    const [tipPeople, setTipPeople] = useState(0)
    //Total que pagó cada persona
    const [total, setTotal] = useState(0)

    function resetear(){
        setBill("")
        setTip("")
        setPeople("")
        setTipPeople("")
        setTotal("")
    }

    function getResult(){
        setTipPeople("$"+(Number(bill)*(tip*0.01))/Number(people))
        setTotal("$"+(Number(bill)+((tip*0.01)*100))/Number(people))
    }

    console.log("bill", bill)
    console.log("tip", tip)
    console.log("people", people)
    console.log("total", total)
  return (
    <>
        <p className='title'>SPLI<br/>TTER</p>
        <section className='container'>
            <article className='subcontainer1'>
                <div>
                    <h2 className='subtitles'>
                        Bill
                    </h2>
                    <Campos onChange={(e) => (setBill(e.target.value), getResult())}/>
                </div>
                <div>
                    <h2 className='subtitles'>
                        Select Tip %
                    </h2>
                    <div className='valores'>
                        <Button onClick={() => (setTip(5), getResult())} className="boton" label={"5%"}/> 
                        <Button onClick={() => (setTip(10), getResult()) } className="boton" label={"10%"}/> 
                        <Button onClick={() => (setTip(15), getResult()) } className="boton" label={"15%"}/> 
                    </div>
                    <div className="valores">
                        <Button onClick={() => (setTip(25), getResult()) } className="boton" label={"25%"}/> 
                        <Button onClick={() => (setTip(50), getResult()) } className="boton" label={"50%"}/> 
                        <Campos onChange={(e) => (setTip(e.target.value), getResult())} placeholder='0' className='campos'/>
                    </div>
                </div>
                <div>          
                    <h2 className='subtitles'>
                        Number of People
                    </h2>
                    <Campos onChange={(e) => setPeople(e.target.value)}/>
                </div>
            </article>
            <article className='subcontainer2'>
                <section className='total'>
                <h2 className='subtitles1'>
                    Tip Amount <br/><span>/person</span>
                </h2>
                <input className='textarea' placeholder='$0.00' value={tipPeople}/>
                </section>
                <section className='total'>
                <h2 className='subtitles1'>
                    Total <br/><span>/person</span>
                </h2>
                <input className='textarea' placeholder='$0.00' value={total}/>
                </section>
                <Button onClick={() => {resetear()} } className="boton1" label="Reset"/>
            </article>
        </section>
    </>
  )
}

export default Index