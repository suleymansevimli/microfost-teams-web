import React from 'react';
import PropTypes from 'prop-types';
import style from './chart-card.module.css';
import {CommandButton} from 'office-ui-fabric-react';
import cn from 'classnames';
import {Link} from "office-ui-fabric-react/lib-commonjs";

const ChartCard = ({children, title}) => {
	const moreIcon = {
		iconName: 'More'
	};

	const moreIconProps = {
		items: [
			{
				key: 'Star',
				text: 'Remove',
				iconProps: {iconName: 'Cancel'}
			},
			{
				key: 'Up',
				text: 'Download',
				iconProps: {iconName: 'Download'}
			}
		]
	};

	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.title}>
					<h4>{title}</h4>
				</div>
				<div className={style.action}>
					<CommandButton menuProps={moreIconProps} disabled={false} checked={false} open={true}/>
				</div>
			</div>
			<div className={style.filters}>
				<div className={style.filter}>
					<span className={cn([style.filterLink, style.active])}>7 days</span>
				</div>
				<div className={style.filter}>
					<span className={style.filterLink}>30 days</span>
				</div>
				<div className={style.filter}>
					<span className={style.filterLink}>60 days</span>
				</div>
			</div>
			<div className={style.chart}>{children}</div>

			<div className={style.information}>
				<div className={style.informationContainer}>
					<div className={style.label}>
						<div className={style.primarySquare}/>
						<span className={style.squareLabel}>Label 1</span>
					</div>
					<div className={style.label}>
						<div className={style.secondarySquare}/>
						<span className={style.squareLabel}>Label 2</span>
					</div>
				</div>

				<div className={style.details}>
					<span>
						<Link href={'/'}>View Details</Link>
					</span>
				</div>

			</div>
		</div>
	);
};

export default ChartCard;

ChartCard.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
};