import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";

import type { ReactNode } from "react";

import Button from "../../../components/_block/button/button";
import logo from "../../../assets/images/logo.png";

import styles from "./app-header.module.scss";

interface AppHeaderProps {
	children?: ReactNode;
}

const AppHeader = ({ children }: AppHeaderProps) => {
	const [hasShadow, setHasShadow] = useState(false);

	const handleLogoClick = () => {
		window.location.reload();
	};

	useEffect(() => {
		const handleScroll = () => {
			setHasShadow(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`${styles["app-header"]} ${
				hasShadow && styles["app-header--shadowed"]
			}`}
		>
			<div className={`${styles["app-header__container"]} layout`}>
				<Button type="simple" onClick={handleLogoClick}>
					<img
						className={styles["app-header__logo"]}
						src={logo}
						alt="Software Developer Portfolio | Kseniia Shlenskaia"
					/>
				</Button>
				{children}
				<a href="/portfolio/resume.pdf" target="_blank">
					<Button>
						Resume <FiDownload size={20} className="ml-xs" />
					</Button>
				</a>
			</div>
		</div>
	);
};

export default AppHeader;
