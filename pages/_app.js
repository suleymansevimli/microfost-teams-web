import '../styles/globals.css'
import '../styles/variable.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader";
import Router from 'next/router'

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener("load", function () {
            setLoading(false)
        });
    }, [])

    Router.onRouteChangeStart = (url) => {
        setLoading(true)
    }

    Router.onRouteChangeComplete = (url) => {
        setLoading(false)
    }

    return (
        loading
            ? <Loader/>
            : <Component {...pageProps} />
    )
}

export default MyApp
