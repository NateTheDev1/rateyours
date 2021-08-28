import { useHistory } from 'react-router-dom';
import { SearchQuery } from '../../graphql';

export const SearchResult = ({
	review
}: {
	review: SearchQuery['search']['reviews'][0];
}) => {
	const history = useHistory();

	return (
		<div
			onClick={() => history.push('/search/results/entity/' + review?.id)}
			style={{ width: '48%' }}
			className="border rounded-md shadow-lg border-gray-200 p-8 bg-white cursor-pointer hover:opacity-50 hover:border-gray-400 transition"
		>
			<h4 className="font-bold text-lg">{review?.title}</h4>
			<p className="mt-4 font-medium">
				By {review?.createdByUser.fullName}
			</p>
			<p className="mt-4 font-medium text-primary">
				{review?.rating}/5 stars
			</p>
			<p className="font-normal mt-4 leading-loose">
				{review?.body.split('0, 100')[0].replaceAll('"', '') + '...'}
			</p>
		</div>
	);
};
