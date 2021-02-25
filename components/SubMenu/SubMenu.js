import React, { useState } from 'react';
import styles from './sub-menu.module.css';
import { SearchIcon, Store } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync } from '../../store/reducers/storeReducer';

const SubMenu = ({ style }) => {
	const [showSearchInput, setShowSearchInput] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	// redux
	const state = useSelector((state) => state.store);
	const dispatch = useDispatch();

	const onSearchInputChange = async (val) => {
		await setSearchTerm(val);
		await dispatch(searchAsync(val));
	};

	const Search = React.useCallback(() => {
		if (showSearchInput) {
			return (
				<>
					<input
						placeholder={'type here ...'}
						className={styles.searchInput}
						type="text"
						onChange={(e) => onSearchInputChange(e.target.value)}
					/>
					<span className={styles.closeSearch} onClick={() => setShowSearchInput(false)}>
						X
					</span>
				</>
			);
		}

		return (
			<>
				<div className={styles.subMenuTitle}>
					<h3>Store</h3>
				</div>
				<div className={styles.subMenuAction}>
					<SearchIcon onClick={() => setShowSearchInput(true)} />
				</div>
			</>
		);
	}, [showSearchInput]);

	const RenderMenu = () => {
		if (state.searchResults.length > 0) {
			return state.searchResults.map((e, i) => {
				return (
					<>
						<div className={styles.linkHeader}>
							<span>{e.category}</span>
						</div>
						<div className={styles.subMenuLink}>
							<span>{e.name}</span>
						</div>
					</>
				);
			});
		}

		return (
			<>
				<div className={styles.linkHeader}>
					<span>Northwind Traders</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Built by your org</span>
				</div>

				<br />
				<div className={styles.linkHeader}>
					<span>Categories</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Analytics and BI</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Developer and IT</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Human Resources</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Marketing</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Productivity</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Project Management</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Sales and Support</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Social and Fun</span>
				</div>

				<br />
				<div className={styles.linkHeader}>
					<span>Categories</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Analytics and BI</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Developer and IT</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Human Resources</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Marketing</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Productivity</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Project Management</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Sales and Support</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Social and Fun</span>
				</div>

				<br />
				<div className={styles.linkHeader}>
					<span>Industries</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Education</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Financial Services</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Goverment</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Healthcare</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Manufacturing</span>
				</div>
				<div className={styles.subMenuLink}>
					<span>Retail</span>
				</div>
			</>
		);
	};

	const DescriptionHeader = () => {
		const text =
			searchTerm && searchTerm.length ? `All results (${state.searchResults.length})` : 'Apps';
		const icon = searchTerm && searchTerm.length ? '' : <Store />;

		return (
			<div className={styles.subMenuDescriptionHeader}>
				{icon}
				<span>{text}</span>
			</div>
		);
	};

	return (
		<div style={style ? style : {}} className={styles.subMenu}>
			<div className={styles.subMenuHeader}>
				<Search />
			</div>
			<div className={styles.subMenuContent}>
				<DescriptionHeader />
				<div className={styles.subMenuContainer}>
					<div className={styles.links}>
						<RenderMenu />
					</div>
					<div className={styles.otherLinks}>
						<span>Submit to app catalog</span>
						<span>Upload a custom app</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubMenu;