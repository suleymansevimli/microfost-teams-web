import React from 'react';
import Layout from '../../components/Layout/Layout';
import Main from './sub-pages/_main';
import { useSelector } from 'react-redux';
import SearchResults from './sub-pages/_search-results';

const Store = () => {
	const state = useSelector((state) => state.store);

	const Render = () => {
		if (state.searchResults.length > 0) {
			return <SearchResults data={state.searchResults} searchTerm={state.searchTerm} />;
		}

		return <Main />;
	};

	return (
		<Layout>
			<Render />
		</Layout>
	);
};

export default Store;
