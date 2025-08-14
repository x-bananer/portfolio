import AppHeader from './app-header/app-header';
import AppNav from './app-nav/app-nav'
import AppFooter from './app-footer/app-footer';

import Hero from '../hero/hero';
import Skills from '../skills/skills';
import Experience from '../experience/experience';
import About from '../about/about';
import Projects from '../projects/projects';
import Certifications from '../certifications/certifications';

import styles from "./app.module.scss";

const App = () => {
	return (
		<div className={styles["app"]}>
			<div className={styles["app__header"]}>
				<AppHeader>
					<AppNav />
				</AppHeader>
			</div>
			<div className={styles["app__content"]}>
				<Hero />
				<Skills />
				<Experience />
				<About />
				<Projects />
				<Certifications />
			</div>
			<div className={styles["app__footer"]}>
				<AppFooter />
			</div>
		</div>
	);
}

export default App;