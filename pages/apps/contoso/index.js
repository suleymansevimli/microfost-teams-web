import React, { useState } from 'react';
import AppLayout from '../../../components/Layout/AppLayout/AppLayout';
import Gauge from '../../../components/Chart/Gauge/Gauge';

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

	return (
		<AppLayout>
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
		</AppLayout>
	);
};

export default Contoso;
