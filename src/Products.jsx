import s from './Products.module.css'
import { Card } from './components/card'
import { Menu } from './components/menu'
import teste from '/bannerImg.webp'

function Products() {
    return (
        <>
            <Menu />
            <section className={s.wrapProducts}>
                <Card imagem={teste} titulo="Título 01" texto="Texto sobre o titulo 01"/>
                <Card imagem={teste} titulo="Título 02" texto="Texto sobre o titulo 02"/>
                <Card imagem={teste} titulo="Título 03" texto="Texto sobre o titulo 03"/>
                <Card imagem={teste} titulo="Título 04" texto="Texto sobre o titulo 04"/>
                <Card imagem={teste} titulo="Título 05" texto="Texto sobre o titulo 05"/>
                <Card imagem={teste} titulo="Título 06" texto="Texto sobre o titulo 06"/>
                <Card imagem={teste} titulo="Título 07" texto="Texto sobre o titulo 07"/>
                <Card imagem={teste} titulo="Título 08" texto="Texto sobre o titulo 08"/>
                <Card imagem={teste} titulo="Título 09" texto="Texto sobre o titulo 09"/>
                <Card imagem={teste} titulo="Título 10" texto="Texto sobre o titulo 10"/>
            </section>
        </>
    )
}

export default Products
