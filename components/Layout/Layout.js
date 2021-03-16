import React from "react";
import styles from './layout.module.css'
import TitleBar from "../TitleBar/TitleBar";
import Menu from "../Menu/Menu";
import SubMenu from "../SubMenu/SubMenu";

const Layout = ({children,subMenu,style}) => {

    const menuStyle = {height: window.innerHeight - 48, position: 'sticky', top: 48}
    const subMenuStyle = {height: window.innerHeight -48,position: 'sticky', top: 48}

    return (
			<div className={styles.layout}>
				<TitleBar />

				<div className={styles.menuAndContent}>
					<div>
						<Menu style={menuStyle} />
					</div>

					{ subMenu &&
						<div>
							<SubMenu style={subMenuStyle} />
						</div>
					}

					<div className={styles.content} style={style ? style : {}}>{children}</div>
				</div>
			</div>
		);
}

export default Layout;