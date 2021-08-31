import { School as SchoolType } from './parseEntity';

const School = ({ school }: { school: SchoolType }) => {
	return (
		<div className="mt-4 mb-4">
			<p className="font-medium opacity-50 uppercase mt-4">
				{school.country}
			</p>
			<div className="mt-4">
				{school.websites.map((website: string, key: any) => (
					<a
						key={key}
						href={website}
						target="_blank"
						rel="noreferrer"
						tabIndex={0}
						className="opacity-75 underline mb-3 mt-4"
					>
						{website}
					</a>
				))}
			</div>
		</div>
	);
};

export default School;
