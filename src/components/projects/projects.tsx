import styles from "./projects.module.scss";

import Media from "../_block/media/media";

import lsm from "../../assets/images/projects/lsm.png";
import epl from "../../assets/images/projects/epl.png";
import ihe from "../../assets/images/projects/ihe.png";
import idw from "../../assets/images/projects/idw.png";
import gpm from "../../assets/images/projects/gpm.png";
import auth from "../../assets/images/projects/auth.png";

const Projects = () => {
	const PROJECTS = [
		{
			image: gpm,
			title: "DrujbaMusic",
			description: `DrujbaMusic is a professional platform for using music tracks in commercial projects. The interface includes advanced filtering by genre, mood, instruments, and country, as well as navigation through curated playlists and albums. A web-based audio player, download options, and internal documentation tools for industry professionals were implemented. The platform supports the full user workflow from listening to preparing tracks for production use.`,
			link: `https://drujbamusic.com/en`,
		},
		{
			image: idw,
			title: "ID.World",
			description: `ID.World is a digital service focused on digital identification technologies and international eSIM sales. Modern landing pages were implemented with background video and multilingual support, along with a functional catalog for browsing and purchasing eSIMs across different countries. Particular attention was given to responsive design, loading performance, and a seamless user journey from product discovery to checkout.`,
			link: `https://id.world/en`,
		},
		{
			image: lsm,
			title: "Legio Sound & Music",
			description: `Legio Sound & Music is a platform for licensing and streaming high-quality audio content designed for film, advertising, and media projects. It features user accounts with subscription options, playlist creation, and license management. A complex multi-level filtering system supports efficient content discovery. Audio is streamed seamlessly across devices without requiring full file downloads.`,
			link: `https://legiosoundmusic.ru/en`,
		},
		{
			image: auth,
			title: '@duotek/nuxt3-auth',
			description: `@duotek/nuxt3-auth is a custom authentication module for Nuxt 3, developed to address the lack of reliable built-in solutions. It supports configurable login and registration strategies, secure token storage via cookies, user data handling, and redirect control. Includes a dedicated $authFetch extension for authorized API requests. Is used across all new internal and client-facing projects.`,
			link: `https://www.npmjs.com/package/@duotek/nuxt3-auth`,
		},
		{
			image: epl,
			title: "Explat",
			description: `Explat is a digital platform for international trade services. The system enables full-cycle interaction between clients and service providers, including service ordering, verification, and payment. It features dedicated user dashboards for both clients and suppliers, integrated chat for communication, and an admin panel for platform management. The architecture is designed for scalability and secure transaction processing.`,
			link: `https://explat.kz/`,
		},
		{
			image: ihe,
			title: "iHels",
			description: `A full-featured online store was developed with a product catalog, advanced filtering, product pages, shopping cart, promo code system, and online payments. The service supports the entire user journey from product selection to checkout and is designed for scalability and integration with external systems such as CRM and logistics. An admin panel and a supplier dashboard were also implemented for managing listings, orders, and analytics.`,
			link: `https://ihels.shop/`,
		},
	];

	return (
		<div className={styles["projects"]}>
			<div className={`${styles["projects__container"]} layout`}>
				<div className={styles["projects__header"]}>
					<h2 className={styles["projects__title"]}>
						<span className="text-display">My </span>{" "}
						<span className="text-display text-w-800">
							Projects
						</span>
					</h2>
				</div>
				<div className={styles["projects__content"]}>
					<ul className={styles["projects__list"]}>
						{PROJECTS.map((item, index) => (
							<li key={index}>
								<Media
									number={index + 1}
									image={item.image}
									title={item.title}
									description={item.description}
									link={item.link}
									isReversed={Boolean(index % 2)}
								/>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Media></Media>
		</div>
	);
};

export default Projects;
