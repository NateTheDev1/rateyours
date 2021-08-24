export const TextInput = ({
	value,
	setValue,
	label,
	name,
	autoComplete = 'off',
	type = 'text',
	className = '',
	required = false
}: {
	value: string;
	setValue: (val: string) => void;
	name: string;
	label: string;
	autoComplete?: string;
	type?: string;
	className?: string;
	required?: boolean;
}) => {
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<label
				htmlFor={name}
				className="font-light opacity-50 text-sm mb-2 font-sans"
			>
				{label}
			</label>
			<input
				required={required}
				className="w-full border border-gray-300 rounded-md h-12 outline-none focus:outline-none p-4 transition-colors text-sm font-sans bg-gray-100 focus:bg-white"
				type={type}
				autoComplete={autoComplete}
				name={name}
				value={value}
				onChange={onChange}
				tabIndex={0}
			/>
		</div>
	);
};
