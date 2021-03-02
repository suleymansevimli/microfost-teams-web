import '../styles/globals.css';
import '../styles/variable.css';
import '../styles/all-colors.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { useState } from 'react';
import Loader from '../components/Loader/Loader';
import Router from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import StoreContext from '../context';

React.useLayoutEffect = React.useEffect;

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	const [theme, setTheme] = useState();

	// theme
	const changeTheme = (theme) => {
		setTheme(theme);
		localStorage.setItem('THEME', theme);
	};

	React.useLayoutEffect(() => {
		const theme = localStorage.getItem('THEME') || 'light';
		setTheme(theme);
	}, []);

	React.useEffect(() => {
		const $html = document.querySelector('html');
		$html.classList.remove('dark');
		$html.classList.remove('light');
		$html.classList.add(theme);
	}, [theme]);

	// loader
	React.useEffect(() => {
		window.addEventListener('load', function () {
			console.log('loaded')
			setLoading(false);
		});
	}, []);

	Router.onRouteChangeStart = (url) => {
		setLoading(true);
	};

	Router.onRouteChangeComplete = (url) => {
		setLoading(false);
	};

	return loading ? (
		<Loader theme={theme} />
	) : (
		<Provider store={store}>
			<StoreContext.Provider value={{ theme, changeTheme }}>
				<Component {...pageProps} />
			</StoreContext.Provider>
		</Provider>
	);
}

export default MyApp;
