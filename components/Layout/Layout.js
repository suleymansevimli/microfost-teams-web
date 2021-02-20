import React from "react";
import styles from './layout.module.css'
import cn from 'classnames'
import {Activity, Calendar, Chat, Files, Help, MenuDivider, More, Settings, Store, Teams} from "../icons";
import {SearchIcon} from "@fluentui/react-icons";

const Layout = ({children}) => {
    return (
        <div className={styles.layout}>
            <div className={styles.titleBar}>
                <div className={styles.appTitle}>Microsoft Teams</div>
                <div className={styles.search}>search</div>
                <div className={styles.profile}>profile</div>
            </div>

            <div className={styles.menuAndContent}>
                <div className={styles.menu}>
                    <div className={styles.top}>
                        <div className={styles.menuItem}>
                            <Activity/>
                            <span>Activity</span>
                        </div>
                        <div className={styles.menuItem}>
                            <Chat/>
                            <span>Chat</span>
                        </div>
                        <div className={styles.menuItem}>
                            <Teams/>
                            <span>Teams</span>
                        </div>
                        <div className={styles.menuItem}>
                            <Calendar/>
                            <span>Calendar</span>
                        </div>
                        <div className={styles.menuItem}>
                            <Files/>
                            <span>Files</span>
                        </div>
                        <div className={styles.menuItem}>
                            <More/>
                        </div>
                        <div className={styles.menuItem}>
                            <MenuDivider/>
                        </div>
                        <div className={cn([styles.menuItem, styles.active])}>
                            <Store/>
                            <span>Store</span>
                        </div>

                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.menuItem}>
                            <Help/>
                        </div>
                        <div className={styles.menuItem}>
                            <Settings/>
                        </div>
                    </div>
                </div>
                <div className={styles.subMenu}>
                    <div className={styles.subMenuHeader}>
                        <div className={styles.subMenuTitle}>
                            <h3>Store</h3>
                        </div>
                        <div className={styles.subMenuAction}>
                            <SearchIcon/>
                        </div>
                    </div>
                    <div className={styles.subMenuDescriptionHeader}>
                        <Store/>
                        <span>Apps</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout;