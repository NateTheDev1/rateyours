import { Redirect, Route } from 'react-router';
import LoadingComponent from '../Loading/LoadingComponent';

export const PublicRoute: any = ({
	children,
	...rest
}: {
	children: any;
	rest: any;
}) => {
	const authenticated = false;
	const loading = false;

	if (!authenticated && !loading) {
		return <Route {...rest}>{children}</Route>;
	}

	if (authenticated && !loading) {
		return <Redirect to="/account" />;
	}

	return <LoadingComponent />;
};
