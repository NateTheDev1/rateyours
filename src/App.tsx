import { Suspense } from 'react';
import ErrorBoundary from './components/business/ErrorBoundary';
import LoadingComponent from './components/business/Loading/LoadingComponent';
import { Router } from './components/business/Routing/Router';

const App = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<LoadingComponent />}>
				<Router />
			</Suspense>
		</ErrorBoundary>
	);
};

export default App;
