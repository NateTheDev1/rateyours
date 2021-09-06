import { faRedo } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { useGetUserActivityQuery } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';

const ActivityCard = lazy(() => import('./ActivityCard'));

const Dashboard = () => {
	const id = UserSelectors.useSelectUserId()!;
	const { data, loading, refetch } = useGetUserActivityQuery({
		variables: { id },
		fetchPolicy: 'cache-and-network',
		skip: !id,
		onError: () => {
			refetch({ id });
		}
	});

	const onRefresh = () => {
		refetch({ id });
	};

	return (
		<div className="dashboard">
			<Helmet>
				<title>rateit | Dashboard</title>
				<meta name="description" content="rateit user dashboard" />
			</Helmet>
			<div className="w-full bg-yellow-600 text-white font-bold p-4 rounded-md">
				<p className="leading-loose">
					Note: The dashboard is a beta feature and is currently in
					development. Currently you may only see your activity. For
					more information on upcoming features visit our{' '}
					<Link to="/about/updates" className="underline">
						about page.
					</Link>
				</p>
			</div>
			<div className="flex items-center mt-10 mb-4">
				<h2 className="font-bold text-xl">Your Activity</h2>
				<FontAwesomeIcon
					size="lg"
					onClick={onRefresh}
					icon={faRedo}
					className="ml-4 cursor-pointer hover:opacity-50 transition"
				/>
			</div>
			{loading && <LoadingCircle loading={true} />}
			{!loading && data && data.getUserActivity.reviews.length < 1 && (
				<p className="text-center bg-opacity-70">No activity.</p>
			)}
			{!loading && data && data.getUserActivity.reviews.length > 0 && (
				<div
					className="flex flex-col overflow-y-scroll"
					style={{ maxHeight: '350px' }}
				>
					{data.getUserActivity.reviews.map((review, key) => (
						<ActivityCard key={key} review={review} />
					))}
				</div>
			)}
		</div>
	);
};

export default Dashboard;
