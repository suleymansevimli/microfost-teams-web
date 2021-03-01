import React from "react";
import PropTypes from 'prop-types'
import style from "./chart-card.module.css"
import {CommandButton} from "office-ui-fabric-react";

const ChartCard = ({children,title}) => {

    const moreIcon = {
        iconName: 'More'
    }

    const moreIconProps =  {
        items: [
            {
                key: 'Star',
                text: 'Like',
                iconProps: { iconName: 'Star' }
            },
            {
                key: 'Up',
                text: <span>Z-A Sort</span>,
                iconProps: { iconName: 'Up' }
            }
        ]
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.action}>
                    <CommandButton
                        iconProps={moreIcon}
                        text=""
                        menuProps={moreIconProps}
                        disabled={false}
                        checked={false}
                        open={true}
                    />
                </div>
            </div>
            <div className={style.chart}>
                {children}
            </div>
        </div>
    )
}

export default ChartCard;

ChartCard.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
}