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
				<div className="flex flex-col lg:justify-center lg:items-center justify-start mt-24">
					<IconLogo width="75px" />
					<p className="text-2xl">rateit</p>
				</div>
				<h1 className="lg:text-center mt-8 lg:text-5xl text-3xl font-bold">
					What makes us so unique?
				</h1>
				<p
					className="lg:text-xl text-lg lg:text-center xl:w-2/4 lg:w-3/4 w-full mt-12 m-auto mb-12"
					style={{ lineHeight: '2.5rem' }}
				>
					<span className="text-primary">Rateit</span> is a place
					where you can find information and ratings from a plethra of
					categories on different things like people, movies, products
					and more. Here at{' '}
					<span className="text-primary">rateit</span> we believe in
					promoting the spread of authentic and truthful information
					in a free environment. We hope to make our platform an
					environment in which you can trust to find accurate and
					reliable information from a positive and trustworthy
					community.
				</p>
			</div>
			<div className="p-4 mb-auto mt-14">
				<div className="max-w-screen-xl m-auto mb-20">
					<h2 className="font-bold text-3xl">Our Team</h2>
					<div className="bg-primary p-8 rounded-lg mt-8 flex lg:flex-row flex-col justify-between items-center">
						<h4 className="text-white text-2xl">
							Looking to join our team?
						</h4>
						<a
							href="mailto:corporate@yourateit.io"
							rel="noreferrer"
							target="_blank"
							className="p-4 text-center rounded-md bg-white border border-primary text-black flex items-center h-2/4 mt-4 justify-center font-medium text-sm hover:opacity-40 transition uppercase tracking-widest"
						>
							Contact
						</a>
					</div>
					<div className="flex flex-wrap">
						<div className="bg-white shadow-lg border border-gray-200 p-4 mt-12 rounded-md lg:w-1/3 w-full  flex flex-col justify-between">
							<div className="flex flex-col justify-between">
								<LazyLoadImage
									alt="Nathaniel Richards on rateit"
									effect="blur"
									className="rounded-md"
									style={{
										height: '350px',
										width: '100%',
										objectFit: 'cover',
										objectPosition: 'center'
									}}
									src="https://cdn.yourateit.io/images/about/nathaniel_richards.jpeg"
								/>
								<h3 className="font-bold text-lg mt-4">
									Nathaniel Richards
								</h3>
								<p className="opacity-50 font-medium my-2">
									Chief Executive Officer
								</p>
								<p className="leading-loose">
									Software engineer and creator of rateit,
									Nathaniel Richards spends the majority of
									his time cobbling code ⚒️
								</p>
							</div>
							<a
								href="https://nathanielrichards.dev"
								rel="noreferrer"
								target="_blank"
								className="p-4 rounded-md bg-white border border-primary text-black h-10 flex items-center w-full mt-4 justify-center font-medium text-sm hover:opacity-40 transition uppercase tracking-widest"
							>
								Visit Website
							</a>
						</div>
						<div className="bg-white shadow-lg border border-gray-200 p-4 mt-12 rounded-md lg:w-1/3 w-full lg:ml-8 flex flex-col justify-between">
							<div className="flex flex-col">
								<LazyLoadImage
									alt="Marco Chavez on rateit"
									effect="blur"
									style={{
										height: '350px',
										width: '100%',
										objectFit: 'cover',
										objectPosition: 'center'
									}}
									className="rounded-md"
									src="https://cdn.yourateit.io/images/about/marco_chavez.jpg"
								/>
								<h3 className="font-bold text-lg mt-4">
									Marco Chavez
								</h3>
								<p className="opacity-50 font-medium my-2">
									Software Engineer
								</p>
								<p className="leading-loose">
									A software engineer and excellent front end
									developer, and previous mentor at Woz U.
								</p>
							</div>

							<a
								href="https://www.marcochavez.info/"
								rel="noreferrer"
								target="_blank"
								className="p-4 rounded-md bg-white border border-primary text-black h-10 flex items-center w-full mt-4 justify-center font-medium text-sm hover:opacity-40 transition uppercase tracking-widest"
							>
								Visit Website
							</a>
						</div>
					</div>

					<h2 className="font-bold text-3xl mt-12">
						Our Core Values
					</h2>
					<p className="leading-8 mt-8 text-lg">
						We are dedicated to bringing you the information you
						need without hiccups and will work hard to make reading
						reviews on rateit something you can trust. Along with
						reading other user's reviews, you can trust our team of
						verified reviewers to get you a guaranteed organic
						opinion.
					</p>
					<div className="flex justify-center items-center">
						<LazyLoadImage
							alt="Our core values"
							effect="blur"
							className="mb-8 w-2/3 mt-12"
							src="https://cdn.yourateit.io/images/about/about-hero.svg"
						/>
					</div>
				</div>
			</div>
			<div className="w-screen bg-gray-200 h-52 flex flex-col justify-center items-center">
				<h1 className="text-center font-bold text-2xl">
					Have a question for us?
				</h1>

				<a
					href="https://twitter.com/rateitio"
					target="_blank"
					rel="noreferrer"
					className="p-4 mt-8 rounded-md bg-green-500 text-white h-10 flex
						items-center w-40 justify-center font-medium text-sm
						hover:opacity-90 transition"
				>
					Get in touch
				</a>
			</div>
			<Footer />
		</div>
	);
};

export default About;
