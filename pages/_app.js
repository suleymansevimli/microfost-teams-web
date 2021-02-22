import '../styles/globals.css';
import '../styles/variable.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useEffect, useState} from 'react';
import Loader from '../components/Loader/Loader';
import Router from 'next/router';
import {Provider} from 'react-redux';
import store from '../store/store';

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', function () {
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
      <Loader/>
  ) : (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp;
