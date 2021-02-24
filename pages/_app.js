import '../styles/globals.css';
import '../styles/variable.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useEffect, useLayoutEffect, useState} from 'react';
import Loader from '../components/Loader/Loader';
import Router from 'next/router';
import {Provider} from 'react-redux';
import store from '../store/store';
import StoreContext from '../context';

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState();

    // theme
    const changeTheme = (theme) => {
        console.log('theme',theme)
        // theme change process...
        setTheme(theme);
        localStorage.setItem('THEME', theme);
    };

    useLayoutEffect(() => {
        const theme = localStorage.getItem('THEME') || 'light';
        setTheme(theme);
    }, []);

    useEffect(() => {
        const $html = document.querySelector('html');
        $html.classList.remove('dark');
        $html.classList.remove('light');
        $html.classList.add(theme);
    }, [theme]);

    // loader
    useEffect(() => {
        window.addEventListener('load', function () {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        });
    }, []);

    Router.onRouteChangeStart = (url) => {
        setLoading(true);
    };

    Router.onRouteChangeComplete = (url) => {
        setLoading(false);
    };

    return loading ? (
        <Loader theme={theme}/>
    ) : (
        <Provider store={store}>
            <StoreContext.Provider value={{theme, changeTheme}}>
                <Component {...pageProps} />
            </StoreContext.Provider>
        </Provider>
    );
}

export default MyApp;
