import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav'
import NavLink from "react-bootstrap/esm/NavLink"


function Navbar () {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Nav.Link href="#presentation">
                        Apresentação
                    </Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#skills">
                        Habilidades
                    </Nav.Link>
                </li>

                <li>
                    <Nav.Link href="#projects">
                        Projetos
                    </Nav.Link>
                </li>
            </ul>

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
        </div>
    )
}

export default Navbar