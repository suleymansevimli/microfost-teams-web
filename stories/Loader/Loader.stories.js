import React from "react";
import LoaderComponent from "../../components/Loader/Loader";
import logo from '../assets/teams-logo.png'

export default {
    title: "Components/Loader",
    component: LoaderComponent
}

export const Loader = (args) => {
    return <div style={{minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <LoaderComponent {...args} />
    </div>
}

Loader.args = {
    image: logo
}
