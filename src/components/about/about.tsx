import styles from "./about.module.scss";

import about from "../../assets/images/about.png";

const About = () => {
	const DESCRIPTION = "";

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
					<p className={styles["about__description"]}>
						{DESCRIPTION.split("\n").map((line, idx) => (
							<span key={idx}>
								{line}
								<br />
								<br />
							</span>
						))}
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
