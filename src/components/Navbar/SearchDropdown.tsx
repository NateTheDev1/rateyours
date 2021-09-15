import {
	useDeleteSearchHistoryMutation,
	useGetPopularSearchesQuery,
	useGetSearchHistoryQuery
} from '../../graphql';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../business/Loading/LoadingCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/pro-regular-svg-icons';
import { UserSelectors } from '../../redux/User/selectors';

export const SearchDropdown = () => {
	const id = UserSelectors.useSelectUserId();
	const { data, loading } = useGetPopularSearchesQuery({
		fetchPolicy: 'network-only'
	});
	const { data: searchHistory } = useGetSearchHistoryQuery({
		variables: { id: id! },
		skip: !id
	});
	const [clearHistory] = useDeleteSearchHistoryMutation();

	return (
		<div className="w-full bg-white p-4 z-10 border-black border-2">
			<h4 className="font-medium opacity-50 mb-4">Trending Searches</h4>
			{loading && <LoadingCircle loading={true} />}
			<div className="flex flex-col">
				{data &&
					data.getPopularSearches.map((search, key) => (
						<div
							className="flex cursor-pointer justify-between items-center my-1 hover:opacity-50 transition"
							key={key}
						>
							<Link to={'/search/results?query=' + search!.query}>
								{search?.query}
							</Link>
							<FontAwesomeIcon icon={faHistory} />
						</div>
					))}
			</div>
			{loading && <LoadingCircle loading={true} />}

			{id && (
				<>
					<hr className="mt-4" />
					<div className="flex justify-between items-center mt-4 mb-4">
						<h4 className="font-medium opacity-50">
							Search History
						</h4>
						<p
							className="underline text-sm cursor-pointer"
							onClick={() =>
								clearHistory({ variables: { id: id! } })
							}
						>
							Clear
						</p>
					</div>
					<div className="flex flex-col">
						{searchHistory &&
							searchHistory.getSearchHistory.map(
								(search, key) => (
									<div
										className="flex cursor-pointer justify-between items-center my-1 hover:opacity-50 transition"
										key={key}
									>
										<Link
											to={
												'/search/results?query=' +
												search!.query
											}
										>
											{search?.query}
										</Link>
										<FontAwesomeIcon icon={faHistory} />
									</div>
								)
							)}
					</div>
				</>
			)}
		</div>
	);
};

export default SearchDropdown;
