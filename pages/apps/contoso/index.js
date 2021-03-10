import React, { useState } from 'react';
import AppLayout from '../../../components/Layout/AppLayout/AppLayout';
import Gauge from '../../../components/Chart/Gauge/Gauge';
import Area from '../../../components/Chart/Area/Area';
import styles from './styles/index.module.css';

const Contoso = () => {
	const [series, setSeries] = useState([72]);
	const [gaugeActive, setGaugeActive] = useState('sevenDay');

	const changeGaugeChart = (data, key) => {
		setSeries([data]);
		setGaugeActive(key);
	};

	const gaugeChart = {
		filters: {
			type: 'day',
			items: [
				{
					key: 'sevenDay',
					label: '7 day',
					onClick: () => changeGaugeChart(72, 'sevenDay'),
					active: gaugeActive === 'sevenDay'
				},
				{
					key: 'thirtyDay',
					label: '30 day',
					onClick: () => changeGaugeChart(30, 'thirtyDay'),
					active: gaugeActive === 'thirtyDay'
				},
				{
					key: 'sixtyDay',
					label: '60 day',
					onClick: () => changeGaugeChart(60, 'sixtyDay'),
					active: gaugeActive === 'sixtyDay'
				}
			]
		},
		menu: [
			{
				key: 'Remove',
				text: 'Remove',
				iconProps: { iconName: 'Cancel' },
				onClick: () => alert('Remove')
			},
			{
				key: 'Download',
				text: 'Download',
				iconProps: { iconName: 'Download' },
				onClick: () => alert('Download')
			}
		],
		cardLabels: [
			{ label: 'Label 1', color: 'var(--brand-800)' },
			{ label: 'Label 2', color: 'var(--neutral-100)' }
		],
		detailsUrl: '/'
	};

	const areaChart = {
		series: [
			{
				name: 'line 1',
				data: [31, 40, 28, 51, 42, 109, 100]
			},
			{
				name: 'line 2',
				data: [11, 32, 45, 32, 34, 52, 41]
			}
		],
		tooltipCategories: [
			'2018-09-19T00:00:00.000Z',
			'2018-09-19T01:30:00.000Z',
			'2018-09-19T02:30:00.000Z',
			'2018-09-19T03:30:00.000Z',
			'2018-09-19T04:30:00.000Z',
			'2018-09-19T05:30:00.000Z',
			'2018-09-19T06:30:00.000Z'
		],

	};

	return (
		<AppLayout>
			<div className={styles.container}>
				<Gauge
					title={'Gauge Chart'}
					series={series}
					seriesColors={['var(--brand-800)']}
					labels={['Small Description']}
					filters={gaugeChart.filters}
					menu={gaugeChart.menu}
					cardLabels={gaugeChart.cardLabels}
					detailsUrl={gaugeChart.detailsUrl}
				/>

				<Area
					title={'Area Chart'}
					series={areaChart.series}
					tooltipCategories={areaChart.tooltipCategories}
				/>
			</div>
		</AppLayout>
	);
};

export default Contoso;
