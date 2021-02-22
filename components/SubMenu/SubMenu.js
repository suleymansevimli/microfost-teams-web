import React from "react";
import styles from "./sub-menu.module.css"
import {SearchIcon, Store} from "../icons";

const SubMenu = ({style}) => {
    return (
        <div style={style ? style : {}} className={styles.subMenu}>
            <div className={styles.subMenuHeader}>
                <div className={styles.subMenuTitle}>
                    <h3>Store</h3>
                </div>
                <div className={styles.subMenuAction}>
                    <SearchIcon/>
                </div>
            </div>
            <div className={styles.subMenuContent}>
                <div className={styles.subMenuDescriptionHeader}>
                    <Store/>
                    <span>Apps</span>
                </div>
                <div className={styles.subMenuContainer}>
                    <div className={styles.links}>
                        <div className={styles.linkHeader}>
                            <span>Northwind Traders</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Built by your org</span>
                        </div>

                        <br/>
                        <div className={styles.linkHeader}>
                            <span>Categories</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Analytics and BI</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Developer and IT</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Human Resources</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Marketing</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Productivity</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Project Management</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Sales and Support</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Social and Fun</span>
                        </div>

                        <br/>
                        <div className={styles.linkHeader}>
                            <span>Categories</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Analytics and BI</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Developer and IT</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Human Resources</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Marketing</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Productivity</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Project Management</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Sales and Support</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Social and Fun</span>
                        </div>

                        <br/>
                        <div className={styles.linkHeader}>
                            <span>Industries</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Education</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Financial Services</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Goverment</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Healthcare</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Manufacturing</span>
                        </div>
                        <div className={styles.subMenuLink}>
                            <span>Retail</span>
                        </div>
                    </div>
                    <div className={styles.otherLinks}>
                        <span>Submit to app catalog</span>
                        <span>Upload a custom app</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu;