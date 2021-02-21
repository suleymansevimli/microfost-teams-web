import React from "react";
import styles from './loader.module.css'
import cn from 'classnames'

const Loader = () => {
    return (
        <div className={styles.container}>
            <img className={cn(styles.logo,styles.bounce)} src={"/logo/teams-logo.png"} alt="Microsoft Teams Logo"/>
        </div>
    )
}

export default Loader;