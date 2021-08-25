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
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</ApolloProvider>,

		rootElement
	);
} else {
	render(
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</ApolloProvider>,
		rootElement
	);
}
