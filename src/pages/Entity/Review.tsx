import {
	ReviewVote,
	SearchReviewsResponse,
	useVoteReviewMutation,
	VoteType
} from '../../graphql';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-regular-svg-icons';
import { IconButton, Tooltip } from '@material-ui/core';
import { UserSelectors } from '../../redux/User/selectors';
import { useHistory, useParams } from 'react-router';

const Review = ({
	review,
	vote,
	refetchVotes
}: {
	review: SearchReviewsResponse['reviews'][0];
	vote?: ReviewVote;
	refetchVotes: (x: any) => void;
}) => {
	const params: { entityId: string } = useParams();
	const authenticated = UserSelectors.useSelectAuthenticated();
	const history = useHistory();
	const userId = UserSelectors.useSelectUserId();
	const [sendVote] = useVoteReviewMutation();

	const onTriggerVote = (type: VoteType) => {
		if (authenticated && userId && review) {
			if (vote) {
				sendVote({
					variables: {
						vote: {
							reviewId: review.id,
							voteType: 'REMOVE',
							userId
						}
					}
				}).then(() => {
					refetchVotes({ id: userId });
				});
			} else {
				sendVote({
					variables: {
						vote: { reviewId: review.id, voteType: type, userId }
					}
				}).then(() => {
					refetchVotes({ id: userId });
				});
			}
		} else {
			history.push('/login?redirect=entity-' + params.entityId);
		}
	};

	return (
		<div
			className="review w-full my-4 shadow-xs pb-3 border-b border-gray-200"
			id={String(review?.id)}
		>
			<div className="flex justify-between items-center">
				<h4 className="font-medium text-md">{review?.title}</h4>
				<div className="flex items-center">
					<div className="flex flex-col justify-center items-center">
						<Tooltip title="Upvote">
							<IconButton
								className="mr-4 opacity-70"
								onClick={() => onTriggerVote('UPVOTE')}
							>
								<FontAwesomeIcon
									icon={faChevronUp}
									size="sm"
									className={`${
										vote &&
										vote.voteType === 'UPVOTE' &&
										'text-primary'
									}`}
								/>
							</IconButton>
						</Tooltip>
						<p className="text-xs">{review!.upvotes}</p>
					</div>

					<div className="flex flex-col justify-center items-center">
						<Tooltip title="Downvote">
							<IconButton
								className="opacity-70"
								onClick={() => onTriggerVote('DOWNVOTE')}
							>
								<FontAwesomeIcon
									icon={faChevronDown}
									size="sm"
									className={`${
										vote &&
										vote.voteType === 'DOWNVOTE' &&
										'text-red-500'
									}`}
								/>
							</IconButton>
						</Tooltip>
						<p className="text-xs">{review!.downvotes}</p>
					</div>
				</div>
			</div>
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
			{review?.tags?.map((tag, key) => {
				if (tag && tag.length > 1)
					return (
						<span
							key={key}
							className="inline-flex mr-2 items-center justify-center px-3 py-3 text-xs mt-4 font-bold leading-none text-red-100 bg-primary rounded-full"
						>
							{tag}
						</span>
					);
				return <></>;
			})}
		</div>
	);
};

export default Review;
