import { faPlusSquare } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Suspense } from 'react';
// import { useEffect } from 'react';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { useQuery } from '../../components/Navbar/Navbar';
import { useSearchReviewsQuery } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';
import Review from './Review';
import StartReview from './startReviewEmitter';

export const Reviews = ({
	entityId,
	entityName,
	review
}: {
	entityName: string;
	entityId: number;
	review: any;
}) => {
	const query = useQuery();
	const { data, loading } = useSearchReviewsQuery({
		variables: { entityId }
	});
	const userId = UserSelectors.useSelectUserId();
	// useEffect(() => {
	// 	if (queries.get('scrollTo')) {
	// 		const el = document.getElementById(queries.get('scrollTo')!);

	// 		el?.classList.add('p-2');

	// 		if (el) {
	// 			el.style.border = 'none';
	// 			el.style.borderLeft = '5px solid #10B981';
	// 			// el.scrollIntoView({
	// 			// 	behavior: 'smooth',
	// 			// 	block: 'nearest',
	// 			// 	inline: 'start'
	// 			// });
	// 		}
	// 	}
	// }, [data, queries]);

	return (
		<div>
			<div className="bg-gray-50 w-full p-6">
				<h3 className="font-light font-sans text-lg">
					Read reviews about{' '}
					<span className="text-primary font-bold">{entityName}</span>
				</h3>
			</div>
			<div className="p-6">
				{loading && <LoadingCircle loading={true} />}
				{!loading && data && (
					<div className="mt-2">
						<div className="flex justify-between items-baseline">
							<h4 className="font-light text-sm my-2">
								{data.searchReviews.total} Reviews
							</h4>

							<button
								onClick={() => {
									StartReview.emit('STARTED_REVIEW', {});
								}}
								className="sm:hidden flex p-2 mt-4 font-medium rounded-md bg-green-500 text-white text-xs h-8 items-center w-40 justify-center hover:opacity-90 transition"
							>
								Leave a review{' '}
								<FontAwesomeIcon
									icon={faPlusSquare}
									className="ml-2"
								/>
							</button>
						</div>
						{data.searchReviews.total > 0 && (
							<div className="flex-col p-2">
								{review && <Review review={review as any} />}
								{data.searchReviews.reviews.map(
									(review, key) => (
										<Review
											review={review as any}
											key={key}
										/>
									)
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Reviews;
