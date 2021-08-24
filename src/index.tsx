import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './normalize.scss';
import './tailwind.css';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './components/business/ApolloClient';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const rootElement = document.getElementById('root')!;

if (rootElement.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ApolloProvider>
		</Provider>,
		rootElement
	);
} else {
	render(
		<Provider store={store}>
			<ApolloProvider client={apolloClient}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ApolloProvider>
		</Provider>,

		rootElement
	);
}
