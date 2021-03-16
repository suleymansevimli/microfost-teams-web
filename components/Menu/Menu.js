import React from 'react';
import styles from './menu.module.css';
import {
	Activity,
	Calendar,
	Chat,
	Files,
	Help,
	MenuDivider,
	More,
	Settings,
	Store,
	Teams
} from '../icons';
import cn from 'classnames';
import MenuItem from "./MenuItem/MenuItem";

const Menu = ({ className, style }) => {
	return (
		<div style={style ? style : {}} className={cn([styles.menu, className ? className : ''])}>
			<div className={styles.top}>

				<MenuItem
					active={styles.active}
					className={styles.menuItem}
					onClick={()=>alert('menuItem')}
					title={'Activity'}
					icon={<Activity />}
				/>

				<div className={styles.menuItem}>
					<Chat />
					<span>Chat</span>
				</div>
				<div className={styles.menuItem}>
					<Teams />
					<span>Teams</span>
				</div>
				<div className={styles.menuItem}>
					<Calendar />
					<span>Calendar</span>
				</div>
				<div className={styles.menuItem}>
					<Files />
					<span>Files</span>
				</div>
				<div className={styles.menuItem}>
					<More />
				</div>
				<div className={styles.menuItem}>
					<MenuDivider />
				</div>
				<div className={cn([styles.menuItem, styles.active])}>
					<Store />
					<span>Store</span>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.menuItem}>
					<Help />
				</div>
				<div className={styles.menuItem}>
					<Settings />
				</div>
			</div>
		</div>
	);
};

export default Menu;