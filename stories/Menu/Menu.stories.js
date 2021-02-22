import React from "react";
import MenuComponent from "../../components/Menu/Menu";

export default {
    title: "Components/Menu",
    component: MenuComponent
}

export const Menu = (args) => {
    return <MenuComponent {...args}/>
}

Menu.args = {
    className: '',
    style: {}
}
