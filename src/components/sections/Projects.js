import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import previsao from '../../images/projects/previsao.svg'
import projetoccxp from '../../images/projects/projetoccxp.svg'

function Projects () {
    return (
        <div className={styles.projects} id="projects">

            <h1>Projetos</h1>

            <Card 
            img={previsao}
            title={'Buscador de cep e Temperatura atual'}
            tech={'HTML, CSS, JAVASCRIPT'}
            description={'Uma página elaborada para buscar ceps de todo o país e também exibir a temperatura em tempo real da localidade.'  }
            repo={"https://github.com/WalaceRamosdev/consumo-api"}
            site={"https://consumo-api-two.vercel.app/"} />

            <Card
            img={projetoccxp}
            title={'Projeto CCXP'}
            tech={'HTML, CSS, JAVASCRIPT'}
            description={'Página elaborada para o evento da CCXP onde foi utilizado um contador com uma contagem regressiva do dia atual até o dia em que o evento irá acontecer'}
            repo={"https://github.com/WalaceRamosdev/ccxp-arlequina"}
            site={"https://github.com/WalaceRamosdev/ccxp-arlequina"}
            />

            <a href="https://github.com/WalaceRamosdev?tab=repositories" target="_blank">
                <ButtonB text='Acessar Repositório'/>
            </a>

            

        </div>
    )
}

export default Projects