import javascript from '../../images/javascript.svg'
import html from '../../images/html.svg'
import css from '../../images/css.svg'
import react from '../../images/react.svg'
import typescript from '../../images/typescript.svg'

import styles from './Skills.module.css'

function Skills () {
    return (
        <div className={styles.skill} id="skills">
            <h1>
                Habilidades
            </h1>

            <p>
                Conheça um pouco das minhas principais habilidades e conhecimentos
            </p>

            <div>
                <img src={html}/>
                <img src={javascript}/>
                <img src={react}/>
                <img src={typescript}/>
                <img src={css}/>
            </div>

        </div>
    )
}

export default Skills