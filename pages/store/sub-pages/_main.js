import React, {useState, useMemo, useCallback} from 'react';
import Slider from '../../../components/Slider/Slider';
import styles from '../../../styles/store/index.module.css';
import Link from 'next/link';
import AppCard from '../../../components/Card/AppCard/AppCard';
import Filter from '../../../components/Filter/Filter';
import Modal from '../../../components/Modal/Modal';
import { useSelector } from 'react-redux';
import AppDetail from "../../../components/Modal/Body/AppDetail/AppDetail";

const Main = () => {
	const state = useSelector((state) => state.store);
	const [isModalOpen, setModalOpen] = useState(false);
	const [appId,setAppId] = useState(null)


	const onAppCardClick = async (e) => {
		await setAppId(e.id)
		await setModalOpen(!isModalOpen)
	}

	const RenderApps = useCallback(()=>state.apps.slice(0, 6).map((e, i) => {
		return <AppCard key={i} {...e} onClick={() => onAppCardClick(e)} />;
	}),[state.apps])


	const RenderWhatsNewsApp = useCallback(()=> state.apps.slice(10, 10 + 6).map((e, i) => {
		return <AppCard key={i} {...e} onClick={()=>onAppCardClick(e)} />;
	}),[state.apps])


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
					<RenderApps index={6}/>
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
				<AppDetail appId={appId}/>
			</Modal>
		</>
	);
};

export default Main;