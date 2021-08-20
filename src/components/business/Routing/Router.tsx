import { Route, Switch, useLocation } from 'react-router';
import NotFound from './NotFound';
import { PublicRoute } from './PublicRoute';

export const Router = () => {
	const location = useLocation();

	return (
		<Switch location={location}>
			<PublicRoute path="/">
				<h1>Home</h1>
			</PublicRoute>
			<Route component={NotFound} />
		</Switch>
	);
};
