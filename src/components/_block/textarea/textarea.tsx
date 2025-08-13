import styles from './textarea.module.scss';

interface TextareaProps {
	placeholder?: string;
	required?: boolean;
	rows?: number;
}

const Textarea = ({ placeholder = '', required = false, rows = 4 }: TextareaProps) => {
	return (
		<textarea
			className={styles.textarea}
			placeholder={placeholder}
			required={required}
			rows={rows}
		/>
	);
};

export default Textarea;