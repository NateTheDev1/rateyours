import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { useGetCategoriesQuery } from '../../graphql';
import { CategoryCard } from './CategoryCard';

const Categories = () => {
	const { data, loading } = useGetCategoriesQuery();

	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className="categories mb-auto mt-2 max-w-5xl m-auto">
				<h2 className="font-bold text-2xl mt-14 text-center">
					Search from over {data?.getCategories.length ?? '20'}{' '}
					categories to get information about anything
				</h2>
				<Link to="/categories/suggest">
					<p className="text-center mt-4 cursor-pointer underline opacity-60">
						Don't see the category you were looking for?{'  '}
						<FontAwesomeIcon icon={faQuestionCircle} />
					</p>
				</Link>
				<hr className="mt-6 mb-6" />
				{loading && <LoadingCircle loading={true} />}
				<div className="flex flex-wrap items-center justify-evenly">
					{data?.getCategories.map((category, key) => (
						<CategoryCard key={key} {...category} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};
export default Categories;
