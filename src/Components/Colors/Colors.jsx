import style from './colors.module.scss'

const Colors = () => {
    return (
        <>
            <h2 className={style.title}>BG Colors</h2>
            <div className={style.bg_colors}>
                <span className="bg-primary">Primary</span>
                <span className="bg-secondary">Secondary</span>
                <span className="bg-error">Error</span>
                <span className="bg-info">Info</span>
                <span className="bg-blue">Blue</span>
                <span className="bg-red">Red</span>
                <span className="bg-yellow">Yellow</span>
                <span className="bg-green">Green</span>
                <span className="bg-orange">Orange</span>
                <span className="bg-purple">Purple</span>
                <span className="bg-gray">Gray</span>
                <span className="bg-black">black</span>
                <span className="bg-white">white</span>
            </div>
            <br></br>
            <h2 className={style.title}>Text Colors</h2>
            <div className={style.text_colors}>
                <span className="text-primary">Primary</span>
                <span className="text-secondary">Secondary</span>
                <span className="text-error">Error</span>
                <span className="text-info">Info</span>
                <span className="text-blue">Blue</span>
                <span className="text-red">Red</span>
                <span className="text-yellow">Yellow</span>
                <span className="text-green">Green</span>
                <span className="text-orange">Orange</span>
                <span className="text-purple">Purple</span>
                <span className="text-gray">Gray</span>
                <span className="text-black">black</span>
                <span className="text-white">white</span>
            </div>
            <br></br>
            <h2 className={style.title}>Variations of colors</h2>
            <div className={style.bg_colors}>
                <span className="bg-primary-dark-9">Dark 9</span>
                <span className="bg-primary-dark-8">Dark 8</span>
                <span className="bg-primary-dark-7">Dark 7</span>
                <span className="bg-primary-dark-6">Dark 6</span>
                <span className="bg-primary-dark-5">Dark 5</span>
                <span className="bg-primary-dark-4">Dark 4</span>
                <span className="bg-primary-dark-3">Dark 3</span>
                <span className="bg-primary-dark-2">Dark 2</span>
                <span className="bg-primary-dark-1">Dark 1</span>
            </div>
        </>
    )
}

export default Colors