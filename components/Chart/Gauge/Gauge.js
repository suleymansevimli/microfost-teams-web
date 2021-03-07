import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import ChartCard from '../../Card/ChartCard/ChartCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Gauge = ({ title, series, seriesColors, width, trackBackground, labels, filters, menu, cardLabels }) => {
	const config = {
		series: [...series],
		options: {
			chart: {
				type: 'radialBar',
				offsetY: -20,
				sparkline: {
					enabled: true
				}
			},
			plotOptions: {
				radialBar: {
					startAngle: -90,
					endAngle: 90,
					track: {
						background: trackBackground,
						strokeWidth: '97%',
						margin: 5
					},
					dataLabels: {
						enabled: true,
						name: {
							show: true,
							color: 'var(--chart-data-label-color)'
						},
						value: {
							offsetY: -50,
							fontSize: '50px',
							color:'var(--chart-value-color)'
						}
					}
				}
			},
			grid: {
				padding: {
					top: -10
				}
			},
			fill: {
				colors: [...seriesColors]
			},
			labels: [...labels]
		}
	};

	return (
		<ChartCard title={title} filters={filters} menu={menu} cardLabels={cardLabels} >
			<Chart width={width} options={config.options} series={config.series} type={'radialBar'} />
		</ChartCard>
	);
};

export default Gauge;

Gauge.propTypes = {
	title: PropTypes.string.isRequired,
	series: PropTypes.array.isRequired,
	seriesColors: PropTypes.array.isRequired,
	width: PropTypes.number.isRequired,
	trackBackground: PropTypes.string,
	labels: PropTypes.array.isRequired,
	filters: PropTypes.object
};

Gauge.defaultProps = {
	width: 500,
	trackBackground: '#eee',
	filters: {}
};
