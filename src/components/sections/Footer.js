import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer () {
    return (
        <div className={styles.footer} >
            <ul>
                <li>
                    <a href="https://www.instagram.com/walacedev.contato/" target="blank"> <FaInstagram size = {40}/></a>
                </li>
                <li>
                    <a href="https://github.com/WalaceRamosdev" target="blank"> <FaGithub size = {40}/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/walace-ramos-dev/" target="blank"><FaLinkedin size = {40}/></a>
                </li>
            </ul>

            <p>contatowalaceramos.dev@gmail.com</p>
            <p>Walace Ramos  © 2023</p>
            
        </div>
    )
}

export default Footer