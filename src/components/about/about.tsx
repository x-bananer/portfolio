import styles from "./about.module.scss";

import about from "../../assets/images/about.png";

const About = () => {
	const DESCRIPTION = `Meet ✨me✨, a frontend developer with 4+ years of experience building production-ready apps using Vue, Nuxt, and React. I've delivered complex interfaces for B2B platforms, internal systems, and media-rich products, including payment flows, real-time chat, multilingual support, and custom audio streaming.
		\n
		I live in Finland, study ICT, and speak Russian, English, and a bit of Finnish, though Finnish still keeps me humble. When I'm not coding, you'll probably find me doing yoga, reading psychology books, cycling around, or diving into new tech just for the joy of it.
		\n
		Let's make something fast, clean, and user-friendly – and maybe even a little delightful.
		`;

	return (
		<div className={styles["about"]}>
			<div className={`${styles["about__container"]} layout`}>
				<div className={styles["about__background"]}>
					<img
						className={styles["about__image"]}
						src={about}
						alt="Girl banner | Kseniia Shlenskaia | Frontend Dev"
					/>
				</div>
				<div className={styles["about__content"]}>
					<h2 className={styles["about__title"]}>
						<span className="text-display">About </span>{" "}
						<span className="text-display text-w-800">Me</span>
					</h2>
					<div className={styles["about__description"]}>
						{DESCRIPTION.split("\n").map((line, idx) => (
							<p key={idx} className="mb-s">
								{line}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
