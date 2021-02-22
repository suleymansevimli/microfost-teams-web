import React from "react";
import styles from "./title-bar.module.css";

const TitleBar = () => {
    return (
        <div className={styles.titleBar}>
            <div className={styles.appTitle}>Microsoft Teams</div>
            <div className={styles.search}>search</div>
            <div className={styles.profile}>profile</div>
        </div>
    )
}

export default TitleBar;