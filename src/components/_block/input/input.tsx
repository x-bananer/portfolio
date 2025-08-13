import styles from './input.module.scss';

interface InputProps {
	type?: string;
	placeholder?: string;
	required?: boolean;
}

const Input = ({ type = 'text', placeholder = '', required = false }: InputProps) => {
	return (
		<input
			className={styles.input}
			type={type}
			placeholder={placeholder}
			required={required}
		/>
	);
};

export default Input;