import { Redirect, Route } from 'react-router';
import { UserSelectors } from '../../../redux/User/selectors';
import LoadingComponent from '../Loading/LoadingComponent';

export const PrivateRoute: any = ({
	children,
	...rest
}: {
	children: any;
	rest: any;
}) => {
	const authenticated = UserSelectors.useSelectAuthenticated();
	const loading = UserSelectors.useSelectUserLoading();

	if (!authenticated && !loading) {
		return <Redirect to="/" />;
	}

	if (authenticated && !loading) {
		return <Route {...rest}>{children}</Route>;
	}

	return <LoadingComponent />;
};
