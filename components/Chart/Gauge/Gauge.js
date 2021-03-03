import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import ChartCard from '../../Card/ChartCard/ChartCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Gauge = ({ title, series, seriesColors, width, trackBackground, labels, filters }) => {
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
							show: true
						},
						value: {
							offsetY: -60,
							fontSize: '28px'
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
		<ChartCard title={title} filters={[...filters]} >
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
	labels: PropTypes.array.isRequired
};

Gauge.defaultProps = {
	width: 500,
	trackBackground: '#eee',
	filters: []
};
