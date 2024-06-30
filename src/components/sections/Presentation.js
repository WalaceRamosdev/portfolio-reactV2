import style from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'


function Presentation () {

    const [text, setText] = useState('');
    const toRotate = [' Desenvolvedor Full-Stack', ' Desenvolvedor Freelancer' ];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100;
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker  = setInterval(() => {
            toType()
        }, delta)

        return() => {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }

    return (
        <div className = {style.presentation} id="presentation">

            <h3>
                <strong>
                    Bem vindo ao meu portfólio
                </strong>
            </h3>

            <h1>Olá! Sou Walace Ramos, e sou <span>{text}</span></h1>
            

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