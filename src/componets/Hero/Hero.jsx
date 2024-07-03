import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl} from "../../utils";
export const Hero=()=>{
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Hi I'm saranya,
                </h1>
                <p className={styles.description}>
                    im a software developer!
                </p>
                <a href="mailto:saranya060502@gmail.com" className={styles.contactBtn}>contact me</a>
            </div>
            <img src={getImageUrl("hero/sarahero.png")} alt="hero image of me" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    )
        
    
}