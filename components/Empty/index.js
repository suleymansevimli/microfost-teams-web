import React from "react";
import styles from './main-empty.module.css'
import {useRouter} from "next/router";

const MainEmpty = () => {

    const router = useRouter()

    return (
        <div className={styles.container}>
            <img src={"/empty-state/welcome.svg"} alt="welcome"/>
            <div className={styles.text}>
                <h3 className={styles.primaryHeader}>Welcome to Microsoft Teams</h3>
                <p>Stay in constant contact with your friends, class or professional teammates with microsoft teams!</p>
            </div>

            <div className={styles.actions}>
                <button className={styles.primaryButton} onClick={()=>router.push('/store')}>
                    Go to store !
                </button>
                <button className={styles.secondaryButton} onClick={()=>router.push('/apps/contoso')}>
                    Go to Contoso App !
                </button>
                <button className={styles.tertiaryButton}>
                    Other Action
                </button>
            </div>
        </div>
    )
}

export default MainEmpty;