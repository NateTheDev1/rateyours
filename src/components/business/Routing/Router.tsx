import { Route, Switch, useLocation } from 'react-router';
import Landing from '../../../pages/Landing/Landing';
import Login from '../../../pages/Onboarding/Login';
import NotFound from './NotFound';
import { PublicRoute } from './PublicRoute';

export const Router = () => {
	const location = useLocation();

	return (
		<>
			<Switch location={location}>
				<PublicRoute exact path="/login">
					<Login />
				</PublicRoute>
				<PublicRoute exact path="/">
					<Landing />
				</PublicRoute>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</>
	);
};
