import { Button, DialogActions, DialogContent, Slide } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { TextInput } from '../../components/Inputs/TextInput';

const SearchFiltersModal = ({
	open,
	setOpen,
	filters,
	setFilters,
	onSearch,
	data,
	forReviews
}: {
	open: { open: boolean; editing: 'FILTERS' | 'SORT' };
	setOpen: (val: any) => void;
	filters: any;
	setFilters: (val: any) => void;
	onSearch: () => void;
	data: any;
	forReviews: boolean;
}) => {
	return (
		<Dialog
			maxWidth="sm"
			fullWidth
			open={open.open}
			onClose={() => setOpen({ open: false, editing: 'FILTERS' })}
		>
			<DialogContent>
				<h3 className="font-medium text-xl">
					Editing search {open.editing.toLowerCase()}
				</h3>
				{open.editing === 'SORT' && (
					<div>
						<div className="flex items-center">
							<div className="w-full mt-6">
								<label className="font-light opacity-50 text-sm font-sans mb-2">
									Sort By
								</label>
								<select className="w-full bg-gray-200 p-4 rounded-md focus:outline-none">
									{forReviews ? (
										<>
											<option>Ratings Ascending</option>
											<option>Ratings Descending</option>
										</>
									) : (
										<>
											<option>Best Match</option>
											<option>Most Viewed</option>
										</>
									)}
								</select>
							</div>
						</div>
					</div>
				)}
				{open.editing === 'FILTERS' && (
					<div>
						<TextInput
							label="Rating Min"
							className="mt-6 w-50"
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
							className="mt-6 w-50"
							keyDown={e => e.key === 'Enter' && onSearch()}
							type="number"
							value={String(filters.maxRating)}
							name="rating-max"
							setValue={val => {
								setFilters({ ...filters, maxRating: val });
							}}
						/>
						{data && !forReviews && (
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
											(category: any, key: any) => (
												<option key={key}>
													{category.title}
												</option>
											)
										)}
								</select>
							</>
						)}
					</div>
				)}
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => setOpen({ open: false, editing: 'FILTERS' })}
				>
					Close
				</Button>
				<Button onClick={() => onSearch()}>Search</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SearchFiltersModal;
