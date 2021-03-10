import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import ChartCard from '../../Card/ChartCard/ChartCard';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Area = ({
	title,
	filters,
	cardLabels,
	series,
	dataLabels,
	colors,
	tooltipFormat,
	tooltipCategories
}) => {

	const config = {
		series: [...series],
		options: {
			chart: {
				type: 'area',
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: dataLabels
			},
			stroke: {
				curve: 'smooth',
				colors: [...colors]
			},
			xaxis: {
				type: 'datetime',
				categories: [...tooltipCategories],
				labels: {
					style: {
						colors: [
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)',
							'var(--chart-area-xaxis-color)'
						],
					},
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: [
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
							'var(--chart-area-yaxis-color)',
						]
					}
				}
			},
			tooltip: {
				x: {
					format: tooltipFormat
				}
			},
			colors: [...colors]
		}
	};

	return (
		<ChartCard title={title} filters={filters} cardLabels={cardLabels}>
			<Chart
				width={750}
				height={200}
				options={config.options}
				series={config.series}
				type={'area'}
			/>
		</ChartCard>
	);
};

export default Area;

Area.propTypes = {
	title: PropTypes.string,
	filters: PropTypes.object,
	cardLabels: PropTypes.array,
	series: PropTypes.array.isRequired,
	dataLabels: PropTypes.bool,
	colors: PropTypes.array,
	tooltipFormat: PropTypes.string,
	tooltipCategories: PropTypes.array.isRequired
};

Area.defaultProps = {
	colors: ['#6264A7', '#C7C7C7'],
	tooltipFormat: 'dd/MM/yy HH:mm',
	dataLabels: false,
	filters: { items: [] },
	cardLabels: []
};
