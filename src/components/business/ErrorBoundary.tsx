import React from 'react';
import * as Sentry from '@sentry/react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
	state: { hasError: boolean };

	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(error, errorInfo);
	}

	render() {
		return (
			<Sentry.ErrorBoundary
				fallback={
					<div>
						<p className="text-red-500 text-lg text-center">
							Something went wrong.
						</p>
						<Link to="/">Reload</Link>
					</div>
				}
			>
				{this.props.children}
			</Sentry.ErrorBoundary>
		);
	}
}

export default ErrorBoundary;
