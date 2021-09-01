import { SearchReviewsResponse } from '../../graphql';
import Moment from 'react-moment';

const Review = ({
	review
}: {
	review: SearchReviewsResponse['reviews'][0];
}) => {
	return (
		<div
			className="review w-full my-4 shadow-xs pb-3 border-b border-gray-200"
			id={String(review?.id)}
		>
			<h4 className="font-medium text-md">{review?.title}</h4>
			<h4 className="font-light mt-3 text-sm">
				By {review?.createdByUser.fullName}
			</h4>
			<p className="font-light text-sm mt-4">
				<Moment fromNow>{review?.createdAt}</Moment>
			</p>
			<p className="font-normal text-sm mt-4 leading-loose">
				{review?.body}
			</p>
			<p className="mt-4 font-medium text-sm text-primary">
				{review?.rating}/5 stars
			</p>
			{review?.tags?.map((tag, key) => (
				<span
					key={key}
					className="inline-flex mr-2 items-center justify-center px-3 py-3 text-xs mt-4 font-bold leading-none text-red-100 bg-primary rounded-full"
				>
					{tag}
				</span>
			))}
		</div>
	);
};

export default Review;
