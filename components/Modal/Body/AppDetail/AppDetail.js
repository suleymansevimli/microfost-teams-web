import React, {useLayoutEffect} from "react";
import styles from './app-detail.module.css'

const AppDetail = ({appId}) => {

    useLayoutEffect(()=>{

    },[])

    return (
        <div className={styles.container}>
            App Detail -> { appId }
        </div>
    )
}

export default AppDetail;