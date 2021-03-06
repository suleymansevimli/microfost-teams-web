import React from "react";
import PropTypes from 'prop-types'
import style from "./app-layout.module.css"
import Layout from "../Layout";
import {More, Popout} from "../../icons";

const AppLayout = ({children}) => {
    return (
        <Layout style={{paddingLeft:0,paddingRight:0}}>
            <div className={style.header}>
                <div className={style.main}>
                    <div className={style.information}>
                        <img className={style.appLogo} src={'/apps/contoso.svg'} alt="tech support"/>
                        <h4>Contoso</h4>
                    </div>
                    <div className={style.tabs}>
                        <div className={style.tab}>
                            <span className={style.active}>Your Dashboard</span>
                        </div>
                        <div className={style.tab}>
                            <span>Projects</span>
                        </div>
                        <div className={style.tab}>
                            <span>Datasets</span>
                        </div>
                    </div>
                </div>

                <div className={style.actions}>
                    <div className={style.action}>
                        <Popout/>
                    </div>
                    <div className={style.action}>
                        <More/>
                    </div>
                </div>
            </div>

            <div className={style.content}>
                {children}
            </div>
        </Layout>
    )
}

export default AppLayout;

AppLayout.propTypes = {
    children: PropTypes.node.isRequired
}