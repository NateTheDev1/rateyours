import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';

import { Footer } from '../../components/Footer/Footer';
import { Navbar, useQuery } from '../../components/Navbar/Navbar';
import { useGetEntityQuery, useSearchReviewsQuery } from '../../graphql';
import { SearchFiltersBar } from '../Search/SearchFiltersBar';
import Review from './Review';

const AdvancedReviewsPage = () => {
	const { entityId }: { entityId: string } = useParams();
	const query = useQuery();

	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([1]);

	const [helmet, setHelmet] = useState<any>(null);
	const history = useHistory();

	const { data, loading } = useGetEntityQuery({
		variables: { id: Number(entityId) },
		onError: () => {
			history.push('/search');
		},
		onCompleted: data => {
			setHelmet(
				<Helmet>
					<title>rateit | Reviews about {data.getEntity.name}</title>
					<meta
						name="description"
						content={`Viewing reviews about ${data.getEntity.name}`}
					/>
				</Helmet>
			);
		}
	});

	const {
		data: getReviewsData,
		loading: getReviewsLoading,
		refetch
	} = useSearchReviewsQuery({
		variables: {
			filters: {
				minRating: Number(query.get('minRating') ?? 0),
				maxRating: Number(query.get('maxRating') ?? 5),
				sortBy: 'DESC'
			},
			entityId: Number(entityId),
			query: query.get('query') ? query.get('query') : (undefined as any)
		},
		onCompleted: () => {
			generatePages();
		}
	});

	const generatePages = () => {
		if (getReviewsData) {
			const pageArr = [];
			const pages = getReviewsData.searchReviews.total / 50;
			for (let i = 0; i < pages; i++) {
				pageArr.push(i + 1);
			}
			setPages(pageArr);
		}
	};

	const setPagination = (num: number) => {
		if (num !== page) {
			setPage(num);

			if (data) {
				if (!(pages.length > 1)) {
					refetch({
						filters: {
							minRating: Number(query.get('minRating') ?? 0),
							maxRating: Number(query.get('maxRating') ?? 5),
							sortBy: 'DESC'
						},
						entityId: Number(entityId),
						query: query.get('query')
							? query.get('query')
							: (undefined as any)
					});
				} else {
					refetch({
						filters: {
							minRating: Number(query.get('minRating') ?? 0),
							maxRating: Number(query.get('maxRating') ?? 5),
							sortBy: 'DESC'
						},
						entityId: Number(entityId),
						query: query.get('query')
							? query.get('query')
							: (undefined as any)
					});
				}
			}
		}
	};

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			{helmet !== null && helmet}
			<Navbar />
			<div className="mb-auto mt-2 m-auto lg:w-4/5 w-full lg:p-8 p-2">
				<div
					className="flex items-center mb-6 cursor-pointer hover:opacity-80"
					onClick={() =>
						history.push(
							'/search/results/entity/' + data?.getEntity.id
						)
					}
				>
					<FontAwesomeIcon icon={faArrowLeft} />
					<p className="ml-2 font-sans text-xs">Go back</p>
				</div>
				<h3 className="font-light font-sans text-2xl">
					Reading reviews about{' '}
					<span className="font-bold text-primary">
						{data?.getEntity.name}
					</span>
				</h3>
				<hr className="opacity-50 mt-4" />
				<div className="filters">
					<SearchFiltersBar forReviews={true} />
				</div>
				{loading ||
					(getReviewsLoading && <LoadingCircle loading={true} />)}
				<h4 className="font-light text-sm mt-8">
					Viewing {getReviewsData?.searchReviews.reviews.length} of{' '}
					{getReviewsData?.searchReviews.total} Review
					{getReviewsData &&
						getReviewsData.searchReviews.total > 1 &&
						's'}
				</h4>
				{pages.length > 1 && (
					<div className="flex items-center mt-2 mb-8">
						<h2 className="font-light text-lg mr-4">Page</h2>
						<div className="bg-gray-100 flex items-center">
							{pages.map((num, key) => (
								<div
									key={key}
									className={`py-2 px-5 border border-gray-300 cursor-pointer flex justify-center hover:opacity-50 transition ${
										num === page && 'bg-primary text-white'
									}`}
									onClick={() => setPagination(num)}
								>
									<p className={`font-light text-lg`}>
										{num}
									</p>
								</div>
							))}
						</div>
					</div>
				)}
				{getReviewsData && getReviewsData.searchReviews.total > 0 && (
					<div className="flex-col p-2">
						{getReviewsData.searchReviews.reviews.map(
							(review, key) => (
								<Review review={review as any} key={key} />
							)
						)}
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default AdvancedReviewsPage;
