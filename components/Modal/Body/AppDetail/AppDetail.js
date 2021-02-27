import React, { useLayoutEffect, useState } from 'react';
import styles from './app-detail.module.css';
import apps from '../../../../mockdata/app/app.json';
import { DefaultButton, IconButton } from 'office-ui-fabric-react';
import {Link} from "office-ui-fabric-react/lib-commonjs";

const AppDetail = ({ appId, onModalClose }) => {
	const [app, setApp] = useState({});

	useLayoutEffect(() => {
		let content = apps.filter((e) => e.id === appId);
		setApp(content[0]);
	}, []);

	const cancelIcon = { iconName: 'Cancel' };

	const menuProps = {
		items: [
			{
				key: 'emailMessage',
				text: 'Email message',
				iconProps: { iconName: 'Mail' }
			},
			{
				key: 'calendarEvent',
				text: 'Calendar event',
				iconProps: { iconName: 'Calendar' }
			}
		]
	};

	const customSplitButtonStyles = {
		splitButtonMenuButton: {
			backgroundColor: 'var(--brand-800)',
			width: 28,
			border: 'none',
			borderTopLeftRadius: 4,
			borderBottomLeftRadius: 4,
			color: 'white',
			'&:hover': {
				backgroundColor: 'none'
			}
		},
		splitButtonMenuIcon: {
			color: 'white'
		},
		splitButtonDivider: {
			backgroundColor: '#c8c8c8',
			width: 1,
			right: 26,
			position: 'absolute',
			top: 4,
			bottom: 4
		},
		splitButtonContainer: {}
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.information}>
					<img className={styles.image} src={app.image} alt={app.name} />
					<div className={styles.nameAndCategory}>
						<h4>{app.name}</h4>
						<p>{app.category}</p>
					</div>
				</div>
				<IconButton
					className={styles.closeIcon}
					iconProps={cancelIcon}
					ariaLabel="Close popup modal"
					onClick={onModalClose}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.about}>
					<div className={styles.addButtonContainer}>
						<DefaultButton
							text="Add"
							split
							className={styles.addButton}
							splitButtonAriaLabel="See 2 options"
							aria-roledescription="split button"
							menuProps={menuProps}
							onClick={() => alert('clicked')}
							disabled={false}
							checked={false}
							styles={customSplitButtonStyles}
						/>

						<div className={styles.aboutMenu}>
							<div className={styles.header}>
								<h3>About</h3>
							</div>
							<div className={styles.menuItem}>
								<Link href={"/"}>More from Microsoft</Link>
							</div>
							<div className={styles.menuItem}>
								<Link href={"/"}>Permissions</Link>
							</div>
						</div>
					</div>
					<div className={styles.bottomAbout}>
						<span>By using {app.name}, you agree to the privacy policy and terms of use.</span>
					</div>
				</div>
				<div className={styles.description}>
					description
				</div>
			</div>
		</div>
	);
};

export default AppDetail;
