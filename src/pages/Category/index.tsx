import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory, useParams } from 'react-router';
import { LoadingCircle } from '../../components/business/Loading/LoadingCircle';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { useGetCategoryQuery } from '../../graphql';
import { SearchResultEntity } from '../Search/SearchResultEntity';

const CategoryPage = () => {
	const history = useHistory();
	const { id }: { id: string } = useParams();
	const { data, loading } = useGetCategoryQuery({
		variables: {
			id: Number(id!)
		},
		onCompleted: data => {
			setHelmet(
				<Helmet>
					<title>rateit | {data.getCategory.title}</title>
					<meta
						name="description"
						content={`Explor the ${data.getCategory.title} category. ${data.getCategory.caption}`}
					/>
				</Helmet>
			);
		},
		onError: () => {
			history.goBack();
		}
	});
	const [helmet, setHelmet] = useState<any>(null);

	return (
		<div>
			<div className="min-h-screen overflow-hidden flex flex-col">
				{helmet !== null && helmet}
				<Navbar />
				{data && data.getCategory.banner && (
					<div
						className="w-screen"
						style={{
							backgroundImage: `url(${data.getCategory.banner})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							height: '300px'
						}}
					></div>
				)}
				<div className=" px-4 mb-auto sm:px-12 lg:px-20 md:px-16 pb-20">
					{loading && <LoadingCircle loading={true} />}
					{!loading && data && (
						<>
							<h2 className="font-bold text-xl mt-10 mb-8">
								Explore {data.getCategory.title}
							</h2>
							<p className="leading-loose">
								{data.getCategory.caption}
							</p>
							<hr className="mt-4" />
							<h3 className="font-bold text-lg mt-10 mb-8">
								Explore The Top 10 Most Viewed Profiles In{' '}
								<span className="text-primary">
									{data.getCategory.title}
								</span>
							</h3>
							<hr className="mt-4" />
							<div className="flex overflow-y-scroll mt-8">
								{data.getCategory.topTen.mostViewed.map(
									(entity, key) => (
										<SearchResultEntity
											showTag={false}
											entity={entity}
											key={key}
										/>
									)
								)}
							</div>
							<h3 className="font-bold text-lg mb-8 mt-20">
								Explore The Top 10 Most Recently Added Profiles
								In{' '}
								<span className="text-primary">
									{data.getCategory.title}
								</span>
							</h3>
							<hr className="mt-4" />
							<div className="flex overflow-y-scroll mt-8">
								{data.getCategory.topTen.mostRecent.map(
									(entity, key) => (
										<SearchResultEntity
											showTag={false}
											entity={entity}
											key={key}
										/>
									)
								)}
							</div>
							<hr className="mt-4" />
						</>
					)}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default CategoryPage;