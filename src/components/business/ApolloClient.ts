import {
	ApolloClient,
	ApolloLink,
	concat,
	HttpLink,
	InMemoryCache,
	split
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
	uri:
		process.env.NODE_ENV === 'production'
			? ''
			: 'http://localhost:5000/graphql'
});

const splitLink = split(({ query }) => {
	const definition = getMainDefinition(query);
	return (
		definition.kind === 'OperationDefinition' &&
		definition.operation === 'subscription'
	);
}, httpLink);

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers

	const token = localStorage.getItem(
		process.env.REACT_APP_TOKEN_KEY as string
	);

	if (token !== null && token !== undefined && token.length > 0) {
		operation.setContext({
			headers: {
				Authorization: token
			}
		});
	} else {
		operation.setContext({});
	}

	return forward(operation);
});

export const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	defaultOptions: {
		mutate: { errorPolicy: 'all' },
		query: { errorPolicy: 'all' }
	},
	link: concat(authMiddleware, splitLink)
});
