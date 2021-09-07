import { faClock } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { GetUserActivityQuery } from '../../graphql';

const AcitivityCard = ({
	review
}: {
	review: GetUserActivityQuery['getUserActivity']['reviews'][0];
}) => {
	return (
		<div className="border border-gray-100 p-4">
			<div className="flex items-center justify-between">
				<div>
					<div className="start flex mr-4">
						<FontAwesomeIcon icon={faClock} />
						<p className="font-light text-sm ml-2 opacity-50">
							<Moment fromNow>{review?.createdAt}</Moment>
						</p>
					</div>
					<h4 className="mt-2">
						Left a review titled{' '}
						<span className="font-bold">{review?.title}</span> in{' '}
						<span className="font-bold">{review?.type}</span>
					</h4>
				</div>
				<div className="end">
					<Link
						className="sm:flex hidden p-4 mt-4 font-medium rounded-md bg-green-500 text-white h-10 items-center w-48 justify-center text-sm hover:opacity-90 transition"
						to={`/search/results/entity/${review?.entity}`}
					>
						View
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AcitivityCard;
