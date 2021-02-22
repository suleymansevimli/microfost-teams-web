import React from "react";
import SubMenuComp from "../../components/SubMenu/SubMenu";

export default {
    title: "Components/Sub Menu",
    component: SubMenuComp
}

export const SubMenu = (args) => {
    return <SubMenuComp {...args} />
}

SubMenu.args = {
    style: {}
}
