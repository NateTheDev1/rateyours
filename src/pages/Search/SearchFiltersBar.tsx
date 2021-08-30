import {
	faChevronCircleUp,
	faEdit,
	faSearch
} from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextInput } from '../../components/Inputs/TextInput';
import { useQuery } from '../../components/Navbar/Navbar';
import { useGetCategoriesQuery } from '../../graphql';

export const SearchFiltersBar = () => {
	const { data } = useGetCategoriesQuery();

	const query = useQuery().get('query') ?? '';
	const filterQuery = useQuery();
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState(query);
	const [changedFilters] = useState(
		filterQuery.get('maxRating') !== null ||
			filterQuery.get('minRating') !== null ||
			filterQuery.get('categoryRestriction') !== null
			? true
			: false
	);

	const [filters, setFilters] = useState({
		minRating: filterQuery.get('minRating') ?? 1,
		maxRating: filterQuery.get('maxRating') ?? 5,
		categoryRestriction: filterQuery.get('categoryRestriction') ?? 'None'
	});

	const [editingFilters, setEditingFilters] = useState(
		changedFilters ? true : false
	);

	const onSearch = (e?: FormEvent) => {
		if (e) {
			e.preventDefault();
		}

		if (query.length < 1) {
			return;
		}

		let url = '/search/results/?query=' + searchQuery;

		if (filters.minRating !== 1) {
			url += `&minRating=${filters.minRating}`;
		}

		if (filters.maxRating !== 5) {
			url += `&maxRating=${filters.maxRating}`;
		}

		if (filters.categoryRestriction !== 'None') {
			url += `&categoryRestriction=${filters.categoryRestriction}`;
		}

		history.push(url);
	};

	return (
		<div className="w-full">
			<div className="search-form flex items-center bg-gray-200 rounded-xl px-4 py-4 mt-8 w-full">
				<FontAwesomeIcon icon={faSearch} className="mr-2" />
				<form className="flex items-center w-full" onSubmit={onSearch}>
					<input
						type="text"
						required
						onChange={e => setSearchQuery(e.target.value)}
						value={searchQuery}
						placeholder="Search for something"
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
			<h2 className="font-md text-lg mt-8">
				Filters - {changedFilters ? 'Currently' : 'Not'} Applied{' '}
				{!editingFilters && (
					<FontAwesomeIcon
						icon={faEdit}
						onClick={() => setEditingFilters(true)}
						className="ml-2 cursor-pointer"
					/>
				)}
				{editingFilters && (
					<FontAwesomeIcon
						icon={faChevronCircleUp}
						onClick={() => setEditingFilters(false)}
						className="ml-2 cursor-pointer"
					/>
				)}
			</h2>
			{editingFilters && (
				<>
					<div>
						<div className="flex items-center">
							<TextInput
								label="Rating Min"
								className="mt-3 w-50"
								type="number"
								value={String(filters.minRating)}
								name="rating-min"
								keyDown={e => e.key === 'Enter' && onSearch()}
								setValue={val => {
									setFilters({ ...filters, minRating: val });
								}}
							/>
							<TextInput
								label="Rating Max"
								className="mt-3 w-50 ml-4"
								keyDown={e => e.key === 'Enter' && onSearch()}
								type="number"
								value={String(filters.maxRating)}
								name="rating-max"
								setValue={val => {
									setFilters({ ...filters, maxRating: val });
								}}
							/>
							<div className="w-full ml-5 mt-3">
								<label className="font-light opacity-50 text-sm font-sans mb-2">
									Sort By
								</label>
								<select className="w-full bg-gray-200 p-4 rounded-md focus:outline-none">
									<option>Best Match</option>
									<option>Most Viewed</option>
								</select>
							</div>
						</div>
						{data && (
							<>
								<p className="font-light mt-8">
									Category Restriction
								</p>
								<select
									value={filters.categoryRestriction}
									onChange={e => {
										setFilters({
											...filters,
											categoryRestriction: e.target.value
										});
									}}
									className="w-full mt-2 bg-gray-200 p-4 rounded-md focus:outline-none"
								>
									<option>None</option>
									{data &&
										data.getCategories.map(
											(category, key) => (
												<option key={key}>
													{category.title}
												</option>
											)
										)}
								</select>
							</>
						)}
					</div>
				</>
			)}
		</div>
	);
};
