import ErrorBoundary from './components/business/ErrorBoundary';
import { Router } from './components/business/Routing/Router';

const App = () => {
	return (
		<ErrorBoundary>
			<Router />
		</ErrorBoundary>
	);
};

export default App;
