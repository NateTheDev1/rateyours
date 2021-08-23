export const IconLogo = ({
	width = 186,
	height = 49
}: {
	width?: number | string;
	height?: number | string;
}) => {
	return (
		<svg
			style={{ width, height }}
			viewBox="0 0 186 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_d)">
				<circle cx="24.5" cy="20.5" r="20.5" fill="#FF5C5C" />
				<ellipse cx="93" cy="20.5" rx="21" ry="20.5" fill="#A8A8A8" />
				<circle cx="161.5" cy="20.5" r="20.5" fill="#00BE7A" />
			</g>
			<defs>
				<filter
					id="filter0_d"
					x="0"
					y="0"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};