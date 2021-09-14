import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../graphql';
import { UserSelectors } from '../../redux/User/selectors';
import { LogoLight } from '../business/Logo/LogoLight';
import './Footer.scss';

export const Footer = () => {
	const loggedIn = UserSelectors.useSelectAuthenticated();
	const { data } = useGetCategoriesQuery();

	return (
		<footer className="bg-darkgray h-auto">
			<div className="max-w-screen-lg m-auto lg:p-24 p-8 flex lg:flex-row flex-col lg:items-start items-center">
				<div className="flex flex-col">
					<div className="lg:flex lg:justify-start lg:-m-0 m-auto">
						<LogoLight width="75px" />
					</div>
					<p className="text-white opacity-50 mt-4 font-medium lg:text-left text-center">
						&copy; rateit.
					</p>
					<p className="text-white text-sm mt-12 font-normal italic lg:text-left text-center">
						Phone: +1 231 - 215 - 4678
					</p>
					<p className="text-white text-sm mt-4 font-normal italic lg:text-left text-center">
						Email: corporate@yourateit.io
					</p>
				</div>
				<div className="flex justify-center mt-8 lg:mt-0">
					{!loggedIn && (
						<div className="text-white lg:ml-24 flex-col flex">
							<p className="font-bold text-xs mb-4">PRODUCT</p>
							<Link
								to="/signup"
								className="text-xs underline mb-4"
							>
								Get Started
							</Link>
							<Link
								to="/login"
								className="text-xs underline mb-4"
							>
								Login
							</Link>
						</div>
					)}
					<div className="text-white lg:ml-24 ml-8 flex flex-col lg:flex">
						<p className="font-bold text-xs mb-4">COMPANY</p>
						<a
							href="mailto:corporate@yourateit.io"
							className="text-xs underline mb-4"
						>
							Email Us
						</a>
						<Link to="/login" className="text-xs underline mb-4">
							Support
						</Link>
						<a
							href="https://status.yourateit.io"
							target="_blank"
							rel="noreferrer"
							className="text-xs underline mb-4"
						>
							Status
						</a>
						<Link to="/login" className="text-xs underline mb-4">
							About
						</Link>
						<a
							className="text-xs underline mb-4"
							href="https://twitter.com/rateitio"
							target="_blank"
							rel="noreferrer"
						>
							Twitter
						</a>
					</div>
					<div className="text-white lg:ml-24 ml-8 flex flex-col lg:flex">
						<p className="font-bold text-xs mb-4">Categories</p>
						{data?.getCategories.map((category, key) => (
							<Link
								key={key}
								to={'/categories/' + category.id}
								className="text-xs underline mb-4"
							>
								{category.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};
