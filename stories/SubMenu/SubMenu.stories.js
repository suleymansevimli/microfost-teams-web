import React from "react";
import SubMenuComp from "../../components/SubMenu/SubMenu";

export default {
    title: "Components/SubMenu",
    component: SubMenuComp
}

export const SubMenu = (args) => {
    return <SubMenuComp {...args} />
}

SubMenu.args = {
    style: {}
}
