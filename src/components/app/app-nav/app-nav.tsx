import Button from '../../_block/button/button'

import styles from "./app-nav.module.scss";

interface AppNavProps {
    
}

const AppNav = ({}: AppNavProps) => {
    const handleNavItemClick = (type: string) => {
        console.log(type);
    }

    return (
        <ul className={styles["app-nav"]}>
            <li className={styles["app-nav__item"]}>
                <Button type="link" onClick={() => handleNavItemClick('about')}>About Me</Button>
            </li>
            <li className={styles["app-nav__item"]}>
                <Button type="link" onClick={() => handleNavItemClick('skills')}>Skills</Button>
            </li>
            <li className={styles["app-nav__item"]}>
                <Button type="link" onClick={() => handleNavItemClick('projects')}>Projects</Button>
            </li>
            <li className={styles["app-nav__item"]}>
                <Button type="link" onClick={() => handleNavItemClick('contact')}>Contact Me</Button>
            </li>
        </ul>
    );
};

export default AppNav;