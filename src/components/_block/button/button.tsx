import styles from "./button.module.scss";
import type { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	size?: "small" | "";
	type?: "square" | "simple" | "link" | "";
	effect?: "light" | "";
	onClick?: () => void;
}

const Button = ({ size = "", type = "", effect="", children, onClick }: ButtonProps) => {
	const className = [
		styles.button,
		size && styles[`button--${size}`],
		type && styles[`button--${type}`],
		effect && styles[`button--${effect}`],
	].filter(Boolean).join(" ");

	return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
