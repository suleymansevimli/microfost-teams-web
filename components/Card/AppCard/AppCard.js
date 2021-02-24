import React from "react";
import PropTypes from 'prop-types'
import styles from "./app-card.module.css"
import {Rating} from "office-ui-fabric-react/lib-commonjs/Rating";
import {initializeIcons} from "office-ui-fabric-react/lib-commonjs/Icons";

const AppCard = ({image,name,description,rate}) => {
    // initialize icon
    initializeIcons(undefined, { disableWarnings: true });

    return (
			<div className={styles.appCard}>
				<div className={styles.appInfo}>
					<img src={image} alt="logo" />
					<div className={styles.information}>
						<p>{name}</p>
						<div className={styles.rating}>
							<Rating
								min={1}
								max={5}
								rating={rate}
								icon="StarburstSolid"
								unselectedIcon="Starburst"
								readOnly={true}
							/>
							<span>{rate}</span>
						</div>
					</div>
				</div>
				<div className={styles.appContent}>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		);
}

export default AppCard;

AppCard.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	rate: PropTypes.number.isRequired
}

AppCard.defaultProps = {
	rate: 0
}