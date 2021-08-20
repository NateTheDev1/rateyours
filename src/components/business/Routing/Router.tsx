import { Route, Switch, useLocation } from 'react-router';
import Landing from '../../../pages/Landing/Landing';
import NotFound from './NotFound';
import { PublicRoute } from './PublicRoute';

export const Router = () => {
	const location = useLocation();

	return (
		<>
			<Switch location={location}>
				<PublicRoute path="/">
					<Landing />
				</PublicRoute>
				<Route component={NotFound} />
			</Switch>
		</>
	);
};
