import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { Navbar, useQuery } from '../../components/Navbar/Navbar';
import { useSearchQuery } from '../../graphql';
import { SearchFiltersBar } from './SearchFiltersBar';
import { SearchResult } from './SearchResult';
import { SearchResultEntity } from './SearchResultEntity';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const SearchResults = () => {
	let query = useQuery();
	const { data, loading, refetch } = useSearchQuery({
		variables: {
			filters: {
				minRating: Number(query.get('minRating') ?? 0),
				maxRating: Number(query.get('maxRating') ?? 5),
				sortyBy: 'Best Match',
				categoryRestriction:
					query.get('categoryRestriction') ?? undefined
			},
			query: query.get('query') ?? 'a'
		},
		onCompleted: res => {
			generatePages();
		}
	});
	const [page, setPage] = useState(1);
	const [pages, setPages] = useState([1]);

	const generatePages = () => {
		if (data) {
			const pageArr = [];
			const pages = data.search.total / 24;
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
							sortyBy: 'Best Match',
							categoryRestriction:
								query.get('categoryRestriction') ?? undefined
						},
						query: query.get('query') ?? 'a'
					});
				} else {
					refetch({
						filters: {
							minRating: Number(query.get('minRating') ?? 0),
							maxRating: Number(query.get('maxRating') ?? 5),
							sortyBy: 'Best Match',
							categoryRestriction:
								query.get('categoryRestriction') ?? undefined
						},
						query: query.get('query') ?? 'a',
						first: data.search.reviews.length
					});
				}
			}
		}
	};

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Helmet>
				<title>rateit | Search results for {query.get('query')}</title>
				<meta
					name="description"
					content="Checkout categories on rate it."
				/>
			</Helmet>

			<Navbar />
			<div className="categories px-4 mb-auto sm:px-12 lg:px-20 md:px-16 pb-20">
				<h2 className="font-bold text-xl mt-10 mb-8">Search</h2>
				<SearchFiltersBar />
				<hr className="mt-4" />
				{data && (
					<h2 className="font-bold text-xl mt-10 mb-8">
						Categorical Results (
						{data && data.search.entities.length})
					</h2>
				)}
				{data && data.search.entities.length > 0 && (
					<div className="mt-8 flex overflow-x-scroll overflow-y-hidden">
						{data?.search.entities.map((entity, key) => (
							<SearchResultEntity entity={entity} key={key} />
						))}
					</div>
				)}
				{data && data.search.reviews.length > 0 && (
					<div>
						<h2 className="font-bold text-xl mt-10 mb-8">
							There{' '}
							{data && data.search.reviews.length > 1
								? 'are'
								: 'is'}{' '}
							<span className="text-primary">
								{data?.search.total}
							</span>{' '}
							review
							{data && data.search.total > 1 && 's'} for{' '}
							<span className="text-primary">
								'{query.get('query')}'
							</span>
						</h2>

						{pages.length > 1 && (
							<div className="flex items-center mt-2 mb-8">
								<h2 className="font-light text-lg mr-4">
									Page
								</h2>
								{pages.map((num, key) => (
									<p
										onClick={() => setPagination(num)}
										className={`font-light text-lg mr-2 cursor-pointer ${
											num === page && 'underline'
										}`}
										key={key}
									>
										{num}
									</p>
								))}
							</div>
						)}
					</div>
				)}

				{data && data.search.reviews.length === 0 && (
					<h2 className="font-bold text-xl mt-14 mb-8">
						There are <span className="text-primary">0</span>{' '}
						reviews for{' '}
						<span className="text-primary">
							'{query.get('query')}'
						</span>
					</h2>
				)}
				{data && data.search.reviews.length > 0 && (
					<div className="flex flex-wrap overflow-x-hidden">
						{data?.search.reviews.map((review, key) => (
							<SearchResult review={review} key={key} />
						))}
					</div>
				)}

				{loading && <LoadingCircle loading={true} />}
			</div>
			<Footer />
		</div>
	);
};

export default SearchResults;
