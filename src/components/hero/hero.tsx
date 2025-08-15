import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Button from "../_block/button/button";

import hero from "../../assets/images/hero.png";

import styles from "./hero.module.scss";

const Hero = () => {
	return (
		<section className={styles["hero"]}>
			<div className={`${styles["hero__container"]} layout`}>
				<div className={styles["hero__content"]}>
					<div className={styles["hero__header"]}>
						<h1 className={styles["hero__title"]}>
							<p className="text-display text-w-200">Hello,</p>
							<p className="text-display text-w-200">
								I’m{" "}
								<span className="text-w-800">
									Kseniia Shlenskaia.
								</span>
							</p>
							<p className="text-display">
								<span className="text-w-800">Frontend</span>{" "}
								<span className="text-outlined text-w-800">
									Developer
								</span>
							</p>
							<p className="text-display text-w-200">
								Based In{" "}
								<span className="text-w-800">Finland.</span>
							</p>
						</h1>
						<p className={styles["hero__subtitle"]}>
							I'm an experienced Vue & React developer focused
							on building clean, fast, and accessible interfaces,
							with a growing interest in backend development.
							I care about real-world performance and scalable
							architecture. Take a look around and feel free
							to get in touch!
						</p>
					</div>
					<div className={styles["hero__bar"]}>
						<a href="https://github.com/x-bananer" target="_blank">
							<Button type="square" effect="light">
								<FaGithub size={24}></FaGithub>
							</Button>
						</a>
						<a href="https://www.linkedin.com/in/kseniia-shlenskaia-502004353/" target="_blank">
							<Button type="square" effect="light">
								<FaLinkedin size={24}></FaLinkedin>
							</Button>
						</a>
						<a href="mailto:kseniia.shlenskaia@gmail.com?subject=Portfolio Inquiry">
							<Button type="square" effect="light">
								<BiLogoGmail size={24}></BiLogoGmail>
							</Button>
						</a>
					</div>
				</div>
				<div className={styles["hero__background"]}>
					<img
						className={styles["hero__image"]}
						src={hero}
						alt="Girl banner | Kseniia Shlenskaia | Frontend Dev"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
