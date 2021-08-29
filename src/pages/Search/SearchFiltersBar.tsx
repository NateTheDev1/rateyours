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

export const SearchFiltersBar = () => {
	const query = useQuery().get('query') ?? '';
	const filterQuery = useQuery();
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState(query);
	const [changedFilters, setChangedFilters] = useState(
		filterQuery.get('maxRating') !== undefined ||
			filterQuery.get('minRating') !== undefined
			? true
			: false
	);

	const [filters, setFilters] = useState({
		minRating: filterQuery.get('minRating') ?? 5,
		maxRating: filterQuery.get('maxRating') ?? 5
	});

	const [editingFilters, setEditingFilters] = useState(
		changedFilters ? true : false
	);

	const onSearch = (e: FormEvent) => {
		e.preventDefault();

		history.push('/search/results/?query=' + searchQuery);
	};

	return (
		<div className="w-full">
			<div className="search-form flex items-center bg-gray-200 rounded-xl px-4 py-4 mt-8 w-full">
				<FontAwesomeIcon icon={faSearch} className="mr-2" />

				<form className="flex items-center w-full" onSubmit={onSearch}>
					<input
						type="text"
						onChange={e => setSearchQuery(e.target.value)}
						value={searchQuery}
						placeholder="Search for something"
						className="bg-gray-200 text-lg outline-none font-medium w-full"
					/>
				</form>
			</div>
			<h2 className="font-md text-lg mt-8">
				Filters - {changedFilters ? '1' : '0'} Applied{' '}
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
								value="0"
								name="rating-min"
								setValue={() => {}}
							/>
							<TextInput
								label="Rating Max"
								className="mt-3 w-50 ml-4"
								type="number"
								value="5"
								name="rating-max"
								setValue={() => {}}
							/>
							<div className="w-full ml-5 mt-3">
								<label className="font-light opacity-50 text-sm  font-sans mb-2">
									Sorty By
								</label>
								<select className="w-full bg-gray-200 p-4 rounded-md focus:outline-none">
									<option>Best Match</option>
									<option>Most Viewed</option>
								</select>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
