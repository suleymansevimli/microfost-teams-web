import React from 'react';
import Layout from '../components/Layout/Layout';
import Link from 'next/link';

const Home = () => {
	return (
		<Layout>
			<Link href={'/store'}> Go Store ! </Link>
		</Layout>
	);
};

export default Home;