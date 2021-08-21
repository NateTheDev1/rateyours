import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { IconLogo } from '../business/Logo/IconLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch } from '@fortawesome/pro-light-svg-icons';

export const Navbar = () => {
	const onSearch = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className="nav flex px-4 justify-between items-center bg-white h-16">
			<div className="flex items-center">
				<IconLogo width="50px" height="unset" />
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
					to="/categories"
					className="font-regular ml-10 text-md font-sans transition hover:underline"
				>
					Community
				</Link>
			</div>
			<div className="flex items-center">
				<div className="search-form flex items-center bg-gray-200 rounded-2xl px-4 py-2 mr-8">
					<FontAwesomeIcon icon={faSearch} className="mr-2" />

					<form onSubmit={onSearch} className="flex items-center">
						<input
							type="text"
							placeholder="Search for something"
							className="bg-gray-200 text-sm outline-none font-medium"
							style={{ width: '200px' }}
						/>
					</form>
				</div>
				<Link
					to="/login"
					className="font-semibold mr-5 text-sm transition hover:underline"
				>
					Log In
				</Link>
				<button className="p-4 rounded-md bg-green-500 text-white h-10 flex items-center w-40 justify-center font-medium text-sm hover:opacity-90 transition">
					Sign Up
				</button>
			</div>
		</div>
	);
};
