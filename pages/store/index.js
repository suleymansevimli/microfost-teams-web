import React from 'react';
import Link from 'next/link';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/store/index.module.css';
import { List, ListColumn, ListRow } from '../../components/icons';
import { CommandButton } from 'office-ui-fabric-react';
import {initializeIcons} from 'office-ui-fabric-react/lib-commonjs/Icons'
import { Rating, RatingSize } from 'office-ui-fabric-react/lib-commonjs/Rating';
import AppCard from "../../components/Card/AppCard/AppCard";

const Store = () => {
	initializeIcons(undefined, { disableWarnings: true });


	// filter
	const sortProps = {
		items: [
			{
				key: 'azSorting',
				text: 'A-Z Sort',
				iconProps: { iconName: 'Down' }
			},
			{
				key: 'zaSorting',
				text: <span>Z-A Sort</span>,
				iconProps: { iconName: 'Up' }
			}
		]
	};
	const filterProps = {
		items: [
			{
				key: 'education',
				text: 'Education',
				iconProps: { iconName: 'Like' }
			},
			{
				key: 'technology',
				text: <span>Technology</span>,
				iconProps: { iconName: 'Game' }
			}
		]
	};
	const sortIcon = { iconName: 'Sort' };
	const filterIcon = { iconName: 'Filter' };

	return (
		<Layout>
			<Slider />
			<div className={styles.filter}>
				<div className={styles.listing}>
					<button>
						<ListRow />
					</button>
					<button>
						<ListColumn />
					</button>
					<button>
						<List />
					</button>
				</div>
				<div className={styles.filtering}>
					<div className={styles.sorting}>
						<CommandButton
							iconProps={sortIcon}
							text="Sorting"
							menuProps={sortProps}
							disabled={false}
							checked={false}
						/>
					</div>
					<div className={styles.filterButton}>
						<CommandButton
							iconProps={filterIcon}
							text="Filter"
							menuProps={filterProps}
							disabled={false}
							checked={false}
						/>
					</div>
				</div>
			</div>
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
						name={"Tech Support"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}
					/>

					<AppCard
						image={'/apps/expenses.png'}
					 	name={"Expenses"}
					 	description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
					 	rate={4.3}/>

					<AppCard
						image={'/apps/shuttle.png'}
						name={"Shuttle"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/apps/time-off.png'}
						name={"Time off"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/apps/travel.png'}
						name={"Travel"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/apps/dining.png'}
						name={"Dining"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>
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
						name={"App Name"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5} />

					<AppCard
						image={'/vercel.svg'}
						name={"Vercel"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={4.3}/>

					<AppCard
						image={'/logo/teams-logo.png'}
						name={"Teams"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/favicon.ico'}
						name={"App Name 1"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/vercel.svg'}
						name={"App Name 2"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>

					<AppCard
						image={'/favicon.ico'}
						name={"App Name 3"}
						description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui..."}
						rate={2.5}/>
				</div>

			</div>
			<br />
			<Link href={'/'}>Go Home ! </Link>
		</Layout>
	);
};

export default Store;
