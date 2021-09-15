import { faArrowRight, faPlusSquare } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { useGetReviewVotesQuery, useSearchReviewsQuery } from '../../graphql';
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
	const userId = UserSelectors.useSelectUserId()!;
	const { data, loading } = useSearchReviewsQuery({
		variables: {
			entityId,
			filters: { minRating: 1, maxRating: 5, sortBy: 'DESC' }
		}
	});
	const { data: getReviewsData, refetch } = useGetReviewVotesQuery({
		variables: { id: userId },
		skip: !userId,
		nextFetchPolicy: 'network-only',
		onError: () => {
			if (userId) {
				refetch();
			}
		}
	});

	const getReviewVote = (id: number) => {
		const foundVote = getReviewsData?.getReviewVotes.find(
			review => review?.reviewId === id
		);

		if (foundVote) {
			return foundVote;
		} else {
			return undefined;
		}
	};

	const history = useHistory();

	return (
		<div>
			<div
				onClick={() =>
					history.push(`/search/results/entity/${entityId}/reviews`)
				}
				className="bg-gray-50 w-full p-6 hover:opacity-80 hover:bg-gray-200 transition cursor-pointer flex justify-between items-center"
			>
				<h3 className="font-light font-sans text-lg">
					Read more reviews about{' '}
					<span className="text-primary font-bold">{entityName}</span>
				</h3>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
			<div className="p-6">
				{loading && <LoadingCircle loading={true} />}
				{!loading && data && (
					<div className="mt-2">
						<div className="flex justify-between items-baseline">
							<h4 className="font-light text-sm my-2">
								Viewing {data.searchReviews.reviews.length} of{' '}
								{data.searchReviews.total} Review
								{data.searchReviews.total > 1 && 's'}
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
								{review && (
									<Review
										review={review as any}
										refetchVotes={refetch}
									/>
								)}
								{data.searchReviews.reviews.map(
									(review, key) => (
										<Review
											refetchVotes={refetch}
											vote={getReviewVote(review!.id)}
											review={review as any}
											key={key}
										/>
									)
								)}
							</div>
						)}
						{data.searchReviews.total > 0 && review && (
							<div className="flex-col p-2">
								{review && (
									<Review
										review={review as any}
										refetchVotes={refetch}
									/>
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
