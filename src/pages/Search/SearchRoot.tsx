import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { TextInput } from '../../components/Inputs/TextInput';
import { Navbar } from '../../components/Navbar/Navbar';
import { useGetCategoriesQuery } from '../../graphql';
import { CategoryCard } from './CategoryCard';

const SearchRoot = () => {
	const { data, loading } = useGetCategoriesQuery();

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className="categories mb-auto mt-2 m-auto lg:w-4/5 w-full lg:p-8 p-2 flex justify-evenly lg:flex-row flex-col">
				<div className="lg:w-2/5 w-full shadow-md border border-gray-200 lg:p-8 p-4 overflow-scroll">
					<h2 className="font-bold text-2xl">Search</h2>
					<p className=" font-light text-sm mt-2">
						Try an advanced search
					</p>
					<div className="search-form flex items-center bg-gray-200 rounded-xl px-4 py-4 mt-8 w-full">
						<FontAwesomeIcon icon={faSearch} className="mr-2" />

						<form
							className="flex items-center"
							style={{ width: '100%' }}
						>
							<input
								type="text"
								style={{ width: '100%' }}
								placeholder="Search for something"
								className="bg-gray-200 text-lg outline-none font-medium"
							/>
						</form>
					</div>
					<button
						type="submit"
						className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex items-center w-full justify-center font-medium text-sm hover:opacity-90 transition"
					>
						Search
					</button>

					<h4 className="mt-8 font-medium text-lg">Filters</h4>
					<p className="mt-2 font-light">Rating Threshold</p>
					<TextInput
						label="Min"
						className="mt-3"
						type="number"
						value="0"
						name="rating-min"
						setValue={() => {}}
					/>
					<TextInput
						label="Max"
						className="mt-3"
						type="number"
						value="5"
						name="rating-max"
						setValue={() => {}}
					/>
					<p className="font-light mt-8">Sort By</p>
					<select className="w-full mt-2 bg-gray-200 p-4 rounded-md focus:outline-none">
						<option>Best Match</option>
						<option>Most Viewed</option>
					</select>
					{data && (
						<>
							<p className="font-light mt-8">
								Category Restriction
							</p>
							<select className="w-full mt-2 bg-gray-200 p-4 rounded-md focus:outline-none">
								<option>None</option>
								{data &&
									data.getCategories.map((category, key) => (
										<option key={key}>
											{category.title}
										</option>
									))}
							</select>
						</>
					)}
				</div>
				<div className="lg:w-3/5 w-full shadow-md border border-gray-200 lg:p-8 p-4">
					<h2 className="font-bold text-2xl">
						Or select a category ({data?.getCategories.length})
					</h2>
					<p className=" font-light text-sm mt-2">
						Select a category to start a more specific search
					</p>

					<hr className="mt-4" />
					{loading && <LoadingCircle loading={true} />}
					<div
						className="items-center justify-evenly lg:flex-row flex flex-wrap overflow-scroll overflow-x-hidden mt-8"
						style={{ maxHeight: '40rem' }}
					>
						{data?.getCategories.map((category, key) => (
							<CategoryCard key={key} {...category} />
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SearchRoot;
