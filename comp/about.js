import Image from "next/image"
import styles from "../styles/About.module.css"
import profile from '../public/images/profile.jpg'

export const About =()=>{
    return(
        <div className={styles.wrapper}>
            <h4>About Me</h4>
            <div className={styles.about_container}>
                <div className={styles.info}>
                    <p>
                        Hello! My name is Fahad and I am a software
                        engineer based in Kampala, Uganda. I develop (and
                        occassionaly design) web and mobile applications. I
                        am also a QA Automation Engineer helping companies
                        build quality and bug free systems.
                    </p>
                    <p>
                        Here are some of the technologies i have been
                        working with.
                    </p>
                    <div className={styles.technologies}>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>NextJs</li>
                        </ul>
                        <ul>
                            <li>ReactNative</li>
                            <li>NodeJs</li>
                            <li>Solidity & Web3</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.profile}>
                    <div className={styles.image_wrapper}>
                        <Image src={profile} width={300} height={300} className={styles.image}/>
                    </div>
                </div>
            </div>

        </div>
    )
}