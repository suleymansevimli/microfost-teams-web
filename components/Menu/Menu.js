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
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('menuItem')}
					title={'Activity'}
					icon={<Activity />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Chat')}
					title={'Chat'}
					icon={<Chat />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Teams')}
					title={'Teams'}
					icon={<Teams />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Calendar')}
					title={'Calendar'}
					icon={<Calendar />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Files')}
					title={'Files'}
					icon={<Files />}
				/>


				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('More')}
					icon={<More />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					icon={<MenuDivider />}
				/>

				<MenuItem
					active={styles.active}
					className={styles.menuItem}
					title={'Store'}
					onClick={()=>alert('Store')}
					icon={<Store />}
				/>

			</div>
			<div className={styles.bottom}>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Help')}
					icon={<Help />}
				/>

				<MenuItem
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Settings')}
					icon={<Settings />}
				/>

			</div>
		</div>
	);
};

export default Menu;