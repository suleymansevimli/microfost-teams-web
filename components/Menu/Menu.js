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
					url={'/dashboard/activity'}
					active={''}
					className={styles.menuItem}
					title={'Activity'}
					icon={<Activity />}
				/>

				<MenuItem
					url={'/dashboard/chat'}
					active={''}
					className={styles.menuItem}
					onClick={()=>alert('Chat')}
					title={'Chat'}
					icon={<Chat />}
				/>

				<MenuItem
					url={'/dashboard/chat'}
					active={''}
					className={styles.menuItem}
					title={'Teams'}
					icon={<Teams />}
				/>

				<MenuItem
					url={'/dashboard/calendar'}
					active={''}
					className={styles.menuItem}
					title={'Calendar'}
					icon={<Calendar />}
				/>

				<MenuItem
					url={'/dashboard/files'}
					active={''}
					className={styles.menuItem}
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
					url={'/store'}
					active={styles.active}
					className={styles.menuItem}
					title={'Store'}
					icon={<Store />}
				/>

			</div>
			<div className={styles.bottom}>

				<MenuItem
					url={'/help'}
					active={''}
					className={styles.menuItem}
					icon={<Help />}
				/>

				<MenuItem
					url={'/settings'}
					active={''}
					className={styles.menuItem}
					icon={<Settings />}
				/>

			</div>
		</div>
	);
};

export default Menu;