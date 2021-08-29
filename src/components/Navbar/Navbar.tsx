import { FormEvent, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { IconLogo } from '../business/Logo/IconLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faSearch, faTimes } from '@fortawesome/pro-light-svg-icons';

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const Navbar = ({ showLogin = true }: { showLogin?: boolean }) => {
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState('');
	const [openMobileNav, setOpenMobileNav] = useState(false);

	const onSearch = (e: FormEvent) => {
		e.preventDefault();

		history.push('/search/results/?query=' + searchQuery);
	};

	const handleRoute = (path: string) => {
		history.push(path);
	};

	return (
		<nav className="nav flex px-4 justify-between items-center bg-white h-16 border border-b-1">
			{openMobileNav && (
				<div
					className="fixed bg-gray-100 lg:hidden flex flex-col w-screen top-0 left-0 p-8"
					style={{ height: '300px', zIndex: 1 }}
				>
					<FontAwesomeIcon
						icon={faTimes}
						className="cursor-pointer"
						onClick={() => setOpenMobileNav(!openMobileNav)}
					/>
					<div className="flex flex-col mt-8">
						<Link
							to="/"
							className="font-regular mb-4 underline text-md font-sans transition hover:underline"
						>
							Home
						</Link>
						<Link
							to="/categories"
							className="font-regular mb-4 underline text-md font-sans transition hover:underline"
						>
							Categories
						</Link>
						<Link
							to="/search"
							className="font-regular  mb-4 underline text-md font-sans transition hover:underline"
						>
							Advanced Search
						</Link>
						<div className="search-form flex items-center mt-4 bg-gray-200 rounded-md px-4 py-2">
							<FontAwesomeIcon icon={faSearch} className="mr-2" />

							<form
								onSubmit={onSearch}
								className="flex items-center w-full"
							>
								<input
									value={searchQuery}
									onChange={e =>
										setSearchQuery(e.target.value)
									}
									type="text"
									placeholder="Search for something"
									className="bg-gray-200 text-sm outline-none font-medium w-full"
								/>
							</form>
						</div>
					</div>
				</div>
			)}

			<div className="lg:hidden block">
				<IconLogo width="50px" />
			</div>

			<div className="lg:flex hidden items-center">
				<IconLogo width="50px" />

				<Link
					to="/"
					className="font-regular ml-10 text-md font-sans transition hover:underline"
				>
					Home
				</Link>
				<Link
					to="/categories"
					className="font-regular ml-10 text-md font-sans transition hover:underline"
				>
					Categories
				</Link>
				<Link
					to="/search"
					className="font-regular ml-10 text-md font-sans transition hover:underline"
				>
					Search
				</Link>
			</div>
			<div className="flex items-center">
				<div className="search-form lg:flex hidden items-center bg-gray-200 rounded-2xl px-4 py-2 mr-8">
					<FontAwesomeIcon icon={faSearch} className="mr-2" />

					<form onSubmit={onSearch} className="flex items-center">
						<input
							value={searchQuery}
							onChange={e => setSearchQuery(e.target.value)}
							type="text"
							placeholder="Search for something"
							className="bg-gray-200 text-sm outline-none font-medium"
							style={{ width: '200px' }}
						/>
					</form>
				</div>
				{showLogin && (
					<>
						<Link
							to="/login"
							className="font-semibold mr-5 text-sm transition hover:underline"
						>
							Log In
						</Link>
						<button
							onClick={() => handleRoute('/signup')}
							className="p-4 rounded-md bg-green-500 text-white h-10 flex items-center w-40 justify-center font-medium text-sm hover:opacity-90 transition"
						>
							Sign Up
						</button>
					</>
				)}
				<div className="lg:hidden block ml-4">
					<FontAwesomeIcon
						icon={faBars}
						className="cursor-pointer"
						onClick={() => setOpenMobileNav(!openMobileNav)}
					/>
				</div>
			</div>
		</nav>
	);
};
