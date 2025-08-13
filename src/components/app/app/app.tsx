import styles from "./app.module.scss";

import AppHeader from '../app-header/app-header';
import AppFooter from '../app-footer/app-footer';

const App = () => {
	return (
		<div className={styles["app"]}>
			<div className={styles["app__header"]}>
				<AppHeader />
			</div>
			<div className={styles["app__content"]}>
				<section className="layout">
					Content
				</section>
			</div>
			<div className={styles["app__footer"]}>
				<AppFooter />
			</div>
		</div>
	);
}

export default App;