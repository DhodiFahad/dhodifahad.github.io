
import { FaSoundcloud } from 'react-icons/fa';
import {AiFillSound} from 'react-icons/ai'
import styles from '../styles/Vibes.module.css'

export const Vibes = () =>{
    return (
        <div className={styles.wrapper}>
            <FaSoundcloud className={styles.icons}/>            
            <span>
                Dhodi Vibes
            </span>

            <AiFillSound className={styles.icons}/>
        </div>
    )
}