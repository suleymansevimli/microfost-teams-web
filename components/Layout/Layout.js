import React from "react";
import styles from './layout.module.css'
import TitleBar from "../TitleBar/TitleBar";
import Menu from "../Menu/Menu";
import SubMenu from "../SubMenu/SubMenu";

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <TitleBar/>

            <div className={styles.menuAndContent}>
                <Menu/>
                <SubMenu/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;