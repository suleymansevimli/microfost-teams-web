import React from 'react';
import Slider from '../../../components/Slider/Slider';
import styles from '../../../styles/store/index.module.css';
import Link from 'next/link';
import AppCard from '../../../components/Card/AppCard/AppCard';
import Filter from '../../../components/Filter/Filter';

const Main = () => {
	return (
		<>
			<Slider/>
			<Filter/>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.contentTitle}>
						<h3>Built by your org</h3>
					</div>
					<div className={styles.contentAction}>
						<Link href={'/'}>See all</Link>
					</div>
				</div>
				<div className={styles.appList}>
					<AppCard
						image={'/apps/tech-support.png'}
						name={'Tech Support'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={3.2}
					/>

					<AppCard
						image={'/apps/expenses.png'}
						name={'Expenses'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={4.3}
					/>

					<AppCard
						image={'/apps/shuttle.png'}
						name={'Shuttle'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/apps/time-off.png'}
						name={'Time off'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/apps/travel.png'}
						name={'Travel'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/apps/dining.png'}
						name={'Dining'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>
				</div>

				<div className={styles.header}>
					<div className={styles.contentTitle}>
						<h3>What's New </h3>
					</div>
					<div className={styles.contentAction}>
						<Link href={'/'}>See all</Link>
					</div>
				</div>
				<div className={styles.appList}>
					<AppCard
						image={'/favicon.ico'}
						name={'App Name'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/vercel.svg'}
						name={'Vercel'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={4.3}
					/>

					<AppCard
						image={'/logo/teams-logo.png'}
						name={'Teams'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/favicon.ico'}
						name={'App Name 1'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/vercel.svg'}
						name={'App Name 2'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>

					<AppCard
						image={'/favicon.ico'}
						name={'App Name 3'}
						description={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...'
						}
						rate={2.5}
					/>
				</div>
			</div>
		</>
	);
};

export default Main;