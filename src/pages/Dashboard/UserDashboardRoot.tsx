import { lazy } from 'react';
import { Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { PrivateRoute } from '../../components/business/Routing/PrivateRoute';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

const Dashboard = lazy(() => import('./Dashboard'));

const UserDashboardRoot = () => {
	return (
		<div className="min-h-screen overflow-hidden flex flex-col">
			<Navbar />
			<div className=" px-4 mb-auto sm:px-12 lg:px-20 md:px-16 pb-20">
				<h2 className="font-bold text-xl mt-10 mb-4">Dashboard</h2>
				<div className="flex">
					<Link
						to="/dashboard"
						className="mr-8 underline text-lg font-medium opacity-70"
					>
						Activity
					</Link>
					<Link
						to="/settings"
						className="mr-8 underline text-lg font-medium opacity-70"
					>
						Account
					</Link>
					<Link
						to="/settings"
						className="mr-8 underline text-lg font-medium opacity-70"
					>
						Public Profile (Beta)
					</Link>
				</div>
				<hr className="mt-4 mb-4" />
				<Switch>
					<PrivateRoute path="/">
						<Dashboard />
					</PrivateRoute>
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default UserDashboardRoot;
