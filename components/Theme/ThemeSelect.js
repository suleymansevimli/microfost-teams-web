import React, { useContext, useLayoutEffect, useState } from 'react';
import styles from './theme-select.module.css';
import StoreContext from '../../context';

const ThemeSelect = () => {
	const store = useContext(StoreContext);
	const [check, setCheck] = useState(true);

	useLayoutEffect(() => {
		store.theme === 'light' ? setCheck(true) : setCheck(false);
	});

	const onChangeCheckBox = (val) => {
		val ? store.changeTheme('light') : store.changeTheme('dark');
		setCheck(!check);
	};

	return (
		<input
			type={'checkbox'}
			name={'checkbox'}
			className={styles.switch}
			onChange={(e) => onChangeCheckBox(e.target.checked)}
			checked={check}
		/>
	);
};

export default ThemeSelect;