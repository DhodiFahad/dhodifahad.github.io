import { FaTwitter,FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from '../styles/Socials.module.css';
export const Socials = () => {
    return (
        <ul className={styles.socials}>
                <li>
                    <a href="https://twitter.com/DhodiFahad"  target="_blank"><FaTwitter/></a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/kinene-fahad-340464145/"  target="_blank"><FaLinkedinIn/></a>
                </li>

                <li>
                    <a href="https://github.com/DhodiFahad" target="_blank"><FaGithub/></a>
                </li>
           
        </ul>
    )
}