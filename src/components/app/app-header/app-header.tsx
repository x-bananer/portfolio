import styles from "./app-header.module.scss";

import { useState, useEffect } from "react";

const AppHeader = () => {
	const [hasShadow, setHasShadow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setHasShadow(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={`${styles["app-header"]} ${hasShadow && styles["app-header--shadowed"]}`}>
			<div className={`${styles["app-header__container"]} layout`}>Header</div>
		</div>
	);
};

export default AppHeader;
