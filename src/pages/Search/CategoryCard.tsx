import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { categoryIconConfig } from './category-icon.config';

export const CategoryCard = ({
	title,
	caption,
	id,
	iconKey
}: {
	id: number;
	title: string;
	caption: string;
	iconKey?: string;
}) => {
	const history = useHistory();

	return (
		<div
			onClick={() => history.push('/categories/' + id)}
			className="rounded-md shadow-sm border border-gray-200 mb-6 mr-4 p-8 cursor-pointer hover:shadow-lg transition"
			style={{ minHeight: '250px', width: '45%' }}
		>
			{iconKey && (
				<FontAwesomeIcon
					//@ts-ignore
					icon={categoryIconConfig[iconKey]}
					className="mb-4"
					size="2x"
				/>
			)}
			<h6 className="font-semibold mb-4">{title}</h6>
			<p className="leading-loose opacity-80">{caption}</p>
		</div>
	);
};
