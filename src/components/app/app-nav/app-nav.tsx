import Button from "../../_block/button/button";

import styles from "./app-nav.module.scss";

interface AppNavProps {
	onNavigate: {
		hero: () => void;
		skills: () => void;
		experience: () => void;
		about: () => void;
		projects: () => void;
		certifications: () => void;
	};
}

const AppNav = ({ onNavigate }: AppNavProps) => {
	return (
		<ul className={styles["app-nav"]}>
			<li className={styles["app-nav__item"]}>
				<Button type="link" onClick={onNavigate.skills}>
					Skills
				</Button>
			</li>
			<li className={styles["app-nav__item"]}>
				<Button type="link" onClick={onNavigate.experience}>
					Experience
				</Button>
			</li>
            <li className={styles["app-nav__item"]}>
				<Button type="link" onClick={onNavigate.about}>
					About Me
				</Button>
			</li>
			<li className={styles["app-nav__item"]}>
				<Button type="link" onClick={onNavigate.projects}>
					Projects
				</Button>
			</li>
			<li className={styles["app-nav__item"]}>
				<Button type="link" onClick={onNavigate.certifications}>
					Certifications
				</Button>
			</li>
		</ul>
	);
};

export default AppNav;
