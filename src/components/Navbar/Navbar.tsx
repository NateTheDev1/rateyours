import { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { IconLogo } from '../business/Logo/IconLogo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faSearch, faTimes } from '@fortawesome/pro-regular-svg-icons';

import Drawer from 'rc-drawer';

import { UserActions } from '../../redux/User/actions';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types/state-types';
import SearchDropdown from './SearchDropdown';

export function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export const Navbar = ({ showLogin = true }: { showLogin?: boolean }) => {
	const history = useHistory();
	const [searchQuery, setSearchQuery] = useState('');

	const logout = UserActions.useLogout();
	const [openMobileNav, setOpenMobileNav] = useState(false);

	const fetchUser = UserActions.useFetchUser();
	const user = useSelector((state: RootState) => state.user.user);
	const authenticated = useSelector(
		(state: RootState) => state.user.authenticated
	);

	useEffect(() => {
		if (!user && authenticated) {
			fetchUser();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				<Drawer
					open={openMobileNav}
					placement="top"
					className="fixed bg-gray-100 lg:hidden flex flex-col w-screen top-0 left-0 p-8"
					style={{ zIndex: 1 }}
					maskClosable={true}
					onClose={() => setOpenMobileNav(!openMobileNav)}
					autoFocus={false}
				>
					<div className="">
						<div className="flex justify-end">
							<FontAwesomeIcon
								icon={faTimes}
								className="cursor-pointer"
								size="1x"
								onClick={() => setOpenMobileNav(!openMobileNav)}
							/>
						</div>
						<IconLogo width="50px" />
						<p className="text-lg">rateit.</p>
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
							{authenticated && (
								<>
									{user && (
										<Link
											to="/dashboard"
											className="font-regular  mb-4 underline text-md font-sans transition hover:underline"
										>
											Dashboard
										</Link>
									)}
								</>
							)}
							<div className="search-form flex items-center mt-4 bg-gray-200 rounded-md px-4 py-2">
								<FontAwesomeIcon
									icon={faSearch}
									className="mr-2 opacity-50"
								/>

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
							{authenticated && (
								<button
									onClick={() => {
										setOpenMobileNav(!openMobileNav);
										logout();
									}}
									className="p-3 rounded-md flex mt-4 w-full bg-red-500 text-white h-10 items-center justify-center font-medium text-sm hover:opacity-90 transition"
								>
									Logout
								</button>
							)}
						</div>
					</div>
				</Drawer>
			)}

			<div
				onClick={() => history.push('/')}
				className="lg:hidden cursor-pointer hover:opacity-50 transition"
			>
				<IconLogo width="50px" />
			</div>

			<div className="lg:flex hidden items-center">
				<div
					onClick={() => history.push('/')}
					className="cursor-pointer hover:opacity-50 transition"
				>
					<IconLogo width="50px" />
				</div>

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
			<div className="flex items-center lg:w-auto w-4/5 justify-between">
				<div className="search-form lg:flex lg:flex-col hidden items-center bg-gray-200 rounded-2xl px-4 py-2 mr-8">
					<div className="flex">
						<FontAwesomeIcon
							icon={faSearch}
							className="mr-2 opacity-50"
						/>

						<form
							onSubmit={onSearch}
							className="flex flex-col items-center"
						>
							<input
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
								type="text"
								placeholder="Search for something"
								className="bg-gray-200 text-sm outline-none font-medium"
								style={{ width: '200px' }}
							/>
							<div className="absolute mt-8 w-52">
								{searchQuery.length > 0 && !openMobileNav && (
									<SearchDropdown />
								)}
							</div>
						</form>
					</div>
				</div>
				{showLogin && !authenticated && (
					<div className="flex items-center justify-end flex-1">
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
					</div>
				)}
				{!showLogin && <div></div>}
				{authenticated && (
					<div className="flex items-center lg:w-auto w-full">
						{user && (
							<Link
								to="/dashboard"
								className="font-medium mr-5 text-sm transition hover:underline lg:block hidden"
							>
								{user.fullName}
							</Link>
						)}
						<div className="search-form lg:hidden flex items-center bg-gray-200 rounded-md px-4 py-2 w-full flex-1">
							<FontAwesomeIcon
								icon={faSearch}
								className="mr-2 opacity-50"
							/>

							<form
								onSubmit={onSearch}
								className="flex flex-col w-full"
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
								<div className="absolute z-10 mt-8 w-64">
									{searchQuery.length > 0 &&
										!openMobileNav && <SearchDropdown />}
								</div>
							</form>
						</div>

						<button
							onClick={() => logout()}
							className="p-3 rounded-md lg:flex hidden bg-red-500 text-white h-10 items-center w-32 justify-center font-medium text-sm hover:opacity-90 transition"
						>
							Logout
						</button>
					</div>
				)}
				<div className="lg:hidden block ml-4">
					<FontAwesomeIcon
						icon={faBars}
						className="cursor-pointer opacity-50"
						size="lg"
						onClick={() => setOpenMobileNav(!openMobileNav)}
					/>
				</div>
			</div>
		</nav>
	);
};
