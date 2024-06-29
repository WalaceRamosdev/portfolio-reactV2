import style from './ButtonB.module.css'

function ButtonB ({text, link}) {
    return (
        <div>
            <a href={link}>
            <button className={style.btn}>
                {text}
            </button>
            </a>
        </div>
    )
}

export default ButtonB