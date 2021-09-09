import { Route, Switch, useLocation } from 'react-router';
import Landing from '../../../pages/Landing/Landing';
import { PublicRoute } from './PublicRoute';
import { lazy } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { PrivateRoute } from './PrivateRoute';

// Components
const Login = lazy(() => import('../../../pages/Onboarding/Login'));
const About = lazy(() => import('../../../pages/Landing/About'));

const Signup = lazy(() => import('../../../pages/Onboarding/Signup'));
const Categories = lazy(() => import('../../../pages/Search/Categories'));
const Suggest = lazy(() => import('../../../pages/Search/Suggest'));
const SearchResults = lazy(() => import('../../../pages/Search/SearchResults'));
const SearchRoot = lazy(() => import('../../../pages/Search/SearchRoot'));
const EntityBase = lazy(() => import('../../../pages/Entity/index'));
const CategoryPage = lazy(() => import('../../../pages/Category'));
const NotFound = lazy(() => import('./NotFound'));
const UserDashboardRoot = lazy(
	() => import('../../../pages/Dashboard/UserDashboardRoot')
);

export const Router = () => {
	const location = useLocation();

	return (
		<>
			<SwitchTransition>
				<CSSTransition
					key={location.key}
					classNames="fade"
					timeout={200}
				>
					<Switch location={location}>
						<PrivateRoute path="/dashboard">
							<UserDashboardRoot />
						</PrivateRoute>
						<Route exact path="/search/results/entity/:entityId">
							<EntityBase />
						</Route>
						<Route exact path="/search/results">
							<SearchResults />
						</Route>
						<Route exact path="/search">
							<SearchRoot />
						</Route>
						<Route exact path="/categories/:id">
							<CategoryPage />
						</Route>
						<Route exact path="/categories/suggest">
							<Suggest />
						</Route>
						<Route exact path="/categories">
							<Categories />
						</Route>
						<PublicRoute exact path="/signup">
							<Signup />
						</PublicRoute>
						<PublicRoute exact path="/login">
							<Login />
						</PublicRoute>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/">
							<Landing />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</CSSTransition>
			</SwitchTransition>
		</>
	);
};
