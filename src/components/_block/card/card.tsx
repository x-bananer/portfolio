import styles from "./card.module.scss";

interface CardProps {
	image?: string | null;
	title?: string;
	description?: string;
	startDate?: string;
	endDate?: string;
}

const Card = ({ image, title, description, startDate, endDate }: CardProps) => {
	const period = startDate || endDate ? startDate + " – " + endDate : null;

	return (
		<div className={styles["card"]}>
			<div className={styles["card__header"]}>
				<div className={styles["card__media"]}>
                    {image &&
                        <img
                            className={styles["card__image"]}
                            src={image}
                            alt={title}
                        />
                    }
                    {title &&
                        <p className={styles["card__title"]}>
                            {title}
                        </p>
                    }
				</div>
				{period &&
					<div className={styles["card__caption"]}>
                        {period}
                    </div>
                }
			</div>
            {description &&
                <div className={styles["card__content"]}>
                    {description.split('\n').map((line, idx) => (
                        <span key={idx}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
            }
		</div>
	);
};

export default Card;
