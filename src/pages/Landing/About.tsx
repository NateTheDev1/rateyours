import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

const About = () => {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className="flex flex-col items-center justify-center max-w-screen-lg m-auto lg:p-0 p-4 mb-auto mt-14">
				<div>
					<LazyLoadImage
						src=""
						alt=""
						effect="blur"
						style={{
							height: '300px',
							width: '100vw',
							objectFit: 'cover'
						}}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
