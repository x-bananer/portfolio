import styles from "./skills.module.scss";

import Plate from "../_block/plate/plate";

import { IoLogoVue } from "react-icons/io5";
import { SiNuxtdotjs } from "react-icons/si";
import { GiPineapple } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { PiFileSqlDuotone } from "react-icons/pi";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiVuetify } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { SiSocketdotio } from "react-icons/si";
import { SiI18Next } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { MdShowChart } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { IoCubeOutline } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoCapacitor } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiVitest } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbBrowserCheck } from "react-icons/tb";
import { TbCloudUp } from "react-icons/tb";
import { TbServer2 } from "react-icons/tb";


const Skills = () => {
	const SKILLS = {
		frontend: [
			{ title: "TypeScript", icon: <SiTypescript /> },
			{ title: "JavaScript", icon: <BiLogoJavascript /> },
			{ title: "React", icon: <FaReact /> },
			{ title: "Redux", icon: <SiRedux /> },
			{ title: "Vue.js", icon: <IoLogoVue /> },
			{ title: "Nuxt.js", icon: <SiNuxtdotjs /> },
			{ title: "Vuex", icon: <RiVuejsFill />},
			{ title: "Pinia", icon: <GiPineapple /> },
			{ title: "Tailwind CSS", icon: <SiTailwindcss /> },
			{ title: "Vuetify", icon: <SiVuetify /> },
			{ title: "Sass", icon: <FaSass /> },
			{ title: "Element Plus", icon: <IoCubeOutline /> },
			{ title: "i18next", icon: <SiI18Next /> },
			{ title: "ofetch", icon: <HiOutlineCloudDownload /> },
			{ title: "Axios", icon: <SiAxios /> },
			{ title: "Socket.io", icon: <SiSocketdotio /> },
		],
		mobile: [
			{ title: "React Native", icon: <TbBrandReactNative /> },
			{ title: "Capacitor", icon: <IoLogoCapacitor /> },
		],
		backend: [
			{ title: "Python", icon: <FaPython /> },
			{ title: "Node.js", icon: <FaNodeJs /> },
			{ title: "Express.js", icon: <SiExpress /> },
			{ title: "PostgreSQL", icon: <SiPostgresql /> },
			{ title: "Prisma", icon: <SiPrisma /> },
			{ title: "Flask", icon: <SiFlask /> },
			{ title: "FastAPI", icon: <SiFastapi /> },
		],
		testing: [
			{ title: "Jest", icon: <SiJest /> },
			{ title: "Vitest", icon: <SiVitest /> },
			{ title: "Playwright", icon: <TbBrowserCheck /> },
		],
		tools: [
			{ title: "Linux/Unix", icon: <FaLinux />  },
			{ title: "Git", icon: <FaGitAlt /> },
			{ title: "GitHub Actions", icon: <SiGithubactions /> },
			{ title: "Vercel", icon: <SiVercel /> },
			{ title: "Netlify", icon: <TbCloudUp /> },
			{ title: "Render", icon: <TbServer2 /> },
			{ title: "Vite", icon: <SiVite /> },
			{ title: "Webpack", icon: <SiWebpack /> },
			{ title: "Figma", icon: <FaFigma /> },
		],
	};

	const CATEGORY_TITLES: { [key: string]: string } = {
		frontend: 'Frontend',
		backend: 'Backend & Data',
		testing: 'Testing',
		tools: 'Dev & Tools',
		mobile: 'Mobile',
	};

	return (
		<section className={styles["skills"]}>
			<div className={`${styles["skills__container"]} layout`}>
				<div className={styles["skills__header"]}>
					<h2 className={styles["skills__title"]}>
						<span className="text-display">My </span>{" "}
						<span className="text-display text-w-800">Skills</span>
					</h2>
					<p className={styles["skills__subtitle"]}>I’ve really used all of this in production on paid projects. Well... almost</p>
				</div>
				<div className={styles["skills__content"]}>
					{Object.entries(SKILLS).map(([category, items]) => (
						<div
							key={category}
							className={styles["skills__section"]}
						>
							<h3 className="mb-xxxl text-h1">
								{CATEGORY_TITLES[category]}
							</h3>
							<ul className={styles["skills__grid"]}>
								{items.map(({ title, icon }) => (
									<li key={title}>
										<Plate title={title} icon={icon} />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
