import { Footer } from '../../components/Footer/Footer';
import { Navbar, useQuery } from '../../components/Navbar/Navbar';
import { useSearchQuery } from '../../graphql';
import { SearchFiltersBar } from './SearchFiltersBar';
import { SearchResult } from './SearchResult';

export const SearchResults = () => {
	let query = useQuery();
	const { data, loading, error } = useSearchQuery({
		variables: {
			filters: {
				minRating: Number(query.get('minRating') ?? 0),
				maxRating: Number(query.get('maxRating') ?? 5),
				sortyBy: 'Best Match'
			},
			query: query.get('query') ?? 'a'
		}
	});

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className="categories mb-auto px-20">
				<h2 className="font-bold text-xl mt-10 mb-8">Search</h2>
				<SearchFiltersBar />
				<hr className="mt-4" />
				{data && data.search.reviews.length > 0 && (
					<h2 className="font-bold text-xl mt-10 mb-8">
						There{' '}
						{data && data.search.reviews.length > 1 ? 'are' : 'is'}{' '}
						<span className="text-primary">
							{data?.search.reviews.length}
						</span>{' '}
						result{data && data.search.reviews.length > 1 && 's'}{' '}
						for{' '}
						<span className="text-primary">
							'{query.get('query')}'
						</span>
					</h2>
				)}
				{data && data.search.reviews.length === 0 && (
					<h2 className="font-bold text-xl mt-14 mb-8">
						There are <span className="text-primary">0</span>{' '}
						results for{' '}
						<span className="text-primary">
							'{query.get('query')}'
						</span>
					</h2>
				)}
				<div
					className="max-h-96 flex justify-between"
					style={{ overflow: 'scroll' }}
				>
					{data?.search.reviews.map((review, key) => (
						<SearchResult review={review} key={key} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};
