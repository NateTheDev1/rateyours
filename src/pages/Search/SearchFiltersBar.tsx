import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { faSlidersH, faSort } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from '../../components/Navbar/Navbar';
import { useGetCategoriesQuery } from '../../graphql';
import SearchFiltersModal from './SearchFiltersModal';

export const SearchFiltersBar = ({
	forReviews = false
}: {
	forReviews?: boolean;
}) => {
	const { data } = useGetCategoriesQuery({ skip: forReviews });
	const { entityId }: { entityId?: string } = useParams();

	const query = useQuery().get('query') ?? '';
	const filterQuery = useQuery();
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState(query);

	const [filters, setFilters] = useState({
		minRating: filterQuery.get('minRating') ?? 1,
		maxRating: filterQuery.get('maxRating') ?? 5,
		categoryRestriction: filterQuery.get('categoryRestriction') ?? 'None'
	});

	const [editingFilters, setEditingFilters] = useState({
		open: false,
		editing: 'FILTERS'
	});

	const onSearch = (e?: FormEvent) => {
		if (e) {
			e.preventDefault();
		}

		if (!forReviews) {
			if (query.length < 1) {
				return;
			}
		}

		let url = '';
		if (!forReviews) {
			url = '/search/results/?query=' + searchQuery;
		}

		if (forReviews && entityId) {
			url = '/search/results/entity/' + entityId + '/reviews';

			if (searchQuery.length > 0) {
				url += '?query=' + searchQuery;
			}

			if (filters.minRating !== 1) {
				url += `${searchQuery.length > 0 ? '&' : '?'}minRating=${
					filters.minRating
				}`;
			}

			if (filters.maxRating !== 5) {
				url += `${
					searchQuery.length > 0 && filters.minRating !== 1
						? '&'
						: '?'
				}maxRating=${filters.maxRating}`;
			}
		}

		if (!forReviews) {
			if (filters.minRating !== 1) {
				url += `&minRating=${filters.minRating}`;
			}

			if (filters.maxRating !== 5) {
				url += `&maxRating=${filters.maxRating}`;
			}
		}

		if (!forReviews) {
			if (filters.categoryRestriction !== 'None') {
				url += `&categoryRestriction=${filters.categoryRestriction}`;
			}
		}

		history.push(url);
	};

	return (
		<div className="w-full">
			<div className="search-form flex items-center bg-gray-200 rounded-xl px-4 py-4 mt-8 w-full">
				<FontAwesomeIcon icon={faSearch} className="mr-2 opacity-50" />
				<form className="flex items-center w-full" onSubmit={onSearch}>
					<input
						type="text"
						required={forReviews !== true}
						onChange={e => setSearchQuery(e.target.value)}
						value={searchQuery}
						placeholder={
							forReviews
								? 'Search for reviews'
								: 'Search for something'
						}
						className="bg-gray-200 text-lg outline-none font-medium w-full"
					/>
				</form>
			</div>
			<button
				onClick={() => onSearch()}
				type="submit"
				className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex items-center w-full justify-center font-medium text-sm hover:opacity-90 transition"
			>
				Search
			</button>
			<div className="flex justify-between">
				<div
					className="border border-gray-400 mt-8 p-4 w-almost rounded-md text-center cursor-pointer hover:opacity-50 transition"
					onClick={() =>
						setEditingFilters({
							open: !editingFilters.open,
							editing: 'FILTERS'
						})
					}
				>
					<h2 className="font-md text-md">
						<FontAwesomeIcon
							icon={faSlidersH}
							className="mr-2 text-primary"
						/>
						Filters
					</h2>
				</div>
				<div
					className="border border-gray-400 mt-8 p-4 w-almost rounded-md text-center cursor-pointer hover:opacity-50 transition"
					onClick={() =>
						setEditingFilters({
							open: !editingFilters.open,
							editing: 'SORT'
						})
					}
				>
					<h2 className="font-md text-md">
						<FontAwesomeIcon
							icon={faSort}
							className="mr-2 text-primary"
						/>
						Sort
					</h2>
				</div>
			</div>
			<SearchFiltersModal
				open={editingFilters as any}
				setOpen={setEditingFilters as any}
				filters={filters}
				setFilters={setFilters}
				data={data}
				onSearch={onSearch}
				forReviews={forReviews}
			/>
		</div>
	);
};
