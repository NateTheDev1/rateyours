import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IconLogo } from '../../components/business/Logo/IconLogo';

const About = () => {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Helmet>
				<title>Rateit | About Us</title>
			</Helmet>
			<Navbar />
			<div className="w-screen bg-gray-100 p-8">
				<div className="flex flex-col lg:justify-center lg:items-center justify-start mt-20">
					<IconLogo width="75px" />
					<p className="text-2xl">rateit</p>
				</div>
				<h1 className="lg:text-center mt-8 lg:text-5xl text-3xl font-bold">
					What makes us so unique?
				</h1>
				<p
					className="lg:text-xl text-lg lg:text-center mt-12 lg:w-2/4 md:w-3/4 w-full m-auto mb-12"
					style={{ lineHeight: '2.5rem' }}
				>
					<span className="text-primary">Rateit</span> is a place
					where you can find information and ratings from a plethra of
					categories on different things like people, movies, products
					and more. Here at{' '}
					<span className="text-primary">rateit</span> we beleive in
					promoting the spread of authentic and truthful information
					in a free environment. We hope to make our platform an
					environment in which you can trust to find accurate and
					reliable information from a positive and trustworthy
					community.
				</p>
			</div>
			<div className="lg:p-0 p-4 mb-auto mt-14">
				<div className="max-w-screen-xl m-auto mb-20">
					<h2 className="font-bold text-3xl">Our Team</h2>
					<div className="flex justify-between">
						<div className="bg-white shadow-lg border border-gray-200 p-4 mt-12 rounded-md lg:w-1/3 w-full md:w-3/4">
							<LazyLoadImage
								alt="Nathaniel Richards on rateit"
								effect="blur"
								className="rounded-md"
								src="https://scontent.fdet1-2.fna.fbcdn.net/v/t1.6435-9/120097963_2795422830691922_9072172055537035422_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=v4b-jNaO5V8AX-pO8UY&_nc_ht=scontent.fdet1-2.fna&oh=7192b3c495532d0a750ee316e6b67799&oe=6167107E"
							/>
							<h3 className="font-bold text-lg mt-4">
								Nathaniel Richards
							</h3>
							<p className="leading-loose">
								Software engineer and creator of rateit
								Nathaniel Richards spends the majority of his
								time{' '}
								<span className="text-red-500">
									cobbling code{' '}
								</span>
								⚒️.
							</p>
							<a
								href="https://nathanielrichards.dev"
								rel="noreferrer"
								target="_blank"
								className="p-4 rounded-md bg-green-500 text-white h-10 flex items-center w-full mt-4 justify-center font-medium text-sm hover:opacity-90 transition"
							>
								Visit Website
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
