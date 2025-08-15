import styles from "./experience.module.scss";

import duotekLogo from "../../assets/images/duotek-logo.png";
import rosbankLogo from "../../assets/images/sgbank-logo.png";

import PlateWide from "../_block/plate-wide/plate-wide";

const Experience = () => {
	const EXPERIENCES = [
		{
			image: duotekLogo,
			title: "Frontend Developer at Duotek LLC",
			startDate: "Feb. 2022",
			endDate: "Present",
			description: `At Duotek, a software development company focused on building scalable web services, I started as a Junior Developer and grew into a Middle+ role. Over four years, I contributed to 11 client-facing products, leading the frontend implementation in 7 of them from UI implementation to production release. Worked with Vue 2 / Nuxt 2, later with Vue 3 / Nuxt 3 and Capacitor. Created internal tools and libraries to enhance the stack. Currently responsible for frontend architecture, UI development, and team collaboration. Also involved in recruitment and onboarding processes.`,
			link: "https://duotek.ru/about",
		},
		{
			image: rosbankLogo,
			title: "Web Development Intern at Société Générale",
			startDate: "Sept. 2021",
			endDate: "Feb. 2022",
			description: `Acting as the sole frontend developer in a backend-focused team, I led the development of an internal corporate service for Rosbank, until 2022 a subsidiary of the global financial group Société Générale. I built the frontend using Vue 2 and collaborated closely with Django/Python developers. Throughout the project, I participated in planning, communicated with internal stakeholders, designed the UI, and iteratively delivered features based on user feedback.`,
			link: "https://particuliers.sg.fr/",
		},
		{
			image: null,
			title: "Multimedia Content Creator and Team Lead",
			startDate: "Apr. 2016",
			endDate: "Jul. 2021",
			description: `Originally trained in media and communication, I worked as a reporter and editor in several media outlets across Kazakhstan and Russia, leading a department with a team of 10 authors for two years. Curated and structured content, oversaw visual design, and managed social media channels. Produced multimedia materials and digital longreads. This experience shaped my approach to content structure, visual clarity, and user-centered communication, which I now apply in team-based projects and interface development.`
		}
	];

	return (
		<div className={styles["experience"]}>
			<section className={styles["experience"]}>
				<div className={`${styles["experience__container"]} layout`}>
					<div className={styles["experience__header"]}>
						<h2 className={styles["experience__title"]}>
							<span className="text-display">My </span>{" "}
							<span className="text-display text-w-800">
								Experience
							</span>
						</h2>
					</div>
					<div className={styles["experience__content"]}>
						<ul className={styles["experience__list"]}>
							{EXPERIENCES.map((item, index) => (
								<li key={index}>
									<a href={item.link} target="_blank">
										<PlateWide
											image={item.image}
											title={item.title}
											startDate={item.startDate}
											endDate={item.endDate}
											description={item.description}
										/>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Experience;
