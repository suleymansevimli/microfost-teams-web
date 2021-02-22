import React from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './loader.module.css';

const Loader = ({image}) => {
    return (
        <div className={styles.container}>
            <img className={cn(styles.logo,styles.bounce)} src={image} alt="Microsoft Teams Logo"/>
        </div>
    )
}

export default Loader;

Loader.propTypes = {
    image: PropTypes.string.isRequired
}

Loader.defaultProps = {
    image: '/logo/teams-logo.png'
}