import Button from "../../_block/button/button";

import logo from "../../../assets/images/logo.png";

import styles from "./app-footer.module.scss";

const AppFooter = () => {

	const handleCreditsClick = () => {
		// TODO Add modal window
		// const DESIGNER_LINK = "https://www.behance.net/jhanvishah2";
	};

	return (
		<div className={styles["app-footer"]}>
			<div className={`${styles["app-footer__container"]} layout`}>
				<img
					className={styles["app-footer__logo"]}
					src={logo}
					alt="Frontend Developer Portfolio | Kseniia Shlenskaia"
				/>
				<div className={styles["app-footer__text"]}>
					<Button
						type="simple"
						effect="light"
						size="small"
						onClick={handleCreditsClick}
					>
						@ 2025 | Design: Jhanvi Shah | Dev: Kseniia Shlenskaia
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AppFooter;
