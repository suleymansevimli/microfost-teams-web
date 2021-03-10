import React from "react";
import ChartCard from "../../Card/ChartCard/ChartCard";
import style from '../../../styles/chart/number.module.css'

const Number = ({title}) => {


    return (
        <ChartCard title={title}>
            <div className={style.container}>
                <div className={style.numberContainer}>
                    <span className={style.number}>29</span>
                    <span className={style.label}>Short descriptive label 1</span>
                </div>
                <div className={style.numberContainer}>
                    <span className={style.number}>88</span>
                    <span className={style.label}>Short descriptive label 2</span>
                </div>
            </div>
        </ChartCard>
    )
}

export default Number;