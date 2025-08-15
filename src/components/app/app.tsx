import {useRef} from 'react';

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
	const heroRef = useRef(null);
	const skillsRef = useRef(null);
	const experienceRef = useRef(null);
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const certificationsRef = useRef(null);

	const scrollTo = (ref: any) => {
		const offset = 100;
		const top = ref.current?.getBoundingClientRect().top ?? 0;
		const scrollY = window.scrollY ?? window.pageYOffset;
		window.scrollTo({
			top: top + scrollY - offset,
			behavior: 'smooth',
		});
	};

	return (
		<div className={styles["app"]}>
			<div className={styles["app__header"]}>
				<AppHeader>
					<AppNav
						onNavigate={{
							hero: () => scrollTo(heroRef),
							skills: () => scrollTo(skillsRef),
							experience: () => scrollTo(experienceRef),
							about: () => scrollTo(aboutRef),
							projects: () => scrollTo(projectsRef),
							certifications: () => scrollTo(certificationsRef),
						}}
					/>
				</AppHeader>
			</div>
			<div className={styles["app__content"]}>
				<div ref={heroRef}><Hero /></div>
				<div ref={skillsRef}><Skills /></div>
				<div ref={experienceRef}><Experience /></div>
				<div ref={aboutRef}><About /></div>
				<div ref={projectsRef}><Projects /></div>
				<div ref={certificationsRef}><Certifications /></div>
			</div>
			<div className={styles["app__footer"]}>
				<AppFooter />
			</div>
		</div>
	);
}

export default App;