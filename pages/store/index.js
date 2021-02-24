import React from 'react';
import Link from 'next/link';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/store/index.module.css';
import { List, ListColumn, ListRow } from '../../components/icons';
import { CommandButton } from 'office-ui-fabric-react';
import {initializeIcons} from 'office-ui-fabric-react/lib-commonjs/Icons'
import { Rating, RatingSize } from 'office-ui-fabric-react/lib-commonjs/Rating';

const Store = () => {
	initializeIcons(undefined, { disableWarnings: true });

	// rating
	const [customIconStarRating, setCustomIconStarRating] = React.useState(2.5);

	const onCustomIconStarChange = (ev, rating)=> {
		setCustomIconStarRating(rating);
	}
	const getRatingComponentAriaLabel = (rating, maxRating) => {
		return `Rating value is ${rating} of ${maxRating}`;
	};


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
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/tech-support.png'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/expenses.png'} alt="logo" />
							<div className={styles.information}>
								<p>Expenses</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/shuttle.png'} alt="logo" />
							<div className={styles.information}>
								<p>Shuttle</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/time-off.png'} alt="logo" />
							<div className={styles.information}>
								<p>Time Off</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/travel.png'} alt="logo" />
							<div className={styles.information}>
								<p>Travel</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/apps/dining.png'} alt="logo" />
							<div className={styles.information}>
								<p>Dining</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
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
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/vercel.svg'} alt="logo" />
							<div className={styles.information}>
								<p>App Name</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/favicon.ico'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/favicon.ico'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/favicon.ico'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/favicon.ico'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
					<div className={styles.appCard}>
						<div className={styles.appInfo}>
							<img src={'/favicon.ico'} alt="logo" />
							<div className={styles.information}>
								<p>Tech Support</p>
								<div className={styles.rating}>
									<Rating
										min={1}
										max={5}
										rating={customIconStarRating}
										onChange={onCustomIconStarChange}
										getAriaLabel={getRatingComponentAriaLabel}
										ariaLabelFormat={'Select {0} of {1} stars'}
										icon="StarburstSolid"
										unselectedIcon="Starburst"
										readOnly={true}
									/>
									<span>3.1</span>
								</div>
							</div>
						</div>
						<div className={styles.appContent}>
							<p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet dui a erat consequat porta quis a velit. Nullam consectetur adipiscing elit. Mauris sit amet dui...</p>
						</div>
					</div>
				</div>

			</div>
			<br />
			<Link href={'/'}>Go Home ! </Link>
		</Layout>
	);
};

export default Store;
