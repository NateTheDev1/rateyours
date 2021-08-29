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
			className="rounded-md shadow-sm border lg:w-1/3 lg:mt-0 mt-8 flex-1 w-full border-gray-200 mb-6 p-8 cursor-pointer hover:shadow-lg transition"
			style={{ minHeight: '300px', minWidth: '300px' }}
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
