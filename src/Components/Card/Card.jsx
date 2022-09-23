import style from './card.module.scss'

const Card = () => {
    return (
        <section className={style.card}>
            <div className="container">
                <h2>Cards</h2>
                <div className={style.card_container}>
                    <h1 className={style.card_title}>This is a Card Title</h1>
                    <p className={style.card_body}>
                        LoremIpsum LoremIpsum <a href='#'>LoremIpsum</a>
                        LoremIpsum LoremIpsum LoremIpsum
                    </p>
                </div>
            </div>
        </section>
    )

}

export default Card