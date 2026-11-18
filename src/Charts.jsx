import { useState } from 'react'
import s from './Charts.module.css'
import { Menu } from './components/menu'
import { GBarra } from './components/barChart'
import { GLinha } from './components/lineChart'
import { GPie } from './components/pieChart'

function Charts() {
    const [show, setShow] = useState("")

    return (
        <>
            <Menu />
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setShow("barra")}>Barra</button>
                    <button onClick={() => setShow("pizza")}>Pizza</button>
                    <button onClick={() => setShow("linha")}>Linha</button>
                </div>
                {show === "barra" && <GBarra/>}
                {show === "pizza" && <GPie/>}
                {show === "linha" && <GLinha/>}
            </div>

        </>
    )
}

export default Charts