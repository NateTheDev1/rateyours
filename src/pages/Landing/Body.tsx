import { faSearch } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Body = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-screen-lg m-auto">
			<h2 className="font-bold text-3xl mt-14">
				Search over 20 categories to get information about anything
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
			<div className="about mt-36">
				<h2 className="font-bold text-4xl text-center mb-8">
					What are we all about?
				</h2>
				<p className="text-center leading-loose font-medium text-lg opacity-50 mb-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem dolorem sunt nisi ipsum sint laborum impedit
					nulla inventore debitis magnam similique nihil amet pariatur
					cum quas dignissimos voluptatem, eum minima fugit omnis
					libero sapiente. Consequuntur sint exercitationem voluptatem
					eveniet illum?
				</p>
			</div>
			<div className="stories flex flex-col mb-20 mt-12 justify-center items-center">
				<div className="story flex">
					<h4 className="font-medium text-primary text-2xl w-3/5">
						Truthful Information
					</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Explicabo facere aspernatur nihil magni asperiores
						ipsum facilis aut amet consectetur laudantium aliquid,
						ex natus deserunt. Fuga est praesentium molestias rem
						atque?
					</p>
				</div>
				<hr className="w-full my-14" />

				<div className="story flex">
					<h4 className="font-medium text-primary text-2xl w-3/5">
						Free Information
					</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Explicabo facere aspernatur nihil magni asperiores
						ipsum facilis aut amet consectetur laudantium aliquid,
						ex natus deserunt. Fuga est praesentium molestias rem
						atque?
					</p>
				</div>
				<hr className="w-full my-14" />

				<div className="story flex">
					<h4 className="font-medium text-primary text-2xl w-3/5">
						Creating Change
					</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Explicabo facere aspernatur nihil magni asperiores
						ipsum facilis aut amet consectetur laudantium aliquid,
						ex natus deserunt. Fuga est praesentium molestias rem
						atque?
					</p>
				</div>
			</div>
			<div className="sponsored mt-24">
				<h2 className="font-bold text-4xl text-center mb-8">
					Do you have a passion for spreading authentic information?
				</h2>
				<p className="text-center leading-loose font-medium text-md opacity-30 mb-8">
					Our Partner Program
				</p>
				<p className="text-center leading-loose font-medium text-lg opacity-50 mb-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem dolorem sunt nisi ipsum sint laborum impedit
					nulla inventore debitis magnam similique nihil amet pariatur
					cum quas dignissimos voluptatem, eum minima fugit omnis
					libero sapiente. Consequuntur sint exercitationem voluptatem
					eveniet illum?
				</p>
			</div>
		</div>
	);
};
