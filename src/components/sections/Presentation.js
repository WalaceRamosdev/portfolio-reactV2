import ButtonA from '../elements/ButtonA'
import style from './Presentation.module.css'
import { useEffect, useState } from 'react'


function Presentation () {

    const [text, setText] = useState('')
    const textRotate = [' sou Desenvolvedor Full-Stack', ' sou Desenvolvedor Freelancer' ]
    const [loop, setLoop] = useState(0)
    const [textDelete, setTextDelete] = useState(false)
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker  = setInterval(() => {
            toType()
        }, delta)

        return() => {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % textRotate.length
        let fullText = textRotate[i]
        let updatedText = textDelete ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (!textDelete && updatedText === fullText) {
            setTextDelete(true);
            setDelta(period);
        }
        else if (textDelete && updatedText === '') {
            setTextDelete(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    return (
        <div className = {style.presentation} id="presentation">

            <h3>
                <strong>
                    Bem vindo ao meu portfólio
                </strong>
            </h3>

            <h1>
                Olá! Me chamo Walace Ramos e {text}
            </h1>

            <p>
                Com uma longa experiência no desenvolvimento de websites e aplicações web, estou aqui <br/>
                para transformar suas ideias em realidade digital. Especializado em tecnologias modernas <br/>
                como HTML5, CSS3, JavaScript, ReactJs, e Node.js, ofereço soluções sob medida que <br/>
                atendem às necessidades específicas do seu negócio.
            </p>

                <ButtonA link={"https://www.instagram.com/walacedev.contato/" } text='Contato'/>
                
        </div>
    )
}

export default Presentation