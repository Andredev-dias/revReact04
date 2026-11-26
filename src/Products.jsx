import s from './Products.module.css'
import teste from '/bannerImg.webp'
import Tilt from 'react-parallax-tilt';

function Products() {
    return (
        <section className={s.wrapProducts}>
            <Tilt tiltReverse>
                <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem} src={teste} alt="Imagem produto" />
                    </div>
                    <div className={s.wrapCardTexts}>
                        <h2 className={s.cardTitle}>TITULO</h2>
                        <p className={s.cardText}>BLA BLA BLA</p>
                    </div>
                </div>
            </Tilt>
        </section>
    )
}

export default Products
