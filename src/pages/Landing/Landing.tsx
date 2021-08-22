import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import { Body } from './Body';
import Hero from './Hero';

const Landing = () => {
	return (
		<div className="min-h-screen overflow-hidden">
			<Navbar />
			<Hero />
			<Body />
			<Footer />
		</div>
	);
};

export default Landing;
