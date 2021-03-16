import React from 'react';
import {Activity} from '../../icons';
import cn from 'classnames';

const MenuItem = ({className, active, icon, title, children, onClick}) => {
    return (
        <div className={cn([className, active && active])} onClick={() => onClick()}>
            {icon && icon}
            <span>{title}</span>
            {children}
        </div>
    );
};

export default MenuItem;