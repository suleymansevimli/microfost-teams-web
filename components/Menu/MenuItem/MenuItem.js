import React from 'react';
import cn from 'classnames';
import {useRouter} from "next/router";

const MenuItem = ({className, active, icon, title, children, onClick,url}) => {

    const router = useRouter();

    return (
        <div className={cn([className, active && active])} onClick={() => url ? router.push(url) : onClick()}>
            {icon && icon}
            <span>{title}</span>
            {children}
        </div>
    );
};

export default MenuItem;