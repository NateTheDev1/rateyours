import { Route, Switch, useLocation } from 'react-router';
import Landing from '../../../pages/Landing/Landing';
import { PublicRoute } from './PublicRoute';
import { lazy } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { PrivateRoute } from './PrivateRoute';
import { Helmet } from 'react-helmet';

// Components
const url = 'https://yourateit.io/';
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

const ForgotPassword = lazy(
	() => import('../../../pages/Onboarding/ForgotPassword')
);
const ResetPassword = lazy(
	() => import('../../../pages/Onboarding/ResetPassword')
);

const AdvancedReviewsPage = lazy(
	() => import('../../../pages/Entity/AdvancedReviewsPage')
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
						<Route
							exact
							path="/search/results/entity/:entityId/reviews"
						>
							<AdvancedReviewsPage />
						</Route>
						<Route exact path="/search/results/entity/:entityId">
							<EntityBase />
						</Route>
						<Route exact path="/search/results">
							<Helmet>
								<link rel="canonical" href={`${url}results/`}/>
							</Helmet>
							<SearchResults />
						</Route>
						<Route exact path="/search">
							<Helmet>
								<link rel="canonical" href={`${url}search/`}/>
							</Helmet>
							<SearchRoot />
						</Route>
						<Route exact path="/categories/:id">
							<CategoryPage />
						</Route>
						<Route exact path="/categories/suggest">
							<Suggest />
						</Route>
						<Route exact path="/categories">
							<Helmet>
								<link rel="canonical" href={`${url}categories/`}/>
							</Helmet>
							<Categories />
						</Route>
						<PublicRoute exact path="/signup">
							<Helmet>
								<link rel="canonical" href={`${url}signup/`}/>
							</Helmet>
							<Signup />
						</PublicRoute>
						<PublicRoute exact path="/forgot-password/reset/:code">
							<ResetPassword />
						</PublicRoute>
						<PublicRoute exact path="/forgot-password">
							<ForgotPassword />
						</PublicRoute>
						<PublicRoute exact path="/login">
							<Helmet>
								<link rel="canonical" href={`${url}login/`}/>
							</Helmet>
							<Login />
						</PublicRoute>
						<Route exact path="/about">
							<Helmet>
								<link rel="canonical" href={`${url}about/`}/>
							</Helmet>
							<About />
						</Route>
						<Route exact path="/">
							<Helmet>
								<link rel="canonical" href={url}/>
							</Helmet>
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
