import style from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

function Card ({img, title, tech, description, repo, site}) {

    const [info, setInfo] = useState(false)
    
    const InfoOn = () => {
        setInfo(true)
    }

    const InfoOff = () => {
        setInfo(false)
    }

    return (
        <div className={style.card} onMouseLeave={InfoOff}>

            <a onMouseEnter={InfoOn} href={site}
                target="_blank" ><img src={img}/>
            </a>
            
            {info === true && (

            <section>
                <h3>{title}</h3>
                <p>
                    <strong>
                        Tecnologias: 
                    </strong> {tech} 
                </p>
                <p>{description}</p>

                <ButtonB text={'Acesse o repositório'} link={repo}/>
            </section>
            )
        }

        </div>
    )
}

export default Card