import React, { useState } from 'react';
import Slider from '../../../components/Slider/Slider';
import styles from '../../../styles/store/index.module.css';
import Link from 'next/link';
import AppCard from '../../../components/Card/AppCard/AppCard';
import Filter from '../../../components/Filter/Filter';
import Modal from '../../../components/Modal/Modal';
import { useSelector } from 'react-redux';

const Main = () => {
	const state = useSelector((state) => state.store);
	const [isModalOpen, setModalOpen] = useState(false);

	const RenderApps = () => {
		return state.apps.slice(0, 6).map((e, i) => {
			return <AppCard key={i} {...e} />;
		});
	};

	const RenderWhatsNewsApp = () => {
		const startInteger = Math.floor(Math.random() * 10);
		return state.apps.slice(startInteger, startInteger + 6).map((e, i) => {
			return <AppCard key={i} {...e} />;
		});
	};

	return (
		<>
			<Slider />
			<Filter />
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
					<RenderApps />
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
					<RenderWhatsNewsApp />
				</div>
			</div>
			<Modal isModalOpen={isModalOpen} onModalClose={() => setModalOpen(!isModalOpen)}>
				Content
			</Modal>
		</>
	);
};

export default Main;