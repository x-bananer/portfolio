import styles from "./about.module.scss";

import about from "../../assets/images/about.png";

const About = () => {
	const DESCRIPTION = `
	Meet ✦me✦! Fun fact: I wasn't even supposed to become a software developer. I studied journalism, got curious about technology while writing an article about Elon Musk, and fell down the rabbit hole. Looking back, that turned out to be a surprisingly good accident.
	\n
	These days I live in Finland, study ICT, play badminton, occasionally go climbing (despite being afraid of heights), and read far too many psychology books. I also love travelling, learning new things, and – my guilty pleasure – painting by numbers.
	\n
	Oh, and I'm an incredibly picky eater.
	`;

	const QUOTE = "Make it work. Make it right. Make it fast.";

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
					<div className={styles["about__quote"]}>
						<p className={styles["about__quote-label"]}>
							A stylish quote for an epic ending:
						</p>
						<p className={styles["about__quote-text"]}>"{QUOTE}"</p>
						<p className={styles["about__quote-author"]}>
							- Kent Beck, pioneer of Test-Driven Development
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
