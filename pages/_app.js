import '../styles/globals.css'
import '../styles/variable.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {useEffect, useState} from "react";
import Loader from "../components/Loader/Loader";


function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        window.addEventListener("load", function () {
            setLoading(false)
        });
    }, [])


    return (
        loading
            ? <Loader/>
            : <Component {...pageProps} />
    )
}

export default MyApp
