import styles from "./app-footer.module.scss";

const AppFooter = () => {
	return (
		<div className={styles["app-footer"]}>
			<div className={`${styles["app-footer__container"]} layout`}>
				Footer
			</div>
		</div>
	);
};

export default AppFooter;
