
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Vibes.module.css'

export const Vibes = () =>{
    return (
        <div className={styles.wrapper}>
            <FontAwesomeIcon icon="fa-brands fa-soundcloud" />

            <span>
                Dhodi Vibes
            </span>

            <FontAwesomeIcon icon={faVolumeHigh}/>
        </div>
    )
}