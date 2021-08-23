import { Link } from 'react-router-dom';
import { LogoLight } from '../business/Logo/LogoLight';
import './Footer.scss';

export const Footer = () => {
	return (
		<footer className="bg-darkgray">
			<div className="max-w-screen-lg m-auto p-24 flex">
				<div className="flex flex-col">
					<LogoLight width="75px" height="unset" />
					<p className="text-white opacity-50 mt-4 font-medium">
						&copy; rateit.
					</p>
					<p className="text-white text-sm mt-12 font-normal italic">
						Phone: +1 231 - 215 - 4678
					</p>
					<p className="text-white text-sm mt-4 font-normal italic">
						Email: corporate@rateit.com
					</p>
				</div>
				<div className="text-white ml-24 flex flex-col">
					<p className="font-bold text-xs mb-4">PRODUCT</p>
					<Link to="/signup" className="text-xs underline mb-4">
						Get Started
					</Link>
					<Link to="/login" className="text-xs underline mb-4">
						Login
					</Link>
				</div>
				<div className="text-white ml-24 flex flex-col">
					<p className="font-bold text-xs mb-4">COMPANY</p>
					<Link to="/signup" className="text-xs underline mb-4">
						Email Us
					</Link>
					<Link to="/support" className="text-xs underline mb-4">
						Support
					</Link>
					<Link to="/about" className="text-xs underline mb-4">
						About
					</Link>
				</div>
			</div>
		</footer>
	);
};
