import { Redirect, Route } from 'react-router';
import LoadingComponent from '../Loading/LoadingComponent';

export const PrivateRoute: any = ({
	children,
	...rest
}: {
	children: any;
	rest: any;
}) => {
	const authenticated = false;
	const loading = false;

	if (!authenticated && !loading) {
		return <Redirect to="/" />;
	}

	if (authenticated && !loading) {
		return <Route {...rest}>{children}</Route>;
	}

	return <LoadingComponent />;
};
