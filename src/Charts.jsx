import { useState } from 'react'
import s from './Charts.module.css'
import { Menu } from './components/menu'

function Charts(){

const [show, setShow] = useState("")
    
    return(
        <>
            <Menu/>
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setShow("barra")}>Barra</button>
                    <button onClick={() => setShow("pizza")}>Pizza</button>
                    <button onClick={() => setShow("linha")}>Linha</button>
                </div>
                {show === "barra" && <h1>gráfico barra</h1>}
                {show === "pizza" && <h1>gráfico de pizza</h1>}
                {show === "linha" && <h1>gráfico de linha</h1>}
            </div>
            
        </>
    )
}

export default Charts