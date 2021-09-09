/* eslint-disable react-hooks/exhaustive-deps */
import {
	faPlusSquare,
	faQuestionCircle
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory, useParams } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { Navbar, useQuery } from '../../components/Navbar/Navbar';
import {
	useGetEntityQuery,
	useHasReviewedLazyQuery,
	useUpdateEntityViewsMutation
} from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';
import NewReview from './NewReview';
import { parseEntity, returnIdentifiedContent } from './parseEntity';
import Reviews from './Reviews';
import StartReview from './startReviewEmitter';

const School = lazy(() => import('./School'));
const Movie = lazy(() => import('./Movie'));

const EntityBase = () => {
	const history = useHistory();
	const userId = UserSelectors.useSelectUserId();
	const query = useQuery();

	const [getHasReviewed, hasReviewedLoading] = useHasReviewedLazyQuery({
		fetchPolicy: 'network-only'
	});

	const [viewed, setViewed] = useState(false);
	const [submittedReview, setSubmittedReview] = useState(null);
	const [updateEntityViews] = useUpdateEntityViewsMutation();

	const { entityId }: { entityId: string } = useParams();
	const [creatingReview, setCreatingReview] = useState(false);
	const { data, loading } = useGetEntityQuery({
		variables: { id: Number(entityId) },
		onError: () => {
			history.goBack();
		},
		onCompleted: data => {
			setHelmet(
				<Helmet>
					<title>rateit | {data.getEntity.name}</title>
					<meta
						name="description"
						content={`Viewing information on ${data.getEntity.name}`}
					/>
				</Helmet>
			);
		}
	});
	const [helmet, setHelmet] = useState<any>(null);

	useEffect(() => {
		if (!viewed) {
			setViewed(true);
			updateEntityViews({
				variables: { entityId: Number(entityId), viewCount: 1 }
			});
		}
	}, [entityId, updateEntityViews, viewed]);

	const onStartReview = () => {
		if (!userId) {
			history.push(
				'/login?redirect=entity-' + entityId + '&reviewing=true'
			);
		} else {
			getHasReviewed({
				variables: { entityId: Number(entityId), userId: userId }
			});
			setCreatingReview(true);
		}
	};

	useEffect(() => {
		StartReview.on('STARTED_REVIEW', room => onStartReview());

		return () => {
			StartReview.off('STARTED_REVIEW');
		};
	}, []);

	useEffect(() => {
		StartReview.on('ENDED_REVIEW', review => {
			setCreatingReview(false);
			setSubmittedReview(review);
			getHasReviewed();
		});

		return () => {
			StartReview.off('ENDED_REVIEW');
		};
	}, []);

	useEffect(() => {
		StartReview.on('CANCEL_REVIEW', x => {
			setCreatingReview(false);
		});

		return () => {
			StartReview.off('CANCEL_REVIEW');
		};
	}, []);

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			{helmet !== null && helmet}
			<Navbar />
			<div className="mb-auto mt-2 m-auto lg:w-4/5 w-full lg:p-8 p-2">
				{loading && <LoadingCircle loading={true} />}
				{!loading && data && (
					<div className="flex-col bg-white border border-gray-100 shadow-sm p-4">
						{!parseEntity(data.getEntity as any).hasOwnProperty(
							'bio'
						) && (
							<div className="bg-yellow-500 mb-4 text-sm text-white p-3 rounded-lg">
								<p className="leading-loose font-bold">
									<FontAwesomeIcon
										icon={faQuestionCircle}
										className="mr-2"
									/>
									Note: This profile does not currently have
									very much information. If you would like us
									to prioritize updating this profile please{' '}
									<span className="underline font-bold cursor-pointer">
										click here
									</span>
									.{' '}
								</p>
							</div>
						)}

						<div className="flex justify-between items-baseline">
							<h1 className="text-2xl text-primary">
								{data?.getEntity.name}{' '}
							</h1>
							<Suspense fallback={<></>}>
								{((userId && query.get('reviewing')) ||
									!userId) && (
									<button
										onClick={onStartReview}
										className="sm:flex hidden p-4 mt-4 font-medium rounded-md bg-green-500 text-white h-10 items-center w-48 justify-center text-sm hover:opacity-90 transition"
									>
										Leave a review{' '}
										<FontAwesomeIcon
											icon={faPlusSquare}
											className="ml-2"
										/>
									</button>
								)}
							</Suspense>
						</div>
						<p className="opacity-50">
							{data.getEntity.views} Views
						</p>
						<p className="font-medium opacity-50 uppercase mt-4">
							{parseEntity(data.getEntity as any).hasOwnProperty(
								'field'
							) && parseEntity(data.getEntity as any)['field']}
						</p>
						<p className="font-normal leading-loose mt-4">
							{parseEntity(data.getEntity as any).hasOwnProperty(
								'bio'
							) && parseEntity(data.getEntity as any)['bio']}
						</p>
						{data.getEntity.type === 'Schools' && (
							<School
								school={
									returnIdentifiedContent(
										data.getEntity as any
									) as any
								}
							/>
						)}
						{data.getEntity.type === 'Movies' && (
							<Movie
								movie={
									returnIdentifiedContent(
										data.getEntity as any
									) as any
								}
								title={data.getEntity.name}
							/>
						)}
						<span className="inline-flex items-center justify-center px-3 py-3 text-md mt-4 font-bold leading-none text-red-100 bg-blue-600 rounded-full">
							{data.getEntity.type}
						</span>
						<Link
							to={`/support/entity-incorrect?entity=${data.getEntity.id}`}
							className="underline block mt-4 opacity-50"
						>
							Seeing false information?
						</Link>
					</div>
				)}
				{creatingReview &&
					hasReviewedLoading.data?.hasReviewed !== undefined &&
					data && (
						<NewReview
							entityId={data.getEntity.id}
							entityType={data.getEntity.type}
							entityName={data.getEntity.name}
							hasReviewed={hasReviewedLoading.data.hasReviewed}
						/>
					)}
				{data && (
					<Reviews
						review={submittedReview}
						entityId={data.getEntity.id}
						entityName={data.getEntity.name}
					/>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default EntityBase;
