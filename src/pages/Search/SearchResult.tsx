import { useHistory } from 'react-router-dom';
import { SearchQuery } from '../../graphql';
import Moment from 'react-moment';
import { getTagColor } from '../../components/business/tag-colors-config';

export const SearchResult = ({
	review
}: {
	review: SearchQuery['search']['reviews'][0];
}) => {
	const history = useHistory();

	return (
		<div
			onClick={() =>
				history.push(
					'/search/results/entity/' +
						review?.entity +
						'/reviews?query=' +
						review?.title
				)
			}
			className="border rounded-md lg:mt-0 mt-4 mb-4 shadow-md  border-gray-200 p-8 bg-white cursor-pointer hover:opacity-50  hover:border-gray-400 transition  lg:mr-8"
		>
			<h4 className="font-bold text-lg">{review?.title}</h4>
			<p className="mt-4 font-medium">
				By {review?.createdByUser.fullName}
			</p>
			<p className="font-light text-md mt-4">
				<Moment fromNow>{review?.createdAt}</Moment>
			</p>
			<p className="mt-4 font-medium text-primary">
				{review?.rating}/5 stars
			</p>
			<p className="font-normal mt-4 leading-loose">
				{review?.body.slice(0, 200).replaceAll('"', '') +
					(review && review?.body.length > 100 ? '...' : '')}
			</p>

			<div className="flex flex-wrap">
				<span
					style={{ backgroundColor: getTagColor(review!.type) }}
					className="inline-flex items-center justify-center px-3 py-3 text-md mt-4 font-bold leading-none text-red-100 rounded-full mr-2"
				>
					{review?.type}
				</span>
				{review?.tags?.map((tag, key) => (
					<span
						key={key}
						className="inline-flex mr-2 items-center justify-center px-3 py-3 text-md mt-4 font-bold leading-none text-red-100 bg-primary rounded-full"
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);
};
