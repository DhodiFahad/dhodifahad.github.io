import { Talk } from "./talk"
import styles from "../styles/Contact.module.css"
export const Contact = () =>{
    return (
        <div className={styles.wrapper}>
            <h4>Lets Talk</h4>
            <p>
                Whether you are working on something cool and you 
                think i can be of help or you just want to say hi, 
                my inbox is always open. 
                I’ll try my best to get back to you!
            </p>
            <Talk/>
        </div>
    )
}