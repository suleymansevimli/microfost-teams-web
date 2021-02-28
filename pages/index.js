import React from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';
import Gauge from "../components/Chart/Gauge/Gauge";

const Home = () => {
	return (
		<Layout subMenu>
			<Link href={'/store'}> Go Store ! </Link>

			<Gauge/>
		</Layout>
	);
};

export default Home;
