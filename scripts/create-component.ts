import fs from 'fs';
import path from 'path';

const rawName = process.argv[2];

if (!rawName) {
	console.error('Please provide a component name.');
	process.exit(1);
}

const kebabName = rawName
	.trim()
	.toLowerCase()
	.replace(/\s+/g, '-')
	.replace(/_/g, '-');

const pascalName = kebabName
	.split('-')
	.map(word => word.charAt(0).toUpperCase() + word.slice(1))
	.join('');

const componentDir = path.resolve(__dirname, '../src/components', kebabName);
const tsxFile = path.join(componentDir, `${kebabName}.tsx`);
const scssFile = path.join(componentDir, `${kebabName}.module.scss`);

if (fs.existsSync(componentDir)) {
	console.error('Component folder already exists.');
	process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

fs.writeFileSync(
	tsxFile,
	`import styles from './${kebabName}.module.scss';

const ${pascalName} = () => {
	return (
		<div className={styles["${kebabName}"]}>
			{/* ${pascalName} content */}
		</div>
	);
};

export default ${pascalName};
`
);

fs.writeFileSync(
	scssFile,
	`.${kebabName} {
	// styles for ${pascalName}
}
`
);

console.log(`Component ${pascalName} created in src/components/${kebabName}`);
