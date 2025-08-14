import styles from "./media.module.scss";

import { useMemo } from 'react';
import { FiExternalLink } from 'react-icons/fi';

interface MediaProps {
	image?: string | null;
	number?: string | number;
	title?: string;
	description?: string;
	link?: string;
	isReversed?: boolean;
}

const Media = ({ number, title, description, image, link, isReversed = false }: MediaProps) => {
	const formattedIndex = useMemo(() => {
		if (!number) {
			return ''
		};

		const num = Number(number);

		if (isNaN(num)) {
			return ''
		};

		return num < 10 ? '0' + num : String(num);
	}, [number]);

	return (
		<div className={`${styles["media"]} ${isReversed && styles["media--reversed"]}`}>
			<div className={styles["media__container"]}>
				{image && (
					<div className={styles["media__picture"]}>
						<img
							className={styles["media__image"]}
							src={image}
							alt={title}
						/>
					</div>
				)}
				{(formattedIndex || title || description) &&
					<div className={styles["media__content"]}>
						{formattedIndex &&
							<p className={styles["media__suptitle"]}>{formattedIndex}</p>
						}
						{title &&
							<h2 className={styles["media__title"]}>{title}</h2>
						}
						{description &&
							<div className={styles["media__description"]}>
								{description.split('\n').map((line, idx) => (
									<p key={idx} className="mb-s">
										{line}
									</p>
								))}
							</div>
						}
						{link &&
							<a href={link} target="_blank" className={styles["media__link"]}>
								<FiExternalLink size={20} />
							</a>
						}
					</div>
				}
			</div>
		</div>
	);
};

export default Media;
