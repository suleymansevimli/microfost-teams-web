import React from 'react';
import Link from 'next/link';
import Slider from '../../components/Slider/Slider';
import Layout from '../../components/Layout/Layout';
import styles from '../../styles/store/index.module.css';
import { List, ListColumn, ListRow } from '../../components/icons';
import { CommandButton } from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib-commonjs/Icons';
import AppCard from '../../components/Card/AppCard/AppCard';
import Main from "./sub-pages/_main";
import {useDispatch, useSelector} from "react-redux";
import SearchResults from "./sub-pages/_search-results";

const Store = () => {

	const state = useSelector(state=>state.store)
	const dispatch = useDispatch()

	const Render = () => {
		if (state.searchResults.length > 0) {
			return <SearchResults data={state.searchResults} searchTerm={state.searchTerm}/>
		}

		return <Main/>
	}

	return (
		<Layout>
			<Render/>
		</Layout>
	);
};

export default Store;
