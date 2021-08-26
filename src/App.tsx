import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './components/business/ErrorBoundary';
import LoadingComponent from './components/business/Loading/LoadingComponent';
import { Router } from './components/business/Routing/Router';

const App = () => {
	return (
		<ErrorBoundary>
			<Suspense fallback={<LoadingComponent />}>
				<Router />
				<Toaster position="top-right" />
			</Suspense>
		</ErrorBoundary>
	);
};

export default App;
