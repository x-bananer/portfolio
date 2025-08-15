import styles from "./certifications.module.scss";

import Card from "../_block/card/card";

import html from "../../assets/images/certificates/html.png";
import js from "../../assets/images/certificates/js.png";
import vue from "../../assets/images/certificates/vue.png";
import react from "../../assets/images/certificates/react.png";
import node from "../../assets/images/certificates/node.png";
import nuxt from "../../assets/images/certificates/nuxt.png";

const Certifications = () => {
	const CERTIFICATIONS = [
		{
			image: vue,
			title: "Vue.js Advanced Web Development",
			source: "LoftShool",
			description:
				"Vue.js, NPM, Yarn, Webpack, ESLint, Axios, Vue Router, Vuex, Tokens (JWT), Composition API, Jest",
			file: "vue.pdf",
		},

		{
			image: react,
			title: "React.js",
			source: "LoftShool",
			description:
				"React.js, Redux, Redux-Saga, Forms, CI/CD, Client Error Handling, Development Libraries",
			file: "react.pdf",
		},
		{
			image: nuxt,
			title: "The Nuxt 3 Bootcamp",
			source: "Udemy",
			description: "Nuxt 3, Vue 3, TypeScript, REST API, SSR, CSR",
			file: "nuxt.pdf",
		},
		{
			image: node,
			title: "Node.js: server-side JavaScript",
			source: "LoftShool",
			description:
				"Node.js, Express.js, Koa.js, REST API, Databases, WebSocket, Deployment, SSR",
			file: "node.pdf",
		},
		{
			image: js,
			title: "Complete JavaScript Course",
			source: "LoftShool",
			description:
				"JavaScript (ES6), DOM, Browser API, OOP, MV, Modules, Node.js, Error Handling, Debugging, API Integration",
			file: "js.pdf",
		},
		{
			image: html,
			title: "Basics of HTML & CSS",
			source: "LoftShool",
			description: "HTML5, CSS3, BEM, Figma, CSS Animations",
			file: "html.pdf",
		},
	];

	return (
		<section className={styles["certifications"]}>
			<div className={`${styles["certifications__container"]} layout`}>
				<div className={styles["certifications__header"]}>
					<h2 className={styles["certifications__title"]}>
						<span className="text-display">My </span>{" "}
						<span className="text-display text-w-800">
							Certifications
						</span>
					</h2>
				</div>
				<div className={styles["certifications__content"]}>
					<ul className={styles["certifications__grid"]}>
						{CERTIFICATIONS.map((item, index) => (
							<li key={index}>
								<a href={`/certificates/${item.file}`} target="_blank">
									<Card
										image={item.image}
										title={item.title}
										description={item.description}
										subtitle={item.source}
									/>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Certifications;
