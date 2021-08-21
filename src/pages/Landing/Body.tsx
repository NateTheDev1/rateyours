import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Body = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-screen-lg m-auto">
			<h2 className="font-bold text-3xl mt-14">
				Searh over 20 categories to get information about anything
			</h2>
			<div className="search-form flex items-center bg-gray-200 rounded-3xl px-4 py-4 mt-8 w-full">
				<FontAwesomeIcon icon={faSearch} className="mr-2" />

				<form className="flex items-center" style={{ width: '100%' }}>
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
				className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex items-center w-40 justify-center font-medium text-sm hover:opacity-90 transition"
			>
				Search
			</button>
		</div>
	);
};
