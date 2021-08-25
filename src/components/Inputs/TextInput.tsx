import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

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
	const [showPassword, setShowPassword] = useState(false);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="flex mb-2 items-center justify-between">
				<label
					htmlFor={name}
					className="font-light opacity-50 text-sm  font-sans"
				>
					{label}
				</label>
				{type === 'password' && (
					<FontAwesomeIcon
						onClick={() => setShowPassword(!showPassword)}
						className="ml-4 text-sm cursor-pointer opacity-50"
						icon={!showPassword ? faEyeSlash : faEye}
					/>
				)}
			</div>
			<input
				required={required}
				className="w-full border border-gray-300 rounded-md h-12 outline-none focus:outline-none p-4 transition-colors text-sm font-sans bg-gray-100 focus:bg-white"
				type={showPassword ? 'text' : type}
				autoComplete={autoComplete}
				name={name}
				value={value}
				onChange={onChange}
				tabIndex={0}
			></input>
		</div>
	);
};
