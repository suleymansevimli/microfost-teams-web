import React from 'react';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout/Layout';
import Link from 'next/link';

const Store = () => {
	return (
		<Layout>
			<Slider />
			<Link href={'/'}>Go Home ! </Link>
		</Layout>
	);
};

export default Store;
