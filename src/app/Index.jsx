import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Campos from '../components/Campos'
import "../Styles/index.css"

const Index = () => {
    //Monto total de la factura
    const [bill, setBill] = useState()
    //Propina
    const [tip, setTip] = useState()
    //Numero de personas
    const [people, setPeople] = useState()
    //Calcular cuanta propina deja cada persona
    const [tipPeople, setTipPeople] = useState()
    //Total que pagó cada persona
    const [total, setTotal] = useState()

    function resetear(){
        setBill("")
        setTip("")
        setPeople("")
        setTipPeople("")
        setTotal("")
    }

    useEffect(()=>{
        if(isNaN(bill) || isNaN(tip) || isNaN(people)){
            setTipPeople("")
            setTotal("")
        }else{
            setTipPeople("$"+(Number(bill)*(tip*0.01))/Number(people))
            setTotal("$"+(Number(bill)+((tip*0.01)*100))/Number(people))
        }
    },[bill, tip, people]) 

    console.log("bill", bill)
    console.log("tip", tip)
    console.log("people", people)
    console.log("tippeople", tipPeople)
    console.log("total", total)
  return (
    <>
        <p className='title'>SPLI<br/>TTER</p>
        <section className='container'>
            <article className='subcontainer1'>
                <div className='secciones'>
                    <div className='titulitos'>
                        <h2 className='subtitles'>
                            Bill
                        </h2>
                        <h2 className={bill !== "0" ? "titulitos1" : "titulitoserror" }>
                            Can't be zero
                        </h2>
                    </div>
                    <Campos className={bill !== "0" ? "campos" : "camposerror" } onChange={(e) => (setBill(e.target.value))} placeholder="0"/>
                </div>
                <div className='secciones'>
                    <h2 className='subtitles'>
                        Select Tip %
                    </h2>
                    <div className='valores'>
                        <Button onClick={() => (setTip(5))} className="boton" label={"5%"}/> 
                        <Button onClick={() => (setTip(10)) } className="boton" label={"10%"}/> 
                        <Button onClick={() => (setTip(15)) } className="boton" label={"15%"}/> 
                        <Button onClick={() => (setTip(50)) } className="boton" label={"50%"}/> 
                        <Button onClick={() => (setTip(25)) } className="boton" label={"25%"}/> 
                        <Campos onChange={(e) => (setTip(e.target.value))} placeholder='Custom' className='custom'/>
                    </div>
                </div>
                <div> 
                    <div className='titulitos'>       
                        <h2 className='subtitles'>
                            Number of People
                        </h2>
                        <h2 className={people !== "0" ? "titulitos1" : "titulitoserror" }>
                            Can't be zero
                        </h2>
                    </div>  
                    <Campos className={people !== "0" ? "campos" : "camposerror" } placeholder="0" onChange={(e) => (setPeople(e.target.value))}/>
                </div>
            </article>
            <article className='subcontainer2'>
                <div className='secciones'>
                <section className='total'>
                <h2 className='subtitles1'>
                    Tip Amount <br/><span>/person</span>
                </h2>
                <input disabled="true" className='textarea' placeholder='$0.00' value={tipPeople}/>
                </section>
                </div>
                <section className='total'>
                <h2 className='subtitles1'>
                    Total <br/><span>/person</span>
                </h2>
                <input disabled="true" className='textarea' placeholder='$0.00' value={total}/>
                </section>
                <Button onClick={() => {resetear()} } className="boton1" label="Reset"/>
            </article>
        </section>
    </>
  )
}

export default Index