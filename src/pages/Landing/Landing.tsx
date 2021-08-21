import { Navbar } from '../../components/Navbar/Navbar';
import { Body } from './Body';
import Hero from './Hero';

const Landing = () => {
	return (
		<div className=" min-h-screen">
			<Navbar />
			<Hero />
			<Body />
		</div>
	);
};

export default Landing;
