import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import style from './chart-card.module.css';
import { IconButton } from 'office-ui-fabric-react';
import cn from 'classnames';
import { Link } from 'office-ui-fabric-react/lib-commonjs';
import { WideArrowRight } from '../../icons';

const ChartCard = ({ children, title, filters, menu, cardLabels, detailsUrl }) => {
	const moreIconProps = {
		items: menu
	};

	const RenderFilters = useCallback(() => {
		if (filters.items.length > 0) {
			return filters.items.map((e, i) => {
				if (filters.type === 'day') {
					return (
						<div key={i} className={style.filter}>
							<span className={cn([style.filterLink, e.active ? style.active : ''])}
								onClick={() => e.onClick()} >
								{e.label}
							</span>
						</div>
					);
				}
			});
		}

		return null;
	},[]);

	const RenderLabels = () => {
		if (cardLabels.length > 0) {
			return cardLabels.map((e, i) => {
				return (
					<div key={i} className={style.label}>
						<div
							className={style.square}
							style={
								e.color ? { backgroundColor: e.color } : { backgroundColor: 'var(--brand-100)' }
							}
						/>
						<span className={style.squareLabel}>{e.label}</span>
					</div>
				);
			});
		}
		return null;
	};

	return (
		<div className={style.container}>
			<div className={style.header}>
				<div className={style.title}>
					<h4>{title}</h4>
				</div>

				<div className={style.action}>
					<IconButton
						iconProps={{ iconName: 'More' }}
						menuProps={moreIconProps}
						disabled={false}
						checked={false}
						open={true}
					/>
				</div>
			</div>

			<div className={style.filters}>
				<RenderFilters />
			</div>

			<div className={style.chart}>{children}</div>

			<div className={style.information}>
				<div className={style.informationContainer}>
					<RenderLabels />
				</div>

				<div className={style.details}>
					<Link href={detailsUrl} className={style.detailLink}>
						<span> View Details </span> <WideArrowRight />{' '}
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ChartCard;

ChartCard.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	filters: PropTypes.object,
	cardLabels: PropTypes.array,
	menu: PropTypes.object,
	detailsUrl: PropTypes.string
};

ChartCard.defaultProps = {
	filters: {
		items: []
	},
	cardLabels: [],
	menu : []
};