import styles from "./button.module.scss";
import type { ReactNode } from "react";

interface ButtonProps {
	children?: ReactNode;
	size?: "small" | "";
	type?: "square" | "";
}

const Button = ({ size = "", type = "", children }: ButtonProps) => {
	const className = [
		styles.button,
		size && styles[`button--${size}`],
		type && styles[`button--${type}`],
	].filter(Boolean).join(" ");

	return (
        <button className={className}>
            {children}
        </button>
    );
};

export default Button;
