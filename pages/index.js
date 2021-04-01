import React from 'react';
import Layout from '../components/Layout/Layout';
import MainEmpty from "../components/Empty";

const Home = () => {
	return (
		<Layout style={styles.layout}>
			<MainEmpty/>
		</Layout>
	);
};

export default Home;
const styles = {
	layout: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
}