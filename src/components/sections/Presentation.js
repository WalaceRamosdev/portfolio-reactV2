import ButtonA from '../elements/ButtonA'
import style from './Presentation.module.css'


function Presentation () {
    return (
        <div className = {style.presentation} id="presentation">

            <h3>
                <strong>
                    Bem vindo ao meu portfólio
                </strong>
            </h3>

            <h1>
                Olá! Me chamo Walace Ramos
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