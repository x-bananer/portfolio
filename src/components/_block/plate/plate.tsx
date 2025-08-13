import styles from "./plate.module.scss";

import type { ReactNode } from "react";

interface PlateProps {
	title?: string;
	icon?: ReactNode;
}

const Plate = ({ title, icon }: PlateProps) => {
	return (
		<div className={styles["plate"]}>
			{icon && (
				<div className={styles["plate__icon"]}>
					{icon}
				</div>
			)}
			{title && (
				<p className={styles["plate__title"]}>
					{title}
				</p>
			)}
		</div>
	);
};

export default Plate;