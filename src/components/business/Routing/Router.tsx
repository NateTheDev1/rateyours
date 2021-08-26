import { Route, Switch, useLocation } from 'react-router';
import Landing from '../../../pages/Landing/Landing';
import NotFound from './NotFound';
import { PublicRoute } from './PublicRoute';
import { lazy } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

// Components
const Login = lazy(() => import('../../../pages/Onboarding/Login'));
const Signup = lazy(() => import('../../../pages/Onboarding/Signup'));
const Categories = lazy(() => import('../../../pages/Search/Categories'));

export const Router = () => {
	const location = useLocation();

	return (
		<>
			<SwitchTransition>
				<CSSTransition
					key={location.key}
					classNames="fade"
					timeout={100}
				>
					<Switch location={location}>
						<PublicRoute exact path="/categories">
							<Categories />
						</PublicRoute>
						<PublicRoute exact path="/signup">
							<Signup />
						</PublicRoute>
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
				</CSSTransition>
			</SwitchTransition>
		</>
	);
};
