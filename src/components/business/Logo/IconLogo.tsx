export const IconLogo = ({
	width = 205,
	height = 47
}: {
	width?: number | string;
	height?: number | string;
}) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 205 47"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="23.5" cy="23.5" r="23.5" fill="#FF5C5C" />
			<ellipse
				cx="102.024"
				cy="23.5"
				rx="24.0732"
				ry="23.5"
				fill="#A8A8A8"
			/>
			<circle cx="180.549" cy="23.5" r="23.5" fill="#00BE7A" />
		</svg>
	);
};
